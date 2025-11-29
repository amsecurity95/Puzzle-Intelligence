const express = require('express');
const db = require('../config/database');
const { authenticateToken } = require('../middleware/auth');
const upload = require('../middleware/upload');
const path = require('path');

const router = express.Router();

// Upload blog image (Admin only)
router.post('/upload-image', authenticateToken, upload.single('image'), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ error: 'No image file provided' });
    }
    
    // Return the URL to access the image
    const imageUrl = `/api/blog/image/${req.file.filename}`;
    res.json({
        imageUrl: imageUrl,
        filename: req.file.filename
    });
});

// Get blog image
router.get('/image/:filename', (req, res) => {
    const { filename } = req.params;
    const fs = require('fs');
    const imagePath = path.join(__dirname, '../uploads', filename);
    
    // Security: prevent directory traversal
    if (!filename || filename.includes('..') || filename.includes('/')) {
        return res.status(400).json({ error: 'Invalid filename' });
    }
    
    if (fs.existsSync(imagePath)) {
        res.sendFile(path.resolve(imagePath));
    } else {
        res.status(404).json({ error: 'Image not found' });
    }
});

// Get all blog posts
router.get('/posts', (req, res) => {
    const database = db.getDb();
    const { category, trending } = req.query;
    
    let query = 'SELECT * FROM blog_posts';
    const params = [];
    
    if (category) {
        query += ' WHERE category = ?';
        params.push(category);
    }
    
    if (trending === 'true') {
        query += category ? ' AND trending = 1' : ' WHERE trending = 1';
    }
    
    query += ' ORDER BY date DESC';
    
    database.all(query, params, (err, rows) => {
        if (err) {
            return res.status(500).json({ error: 'Database error' });
        }
        
        res.json(rows.map(row => ({
            ...row,
            trending: row.trending === 1,
            likes: row.likes || 0
        })));
    });
});

// Get single blog post
router.get('/posts/:id', (req, res) => {
    const database = db.getDb();
    const { id } = req.params;
    
    database.get('SELECT * FROM blog_posts WHERE id = ?', [id], (err, row) => {
        if (err) {
            return res.status(500).json({ error: 'Database error' });
        }
        
        if (!row) {
            return res.status(404).json({ error: 'Post not found' });
        }
        
        res.json({
            ...row,
            trending: row.trending === 1,
            likes: row.likes || 0
        });
    });
});

