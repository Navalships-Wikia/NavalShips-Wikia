# NavalShips Wikia

NavalShips Wikia is a collaborative reference project documenting naval ships from the past and present. It brings historical summaries, technical specifications, fleet context, and ship-class information together in one accessible static website.

The project currently focuses mainly on ships and naval technology from the World War II era, while expanding toward broader coverage of naval history, fleets, nations, and ship classes.

## What you will find

- Nation and fleet directories
- Ship profiles with history, dimensions, propulsion, armament, and technical specifications
- Class pages grouped by navy, including IJN and ROC organization
- Responsive layouts for desktop and mobile viewing
- Shared templates, stylesheets, and JavaScript-driven ship and class listings

## Contributing

Contributions, corrections, suggestions, and research are welcome. Familiarity with HTML, CSS, JavaScript, GitHub, and naval history is helpful when adding or reviewing ship profiles. Please keep historical claims well-sourced and follow the existing page structure and styling conventions.

For contribution requests, corrections, questions, or issue reports, contact:

- Email: [millpen55@gmail.com](mailto:millpen55@gmail.com)
- Instagram: [@transitlinx.mi](https://www.instagram.com/transitlinx.mi)

You can also leave suggestions in the repository Discussions.

## Project layout

```text
index.html              Site home page
ship pages/             Individual ship profiles and nation-specific class pages
website pages/          Nation directories, class browsers, and supporting pages
Templates/              Shared navigation and footer fragments
img/                    Organized visual assets: branding, flags, ship images, and references
  branding/             Site branding assets
  flags/                National flags
  ships/                Ship-specific imagery grouped by navy and ship
  reference/            Reusable historical and equipment imagery
```

The full-page nation template is available at [Templates/nation-page.html](Templates/nation-page.html). Replace its `{{...}}` placeholders with the nation’s content, links, images, ship groups, and optional scripts.

## Styling conventions

### Article images

Ship pages use a standardized image component for inline figures. It is already defined in ship.css, please use it across all ship pages when you are writing your article:

```html
<figure class="article-image float-left size-lg">
  <img src="..." alt="...">
  <figcaption>Caption text</figcaption>
</figure>
```

**Modifiers**
- `float-left` / `float-right` — which side of the text the image sits on
- `size-sm` / `size-md` / `size-lg` / `size-wide` — preset widths:
    - `size-sm` — min(32%, 260px)
    - `size-md` — min(36%, 300px)
    - `size-lg` — min(42%, 360px)
    - `size-wide` — min(42%, 300px)
  
**Attributes**
- `src=""` the path to the image file
- `alt=""` the alternative text for the image,

**Crediting**

If you need to credit an image, please add this line below the figcaption line:

```html
<small class="image-credit">credit text <a href="..." target="_blank" rel="noopener">link label</a>.</small>
```
The credit text should be short and concise

**Attributes**
- `href=""` the link to the source of the image
- `target="_blank"` This opens the link in a new tab, please do not modify this attribute
- `rel="noopener"` This is a security feature, please do not modify this attribute

## Running locally

This is a static website. It is recommened while editing that you host the site locally for ease of editing, you can either do the following (B is recommended):

A) Open `index.html` or any `.html` file directly in a browser

**or** 

B) Serve the repository with a local static HTTP server if you require links and assets to behave like they do when deployed, enter this into your terminal:

```bash
python3 -m http.server
```

Then visit `http://localhost:8000`.

## Validate links

Run the local link checker after adding or renaming a ship profile:

```bash
node scripts/validate-links.js
```
