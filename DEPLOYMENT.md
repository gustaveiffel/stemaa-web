# Deployment Instructions

## Current Deployment

- **URL**: https://7ee63af8.stemaa-web.pages.dev
- **Production URL**: https://stemaa-web.pages.dev

## D1 Database Binding

⚠️ **IMPORTANT**: You must bind the D1 database to your Cloudflare Pages project for the contact form to work.

### Steps to bind D1 database:

1. Go to [Cloudflare Pages Dashboard](https://dash.cloudflare.com/)
2. Select your project: **stemaa-web**
3. Go to **Settings** > **Functions**
4. Scroll to **D1 database bindings**
5. Click **Add binding**
6. Configure:
   - **Variable name**: `DB`
   - **D1 database**: Select `stemaa-contacts`
7. Click **Save**
8. Redeploy your project (or wait for next deployment)

## Database Information

- **Database Name**: stemaa-contacts
- **Database ID**: 363a10db-ca1e-45f5-b559-396b8f235a2a
- **Binding Name**: DB
- **Region**: WEUR (West Europe)

## Viewing Contact Submissions

To view contact form submissions:

```bash
# View latest 10 submissions
wrangler d1 execute stemaa-contacts --remote --command="SELECT * FROM contacts ORDER BY created_at DESC LIMIT 10"

# View all submissions
wrangler d1 execute stemaa-contacts --remote --command="SELECT * FROM contacts ORDER BY created_at DESC"

# Count total submissions
wrangler d1 execute stemaa-contacts --remote --command="SELECT COUNT(*) as total FROM contacts"
```

## Testing the Contact Form

1. Go to your deployment URL
2. Click "Contact"
3. Fill out the form
4. Submit
5. Check the database to verify:
   ```bash
   wrangler d1 execute stemaa-contacts --remote --command="SELECT * FROM contacts ORDER BY created_at DESC LIMIT 1"
   ```

## Troubleshooting

If the contact form doesn't work:

1. Check that D1 binding is configured in Cloudflare Pages dashboard
2. Verify the binding name is exactly `DB` (case-sensitive)
3. Check browser console for errors
4. Verify database is accessible:
   ```bash
   wrangler d1 execute stemaa-contacts --remote --command="SELECT 1"
   ```

## Redeployment

To redeploy:

```bash
pnpm build && wrangler pages deploy out --project-name=stemaa-web
```

Or push to GitHub if connected to your repository.
