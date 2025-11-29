# Hostinger Deployment Guide

Complete guide to deploy your Puzzle Intelligence website and backend to Hostinger.

## Prerequisites

1. **Hostinger Account** with:
   - Web Hosting plan (supports Node.js)
   - Or VPS plan (recommended for Node.js backend)
   - Domain name configured

2. **Access to:**
   - Hostinger hPanel (Control Panel)
   - File Manager or FTP access
   - SSH access (for Node.js backend)

## Option 1: Static Website Only (Current Setup)

If you only want to deploy the frontend (HTML/CSS/JS):

### Steps:

1. **Access File Manager:**
   - Log into Hostinger hPanel
   - Go to **File Manager**
   - Navigate to `public_html` folder

2. **Upload Files:**
   - Extract your `website-export.zip`
   - Upload ALL files to `public_html`
   - Make sure `preview.html` is uploaded

3. **Set Main Page:**
   - In File Manager, rename `preview.html` to `index.html`
   - Or create `.htaccess` file with redirect:
     ```apache
     DirectoryIndex preview.html
     ```

4. **Test:**
   - Visit your domain: `https://yourdomain.com`
   - Should see your website

## Option 2: Full Stack (Frontend + Backend)

### Part A: Deploy Frontend

1. **Upload Frontend Files:**
   - Upload all HTML, CSS, JS, and image files to `public_html`
   - Keep the same structure

2. **Update API Endpoint:**
   - Edit your HTML files to point to your backend URL
   - Or create a config file:
     ```javascript
     // config.js
     const API_ENDPOINT = 'https://api.yourdomain.com';
     ```

### Part B: Deploy Backend (Node.js)

Hostinger supports Node.js on VPS plans. For shared hosting, you may need to use a different approach.

#### Method 1: VPS Hosting (Recommended)

1. **SSH into Your VPS:**
   ```bash
   ssh root@your-server-ip
   ```

2. **Install Node.js:**
   ```bash
   curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
   sudo apt-get install -y nodejs
   node --version  # Verify installation
   ```

3. **Upload Backend:**
   ```bash
   # Create directory
   mkdir -p /var/www/puzzle-backend
   cd /var/www/puzzle-backend
   
   # Upload backend folder (use SCP or FileZilla)
   # Or clone from Git if you have it
   ```

4. **Install Dependencies:**
   ```bash
   cd /var/www/puzzle-backend/backend
   npm install --production
   ```

5. **Configure Environment:**
   ```bash
   cp .env.example .env
   nano .env
   ```
   
   Update:
   ```env
   PORT=3000
   NODE_ENV=production
   JWT_SECRET=your-very-secure-random-secret-key-here
   ADMIN_USERNAME=admin
   ADMIN_PASSWORD=your-secure-password
   CORS_ORIGINS=https://yourdomain.com,https://www.yourdomain.com
   ```

6. **Install PM2 (Process Manager):**
   ```bash
   npm install -g pm2
   pm2 start server.js --name puzzle-api
   pm2 save
   pm2 startup  # Follow instructions to enable auto-start
   ```

7. **Set Up Nginx Reverse Proxy:**
   ```bash
   sudo apt-get install nginx
   sudo nano /etc/nginx/sites-available/puzzle-api
   ```
   
   Add:
   ```nginx
   server {
       listen 80;
       server_name api.yourdomain.com;
       
       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```
   
   Enable:
   ```bash
   sudo ln -s /etc/nginx/sites-available/puzzle-api /etc/nginx/sites-enabled/
   sudo nginx -t
   sudo systemctl restart nginx
   ```

8. **Set Up SSL (Let's Encrypt):**
   ```bash
   sudo apt-get install certbot python3-certbot-nginx
   sudo certbot --nginx -d api.yourdomain.com
   ```

#### Method 2: Shared Hosting (Alternative)

If you have shared hosting without Node.js support:

1. **Use Hostinger's MySQL Database:**
   - Go to hPanel → **Databases** → **MySQL Databases**
   - Create a new database
   - Note: username, password, database name

2. **Convert Backend to PHP:**
   - I can create a PHP version of the backend
   - Or use a service like Railway, Render, or Heroku for the backend

3. **Update Database Connection:**
   - Modify `config/database.js` to use MySQL instead of SQLite
   - Use connection string from Hostinger

## Option 3: Use External Backend Service (Easiest)

Deploy backend separately and connect frontend:

### Recommended Services:
- **Railway** (railway.app) - Free tier available
- **Render** (render.com) - Free tier available
- **Heroku** - Paid plans
- **DigitalOcean App Platform** - Paid

### Steps (Using Railway):

1. **Create Account:** Sign up at railway.app

2. **Deploy Backend:**
   - Click "New Project"
   - Select "Deploy from GitHub" or "Empty Project"
   - Upload your `backend` folder
   - Railway auto-detects Node.js

3. **Set Environment Variables:**
   - Add all variables from `.env.example`
   - Railway provides a public URL

4. **Update Frontend:**
   - In your HTML files, set API endpoint to Railway URL
   - Example: `const API_ENDPOINT = 'https://your-app.railway.app';`

5. **Deploy Frontend to Hostinger:**
   - Upload frontend files to Hostinger
   - Done!

## Database Setup

### For SQLite (Current):
- Database file is created automatically
- Located in `backend/database.db`
- No additional setup needed

### For MySQL (Hostinger):
1. **Create Database in hPanel:**
   - Go to **Databases** → **MySQL Databases**
   - Create database and user

2. **Update Backend:**
   - Install MySQL package: `npm install mysql2`
   - Update `config/database.js` to use MySQL connection

## Testing After Deployment

1. **Test Frontend:**
   - Visit: `https://yourdomain.com`
   - Check all pages load correctly

2. **Test Backend:**
   - Visit: `https://api.yourdomain.com/api/health`
   - Should return: `{"status":"ok",...}`

3. **Test API Connection:**
   - Open browser console on your website
   - Check for API connection errors
   - Test login functionality

## Troubleshooting

### Backend Not Starting:
- Check Node.js version: `node --version` (need v18+)
- Check logs: `pm2 logs puzzle-api`
- Verify port is not in use: `netstat -tulpn | grep 3000`

### CORS Errors:
- Update `CORS_ORIGINS` in `.env` with your domain
- Restart backend: `pm2 restart puzzle-api`

### Database Errors:
- Check file permissions: `chmod 644 database.db`
- For SQLite, ensure write permissions on directory

### Statistics Not Working:
- Verify backend is running
- Check API endpoint in frontend matches backend URL
- Check browser console for errors

## Security Checklist

- [ ] Change default admin password
- [ ] Set strong JWT_SECRET
- [ ] Enable HTTPS/SSL
- [ ] Update CORS_ORIGINS to your domain only
- [ ] Keep Node.js and dependencies updated
- [ ] Use environment variables for secrets
- [ ] Set up firewall rules (if VPS)

## Support

If you need help:
1. Check Hostinger documentation
2. Contact Hostinger support
3. Check backend logs: `pm2 logs`

## Quick Start Commands

```bash
# On your VPS/server
cd /var/www/puzzle-backend/backend
npm install
cp .env.example .env
# Edit .env file
pm2 start server.js --name puzzle-api
pm2 save
```

Your backend will be available at: `https://api.yourdomain.com`

