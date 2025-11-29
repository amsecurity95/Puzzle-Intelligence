# Backend Setup Guide

## Quick Start

1. **Install Node.js** (if not already installed)
   - Download from https://nodejs.org/ (v18 or higher recommended)
   - Verify installation: `node --version`

2. **Navigate to backend directory:**
   ```bash
   cd backend
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Create environment file:**
   ```bash
   cp .env.example .env
   ```

5. **Edit `.env` file:**
   - Change `JWT_SECRET` to a random string
   - Change `ADMIN_USERNAME` and `ADMIN_PASSWORD` for security
   - Add your `OPENAI_API_KEY` if you want AI content generation
   - Update `CORS_ORIGINS` with your website URLs

6. **Start the server:**
   ```bash
   npm start
   ```

   The server will run on `http://localhost:3000`

## Testing the API

### 1. Health Check
```bash
curl http://localhost:3000/api/health
```

### 2. Login
```bash
curl -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"admin123"}'
```

### 3. Get Blog Posts
```bash
curl http://localhost:3000/api/blog/posts
```

## Connecting Frontend to Backend

Update your frontend JavaScript files to use the API instead of localStorage:

### Example: Fetch Blog Posts
```javascript
// Replace localStorage with API calls
async function loadBlogPosts() {
    try {
        const response = await fetch('http://localhost:3000/api/blog/posts');
        const posts = await response.json();
        // Display posts...
    } catch (error) {
        console.error('Error loading posts:', error);
    }
}
```

### Example: Create Blog Post (Admin)
```javascript
async function createBlogPost(postData) {
    const token = localStorage.getItem('authToken'); // Get from login
    
    try {
        const response = await fetch('http://localhost:3000/api/blog/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(postData)
        });
        const result = await response.json();
        return result;
    } catch (error) {
        console.error('Error creating post:', error);
    }
}
```

## Production Deployment

### Option 1: Hostinger (Node.js Support)
1. Upload backend folder to your hosting
2. SSH into your server
3. Run `npm install --production`
4. Set up environment variables
5. Use PM2 to keep server running:
   ```bash
   npm install -g pm2
   pm2 start server.js --name puzzle-api
   pm2 save
   pm2 startup
   ```

### Option 2: Heroku
1. Create `Procfile`:
   ```
   web: node server.js
   ```
2. Deploy:
   ```bash
   heroku create puzzle-intelligence-api
   heroku config:set JWT_SECRET=your-secret
   git push heroku main
   ```

### Option 3: VPS (DigitalOcean, AWS, etc.)
- Follow production deployment steps
- Use nginx as reverse proxy
- Set up SSL with Let's Encrypt

## Database Migration

To migrate from SQLite to MySQL/PostgreSQL, update `config/database.js` with your database connection.

## Troubleshooting

**Port already in use:**
- Change `PORT` in `.env` file

**CORS errors:**
- Add your frontend URL to `CORS_ORIGINS` in `.env`

**Database errors:**
- Check file permissions for `database.db`
- Ensure SQLite3 is installed

**OpenAI API errors:**
- Verify API key is correct
- Check API quota/limits

