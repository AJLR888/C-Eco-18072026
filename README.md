# C-Eco Website

## Project structure

- `index.html` — main website page with all editable text and page sections.
- `css/styles.css` — styling for page layout, colours, typography, responsive design, and components.
- `js/main.js` — essential interactions for mobile navigation, form confirmation, and automatic year update.
- `assets/images/` — local content images and placeholders.
- `assets/icons/` — icon files used in cards and benefits.
- `assets/favicon/` — browser favicon files and icon variants.
- `assets/logo/` — logo files.

## How to open the website locally

1. Open the `C-Eco-Website` folder.
2. Double-click `index.html` or open it in a browser.
3. No build step or server is required.

## How to change website text

1. Open `index.html` in a text editor.
2. Find the section you want to update using the HTML comments or section IDs.
3. Edit headings, paragraphs, button labels, and section content directly.
4. Save the file and refresh your browser.

## How to replace an image

1. Add the new image file to `assets/images/`.
2. Use a clear descriptive filename.
3. Update the `src` attribute in `index.html` for the image element.
4. Keep `alt` text descriptive of the image content.
5. Save and refresh the browser.

## How to change colours

1. Open `css/styles.css`.
2. Edit the CSS custom properties in the `:root` block, such as:
   - `--color-primary`
   - `--color-secondary`
   - `--color-accent`
   - `--color-background`
   - `--color-surface`
3. Save the file and refresh the browser.

## How to change fonts

1. Open `css/styles.css`.
2. Update `--font-heading` and `--font-body` in the `:root` block.
3. If you add a custom web font, also include the font import or font-face rules at the top of `css/styles.css`.
4. Save and refresh.

## How to update navigation links

1. Open `index.html`.
2. Find the navigation links inside the `<nav id="site-navigation">` element.
3. Change the `href` values to match section IDs or external pages.
4. Ensure every `href` points to an existing `id` or valid URL.

## How to configure the contact form

- The form in `index.html` is a simple interest form.
- It includes required fields for `Name`, `Work email`, and `Consent to be contacted`.
- The form currently shows a confirmation message in the browser; it does not submit to a server.
- To connect the form to a service, replace or extend the JavaScript in `js/main.js` with a submission handler for your chosen back-end or form service.

## How to publish with GitHub Pages

1. Commit the project files to a GitHub repository.
2. Go to the repository settings.
3. In the Pages section, select the `main` branch and `/ (root)` folder.
4. Save the settings.
5. Your site will be published at the GitHub Pages URL provided.

## How to connect a custom domain

1. Add your domain in the GitHub Pages settings for the repository.
2. Create a DNS `CNAME` record pointing your domain to `username.github.io`.
3. Add a `CNAME` file to the repository root with the custom domain name.
4. Wait for DNS propagation.

## Manual editing notes

- Use the HTML comments in `index.html` to find the main sections quickly.
- Keep content edits inside the page markup and avoid adding inline styles.
- For layout changes, edit `css/styles.css` only.
- For interaction changes, edit `js/main.js` only.
