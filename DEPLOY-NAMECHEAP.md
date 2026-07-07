# Deploy Armor Ark to cPanel (austinzierke.com)

Your live cPanel: https://server91.web-hosting.com:2083
FTP server: ftp.austinzierke.com (port 21 for FTP/explicit FTPS)

This project is configured for static export + automatic deployment from GitHub.

## Prerequisites (one-time)

1. Log into cPanel using your link.
2. Go to **Files > FTP Accounts** and create a dedicated deploy user:
   - Username prefix: `deploy` (or similar)
   - Directory: `public_html`
3. Note the **full username** and the password.
4. (Optional but recommended) Go to **Files > Git™ Version Control** and clone this repo for the native option.

## GitHub Secrets (required for automatic deploy)

In GitHub repo → Settings → Secrets and variables → Actions, add:

| Secret Name     | Value                              | Notes |
|-----------------|------------------------------------|-------|
| `FTP_USERNAME`  | `falconfox64@armorark.com` | Full FTP username (provided) |
| `FTP_PASSWORD`  | `ZXCVmnbv11!!11`           | (provided) |

**Note:** FTP server is now `ftp.austinzierke.com` on port 21 with `protocol: ftps` (explicit FTPS).

**Warning:** Remove the real password from this file before committing to GitHub. Use it only to set the GitHub Secret.

No need for FTP_SERVER secret — it's now set to `ftp.austinzierke.com` + port 21 + protocol ftps.

## Automatic Deployment (GitHub Actions)

Every push to `main` / `master` will:
1. Build the Next.js site (`npm run build`)
2. Deploy the `out/` folder to `public_html/` via explicit FTPS (port 21)

The workflow is at `.github/workflows/deploy.yml`.

To run manually: Go to the Actions tab in GitHub and click "Run workflow".

## Alternative: cPanel Git Version Control (native)

1. In cPanel → **Files → Git™ Version Control** → **Create**
2. Enable "Clone a Repository"
3. Clone URL: `https://github.com/FALCONFOX64/armor-ark.git`
4. Repository Path: `repositories/armor-ark` (recommended)
5. Create it.
6. Make sure `.cpanel.yml` (already in the repo) has your correct username.
7. After pushing changes to GitHub:
   - In cPanel Git: **Manage** → **Pull or Deploy** tab
   - **Update from Remote**
   - **Deploy HEAD Commit**

The `.cpanel.yml` file tells cPanel to copy `out/*` into your public_html.

## Update the .cpanel.yml Username

`.cpanel.yml` has been updated with your cPanel username (`austvrud`). If you change the document root later, edit the DEPLOYPATH line.

You can discover it easily:
- In cPanel File Manager, the path at the top shows `/home/xxxxx/public_html`

## After First Deploy

- Test the live site.
- If you see a 404 or routing issues, the `trailingSlash: true` + static export should help.
- For images or assets, they are handled with `unoptimized: true`.

## SSH / SFTP Direct Details (for reference)

- Host: `server91.web-hosting.com`
- SFTP Port: **21098**
- Protocol: SFTP

## Need to Change Document Root?

If deploying to a subdomain or addon domain, update:
- In the GitHub Action: `server-dir: public_html/sub.example.com/` (or whatever the doc root is)
- In `.cpanel.yml`: the `DEPLOYPATH`

Check the exact path in cPanel → **Domains**.

## Troubleshooting

- "out/ directory not found": Run `npm run build` locally first to verify.
- Connection refused: Confirm port 21098 and that the FTP user has access to the directory.
- Files not updating: The action does smart sync. Try a manual workflow run or temporarily enable `dangerous-clean-slate`.
- Check GitHub Actions logs for detailed errors.

---

Ready to push? Just commit these changes and push to GitHub:

```bash
git add .
git commit -m "Add Namecheap cPanel deployment (GitHub Actions + static export)"
git push
```

Then monitor the Actions tab.
