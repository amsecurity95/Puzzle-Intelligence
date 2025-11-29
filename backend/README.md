# Puzzle Intelligence Backend API

Backend server for Puzzle Intelligence website with blog management, form submissions, and AI content generation.

## Features

- ✅ Blog posts CRUD operations
- ✅ Form submissions management
- ✅ Admin authentication (JWT)
- ✅ Article likes and comments
- ✅ OpenAI API integration for content generation
- ✅ SQLite database (can be migrated to MySQL/PostgreSQL)

## Installation

1. **Navigate to backend directory:**
   ```bash
   cd backend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   ```bash
   cp .env.example .env
   ```
   
   Edit `.env` and configure:
   - `PORT` - Server port (default: 3000)
   - `JWT_SECRET` - Secret key for JWT tokens (change this!)
   - `ADMIN_USERNAME` - Admin username (default: admin)
   - `ADMIN_PASSWORD` - Admin password (default: admin123)
   - `OPENAI_API_KEY` - Your OpenAI API key (optional)
   - `CORS_ORIGINS` - Allowed origins (comma-separated)

4. **Start the server:**
   ```bash
   npm start
   ```
   
   For development with auto-reload:
   ```bash
   npm run dev
   ```

## API Endpoints

### Authentication
- `POST /api/auth/login` - Login (returns JWT token)
- `GET /api/auth/verify` - Verify token (requires auth)

### Blog Posts
- `GET /api/blog/posts` - Get all posts (query: `?category=name&trending=true`)
- `GET /api/blog/posts/:id` - Get single post
- `POST /api/blog/posts` - Create post (requires auth)
- `PUT /api/blog/posts/:id` - Update post (requires auth)
- `DELETE /api/blog/posts/:id` - Delete post (requires auth)
- `GET /api/blog/categories` - Get all categories
- `POST /api/blog/posts/:id/like` - Like/unlike article
- `POST /api/blog/posts/:id/comments` - Add comment
- `GET /api/blog/posts/:id/comments` - Get comments

### Forms
- `POST /api/forms/submit` - Submit form
- `GET /api/forms/submissions` - Get all submissions (requires auth)
- `GET /api/forms/submissions/:id` - Get single submission (requires auth)
- `DELETE /api/forms/submissions/:id` - Delete submission (requires auth)

### AI
- `POST /api/ai/generate-article` - Generate article with OpenAI (requires auth)

## Usage Example

### Login
```javascript
const response = await fetch('http://localhost:3000/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
        username: 'admin',
        password: 'admin123'
    })
});
const { token } = await response.json();
```

### Create Blog Post
```javascript
const response = await fetch('http://localhost:3000/api/blog/posts', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify({
        title: 'My Article',
        body: 'Article content...',
        category: 'Technology',
        trending: true
    })
});
```

## Database

The backend uses SQLite by default. The database file (`database.db`) will be created automatically on first run.

To migrate to MySQL or PostgreSQL, update the database configuration in `config/database.js`.

## Security Notes

- Change `JWT_SECRET` in production
- Change default admin credentials
- Use environment variables for sensitive data
- Configure CORS origins properly
- Use HTTPS in production

## Deployment

For production deployment:

1. Set `NODE_ENV=production` in `.env`
2. Use a process manager like PM2:
   ```bash
   npm install -g pm2
   pm2 start server.js --name puzzle-api
   ```
3. Set up reverse proxy (nginx) if needed
4. Configure SSL/HTTPS

