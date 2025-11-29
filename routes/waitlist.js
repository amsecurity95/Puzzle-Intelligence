const express = require('express');
const db = require('../config/database');
const { authenticateToken } = require('../middleware/auth');

const router = express.Router();

// Submit to waitlist
router.post('/submit', (req, res) => {
    const database = db.getDb();
    const { name, email, phone, projectInterest, message } = req.body;
    
    if (!name || !email) {
        return res.status(400).json({ error: 'Name and email are required' });
    }
    
    database.run(
        'INSERT INTO waitlist (name, email, phone, project_interest, message, date) VALUES (?, ?, ?, ?, ?, DATE("now"))',
        [name, email, phone || '', projectInterest || '', message || ''],
        function(err) {
            if (err) {
                return res.status(500).json({ error: 'Database error' });
            }
            
            res.status(201).json({
                id: this.lastID,
                message: 'Successfully added to waitlist'
            });
        }
    );
});

// Get all waitlist entries (Admin only)
router.get('/entries', authenticateToken, (req, res) => {
    const database = db.getDb();
    
    database.all(
        'SELECT * FROM waitlist ORDER BY created_at DESC',
        [],
        (err, rows) => {
            if (err) {
                return res.status(500).json({ error: 'Database error' });
            }
            
            res.json(rows);
        }
    );
});

// Get waitlist statistics (Admin only)
router.get('/stats', authenticateToken, (req, res) => {
    const database = db.getDb();
    
    // Get total count
    database.get('SELECT COUNT(*) as total FROM waitlist', [], (err, totalRow) => {
        if (err) {
            return res.status(500).json({ error: 'Database error' });
        }
        
        // Get today's count
        database.get('SELECT COUNT(*) as today FROM waitlist WHERE date = DATE("now")', [], (err, todayRow) => {
            if (err) {
                return res.status(500).json({ error: 'Database error' });
            }
            
            // Get by project interest
            database.all(
                'SELECT project_interest, COUNT(*) as count FROM waitlist WHERE project_interest != "" GROUP BY project_interest ORDER BY count DESC',
                [],
                (err, interestRows) => {
                    if (err) {
                        return res.status(500).json({ error: 'Database error' });
                    }
                    
                    res.json({
                        total: totalRow.total,
                        today: todayRow.today,
                        byInterest: interestRows
                    });
                }
            );
        });
    });
});

// Delete waitlist entry (Admin only)
router.delete('/entries/:id', authenticateToken, (req, res) => {
    const database = db.getDb();
    const { id } = req.params;
    
    database.run('DELETE FROM waitlist WHERE id = ?', [id], function(err) {
        if (err) {
            return res.status(500).json({ error: 'Database error' });
        }
        
        if (this.changes === 0) {
            return res.status(404).json({ error: 'Entry not found' });
        }
        
        res.json({ message: 'Waitlist entry deleted successfully' });
    });
});

module.exports = router;

