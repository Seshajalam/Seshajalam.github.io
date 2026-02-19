# Steps to Commit and Push Portfolio to GitHub

## Important: Fix Authentication First
Your Git is currently authenticated as **Evolve-Robot-Lab-1**, not **Seshajalam**. Before pushing, you need to switch credentials.

### Option A: Switch credentials via GitHub CLI
```bash
gh auth login
```
Select **GitHub.com** → **HTTPS** → log in as **Seshajalam**.

### Option B: Use a Personal Access Token
1. Go to https://github.com/settings/tokens on the **Seshajalam** account
2. Generate a new token with `repo` scope
3. Use it as the password when prompted during `git push`

---

## Steps to Commit & Push

Open a terminal in the project folder and run:

```bash
# 1. Initialize a new git repo
git init

# 2. Add all files
git add .

# 3. Commit
git commit -m "Initial commit: Next.js portfolio site"

# 4. Rename branch to main (if needed)
git branch -M main

# 5. Add the remote
git remote add origin https://github.com/Seshajalam/Seshajalam.github.io.git

# 6. Force push (to overwrite the existing README-only commit)
git push -f -u origin main
```

> **Note:** On step 6, if you get a permission error, it means you're still authenticated as Evolve-Robot-Lab-1. Complete the authentication fix above first.

## Verification
- Go to https://github.com/Seshajalam/Seshajalam.github.io
- You should see all your project files instead of just the README
