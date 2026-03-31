#!/bin/bash

# DSA Tracker Setup Script
# This script helps you prepare your tracker for deployment

echo "🚀 DSA Learning Tracker Setup"
echo "=============================="
echo ""

# Check if git is initialized
if [ ! -d .git ]; then
    echo "📦 Initializing Git repository..."
    git init
    git add .
    git commit -m "Initial commit: DSA Learning Tracker"
    echo "✅ Git repository initialized"
else
    echo "✅ Git repository already initialized"
fi

echo ""
echo "📝 Next Steps:"
echo "1. Update data.js with your DSA problems from the spreadsheet"
echo "2. Create a GitHub repository"
echo "3. Push your code: git push -u origin main"
echo "4. Go to GitHub Settings > Pages"
echo "5. Enable GitHub Pages (Source: main branch)"
echo ""
echo "Your site will be available at: https://<username>.github.io/sheets"
echo ""
echo "✨ Happy Learning!"
