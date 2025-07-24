#!/bin/bash
# GitHub Setup Script
# Replace 'yourusername' with your actual GitHub username
# Replace 'portfolio' with your repository name if different

echo "🚀 Setting up GitHub repository..."
echo "Make sure you've created a repository on GitHub first!"
echo ""

# Prompt for GitHub username
read -p "Enter your GitHub username: " username
read -p "Enter your repository name (default: portfolio): " repo_name

# Set default repo name if empty
if [ -z "$repo_name" ]; then
    repo_name="portfolio"
fi

# Add remote origin
git remote add origin https://github.com/$username/$repo_name.git

# Rename branch to main (GitHub's default)
git branch -M main

# Push to GitHub
git push -u origin main

echo "✅ Successfully pushed to GitHub!"
echo "🌐 Your repository: https://github.com/$username/$repo_name"
echo ""
echo "Next steps:"
echo "1. Go to your repository settings"
echo "2. Navigate to 'Pages' section"
echo "3. Enable GitHub Pages with 'Deploy from a branch'"
echo "4. Select 'gh-pages' branch (will be created automatically)"
echo "5. Your site will be live at: https://$username.github.io/$repo_name"
