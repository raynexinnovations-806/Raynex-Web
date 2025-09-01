# 🚀 CI/CD Deployment Setup Guide: GitHub → Hostinger

## 📋 Prerequisites
- GitHub repository with your Next.js project
- Hostinger hosting account
- Access to Hostinger control panel

## 🔧 Step 1: Hostinger Configuration

### 1.1 Get FTP Credentials
1. Log into Hostinger control panel
2. Go to **Files** → **FTP Accounts**
3. Note down:
   - FTP Host: `yourdomain.com` or `yourdomain.com:21`
   - Username: Your FTP username
   - Password: Your FTP password

**Note**: Hostinger doesn't have API options, so we'll use FTP deployment.

## 🔐 Step 2: GitHub Secrets Setup

In your GitHub repository:
1. Go to **Settings** → **Secrets and variables** → **Actions**
2. Add these secrets:

```
HOSTINGER_FTP_HOST = yourdomain.com
HOSTINGER_USERNAME = your_ftp_username
HOSTINGER_FTP_PASSWORD = your_ftp_password
HOSTINGER_DOMAIN = https://yourdomain.com
```

## ⚠️ CRITICAL: Google Ads Script Setup

**BEFORE DEPLOYING**, ensure your Google Ads script is properly added:

### Option A: Add to Next.js Layout (Already Done!)
The Google Ads script has been added to your `src/pages/_app.tsx` file. **You need to replace `GA_MEASUREMENT_ID` with your actual Google Analytics ID.**

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

### Option B: Add to HTML Head (Alternative)
```html
<!-- Add this to your HTML head section -->
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR_GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'YOUR_GA_ID');
</script>
```

## 🚀 Step 3: Deploy Workflow

### 3.1 Choose Workflow
- **Use**: `.github/workflows/deploy.yml` (FTP-based deployment)

### 3.2 Push to Deploy
```bash
git add .
git commit -m "Setup CI/CD deployment"
git push origin main
```

## 📊 Step 4: Monitor Deployment

1. Go to **Actions** tab in GitHub
2. Watch the deployment progress
3. Check for any errors or warnings
4. Verify website functionality after deployment

## 🔄 Rollback Strategy

### If deployment fails:
1. **Immediate**: Check GitHub Actions logs
2. **Quick rollback**: Manually upload previous working version via Hostinger File Manager
3. **Git rollback**: 
   ```bash
   git revert HEAD
   git push origin main
   ```

## 🛡️ Security Best Practices

1. **Never commit secrets** to your repository
2. **Use environment-specific** configurations
3. **Regularly rotate** FTP passwords
4. **Monitor access logs** in Hostinger
5. **Enable 2FA** on both GitHub and Hostinger

## 📱 Testing Checklist

After each deployment, verify:
- [ ] Website loads correctly
- [ ] Google Ads script is present
- [ ] All pages work as expected
- [ ] Forms and interactions function
- [ ] Mobile responsiveness
- [ ] Page load speed

## 🆘 Troubleshooting

### Common Issues:
1. **FTP connection failed**: Check credentials and firewall settings
2. **Build errors**: Verify Node.js version and dependencies
3. **Missing files**: Check `.gitignore` and build output
4. **Google Ads not working**: Verify script placement and ID

### Support:
- GitHub Actions logs
- Hostinger support
- Check deployment status in Actions tab

## 🎯 Next Steps

1. Test deployment with a small change
2. Set up monitoring and alerts
3. Configure staging environment (optional)
4. Set up automated testing (optional)
5. Monitor performance metrics

---

**Remember**: Always test your Google Ads integration before deploying to production!
