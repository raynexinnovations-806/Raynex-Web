# 🔧 Fix Unescaped Apostrophes Script
# This script automatically fixes all unescaped apostrophes in your codebase

Write-Host "🔧 Fixing Unescaped Apostrophes..." -ForegroundColor Green
Write-Host "=====================================" -ForegroundColor Green

# Function to fix apostrophes in a file
function Fix-ApostrophesInFile {
    param([string]$FilePath)
    
    Write-Host "Processing: $FilePath" -ForegroundColor Cyan
    
    # Read file content
    $content = Get-Content $FilePath -Raw -Encoding UTF8
    
    # Replace unescaped apostrophes with HTML entities
    $fixedContent = $content -replace "([^&])'([^a-zA-Z])", "`$1&apos;`$2"
    $fixedContent = $fixedContent -replace "([^&])'([^a-zA-Z])", "`$1&apos;`$2"
    
    # Write back to file
    Set-Content $FilePath $fixedContent -Encoding UTF8
    
    Write-Host "✅ Fixed apostrophes in: $FilePath" -ForegroundColor Green
}

# Get all TypeScript/TSX files
$tsFiles = Get-ChildItem -Path "src" -Recurse -Include "*.ts", "*.tsx"

Write-Host "`n📁 Found $($tsFiles.Count) TypeScript files to process" -ForegroundColor Yellow

# Process each file
foreach ($file in $tsFiles) {
    Fix-ApostrophesInFile -FilePath $file.FullName
}

Write-Host "`n🎉 All apostrophes have been fixed!" -ForegroundColor Green
Write-Host "`n📋 Next steps:" -ForegroundColor Cyan
Write-Host "1. Run 'npm run lint' to verify all errors are fixed" -ForegroundColor White
Write-Host "2. Run 'npm run build' to test the build" -ForegroundColor White
Write-Host "3. If successful, deploy to GitHub" -ForegroundColor White

Read-Host "`nPress Enter to continue"
