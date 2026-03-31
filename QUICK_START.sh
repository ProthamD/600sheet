#!/bin/bash

# DSA Tracker Quick Start Checklist
# Run this in your project folder: bash QUICK_START.sh

clear

echo "╔════════════════════════════════════════════════════════════════════╗"
echo "║              DSA TRACKER - QUICK START GUIDE                       ║"
echo "║                                                                    ║"
echo "║  A dark-themed learning tracker for Data Structures &             ║"
echo "║  Algorithms. GitHub Pages ready. No backend needed. 100% local!   ║"
echo "╚════════════════════════════════════════════════════════════════════╝"
echo ""

# Colors
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${BLUE}📋 CHECKLIST - Follow these steps:${NC}"
echo ""

# Step 1
echo -e "${YELLOW}Step 1: Customize Your Data${NC}"
echo "☐ Open data.js"
echo "☐ Update 'tasksData' with your DSA problems"
echo "☐ Or use converter: python converter.py your-sheet.csv"
echo ""

# Step 2
echo -e "${YELLOW}Step 2: Test Locally${NC}"
echo "☐ Run: python -m http.server 8000"
echo "☐ Visit: http://localhost:8000"
echo "☐ Check if tasks load correctly"
echo "☐ Try clicking checkboxes"
echo ""

# Step 3
echo -e "${YELLOW}Step 3: Initialize Git${NC}"
echo "☐ Run: git init"
echo "☐ Run: git add ."
echo "☐ Run: git commit -m 'Initial commit'"
echo ""

# Step 4
echo -e "${YELLOW}Step 4: Create GitHub Repo${NC}"
echo "☐ Go to github.com"
echo "☐ Create new repo: 'sheets'"
echo "☐ Make it PUBLIC"
echo "☐ Copy the commands to push your code"
echo ""

# Step 5
echo -e "${YELLOW}Step 5: Push to GitHub${NC}"
echo "☐ Run: git remote add origin https://github.com/YOUR_USERNAME/sheets"
echo "☐ Run: git push -u origin main"
echo ""

# Step 6
echo -e "${YELLOW}Step 6: Enable GitHub Pages${NC}"
echo "☐ Go to repo Settings"
echo "☐ Click 'Pages' on left sidebar"
echo "☐ Source: 'Deploy from a branch'"
echo "☐ Branch: 'main' | Folder: '/ (root)'"
echo "☐ Click Save"
echo ""

# Step 7
echo -e "${YELLOW}Step 7: Wait & Access${NC}"
echo "☐ Wait 2-5 minutes"
echo "☐ Visit: https://YOUR_USERNAME.github.io/sheets"
echo "☐ Your tracker is LIVE! 🎉"
echo ""

echo ""
echo -e "${BLUE}📚 FILE GUIDE:${NC}"
echo "  index.html            Main page"
echo "  styles.css            Dark theme design"
echo "  app.js                Application logic"
echo "  data.js               YOUR TASKS (edit this!)"
echo "  README.md             Full documentation"
echo "  GITHUB_PAGES_DEPLOYMENT.md    Deployment help"
echo "  SERVERLESS_OPTIONS.md         Add backend later"
echo "  converter.py          CSV → JSON tool"
echo ""

echo -e "${BLUE}🎯 FEATURES:${NC}"
echo "  ✅ Dark theme (easy on eyes)"
echo "  ✅ Task tracking with checkmarks"
echo "  ✅ Search & filter"
echo "  ✅ Progress stats"
echo "  ✅ Export progress (JSON)"
echo "  ✅ Local storage (no backend)"
echo "  ✅ Responsive design"
echo "  ✅ Direct problem links"
echo ""

echo -e "${BLUE}💾 PROGRESS STORAGE:${NC}"
echo "  Currently: Browser localStorage"
echo "  All data stays on YOUR device"
echo "  Add cloud later? See SERVERLESS_OPTIONS.md"
echo ""

echo -e "${BLUE}🚀 NEXT STEPS:${NC}"
echo "  1. Edit data.js with your tasks"
echo "  2. Test locally (python -m http.server 8000)"
echo "  3. Git init & push to GitHub"
echo "  4. Enable GitHub Pages"
echo "  5. Share your tracker!"
echo ""

echo -e "${GREEN}Questions?${NC}"
echo "  📖 Read README.md"
echo "  📖 Read GITHUB_PAGES_DEPLOYMENT.md"
echo "  📖 Check app.js comments"
echo ""

echo -e "${GREEN}Ready to start? Follow the steps above! 🎉${NC}"
echo ""
