# Pre-rendering Setup Instructions

## Problem
Single Page Applications (SPAs) serve an empty HTML shell for all routes. When Google crawls `/about`, it gets an empty `<div id="root"></div>` with wrong meta tags, causing a "soft 404" and preventing indexing.

## Solution
Use `react-snap` to generate static HTML files for each route after build, ensuring crawlers get actual content.

## Setup Steps

### 1. Add postbuild script to package.json

Add these lines to your `package.json`:

```json
{
  "scripts": {
    "postbuild": "node scripts/prerender.js"
  },
  "reactSnap": {
    "inlineCss": true,
    "puppeteerArgs": [
      "--no-sandbox",
      "--disable-setuid-sandbox"
    ],
    "skipThirdPartyRequests": true,
    "include": [
      "/",
      "/about",
      "/services",
      "/blog",
      "/contact",
      "/privacy",
      "/terms",
      "/destination-management",
      "/smart-staffing",
      "/blog/business-structure-kenya",
      "/blog/management-problems",
      "/blog/adidas-turnaround",
      "/blog/global-exhibitions"
    ]
  }
}
```

### 2. Deploy

After adding the above configuration, deploy to Netlify:

```bash
git add .
git commit -m "Add pre-rendering for SEO"
git push
```

Netlify will now:
1. Build your React app
2. Run the postbuild script
3. Generate static HTML for each route
4. Deploy the pre-rendered files

### 3. Verify

After deployment, test each URL:

```bash
curl -I https://creekoxley.com/about
# Should return: HTTP/2 200

curl https://creekoxley.com/about
# Should contain actual HTML content with proper meta tags
```

### 4. Request Indexing

Once verified:
1. Open Google Search Console
2. Use URL Inspection tool on `/about`
3. Click "Request Indexing"
4. Verify that "Live Test" shows 200 status with content

## Alternative: Netlify's Pre-rendering Plugin

If you have a paid Netlify plan, you can use their built-in pre-rendering:

```toml
# netlify.toml
[[plugins]]
  package = "@netlify/plugin-prerender"
```

This automatically pre-renders all SPA routes without code changes.

## Troubleshooting

### Build fails during postbuild
- Check that `react-snap` is installed
- Check Netlify build logs for errors
- Temporarily disable by removing postbuild script

### Pages still show 404 in Search Console
- Wait 24-48 hours after deployment
- Clear Google cache using "Remove outdated content" tool
- Check that static HTML files exist in deployment

### Pre-rendering takes too long
- Reduce the number of routes in `include` array
- Add timeout configuration in reactSnap settings
