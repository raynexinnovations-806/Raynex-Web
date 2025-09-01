# 🚀 Development Workflow Script
# Complete workflow from development to deployment

Write-Host "🚀 Development Workflow for Raynex Website" -ForegroundColor Green
Write-Host "=============================================" -ForegroundColor Green

# Function to show menu
function Show-Menu {
    Write-Host "`n📋 Choose an option:" -ForegroundColor Cyan
    Write-Host "1. 🧪 Test Local Changes (Before Commit)" -ForegroundColor White
    Write-Host "2. 🔍 Quick Validation Check" -ForegroundColor White
    Write-Host "3. 🌐 Start Development Server" -ForegroundColor White
    Write-Host "4. 📦 Build & Preview Production Build" -ForegroundColor White
    Write-Host "5. ✅ Deploy to GitHub (After Testing)" -ForegroundColor White
    Write-Host "6. 📊 Check Deployment Status" -ForegroundColor White
    Write-Host "7. 🆘 Help & Troubleshooting" -ForegroundColor White
    Write-Host "0. 🚪 Exit" -ForegroundColor White
}

# Function to test local changes
function Test-LocalChanges {
    Write-Host "`n🧪 Running Local Testing Workflow..." -ForegroundColor Green
    Write-Host "This will: lint → build → preview your changes" -ForegroundColor Yellow
    Read-Host "Press Enter to continue"
    
    # Run the test-local script
    & ".\test-local.ps1"
}

# Function to quick validation
function Quick-Validation {
    Write-Host "`n🔍 Running Quick Validation..." -ForegroundColor Green
    
    # Check GTM
    Write-Host "Checking Google Tag Manager..." -ForegroundColor Cyan
    $gtmFound = Get-ChildItem -Path "src" -Recurse -Include "*.tsx", "*.ts" | Select-String -Pattern "GTM-KFQ69JG5|googletagmanager" -Quiet
    if ($gtmFound) {
        Write-Host "✅ GTM script found" -ForegroundColor Green
    } else {
        Write-Host "❌ GTM script missing!" -ForegroundColor Red
    }
    
    # Check build
    Write-Host "Checking build configuration..." -ForegroundColor Cyan
    $exportConfig = Select-String -Path "next.config.js" -Pattern "output.*export" -Quiet
    if ($exportConfig) {
        Write-Host "✅ Static export configured" -ForegroundColor Green
    } else {
        Write-Host "❌ Static export not configured!" -ForegroundColor Red
    }
    
    # Check git status
    Write-Host "Checking git status..." -ForegroundColor Cyan
    $gitStatus = git status --porcelain
    if ($gitStatus) {
        Write-Host "✅ Changes detected" -ForegroundColor Green
    } else {
        Write-Host "ℹ️  No changes detected" -ForegroundColor Blue
    }
}

# Function to start dev server
function Start-DevServer {
    Write-Host "`n🌐 Starting Development Server..." -ForegroundColor Green
    Write-Host "Server will be available at: http://localhost:3000" -ForegroundColor Yellow
    Write-Host "Press Ctrl+C to stop the server" -ForegroundColor Yellow
    Read-Host "Press Enter to start"
    
    npm run dev
}

# Function to build and preview
function Build-Preview {
    Write-Host "`n📦 Building and Previewing Production Build..." -ForegroundColor Green
    Write-Host "This will: build → preview on http://localhost:3001" -ForegroundColor Yellow
    Read-Host "Press Enter to continue"
    
    npm run build
    if ($LASTEXITCODE -eq 0) {
        Write-Host "✅ Build successful! Starting preview..." -ForegroundColor Green
        npm run preview
    } else {
        Write-Host "❌ Build failed!" -ForegroundColor Red
    }
}

