# Academic website: Muhammad Toaha Raza Khan

A static personal academic website for GitHub Pages. It has no build step, needs no Jekyll, and costs nothing to host.

**Live address after setup:** `https://toaha.github.io/`

## Contents

```
index.html          About: bio, research interests, news, prospective students
research.html       Research themes, funded projects, professional service
publications.html   Journals and conferences (searchable and filterable), book, patents
teaching.html       Courses, capstone and undergraduate research supervision
cv.html             Education, appointments, awards, certifications, CV download
404.html            Page-not-found page
assets/css/style.css   All styling (light and dark themes)
assets/js/main.js      Menu, dark-mode toggle, publication search and filter
assets/img/            profile.jpg, favicon.svg
assets/files/          Muhammad_Toaha_Khan_CV.pdf
.nojekyll           Tells GitHub Pages to serve the files as they are
```

## Deploying (about 5 minutes)

1. Sign in to GitHub as **toaha**.
2. Create a new **public** repository named exactly **`toaha.github.io`**. Don't add a README.
3. On the new repository page, click **uploading an existing file**. Drag in **everything inside this folder**, including the `assets` folder and `.nojekyll`, then click **Commit changes**.
   - Hidden files: if `.nojekyll` doesn't show up on your computer, the site still works without it.
4. Go to **Settings → Pages**. Under *Build and deployment*, set **Source: Deploy from a branch**, **Branch: `main` / `(root)`**, then click **Save**.
5. Wait 1–2 minutes, then open `https://toaha.github.io/`.

If you use git from the command line:

```bash
cd toaha.github.io
git init -b main
git add .
git commit -m "Initial academic website"
git remote add origin https://github.com/toaha/toaha.github.io.git
git push -u origin main
```

## Editing

Every page is plain HTML, so you can edit it in any text editor or directly on GitHub (open the file and click the pencil icon).

- **Add a publication:** in `publications.html`, copy an existing `<li class="pub" ...>` block into the right year group and change the text. Set `data-type="journal"` or `data-type="conference"` so the filter works. Put your own name inside `<strong>…</strong>`.
- **Add news:** in `index.html`, copy a `<li>` in the *Recent News* list.
- **Add Google Scholar, ORCID or LinkedIn:** the profile sidebar in `index.html` has a commented-out block with ready-made lines. Remove the comment markers (`<!--` and `-->`) and put in your IDs.
- **Replace the CV:** overwrite `assets/files/Muhammad_Toaha_Khan_CV.pdf`, keeping the same file name.
- **Change the accent colour:** edit `--accent` at the top of `assets/css/style.css`.

## Custom domain (optional)

To serve the site from your own domain (for example `toahakhan.com`), add the domain under **Settings → Pages → Custom domain** and follow GitHub's DNS instructions. GitHub then adds a `CNAME` file to the repository for you.
