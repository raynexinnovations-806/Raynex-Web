# 🚀 Quick Start: Deploy to Hostinger in 5 Minutes

## ⚡ Immediate Actions Required

### 1. **CRITICAL: Update Google Ads Script ID**
The Google Ads script has been added to your `src/pages/_app.tsx` file. **You MUST replace `GA_MEASUREMENT_ID` with your actual Google Analytics ID:**

```tsx
// In src/pages/_app.tsx - Replace GA_MEASUREMENT_ID with your actual ID
<script
  async
  src="https://www.googletagmanager.com/gtag/js?id=YOUR_ACTUAL_GA_ID"
/>
<script
  dangerouslySetInnerHTML={{
    __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'YOUR_ACTUAL_GA_ID');
    `,
  }}
/>
```

**Find your GA ID**: Go to Google Analytics → Admin → Property Settings → Property ID

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
git commit -m "Setup CI/CD deployment"
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
3. **Validates Google Ads script** presence
4. **Files upload** to Hostinger via FTP
5. **Website updates** in real-time
6. **Google Ads continue working** (if ID updated)

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

1. **✅ Google Ads Script Added** - To `src/pages/_app.tsx`
2. **✅ GitHub Actions Workflow** - FTP deployment to Hostinger
3. **✅ Configuration Files** - All setup guides and examples
4. **✅ Validation** - Checks for Google Ads script before deployment

---

**🚀 You're ready to deploy! Just update the Google Ads ID and push to GitHub.**
