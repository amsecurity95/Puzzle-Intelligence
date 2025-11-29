# Quick Deployment Guide for Hostinger

## Fastest Method: Use Railway for Backend (Recommended)

### Step 1: Deploy Backend to Railway (5 minutes)

1. Go to https://railway.app
2. Sign up (free)
3. Click "New Project" → "Deploy from GitHub" or "Empty Project"
4. Upload your `backend` folder
5. Add environment variables:
   - `JWT_SECRET` = (generate a random string)
   - `ADMIN_USERNAME` = admin
   - `ADMIN_PASSWORD` = (your secure password)
   - `CORS_ORIGINS` = https://yourdomain.com
6. Railway gives you a URL like: `https://your-app.railway.app`
7. Copy this URL

### Step 2: Update Frontend

1. In your HTML files, add this script before closing `</body>`:
   ```html
   <script>
       // Set API endpoint
       if (!localStorage.getItem('apiEndpoint')) {
           localStorage.setItem('apiEndpoint', 'https://your-app.railway.app');
       }
   </script>
   ```

2. Or manually set in admin panel: Click "Configure API Endpoint"

### Step 3: Deploy Frontend to Hostinger

1. Log into Hostinger hPanel
2. Go to **File Manager**
3. Navigate to `public_html`
4. Upload ALL your website files (HTML, CSS, JS, images)
5. Rename `preview.html` to `index.html`
6. Done!

### Step 4: Connect Admin Panel

1. Visit: `https://yourdomain.com/admin-panel.html`
2. Click "Configure API Endpoint"
3. Enter: `https://your-app.railway.app`
4. Click "Login to API"
5. Enter admin credentials
6. Statistics will now work in real-time!

## Alternative: Deploy Backend on Hostinger VPS

If you have VPS hosting:

1. SSH into your server
2. Install Node.js:
   ```bash
   curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
   sudo apt-get install -y nodejs
   ```

3. Upload backend folder
4. Install dependencies:
   ```bash
   cd backend
   npm install
   ```

5. Set up environment:
   ```bash
   cp .env.example .env
   nano .env  # Edit with your settings
   ```

6. Install PM2:
   ```bash
   npm install -g pm2
   pm2 start server.js --name puzzle-api
   pm2 save
   ```

7. Set up domain: Point `api.yourdomain.com` to your server IP

## Testing

1. Visit your website
2. Open browser console (F12)
3. Check for API connection
4. Visit admin panel
5. Click "Login to API"
6. View real-time statistics!

## Troubleshooting

**Backend not responding:**
- Check Railway logs
- Verify environment variables
- Test: `curl https://your-app.railway.app/api/health`

**Statistics not updating:**
- Make sure you're logged into API in admin panel
- Check browser console for errors
- Verify CORS settings include your domain

**Countdown timer stuck:**
- Clear browser cache
- Check API endpoint is correct
- Verify backend is running

