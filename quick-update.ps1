# Quick Update Script for Portfolio
# Run this after making changes to quickly deploy

param(
    [Parameter(Mandatory=$true)]
    [string]$CommitMessage
)

Write-Host "🔄 Updating portfolio..." -ForegroundColor Green

try {
    # Add all changes
    git add .
    
    # Commit with provided message
    git commit -m $CommitMessage
    
    # Push to GitHub (triggers automatic deployment)
    git push
    
    Write-Host "✅ Changes pushed successfully!" -ForegroundColor Green
    Write-Host "🚀 GitHub Actions will deploy your changes in 2-5 minutes" -ForegroundColor Cyan
    Write-Host "🌐 Check your live site shortly for updates" -ForegroundColor Yellow
}
catch {
    Write-Host "❌ Error: $($_.Exception.Message)" -ForegroundColor Red
}

# Usage: .\quick-update.ps1 "Added new project to portfolio"
