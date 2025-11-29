const express = require('express');
const db = require('../config/database');
const { authenticateToken } = require('../middleware/auth');
const upload = require('../middleware/upload');
const path = require('path');

const router = express.Router();

// Submit form (with optional file upload)
router.post('/submit', upload.single('logo'), (req, res) => {
    const database = db.getDb();
    const { type, name, email, phone, data } = req.body;
    
    if (!type) {
        return res.status(400).json({ error: 'Form type is required' });
    }
    
    // Parse data if it's a string
    let dataObj = {};
    if (data) {
        try {
            dataObj = typeof data === 'string' ? JSON.parse(data) : data;
        } catch (e) {
            dataObj = { raw: data };
        }
    }
    
    // Add logo file path if uploaded
    if (req.file) {
        dataObj.logo = req.file.filename;
        dataObj.logoOriginalName = req.file.originalname;
    }
    
    const dataString = JSON.stringify(dataObj);
    
    database.run(
        'INSERT INTO form_submissions (type, name, email, phone, data) VALUES (?, ?, ?, ?, ?)',
        [type, name || '', email || '', phone || '', dataString],
        function(err) {
            if (err) {
                // Delete uploaded file if database insert fails
                if (req.file) {
                    const fs = require('fs');
                    fs.unlinkSync(req.file.path);
                }
                return res.status(500).json({ error: 'Database error' });
            }
            
            res.status(201).json({
                id: this.lastID,
                message: 'Form submitted successfully',
                logo: dataObj.logo || null
            });
        }
    );
});

// Get all form submissions (Admin only)
router.get('/submissions', authenticateToken, (req, res) => {
    const database = db.getDb();
    const { type } = req.query;
    
    let query = 'SELECT * FROM form_submissions';
    const params = [];
    
    if (type) {
        query += ' WHERE type = ?';
        params.push(type);
    }
    
    query += ' ORDER BY created_at DESC';
    
    database.all(query, params, (err, rows) => {
        if (err) {
            return res.status(500).json({ error: 'Database error' });
        }
        
        res.json(rows.map(row => {
            const data = row.data ? JSON.parse(row.data) : {};
            return {
                ...row,
                data: data,
                logoUrl: data.logo ? `/api/forms/logo/${data.logo}` : null
            };
        }));
    });
});

// Get single submission (Admin only)
router.get('/submissions/:id', authenticateToken, (req, res) => {
    const database = db.getDb();
    const { id } = req.params;
    
    database.get('SELECT * FROM form_submissions WHERE id = ?', [id], (err, row) => {
        if (err) {
            return res.status(500).json({ error: 'Database error' });
        }
        
        if (!row) {
            return res.status(404).json({ error: 'Submission not found' });
        }
        
        res.json({
            ...row,
            data: row.data ? JSON.parse(row.data) : {}
        });
    });
});

// Delete submission (Admin only)
router.delete('/submissions/:id', authenticateToken, (req, res) => {
    const database = db.getDb();
    const { id } = req.params;
    
    // Get submission first to delete associated logo file
    database.get('SELECT data FROM form_submissions WHERE id = ?', [id], (err, row) => {
        if (err) {
            return res.status(500).json({ error: 'Database error' });
        }
        
        if (!row) {
            return res.status(404).json({ error: 'Submission not found' });
        }
        
        // Delete logo file if exists
        if (row.data) {
            try {
                const data = JSON.parse(row.data);
                if (data.logo) {
                    const fs = require('fs');
                    const logoPath = path.join(__dirname, '../uploads', data.logo);
                    if (fs.existsSync(logoPath)) {
                        fs.unlinkSync(logoPath);
                    }
                }
            } catch (e) {
                // Ignore errors in file deletion
            }
        }
        
        // Delete from database
        database.run('DELETE FROM form_submissions WHERE id = ?', [id], function(err) {
            if (err) {
                return res.status(500).json({ error: 'Database error' });
            }
            
            res.json({ message: 'Submission deleted successfully' });
        });
    });
});

// Get logo image (public access for viewing)
router.get('/logo/:filename', (req, res) => {
    const { filename } = req.params;
    const fs = require('fs');
    const logoPath = path.join(__dirname, '../uploads', filename);
    
    // Security: prevent directory traversal
    if (!filename || filename.includes('..') || filename.includes('/')) {
        return res.status(400).json({ error: 'Invalid filename' });
    }
    
    if (fs.existsSync(logoPath)) {
        res.sendFile(path.resolve(logoPath));
    } else {
        res.status(404).json({ error: 'Logo not found' });
    }
});

// Download logo
router.get('/logo/:filename/download', authenticateToken, (req, res) => {
    const { filename } = req.params;
    const fs = require('fs');
    const logoPath = path.join(__dirname, '../uploads', filename);
    
    // Security: prevent directory traversal
    if (!filename || filename.includes('..') || filename.includes('/')) {
        return res.status(400).json({ error: 'Invalid filename' });
    }
    
    if (fs.existsSync(logoPath)) {
        // Get original filename from database if available
        const database = db.getDb();
        database.all('SELECT data FROM form_submissions', [], (err, rows) => {
            let originalName = filename;
            if (!err && rows) {
                for (const row of rows) {
                    try {
                        const data = JSON.parse(row.data);
                        if (data.logo === filename && data.logoOriginalName) {
                            originalName = data.logoOriginalName;
                            break;
                        }
                    } catch (e) {
                        // Continue
                    }
                }
            }
            
            res.download(logoPath, originalName, (err) => {
                if (err) {
                    res.status(500).json({ error: 'Error downloading file' });
                }
            });
        });
    } else {
        res.status(404).json({ error: 'Logo not found' });
    }
});

module.exports = router;