// Create blog post (Admin only)
router.post('/posts', authenticateToken, (req, res) => {
    const database = db.getDb();
    const { title, line, body, image, category, readingTime, trending } = req.body;
    
    if (!title || !body) {
        return res.status(400).json({ error: 'Title and body are required' });
    }
    
    const date = new Date().toISOString();
    const trendingValue = trending ? 1 : 0;
    
    database.run(
        `INSERT INTO blog_posts (title, line, body, image, category, reading_time, trending, date)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
        [title, line || '', body, image || '', category || '', readingTime || '5 min read', trendingValue, date],
        function(err) {
            if (err) {
                return res.status(500).json({ error: 'Database error' });
            }
            
            // Add category if it doesn't exist
            if (category) {
                database.run(
                    'INSERT OR IGNORE INTO blog_categories (name) VALUES (?)',
                    [category],
                    () => {}
                );
            }
            
            res.status(201).json({
                id: this.lastID,
                title,
                line,
                body,
                image,
                category,
                readingTime,
                trending: trendingValue === 1,
                date
            });
        }
    );
});

// Update blog post (Admin only)
router.put('/posts/:id', authenticateToken, (req, res) => {
    const database = db.getDb();
    const { id } = req.params;
    const { title, line, body, image, category, readingTime, trending } = req.body;
    
    const trendingValue = trending ? 1 : 0;
    
    database.run(
        `UPDATE blog_posts 
         SET title = ?, line = ?, body = ?, image = ?, category = ?, reading_time = ?, trending = ?, updated_at = CURRENT_TIMESTAMP
         WHERE id = ?`,
        [title, line || '', body, image || '', category || '', readingTime || '5 min read', trendingValue, id],
        function(err) {
            if (err) {
                return res.status(500).json({ error: 'Database error' });
            }
            
            if (this.changes === 0) {
                return res.status(404).json({ error: 'Post not found' });
            }
            
            // Add category if it doesn't exist
            if (category) {
                database.run(
                    'INSERT OR IGNORE INTO blog_categories (name) VALUES (?)',
                    [category],
                    () => {}
                );
            }
            
            res.json({ message: 'Post updated successfully' });
        }
    );
});

// Delete blog post (Admin only)
router.delete('/posts/:id', authenticateToken, (req, res) => {
    const database = db.getDb();
    const { id } = req.params;
    
    database.run('DELETE FROM blog_posts WHERE id = ?', [id], function(err) {
        if (err) {
            return res.status(500).json({ error: 'Database error' });
        }
        
        if (this.changes === 0) {
            return res.status(404).json({ error: 'Post not found' });
        }
        
        res.json({ message: 'Post deleted successfully' });
    });
});

// Get categories
router.get('/categories', (req, res) => {
    const database = db.getDb();
    
    database.all('SELECT name FROM blog_categories ORDER BY name', [], (err, rows) => {
        if (err) {
            return res.status(500).json({ error: 'Database error' });
        }
        
        res.json(rows.map(row => row.name));
    });
});

// Like article
router.post('/posts/:id/like', (req, res) => {
    const database = db.getDb();
    const { id } = req.params;
    const userIp = req.ip || req.connection.remoteAddress;
    
    // Check if already liked
    database.get(
        'SELECT id FROM article_likes WHERE article_id = ? AND user_ip = ?',
        [id, userIp],
        (err, row) => {
            if (err) {
                return res.status(500).json({ error: 'Database error' });
            }
            
            if (row) {
                // Unlike
                database.run(
                    'DELETE FROM article_likes WHERE article_id = ? AND user_ip = ?',
                    [id, userIp],
                    () => {
                        database.run(
                            'UPDATE blog_posts SET likes = likes - 1 WHERE id = ?',
                            [id],
                            () => {
                                database.get('SELECT likes FROM blog_posts WHERE id = ?', [id], (err, row) => {
                                    res.json({ liked: false, likes: row.likes || 0 });
                                });
                            }
                        );
                    }
                );
            } else {
                // Like
                database.run(
                    'INSERT INTO article_likes (article_id, user_ip) VALUES (?, ?)',
                    [id, userIp],
                    () => {
                        database.run(
                            'UPDATE blog_posts SET likes = likes + 1 WHERE id = ?',
                            [id],
                            () => {
                                database.get('SELECT likes FROM blog_posts WHERE id = ?', [id], (err, row) => {
                                    res.json({ liked: true, likes: row.likes || 0 });
                                });
                            }
                        );
                    }
                );
            }
        }
    );
});

// Add comment
router.post('/posts/:id/comments', (req, res) => {
    const database = db.getDb();
    const { id } = req.params;
    const { name, email, comment } = req.body;
    
    if (!name || !comment) {
        return res.status(400).json({ error: 'Name and comment are required' });
    }
    
    database.run(
        'INSERT INTO article_comments (article_id, name, email, comment) VALUES (?, ?, ?, ?)',
        [id, name, email || '', comment],
        function(err) {
            if (err) {
                return res.status(500).json({ error: 'Database error' });
            }
            
            res.status(201).json({
                id: this.lastID,
                name,
                email,
                comment,
                created_at: new Date().toISOString()
            });
        }
    );
});

// Get comments for article
router.get('/posts/:id/comments', (req, res) => {
    const database = db.getDb();
    const { id } = req.params;
    
    database.all(
        'SELECT * FROM article_comments WHERE article_id = ? ORDER BY created_at DESC',
        [id],
        (err, rows) => {
            if (err) {
                return res.status(500).json({ error: 'Database error' });
            }
            
            res.json(rows);
        }
    );
});

module.exports = router;

