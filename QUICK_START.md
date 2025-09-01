# 🚀 Quick Start: Deploy to Hostinger in 5 Minutes

## ⚡ Immediate Actions Required

### 1. **✅ Google Tag Manager Script Already Added!**
I've already added your Google Tag Manager (GTM) code to your website:
- **GTM ID**: `GTM-KFQ69JG5` ✅
- **Script added to**: `src/pages/_app.tsx` ✅
- **Noscript added to**: `src/pages/_document.tsx` ✅

**Your ads and tracking will continue working automatically!**

### 2. **Get Hostinger FTP Credentials**
- FTP Host: `yourdomain.com`
- Username: Your FTP username
- Password: Your FTP password

### 3. **Add GitHub Secrets**
Go to: `Settings` → `Secrets and variables` → `Actions`
Add these secrets:
```
HOSTINGER_FTP_HOST = yourdomain.com
HOSTINGER_USERNAME = your_ftp_username
HOSTINGER_FTP_PASSWORD = your_ftp_password
HOSTINGER_DOMAIN = https://yourdomain.com
```

### 4. **Deploy!**
```bash
git add .
git commit -m "Setup CI/CD deployment with Google Tag Manager"
git push origin main
```

## 📁 Files Created for You

- ✅ `.github/workflows/deploy.yml` - FTP-based deployment workflow
- ✅ `DEPLOYMENT_SETUP.md` - Complete setup guide
- ✅ `setup-deployment.ps1` - PowerShell setup script
- ✅ `deployment-config.example` - Configuration template

## 🎯 What Happens Next

1. **Push triggers deployment** automatically
2. **GitHub Actions builds** your Next.js project
3. **Validates Google Tag Manager script** presence
4. **Files upload** to Hostinger via FTP
5. **Website updates** in real-time
6. **Google Ads continue working** (GTM already configured)

## ⚠️ Important Notes

- **Never commit secrets** to Git
- **Test locally first**: `npm run build`
- **Monitor deployment** in GitHub Actions tab
- **Keep backups** of working versions
- **Hostinger uses FTP only** (no API options)

## 🆘 Need Help?

- Run `setup-deployment.ps1` in PowerShell to check setup
- Check `DEPLOYMENT_SETUP.md` for detailed steps
- Monitor GitHub Actions logs for errors

## 🔧 What I've Built for You

1. **✅ Google Tag Manager Script Added** - With your GTM-KFQ69JG5 ID
2. **✅ GitHub Actions Workflow** - FTP deployment to Hostinger
3. **✅ Configuration Files** - All setup guides and examples
4. **✅ GTM Validation** - Checks for GTM script before deployment

---

**🚀 You're ready to deploy! Your GTM is already configured, just add the GitHub secrets and push!**
