@echo off
echo 🚀 Setting up CI/CD deployment for your Next.js website...

REM Check if .github/workflows directory exists
if not exist ".github\workflows" (
    echo 📁 Creating .github\workflows directory...
    mkdir ".github\workflows"
)

REM Check if deployment files exist
if not exist ".github\workflows\deploy.yml" (
    echo ❌ Deployment workflow not found!
    echo Please ensure .github\workflows\deploy.yml exists
    pause
    exit /b 1
)

echo ✅ Deployment workflow found

REM Check for Google Ads script
echo 🔍 Checking for Google Ads script...
findstr /s /i "googletagmanager gtag" src\* >nul 2>&1
if %errorlevel% equ 0 (
    echo ✅ Google Ads script found in source code
) else (
    echo ⚠️  WARNING: Google Ads script not found in source code!
    echo Please add Google Ads script before deploying to maintain ad tracking.
)

REM Check build configuration
echo 🔧 Checking build configuration...
findstr /i "output.*export" next.config.js >nul 2>&1
if %errorlevel% equ 0 (
    echo ✅ Next.js configured for static export
) else (
    echo ❌ Next.js not configured for static export
    echo Please ensure next.config.js has 'output: "export"'
    pause
    exit /b 1
)

REM Check if .htaccess exists
if exist ".htaccess" (
    echo ✅ .htaccess file found for Hostinger compatibility
) else (
    echo ⚠️  .htaccess file not found - may need for Hostinger
)

echo.
echo 🎯 Next steps:
echo 1. Add GitHub secrets in repository settings:
echo    - HOSTINGER_FTP_HOST
echo    - HOSTINGER_USERNAME 
echo    - HOSTINGER_FTP_PASSWORD
echo    - HOSTINGER_DOMAIN
echo.
echo 2. Ensure Google Ads script is properly added
echo 3. Test build locally: npm run build
echo 4. Push to GitHub to trigger deployment
echo.
echo 📚 See DEPLOYMENT_SETUP.md for detailed instructions
echo 🚀 Happy deploying!
pause
