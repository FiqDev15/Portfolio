# GitHub Setup Script for PowerShell
# Replace 'yourusername' with your actual GitHub username

Write-Host "🚀 Setting up GitHub repository..." -ForegroundColor Green
Write-Host "Make sure you've created a repository on GitHub first!" -ForegroundColor Yellow
Write-Host ""

# Prompt for GitHub username
$username = Read-Host "Enter your GitHub username"
$repo_name = Read-Host "Enter your repository name (default: portfolio)"

# Set default repo name if empty
if ([string]::IsNullOrEmpty($repo_name)) {
    $repo_name = "portfolio"
}

try {
    # Add remote origin
    git remote add origin "https://github.com/$username/$repo_name.git"
    
    # Rename branch to main
    git branch -M main
    
    # Push to GitHub
    git push -u origin main
    
    Write-Host "✅ Successfully pushed to GitHub!" -ForegroundColor Green
    Write-Host "🌐 Your repository: https://github.com/$username/$repo_name" -ForegroundColor Cyan
    Write-Host ""
    Write-Host "Next steps:" -ForegroundColor Yellow
    Write-Host "1. Go to your repository settings"
    Write-Host "2. Navigate to 'Pages' section" 
    Write-Host "3. Enable GitHub Pages"
    Write-Host "4. Your site will be live at: https://$username.github.io/$repo_name" -ForegroundColor Cyan
}
catch {
    Write-Host "❌ Error occurred: $($_.Exception.Message)" -ForegroundColor Red
    Write-Host "Make sure you've created the repository on GitHub first!" -ForegroundColor Yellow
}