# Function to deploy
function Deploy-ToGitHub {
    Write-Host "`n✅ Deploying to GitHub..." -ForegroundColor Green
    Write-Host "This will trigger automatic deployment to Hostinger" -ForegroundColor Yellow
    
    # Check if changes exist
    $gitStatus = git status --porcelain
    if (-not $gitStatus) {
        Write-Host "⚠️  No changes to deploy!" -ForegroundColor Yellow
        return
    }
    
    # Show changes
    Write-Host "`n📝 Changes to be deployed:" -ForegroundColor Cyan
    git status --short
    
    # Confirm deployment
    $confirm = Read-Host "`nAre you sure you want to deploy? (y/N)"
    if ($confirm -eq "y" -or $confirm -eq "Y") {
        Write-Host "🚀 Deploying..." -ForegroundColor Green
        
        git add .
        $commitMsg = Read-Host "Enter commit message"
        if (-not $commitMsg) { $commitMsg = "Update website" }
        
        git commit -m $commitMsg
        git push origin main
        
        Write-Host "✅ Deployed! Check GitHub Actions for deployment status" -ForegroundColor Green
    } else {
        Write-Host "❌ Deployment cancelled" -ForegroundColor Red
    }
}

# Function to check deployment
function Check-Deployment {
    Write-Host "`n📊 Checking Deployment Status..." -ForegroundColor Green
    Write-Host "1. Go to your GitHub repository" -ForegroundColor White
    Write-Host "2. Click 'Actions' tab" -ForegroundColor White
    Write-Host "3. Check the latest deployment workflow" -ForegroundColor White
    Write-Host "4. Look for green checkmarks (✅) or red X (❌)" -ForegroundColor White
    
    Write-Host "`n🔗 Quick Links:" -ForegroundColor Cyan
    Write-Host "- GitHub Actions: https://github.com/[username]/[repo]/actions" -ForegroundColor White
    Write-Host "- Your Website: Check your domain after successful deployment" -ForegroundColor White
}

# Function to show help
function Show-Help {
    Write-Host "`n🆘 Help & Troubleshooting" -ForegroundColor Green
    Write-Host "=========================" -ForegroundColor Green
    
    Write-Host "`n📋 Recommended Workflow:" -ForegroundColor Cyan
    Write-Host "1. Make changes to your code" -ForegroundColor White
    Write-Host "2. Run 'Test Local Changes' to validate" -ForegroundColor White
    Write-Host "3. Preview your changes in browser" -ForegroundColor White
    Write-Host "4. If everything looks good, deploy to GitHub" -ForegroundColor White
    Write-Host "5. Monitor deployment in GitHub Actions" -ForegroundColor White
    
    Write-Host "`n🔧 Common Commands:" -ForegroundColor Cyan
    Write-Host "- npm run dev          → Start development server" -ForegroundColor White
    Write-Host "- npm run build        → Build production version" -ForegroundColor White
    Write-Host "- npm run preview      → Preview production build" -ForegroundColor White
    Write-Host "- npm run test:local   → Full local testing" -ForegroundColor White
    
    Write-Host "`n⚠️  Important Notes:" -ForegroundColor Yellow
    Write-Host "- Always test locally before deploying" -ForegroundColor White
    Write-Host "- Google Tag Manager script is automatically validated" -ForegroundColor White
    Write-Host "- Deployment happens automatically after GitHub push" -ForegroundColor White
}

# Main menu loop
do {
    Show-Menu
    $choice = Read-Host "`nEnter your choice (0-7)"
    
    switch ($choice) {
        "1" { Test-LocalChanges }
        "2" { Quick-Validation }
        "3" { Start-DevServer }
        "4" { Build-Preview }
        "5" { Deploy-ToGitHub }
        "6" { Check-Deployment }
        "7" { Show-Help }
        "0" { 
            Write-Host "👋 Goodbye!" -ForegroundColor Green
            exit 0
        }
        default { Write-Host "❌ Invalid choice. Please try again." -ForegroundColor Red }
    }
    
    if ($choice -ne "0") {
        Read-Host "`nPress Enter to return to menu"
    }
} while ($choice -ne "0")
