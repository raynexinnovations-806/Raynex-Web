# 🚀 CI/CD Deployment Setup Script for Windows
# Run this script in PowerShell to check your setup

Write-Host "🚀 Setting up CI/CD deployment for your Next.js website..." -ForegroundColor Green

# Check if .github/workflows directory exists
if (-not (Test-Path ".github\workflows")) {
    Write-Host "📁 Creating .github\workflows directory..." -ForegroundColor Yellow
    New-Item -ItemType Directory -Path ".github\workflows" -Force
}

# Check if deployment files exist
if (-not (Test-Path ".github\workflows\deploy.yml")) {
    Write-Host "❌ Deployment workflow not found!" -ForegroundColor Red
    Write-Host "Please ensure .github\workflows\deploy.yml exists"
    Read-Host "Press Enter to continue"
    exit 1
}

Write-Host "✅ Deployment workflow found" -ForegroundColor Green

# Check for Google Tag Manager script
Write-Host "🔍 Checking for Google Tag Manager script..." -ForegroundColor Cyan
$gtmFound = Get-ChildItem -Path "src" -Recurse -Include "*.tsx", "*.ts" | Select-String -Pattern "GTM-KFQ69JG5|googletagmanager" -Quiet

if ($gtmFound) {
    Write-Host "✅ Google Tag Manager script found in source code" -ForegroundColor Green
} else {
    Write-Host "⚠️  WARNING: Google Tag Manager script not found in source code!" -ForegroundColor Yellow
    Write-Host "Please add GTM script before deploying to maintain ad tracking."
}

# Check build configuration
Write-Host "🔧 Checking build configuration..." -ForegroundColor Cyan
$exportConfig = Select-String -Path "next.config.js" -Pattern "output.*export" -Quiet

if ($exportConfig) {
    Write-Host "✅ Next.js configured for static export" -ForegroundColor Green
} else {
    Write-Host "❌ Next.js not configured for static export" -ForegroundColor Red
    Write-Host "Please ensure next.config.js has 'output: \"export\"'"
    Read-Host "Press Enter to continue"
    exit 1
}

# Check if .htaccess exists
if (Test-Path ".htaccess") {
    Write-Host "✅ .htaccess file found for Hostinger compatibility" -ForegroundColor Green
} else {
    Write-Host "⚠️  .htaccess file not found - may need for Hostinger" -ForegroundColor Yellow
}

Write-Host ""
Write-Host "🎯 Next steps:" -ForegroundColor Green
Write-Host "1. Add GitHub secrets in repository settings:" -ForegroundColor White
Write-Host "   - HOSTINGER_FTP_HOST" -ForegroundColor White
Write-Host "   - HOSTINGER_USERNAME" -ForegroundColor White
Write-Host "   - HOSTINGER_FTP_PASSWORD" -ForegroundColor White
Write-Host "   - HOSTINGER_DOMAIN" -ForegroundColor White
Write-Host ""
Write-Host "2. Ensure Google Tag Manager script is properly added" -ForegroundColor White
Write-Host "3. Test build locally: npm run build" -ForegroundColor White
Write-Host "4. Push to GitHub to trigger deployment" -ForegroundColor White
Write-Host ""
Write-Host "📚 See DEPLOYMENT_SETUP.md for detailed instructions" -ForegroundColor Cyan
Write-Host "🚀 Happy deploying!" -ForegroundColor Green

Read-Host "Press Enter to continue"
