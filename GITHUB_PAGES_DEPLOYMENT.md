# How to Deploy to GitHub Pages

## Prerequisites
- GitHub account (free)
- Git installed on your computer
- Your DSA tracker code ready

## Option 1: Using GitHub Web UI (Easiest - 5 minutes)

### Step 1: Create a GitHub Repository
1. Go to [GitHub.com](https://github.com)
2. Click **+ New** (top right)
3. Repository name: `sheets` (or your preferred name)
4. Description: "DSA Learning Tracker"
5. Make sure it's **Public**
6. Click **Create repository**

### Step 2: Upload Files
1. On your new repo page, click **Add file** → **Upload files**
2. Drag and drop all files from your local folder:
   - index.html
   - styles.css
   - app.js
   - data.js
   - README.md
   - package.json
3. Leave message as default commit
4. Click **Commit changes**

### Step 3: Enable GitHub Pages
1. Go to repository **Settings** (top tab)
2. Click **Pages** (left sidebar)
3. Under "Build and deployment":
   - Source: Select **Deploy from a branch**
   - Branch: Select **main**
   - Folder: **/ (root)**
4. Click **Save**
5. Wait 1-2 minutes for the site to build

### Step 4: Access Your Site
Your tracker is now live at: `https://yourusername.github.io/sheets`

---

## Option 2: Using Git Commands (More Control)

### Prerequisites
- Git installed
- GitHub account with SSH key configured (optional)

### Step 1: Initialize Git Locally
```bash
cd path/to/sheets
git init
git add .
git commit -m "Initial commit: DSA Learning Tracker"
```

### Step 2: Create Repository on GitHub
Same as Option 1, Steps 1-2 above

### Step 3: Push to GitHub
```bash
# Add remote repository
git remote add origin https://github.com/yourusername/sheets.git

# Rename branch to main (if needed)
git branch -M main

# Push to GitHub
git push -u origin main
```

### Step 4: Enable GitHub Pages
Same as Option 1, Step 3 above

---

## Option 3: Automated Deployment with GitHub Actions

We've already included a `.github/workflows/deploy.yml` file. This automatically deploys whenever you push!

### How it works:
1. Push code to GitHub
2. GitHub Actions automatically builds and deploys
3. Your site updates in seconds

### No configuration needed - it just works! 🚀

---

## Updating Your Site After Deployment

### Method 1: Web UI
1. Navigate to any file in your repo
2. Click the pencil icon to edit
3. Make changes
4. Commit with a message
5. Changes go live in ~1 minute

### Method 2: Git Commands
```bash
# Make local changes
# Edit files as needed

# Commit and push
git add .
git commit -m "Update task data"
git push origin main

# Your site updates automatically!
```

---

## Updating Tasks from Your Spreadsheet

### Step 1: Export CSV from Google Sheets
1. Open your Google Sheet
2. File → Download → CSV

### Step 2: Convert CSV to JSON
```bash
python converter.py your-sheet.csv data.js
```

### Step 3: Upload Updated data.js
- **Via Web**: Edit `data.js` on GitHub and commit
- **Via Git**:
  ```bash
  git add data.js
  git commit -m "Update tasks from spreadsheet"
  git push origin main
  ```

### Step 4: Changes Go Live (1-2 minutes)

---

## How GitHub Pages Works

```
Your Local Computer
        ↓ (git push)
    GitHub Repo
        ↓ (GitHub Actions)
    Deploy to CDN
        ↓
    🌍 Your Live Website
```

---

## Site URL Formats

### Default:
`https://yourusername.github.io/sheets`

### With custom domain:
1. Buy domain (Namecheap, GoDaddy, etc.)
2. Point to GitHub Pages nameservers
3. Set in repo Settings → Pages
4. Your site: `https://yourdomain.com`

---

## Troubleshooting

### Site not showing (404 error)?
- ✅ Wait 2-5 minutes after first push
- ✅ Repo must be **Public**, not Private
- ✅ Check Settings → Pages is enabled
- ✅ Main branch must have a commit

### Changes not appearing?
- ✅ Clear browser cache: `Ctrl+F5` (Windows) or `Cmd+Shift+R` (Mac)
- ✅ Wait 1-2 minutes for GitHub Actions to complete
- ✅ Check Actions tab in repo for build errors

### Progress not saving?
- ✅ Check browser console: Press `F12`
- ✅ Ensure localStorage is enabled
- ✅ Try in incognito/private mode

### My data.js file isn't showing?
- ✅ Ensure `data.js` is in the root directory
- ✅ Check JavaScript syntax with [JSONLint](https://jsonlint.com/)
- ✅ Open browser console (F12) to see errors

---

## Performance Tips

### Optimize Your Site
1. **Keep data.js small**: Max 500 problems recommended
2. **Use CDN images**: If adding images later
3. **Enable caching**: GitHub Pages auto-enables

### Monitor Performance
- Use [PageSpeed Insights](https://pagespeed.web.dev/)
- Check GitHub Pages deployment logs

---

## Advanced: Custom Domain

### Connect Your Own Domain

1. **Buy a domain** (Namecheap, GoDaddy, Hostinger, etc.)

2. **Configure DNS Records**:
   - Type A: Points to GitHub Pages IPs
   - Type CNAME: Alternative method

3. **GitHub Settings**:
   - Settings → Pages
   - Custom domain: `yourdomain.com`
   - Enable HTTPS
   - GitHub auto-provisions SSL cert

4. **DNS Records (Option A - A Records)**:
   ```
   Type: A
   Name: @
   Value: 185.199.108.153 (GitHub provided)
   ```

5. **DNS Records (Option B - CNAME)**:
   ```
   Type: CNAME
   Name: @
   Value: yourusername.github.io
   ```

6. **Verify** (may take 24 hours):
   - Visit your domain
   - Should show your tracker

---

## GitHub Pages Limitations

⚠️ Know before deploying:
- Static only (no backend/database)
- 100% client-side
- Private repos get 2MB storage
- Auto-disables if over 100GB/month

✅ For this project:
- All green! Unlimited static content
- Perfect for task tracker

---

## Want to Add Backend Later?

If you need cloud storage for progress, options:

### Netlify Functions (Free)
```bash
npm install -g netlify-cli
netlify init
```

### Vercel (Free)
```bash
npm i -g vercel
vercel
```

### Supabase (PostgreSQL - Free)
- Cloud database
- Replace localStorage with API calls
- Sync across devices

### AWS Lambda (Pay as you go)
- Serverless backend
- Good for scaling

---

## Sharing Your Tracker

### Share with Friends
```
" Check out my DSA tracker! "
https://yourusername.github.io/sheets
```

### Public vs Private
- GitHub Pages only works with Public repos
- Not an issue since it's anonymized progress

---

## Security Notes

✅ **Your data is safe because:**
- Stored only in browser (localStorage)
- Never sent to any server
- No backend = no breaches

⚠️ **Limitations:**
- Progress lost if browser data cleared
- Not synced across devices
- Export JSON for backup

---

## Quick Reference

| Task | Command |
|------|---------|
| Create repo | Click "+" on GitHub |
| Upload files | Drag drop on GitHub web |
| Push updates | `git push origin main` |
| Enable Pages | Settings → Pages → main branch |
| Convert CSV | `python converter.py file.csv` |
| Update data | Edit `data.js` and commit |
| View live | `https://yourusername.github.io/sheets` |

---

## Need Help?

1. **Check console**: Press `F12` → Console
2. **Read errors**: GitHub Actions tab in repo
3. **Review README.md**: In your repo
4. **Check GitHub Docs**: [Pages Documentation](https://docs.github.com/en/pages)

---

**You're all set! 🚀 Your DSA tracker is ready to deploy!**
