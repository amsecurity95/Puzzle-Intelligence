const express = require('express');
const db = require('../config/database');
const { authenticateToken } = require('../middleware/auth');

const router = express.Router();

// Track page visit
router.post('/visit', (req, res) => {
    const database = db.getDb();
    const { page } = req.body;
    const userIp = req.ip || req.connection.remoteAddress || req.headers['x-forwarded-for'] || 'unknown';
    const userAgent = req.headers['user-agent'] || 'unknown';
    const referrer = req.headers['referer'] || req.headers['referrer'] || '';
    
    database.run(
        'INSERT INTO page_visits (page, user_ip, user_agent, referrer, date) VALUES (?, ?, ?, ?, DATE("now"))',
        [page || 'unknown', userIp, userAgent, referrer],
        function(err) {
            if (err) {
                console.error('Error tracking visit:', err);
                return res.status(500).json({ error: 'Failed to track visit' });
            }
            
            res.json({ success: true, id: this.lastID });
        }
    );
});

// Track click
router.post('/click', (req, res) => {
    const database = db.getDb();
    const { page, element } = req.body;
    const userIp = req.ip || req.connection.remoteAddress || req.headers['x-forwarded-for'] || 'unknown';
    const userAgent = req.headers['user-agent'] || 'unknown';
    
    database.run(
        'INSERT INTO page_clicks (page, element, user_ip, user_agent, date) VALUES (?, ?, ?, ?, DATE("now"))',
        [page || 'unknown', element || 'unknown', userIp, userAgent],
        function(err) {
            if (err) {
                console.error('Error tracking click:', err);
                return res.status(500).json({ error: 'Failed to track click' });
            }
            
            res.json({ success: true, id: this.lastID });
        }
    );
});

// Get statistics (Admin only)
router.get('/stats', authenticateToken, (req, res) => {
    const database = db.getDb();
    const { period = '7' } = req.query; // days
    
    // Validate period
    const validPeriods = ['7', '30', '90'];
    const validPeriod = validPeriods.includes(period) ? period : '7';
    
    const stats = {};
    
    // Get total visits
    database.get('SELECT COUNT(*) as total FROM page_visits', [], (err, row) => {
        if (err) {
            return res.status(500).json({ error: 'Database error' });
        }
        stats.totalVisits = row.total;
        
        // Get total clicks
        database.get('SELECT COUNT(*) as total FROM page_clicks', [], (err, row) => {
            if (err) {
                return res.status(500).json({ error: 'Database error' });
            }
            stats.totalClicks = row.total;
            
            // Get visits per day
            database.all(
                `SELECT date, COUNT(*) as count 
                 FROM page_visits 
                 WHERE date >= DATE('now', '-${validPeriod} days')
                 GROUP BY date 
                 ORDER BY date DESC`,
                [],
                (err, rows) => {
                    if (err) {
                        return res.status(500).json({ error: 'Database error' });
                    }
                    stats.visitsPerDay = rows;
                    
                    // Get clicks per day
                    database.all(
                        `SELECT date, COUNT(*) as count 
                         FROM page_clicks 
                         WHERE date >= DATE('now', '-${validPeriod} days')
                         GROUP BY date 
                         ORDER BY date DESC`,
                        [],
                        (err, rows) => {
                            if (err) {
                                return res.status(500).json({ error: 'Database error' });
                            }
                            stats.clicksPerDay = rows;
                            
                            // Get page breakdown
                            database.all(
                                `SELECT page, COUNT(*) as count 
                                 FROM page_visits 
                                 WHERE date >= DATE('now', '-${validPeriod} days')
                                 GROUP BY page 
                                 ORDER BY count DESC`,
                                [],
                                (err, rows) => {
                                    if (err) {
                                        return res.status(500).json({ error: 'Database error' });
                                    }
                                    stats.pageBreakdown = rows;
                                    
                                    // Get today's stats
                                    database.get(
                                        `SELECT COUNT(*) as visits FROM page_visits WHERE date = DATE('now')`,
                                        [],
                                        (err, row) => {
                                            if (err) {
                                                return res.status(500).json({ error: 'Database error' });
                                            }
                                            stats.todayVisits = row.visits;
                                            
                                            database.get(
                                                `SELECT COUNT(*) as clicks FROM page_clicks WHERE date = DATE('now')`,
                                                [],
                                                (err, row) => {
                                                    if (err) {
                                                        return res.status(500).json({ error: 'Database error' });
                                                    }
                                                    stats.todayClicks = row.clicks;
                                                    
                                                    res.json(stats);
                                                }
                                            );
                                        }
                                    );
                                }
                            );
                        }
                    );
                }
            );
        });
    });
});

// Get promo countdown end date
router.get('/promo/countdown', (req, res) => {
    const database = db.getDb();
    
    database.get('SELECT end_date, active FROM promo_settings ORDER BY id DESC LIMIT 1', [], (err, row) => {
        if (err) {
            return res.status(500).json({ error: 'Database error' });
        }
        
        if (!row) {
            // Set default if not exists
            const endDate = new Date();
            endDate.setDate(endDate.getDate() + 30);
            endDate.setHours(23, 59, 59, 999);
            
            database.run(
                'INSERT INTO promo_settings (end_date, active) VALUES (?, ?)',
                [endDate.toISOString(), 1],
                () => {
                    res.json({ endDate: endDate.toISOString(), active: true });
                }
            );
        } else {
            res.json({
                endDate: row.end_date,
                active: row.active === 1
            });
        }
    });
});

// Update promo countdown (Admin only)
router.put('/promo/countdown', authenticateToken, (req, res) => {
    const database = db.getDb();
    const { endDate, active } = req.body;
    
    if (!endDate) {
        return res.status(400).json({ error: 'End date is required' });
    }
    
    database.run(
        'UPDATE promo_settings SET end_date = ?, active = ?, updated_at = CURRENT_TIMESTAMP WHERE id = (SELECT id FROM promo_settings ORDER BY id DESC LIMIT 1)',
        [endDate, active ? 1 : 0],
        function(err) {
            if (err) {
                return res.status(500).json({ error: 'Database error' });
            }
            
            if (this.changes === 0) {
                // Create if doesn't exist
                database.run(
                    'INSERT INTO promo_settings (end_date, active) VALUES (?, ?)',
                    [endDate, active ? 1 : 0],
                    () => {
                        res.json({ message: 'Promo settings updated' });
                    }
                );
            } else {
                res.json({ message: 'Promo settings updated' });
            }
        }
    );
});

module.exports = router;

