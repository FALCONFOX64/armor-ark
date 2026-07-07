# Setup Complete for austvrud (austinzierke.com)

Your cPanel username: **austvrud**
FTP server: **ftp.austinzierke.com** (port 21, explicit FTPS)
Repo: https://github.com/FALCONFOX64/armor-ark.git

All files are ready locally:
- Static export configured
- GitHub Actions workflow for automatic deploy via FTPS (port 21)
- .cpanel.yml with correct path: /home/austvrud/public_html/

---

## Easiest: Automatic Deploy from GitHub (Recommended)

This gives you true "push to GitHub → site updates live".

### Step 1: Create FTP Account in cPanel (one time)

You provided:
- FTP server: **ftp.austinzierke.com**
- Port: **21** (FTP / explicit FTPS)
- Username: **falconfox64@armorark.com**
- Password: **ZXCVmnbv11!!11**

1. Log into: https://server91.web-hosting.com:2083 (or ftp.austinzierke.com:2083)
2. Go to **Files → FTP Accounts**
3. Click **Add FTP Account** (or verify the existing one)
4. The account should use domain related to austinzierke.com
5. Confirm the full username matches `falconfox64@armorark.com` and the directory is `public_html`

### Step 2: Add GitHub Secrets (one time)

Go to: https://github.com/FALCONFOX64/armor-ark/settings/secrets/actions

Add (or verify) these **two** secrets:

1. Name: `FTP_USERNAME`  
   Value: `falconfox64@armorark.com`

2. Name: `FTP_PASSWORD`  
   Value: (the password you provided: ZXCVmnbv11!!11)

**Security note:** These values are for your GitHub repository secrets only. 
Do NOT commit the actual password in any file that gets pushed to GitHub.
After setting the secrets, consider editing this file to remove the plain password.

### Step 3: Push (this triggers the deploy)

```bash
cd ~/Developer/armor-ark
git add .
git commit -m "Deploy to cPanel"
git push
```

Go to the **Actions** tab in GitHub to watch it run.

After it succeeds, your site will be live in public_html.

---

## Alternative: cPanel Git Version Control (using Terminal workaround)

Because the "Clone a Repository" toggle is not showing:

### Step 1: Enable Terminal in cPanel

1. In cPanel: **Exclusive for Namecheap Customers → Manage Shell**
2. Turn **ON** "Enable SSH access"
3. Go to **Advanced → Terminal**

### Step 2: Clone the repo via Terminal (paste these commands)

```bash
cd ~
mkdir -p repositories
git clone https://github.com/FALCONFOX64/armor-ark.git repositories/armor-ark
```

### Step 3: Add the repo to cPanel Git management

1. Go back to **Files → Git™ Version Control**
2. Click **Create**
3. **Turn OFF** "Clone a Repository" if the toggle appears now
4. Fill:
   - Repository Path: `repositories/armor-ark`
   - Repository Name: `armor-ark`
5. Click **Create**

### Step 4: Deploy

1. Click **Manage** on the armor-ark repo
2. Go to **Pull or Deploy** tab
3. Click **Update from Remote**
4. Click **Deploy HEAD Commit**

Your `.cpanel.yml` will copy the built files to `/home/austvrud/public_html/`

---

## Next Time You Want to Update the Site

**Easiest way (after initial setup):**
Just edit files → `git commit` → `git push`

The GitHub Actions will handle the rest automatically.

---

## Files Already Prepared

- `next.config.ts` → static export enabled
- `.github/workflows/deploy.yml` → automatic SFTP deploy
- `.cpanel.yml` → correct for austvrud
- `out/` folder (built version)

Everything is ready on the code side.

---

## If You Want Me to Adjust Anything

Tell me:
- The exact full FTP username after you create it
- Whether you prefer the Actions method or cPanel Git method
- If you want the deploy to a subdomain instead of main public_html

I can update the workflow or .cpanel.yml instantly.