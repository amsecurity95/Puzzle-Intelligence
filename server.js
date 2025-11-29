const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors({
    origin: process.env.CORS_ORIGINS ? process.env.CORS_ORIGINS.split(',') : '*',
    credentials: true
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files (uploads)
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/blog', require('./routes/blog'));
app.use('/api/forms', require('./routes/forms'));
app.use('/api/ai', require('./routes/ai'));
app.use('/api/stats', require('./routes/statistics'));
app.use('/api/waitlist', require('./routes/waitlist'));

// Health check
app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', message: 'Puzzle Intelligence API is running' });
});

// Initialize database
const db = require('./config/database');
db.init().then(() => {
    console.log('Database initialized successfully');
    
    app.listen(PORT, () => {
        console.log(`🚀 Server running on http://localhost:${PORT}`);
        console.log(`📝 API endpoints available at http://localhost:${PORT}/api`);
    });
}).catch(err => {
    console.error('Database initialization failed:', err);
    process.exit(1);
});

module.exports = app;

