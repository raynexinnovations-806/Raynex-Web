# 🧪 Local Testing Workflow Script
# Run this before committing and pushing to GitHub

Write-Host "🧪 Starting Local Testing Workflow..." -ForegroundColor Green
Write-Host "=====================================" -ForegroundColor Green

# Step 1: Check for uncommitted changes
Write-Host "`n📝 Step 1: Checking for uncommitted changes..." -ForegroundColor Cyan
$gitStatus = git status --porcelain
if ($gitStatus) {
    Write-Host "✅ Changes detected - ready for testing" -ForegroundColor Green
} else {
    Write-Host "⚠️  No changes detected. Make some changes first!" -ForegroundColor Yellow
    Read-Host "Press Enter to continue"
    exit 0
}

# Step 2: Lint check
Write-Host "`n🔍 Step 2: Running linting..." -ForegroundColor Cyan
npm run lint
if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ Linting passed" -ForegroundColor Green
} else {
    Write-Host "❌ Linting failed! Fix errors before continuing." -ForegroundColor Red
    Read-Host "Press Enter to continue"
    exit 1
}

# Step 3: Check GTM script
Write-Host "`n🔍 Step 3: Checking Google Tag Manager script..." -ForegroundColor Cyan
$gtmFound = Get-ChildItem -Path "src" -Recurse -Include "*.tsx", "*.ts" | Select-String -Pattern "GTM-KFQ69JG5|googletagmanager" -Quiet
if ($gtmFound) {
    Write-Host "✅ Google Tag Manager script found" -ForegroundColor Green
} else {
    Write-Host "❌ Google Tag Manager script missing! This will break deployment." -ForegroundColor Red
    Read-Host "Press Enter to continue"
    exit 1
}

# Step 4: Build project
Write-Host "`n🔨 Step 4: Building project..." -ForegroundColor Cyan
npm run build
if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ Build successful" -ForegroundColor Green
} else {
    Write-Host "❌ Build failed! Fix errors before continuing." -ForegroundColor Red
    Read-Host "Press Enter to continue"
    exit 1
}

# Step 5: Start preview server
Write-Host "`n🌐 Step 5: Starting preview server..." -ForegroundColor Cyan
Write-Host "Starting preview server on http://localhost:3001" -ForegroundColor Yellow
Write-Host "Press Ctrl+C to stop the preview server when done testing" -ForegroundColor Yellow
Write-Host "`n🚀 Preview server starting..." -ForegroundColor Green

# Start preview server
npm run preview
