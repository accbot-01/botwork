# Vercel Deployment Guide

## Quick Deploy to Vercel

### Option 1: Vercel Dashboard (Recommended)

1. **Go to Vercel Dashboard**
   - Visit: https://vercel.com/new
   - Sign in with GitHub

2. **Import Git Repository**
   - Click "Import Project"
   - Select "Import Git Repository"
   - Choose repository: `accbot-01/botwork`
   - Click "Import"

3. **Configure Project**
   - Framework Preset: **Vite**
   - Root Directory: `./` (leave as default)
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

4. **Environment Variables**
   Add these environment variables in Vercel:
   ```
   VITE_SITE_URL=https://your-vercel-url.vercel.app
   VITE_CONTACT_EMAIL=info@appliedcloudcomputing.com
   VITE_LINKEDIN_URL=https://www.linkedin.com/company/10403765
   VITE_INSTAGRAM_URL=https://www.instagram.com/appliedcloudcomputing/
   VITE_FACEBOOK_URL=https://www.facebook.com/AppliedCloudComputing
   VITE_YOUTUBE_URL=https://www.youtube.com/@appliedcloudcomputing
   ```

5. **Deploy**
   - Click "Deploy"
   - Wait 2-3 minutes for build to complete
   - Visit the deployment URL

### Option 2: Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy from project directory
cd /path/to/code
vercel

# Follow prompts:
# - Set up and deploy? Yes
# - Which scope? (select your account)
# - Link to existing project? No
# - Project name? acc-cloud-portal
# - Directory? ./
# - Override settings? No

# Deploy to production
vercel --prod
```

## Post-Deployment Checklist

### 1. Verify Deployment
- [ ] Homepage loads correctly
- [ ] All navigation links work
- [ ] Images load properly
- [ ] Mobile menu functions
- [ ] Footer links are correct
- [ ] YouTube embeds work

### 2. Performance Check
Run Lighthouse audit:
- [ ] Performance: 90+
- [ ] Accessibility: 95+
- [ ] Best Practices: 95+
- [ ] SEO: 90+

### 3. Test Responsiveness
- [ ] Test on mobile (iOS/Android)
- [ ] Test on tablet
- [ ] Test on desktop (1920px+)
- [ ] Test on small screens (320px)

### 4. Browser Compatibility
- [ ] Chrome (latest)
- [ ] Safari (latest)
- [ ] Firefox (latest)
- [ ] Edge (latest)

## Automatic Deployments

Every push to `main` branch triggers automatic deployment:

```bash
# Make changes locally
git add .
git commit -m "Update homepage hero section"
git push origin main

# Vercel automatically deploys in ~2 minutes
```

## Custom Domain Setup

1. **Add Domain in Vercel**
   - Go to Project Settings → Domains
   - Enter your domain: `www.appliedcloudcomputing.com`
   - Click "Add"

2. **Configure DNS**
   Update DNS records at your registrar:
   ```
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

3. **SSL Certificate**
   - Automatic via Vercel (Let's Encrypt)
   - Provisioned within 24 hours

## Monitoring & Analytics

### Vercel Analytics
- Enable in Project Settings → Analytics
- View Core Web Vitals, page views, etc.

### Error Tracking
- Errors appear in Vercel Dashboard → Deployments → Logs
- Real-time logs available during deployment

## Troubleshooting

### Build Fails
1. Check build logs in Vercel dashboard
2. Verify `package.json` scripts are correct
3. Ensure all dependencies are listed
4. Test build locally: `npm run build`

### Environment Variables Not Working
1. Ensure variables start with `VITE_`
2. Redeploy after adding variables
3. Check variable names match code

### 404 on Page Refresh
- Already handled by `vercel.json` rewrites
- If issue persists, check `vercel.json` configuration

## Support

For deployment issues:
- Vercel Docs: https://vercel.com/docs
- Vercel Support: https://vercel.com/support

---

**Deployment Status**: Ready for production ✅
