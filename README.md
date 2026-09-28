# Academic website: Haurn Ur Rashid

A static personal academic website for GitHub Pages. It has no build step, needs no Jekyll, and costs nothing to host.

**Live address after setup:** `https://harun-cu.github.io/`

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
assets/files/          Harunur_Rashid_CV.pdf
.nojekyll           Tells GitHub Pages to serve the files as they are
```

If you use git from the command line:

```bash
cd harun-cu.github.io
git init -b main
git add .
git commit -m "Initial academic website"
git remote add origin https://github.com/harun-cu/harun-cu.github.io.git
git push -u origin main
```
