#!/bin/bash

# 🚀 CI/CD Deployment Setup Script
# This script helps set up the initial deployment configuration

echo "🚀 Setting up CI/CD deployment for your Next.js website..."

# Check if .github/workflows directory exists
if [ ! -d ".github/workflows" ]; then
    echo "📁 Creating .github/workflows directory..."
    mkdir -p .github/workflows
fi

# Check if deployment files exist
if [ ! -f ".github/workflows/deploy.yml" ]; then
    echo "❌ Deployment workflow not found!"
    echo "Please ensure .github/workflows/deploy.yml exists"
    exit 1
fi

echo "✅ Deployment workflow found"

# Check for Google Ads script
echo "🔍 Checking for Google Ads script..."
if grep -r "googletagmanager\|gtag" src/ > /dev/null 2>&1; then
    echo "✅ Google Ads script found in source code"
else
    echo "⚠️  WARNING: Google Ads script not found in source code!"
    echo "Please add Google Ads script before deploying to maintain ad tracking."
fi

# Check build configuration
echo "🔧 Checking build configuration..."
if [ -f "next.config.js" ] && grep -q "output.*export" next.config.js; then
    echo "✅ Next.js configured for static export"
else
    echo "❌ Next.js not configured for static export"
    echo "Please ensure next.config.js has 'output: \"export\"'"
    exit 1
fi

# Check if .htaccess exists
if [ -f ".htaccess" ]; then
    echo "✅ .htaccess file found for Hostinger compatibility"
else
    echo "⚠️  .htaccess file not found - may need for Hostinger"
fi

echo ""
echo "🎯 Next steps:"
echo "1. Add GitHub secrets in repository settings:"
echo "   - HOSTINGER_FTP_HOST"
echo "   - HOSTINGER_USERNAME" 
echo "   - HOSTINGER_FTP_PASSWORD"
echo "   - HOSTINGER_DOMAIN"
echo ""
echo "2. Ensure Google Ads script is properly added"
echo "3. Test build locally: npm run build"
echo "4. Push to GitHub to trigger deployment"
echo ""
echo "📚 See DEPLOYMENT_SETUP.md for detailed instructions"
echo "�� Happy deploying!"
