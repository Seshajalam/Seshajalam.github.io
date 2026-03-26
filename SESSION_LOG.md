# Portfolio Deployment & Fixes Session — Feb 19, 2026

## 1. Deploy Next.js Portfolio to GitHub Pages

**Problem:** The live site at `https://seshajalam.github.io` was showing an old plain HTML portfolio instead of the updated Next.js dashboard.

**Root Causes:**
- Legacy `index.html` at project root was being served by GitHub Pages
- `out/` directory (Next.js static export) was gitignored and never pushed
- No CI/CD pipeline to build and deploy the Next.js app
- GitHub Pages was configured to "Deploy from a branch" instead of GitHub Actions

**Changes Made:**

### Created GitHub Actions Workflow
- **File:** `.github/workflows/deploy.yml`
- Builds Next.js app and deploys static export to GitHub Pages on every push to `main`
- Uses `actions/checkout@v4`, `actions/setup-node@v4`, `actions/upload-pages-artifact@v3`, `actions/deploy-pages@v4`

### Removed Legacy Files from Git
- `index.html`, `style.css`, `script.js` — old HTML portfolio
- `profile.jpg` — duplicate of `public/images/profile.jpg`
- `sesha .pdf`, `sesha_c++.pdf`, `sesha_ml.pdf`, `seshajalam_general.pdf` — duplicates of `public/pdfs/*`
- `Seshajalam_offerletter.pdf` — personal document removed from public repo
- `project_descriptions/` — duplicate of `public/project_descriptions/`
- `GIT_PUSH_STEPS.md` — no longer needed

### Updated `.gitignore`
- Added `style.css`, `script.js`, `Seshajalam_offerletter.pdf` to prevent re-adding

### Manual Step
- Changed GitHub Pages source from "Deploy from a branch" to "GitHub Actions" in repo settings

---

## 2. Fix Contact Form ("Get in Touch" Error)

**Problem:** Submitting the contact form showed "Something went wrong. Please try again or email me directly."

**Root Cause:** The Formspree form ID `xpwzgkvl` returns 404 — the form doesn't exist.

**Fix Attempts:**
1. First added `Accept: application/json` header (didn't help since the form ID itself is invalid)
2. Switched to `mailto:` approach (worked but opened email client instead of sending directly)
3. **Final fix:** Switched to **FormSubmit.co** (`https://formsubmit.co/ajax/seshajalamg@gmail.com`) — sends messages directly without opening email client

**Note:** First submission triggers a verification email to `seshajalamg@gmail.com`. After confirming, all future messages deliver directly.

---

## 3. Fix Project Videos Not Showing

**Problem:** Video players in the Projects section showed blank/empty since `.mp4` files (~479MB) are gitignored.

**Fix Attempts:**
1. First added graceful placeholder (play icon + "Video Demo / Coming soon") when videos are unavailable
2. **Final fix:** User uploaded videos to YouTube — replaced local `<video>` players with YouTube `<iframe>` embeds

**YouTube Links:**
- Hand Gesture Recognition: `https://www.youtube.com/embed/EjSEVPDqWfI`
- Pneumonia Detection: `https://www.youtube.com/embed/Wi4hqOZdHUU`

**Files Changed:**
- `src/lib/data.ts` — updated video URLs to YouTube embed links
- `src/components/Projects.tsx` — replaced `<video>` element with `<iframe>`

---

## 4. Update Profile Photo

**Change:** Replaced `public/images/profile.png` with new AI-themed illustration
- Also updated OG/Twitter meta image URLs in `src/app/layout.tsx` from `.jpg` to `.png`

---

## 5. Update Stats & Role Title

**Changes:**
- Years of Experience: `3` → `1` (in `src/lib/data.ts`)
- Hero typing animation: removed "AI Research Intern" and "ML Engineer", replaced with "AI Engineer" (in `src/components/Hero.tsx`)
- Typing animation now cycles: "AI Engineer" → "Deep Learning Enthusiast" → "Computer Vision Developer"

---

## Commits (in order)

| Commit | Description |
|--------|-------------|
| `85798be` | Add GitHub Actions deployment and remove legacy files |
| `21976a4` | Fix contact form and handle missing project videos |
| `7e8c0a9` | Replace local videos with YouTube embeds |
| `668e9c1` | Update profile photo and fix OG image meta tags |
| `7c70560` | Update years of experience to 1 and role title to AI Engineer |
| `7a1e21a` | Fix contact form: replace broken Formspree with mailto |
| `a60e428` | Switch contact form to FormSubmit.co for direct sending |

---

## Key Files Modified

| File | Changes |
|------|---------|
| `.github/workflows/deploy.yml` | Created — GitHub Actions CI/CD |
| `.gitignore` | Added legacy file entries |
| `src/components/Contact.tsx` | Switched to FormSubmit.co for direct message sending |
| `src/components/Projects.tsx` | YouTube iframe embeds instead of local video players |
| `src/components/Hero.tsx` | Updated typing animation roles |
| `src/lib/data.ts` | YouTube video URLs, years of experience |
| `src/app/layout.tsx` | Fixed OG/Twitter meta image URLs |
| `public/images/profile.png` | New AI-themed profile photo |

## Pending / Known Issues

- **FormSubmit.co verification:** First form submission triggers a verification email to `seshajalamg@gmail.com` — must click confirm link for future messages to deliver
- **GitHub Pages source:** Must be set to "GitHub Actions" in repo settings (manual step)
