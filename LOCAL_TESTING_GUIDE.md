# 🧪 Local Testing Guide: Test Before Deploy

## 🎯 **Why Local Testing is Critical**

Before deploying to production, always test your changes locally to ensure:
- ✅ No build errors
- ✅ Google Tag Manager script is intact
- ✅ Website looks and works correctly
- ✅ No broken functionality
- ✅ Smooth deployment to Hostinger

## 🚀 **Quick Start: 3-Step Local Testing**

### **Step 1: Make Your Changes**
Edit your code, add features, fix bugs, etc.

### **Step 2: Run Local Test**
```bash
# Option A: Run the automated script
.\test-local.ps1

# Option B: Run manually
npm run test:local
```

### **Step 3: Preview & Deploy**
If tests pass, deploy to GitHub:
```bash
git add .
git commit -m "Your changes description"
git push origin main
```

## 🔧 **Available Testing Commands**

### **🧪 Full Local Testing**
```bash
npm run test:local
```
**What it does:**
- Lints your code for errors
- Builds the production version
- Starts preview server on http://localhost:3001
- Validates Google Tag Manager script

### **🔍 Quick Validation**
```bash
npm run validate
```
**What it does:**
- Lints your code
- Builds the project
- No preview server (faster)

### **🌐 Development Server**
```bash
npm run dev
```
**What it does:**
- Starts development server on http://localhost:3000
- Hot reload for development
- **Note:** This doesn't validate production build

### **📦 Build & Preview**
```bash
npm run preview
```
**What it does:**
- Builds production version
- Starts preview server on http://localhost:3001
- Shows exactly how your site will look in production

## 📋 **Complete Local Testing Workflow**

### **1. Development Phase**
```bash
# Start development server
npm run dev

# Make changes to your code
# Test functionality in browser at http://localhost:3000
```

### **2. Pre-Deployment Testing**
```bash
# Run comprehensive local testing
npm run test:local

# This will:
# ✅ Lint your code
# ✅ Build production version
# ✅ Validate GTM script
# ✅ Start preview server
```

### **3. Preview & Validate**
- Open http://localhost:3001 in your browser
- Test all functionality
- Check Google Tag Manager is working
- Verify design and layout
- Test on different screen sizes

### **4. Deploy to Production**
```bash
# If everything looks good, deploy
git add .
git commit -m "Description of your changes"
git push origin main

# GitHub Actions will automatically deploy to Hostinger
```

## 🎮 **Using the Development Workflow Script**

For the easiest experience, use the interactive script:

```bash
# Run the development workflow
.\dev-workflow.ps1

# Choose from the menu:
# 1. 🧪 Test Local Changes (Before Commit)
# 2. 🔍 Quick Validation Check
# 3. 🌐 Start Development Server
# 4. 📦 Build & Preview Production Build
# 5. ✅ Deploy to GitHub (After Testing)
# 6. 📊 Check Deployment Status
# 7. 🆘 Help & Troubleshooting
```

## ⚠️ **Critical Testing Points**

### **🔍 Google Tag Manager Validation**
The testing automatically checks for:
- GTM script presence in your code
- Correct GTM ID (`GTM-KFQ69JG5`)
- Script placement in both `_app.tsx` and `_document.tsx`

### **🔨 Build Validation**
Ensures:
- No TypeScript errors
- No build failures
- Static export configuration is correct
- All dependencies are resolved

### **🌐 Preview Validation**
Verify:
- Website loads correctly
- All pages work
- Forms function properly
- Mobile responsiveness
- Performance

## 🚨 **Common Issues & Solutions**

### **Build Fails**
```bash
# Check for TypeScript errors
npm run lint

# Check for missing dependencies
npm install

# Clear build cache
rm -rf .next out
npm run build
```

### **GTM Script Missing**
```bash
# Check if GTM script exists
npm run check:gtm

# If missing, ensure it's in:
# - src/pages/_app.tsx (script tag)
# - src/pages/_document.tsx (noscript tag)
```

### **Preview Server Issues**
```bash
# Check if port 3001 is available
netstat -an | findstr :3001

# Use different port if needed
npm run preview -- -p 3002
```

## 📊 **Testing Checklist**

Before deploying, ensure:

- [ ] **Code Quality**: `npm run lint` passes
- [ ] **Build Success**: `npm run build` completes
- [ ] **GTM Script**: Present and correct ID
- [ ] **Functionality**: All features work in preview
- [ ] **Design**: Layout looks correct
- [ ] **Mobile**: Responsive on different screen sizes
- [ ] **Performance**: Page loads reasonably fast

## 🎯 **Best Practices**

1. **Always test locally** before pushing to GitHub
2. **Use the automated scripts** for consistent testing
3. **Preview production build** to catch build-specific issues
4. **Validate GTM script** to maintain ad tracking
5. **Test on multiple devices** if possible
6. **Keep deployment commits small** and focused

## 🆘 **Need Help?**

- Run `.\dev-workflow.ps1` for interactive guidance
- Check `DEPLOYMENT_SETUP.md` for deployment details
- Monitor GitHub Actions logs for deployment issues
- Use `npm run check:gtm` to verify GTM script

---

**🚀 Remember: Local testing prevents deployment disasters and keeps your website running smoothly!**
