# DSA Learning Tracker - Setup Guide

## Overview
A dark-themed, task-tracking application for mastering Data Structures and Algorithms. Built as a serverless frontend application that stores progress locally.

## Features
✅ **Dark Theme** - Easy on the eyes  
✅ **Progress Tracking** - Local storage auto-saves your progress  
✅ **Search & Filter** - Find problems by name or category  
✅ **Task Categories** - Organized by DSA topics  
✅ **Problem Links** - Direct links to problems  
✅ **Export Progress** - Download your progress as JSON  
✅ **Responsive** - Works on desktop and mobile  
✅ **GitHub Pages Ready** - One-click deployment  
✅ **No Backend Needed** - 100% frontend  

## Quick Start

### 1. Setup Your Repository
```bash
# Clone the repo (or create a new one)
git clone <your-repo-url>
cd sheets

# Or to create new
git init
git add .
git commit -m "Initial commit"
```

### 2. Customize with Your Data
Edit `data.js` to add your tasks from the spreadsheet:

```javascript
const tasksData = [
    {
        id: 1,
        category: "Arrays",
        icon: "📚",
        tasks: [
            {
                id: 1,
                name: "Two Sum",
                difficulty: "easy",  // easy | medium | hard
                link: "https://leetcode.com/problems/two-sum/",
                description: "Problem description"
            },
            // Add more tasks...
        ]
    },
    // Add more categories...
];
```

### 3. Deploy to GitHub Pages

#### Option A: Using GitHub UI
1. Push code to GitHub
2. Go to repository Settings → Pages
3. Set "Source" to "Deploy from a branch"
4. Select "main" branch and save
5. Your site will be live at `https://username.github.io/repo-name`

#### Option B: Using GitHub Actions (Automatic)
Files are already configured in `.github/workflows/deploy.yml`. Just push to main and it deploys automatically!

### 4. Access Your App
Visit: `https://yourusername.github.io/sheets` (or your custom domain)

## Using the App

### Checking Off Tasks
- Click the checkbox to mark tasks as complete
- Click the task name to see details and problem link
- Your progress saves automatically to your browser

### Filtering & Search
- Use the search box to find specific problems
- Filter by "All", "Completed", or "Pending"
- Click category headers to collapse/expand

### Export Progress
- Click "Export Progress" to download a JSON file with your stats
- Useful for tracking over time or sharing

### Reset Progress
- Click "Reset All" to start over (with confirmation)

## Spreadsheet to App Migration

### Format Your Spreadsheet Data
Your Google Sheet should have columns like:
```
Category | Task Name | Difficulty | Problem Link | Description
---------|-----------|------------|--------------|-------------
Arrays   | Two Sum   | Easy       | https://...  | Add two numbers
```

### Convert to JSON
```javascript
const tasksData = [
    {
        category: "Arrays",
        icon: "📚",
        tasks: [
            {
                id: 1,
                name: "Two Sum",
                difficulty: "easy",
                link: "https://...",
                description: "..."
            }
        ]
    }
];
```

## Progress Storage

- **Local Storage**: Progress saves in your browser (no backend needed)
- **Privacy**: All data stays on your device
- **Export**: Download progress as JSON backup
- **Browser Support**: Works on all modern browsers

## Customization

### Change Colors
Edit `:root` variables in `styles.css`:
```css
:root {
    --primary-color: #6366f1;  /* Main brand color */
    --success-color: #10b981;  /* Checkmark color */
    --bg-dark: #0f172a;        /* Background */
    /* ... more colors ... */
}
```

### Add More Categories
In `data.js`, add new objects to `tasksData`:
```javascript
{
    id: 7,
    category: "Sorting",
    icon: "🔀",
    tasks: [...]
}
```

### Change Icons
Use any emoji. Replace in category `icon` field.

## Serverless Options

### Want Backend Functionality?

You can add serverless functions later:

#### Option 1: Netlify Functions (Free!)
```bash
npm install -g netlify-cli
netlify init
```

#### Option 2: AWS Lambda + API Gateway
Store progress in cloud database

#### Option 3: Supabase (Free PostgreSQL)
Replace localStorage with cloud sync

**For now**: This app works 100% without any backend!

## File Structure
```
sheets/
├── index.html          # Main page
├── styles.css          # Dark theme styles
├── app.js             # Application logic
├── data.js            # Your task data
├── README.md          # This file
└── .github/
    └── workflows/
        └── deploy.yml  # Auto-deploy on push
```

## Browser Compatibility
✅ Chrome/Edge 90+  
✅ Firefox 88+  
✅ Safari 14+  
✅ Mobile browsers  

## Tips & Tricks

1. **Backup Your Progress**: Export JSON periodically
2. **Share Tracker**: Share the GitHub Pages URL with friends
3. **Use LeetCode**: Open problem links in new tab while solving
4. **Track Time**: Note completion dates in exported JSON
5. **Mobile**: Add to home screen for quick access

## Troubleshooting

### Progress not saving?
- Check if localStorage is enabled in browser settings
- Try private/incognito mode

### Can't access GitHub Pages?
- Ensure repository is public
- Wait 5 minutes after first deploy
- Check Settings → Pages in repo

### Data not showing?
- Verify `data.js` syntax with console (F12)
- Ensure JSON is properly formatted

## Want to Add Backend Later?

When ready for cloud storage:
1. Add API endpoints to `app.js`
2. Replace `localStorage` with API calls
3. Deploy backend to:
   - Netlify Functions
   - Vercel
   - AWS Lambda
   - Supabase
   - Firebase

## License
Open source - feel free to modify and share!

## Questions?
Check console for errors: Press `F12` → Console tab

---

**Happy Learning! 🚀**
# DSA Tracker - Deployed on 2026-03-31
