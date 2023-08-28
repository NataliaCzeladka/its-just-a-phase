# Testing

Return back to the [README.md](README.md) file.

## Table of Contents

- [Testing](#testing)
  - [Table of Contents](#table-of-contents)
  - [Code Validation](#code-validation)
    - [HTML Validation](#html-validation)
    - [CSS Validation](#css-validation)
  - [Browser Compatibility](#browser-compatibility)
  - [Responsiveness](#responsiveness)
  - [Lighthouse Audit](#lighthouse-audit)
  - [User Stories Testing](#user-stories-testing)
    - [Client Goals](#client-goals)
    - [First Time User Goals](#first-time-user-goals)
    - [Returning User Goals](#returning-user-goals)
    - [Frequent User Goals](#frequent-user-goals)
  - [Fixed Bugs](#fixed-bugs)
  - [Unfixed Bugs](#unfixed-bugs)

## Code Validation

[The W3C Markup Validation Service](https://validator.w3.org/) and [The W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/) were used to validate every page of the project to ensure there were no syntax errors. The results clearly showed that the website stays in compliance with the standards and recommendations set by the World Wide Web Consortium.

[JSLint](https://www.jslint.com/), a static code analysis tool, was used to check if JavaScript source code complies with coding rules.

### HTML Validation

I have used the recommended [HTML W3C Validator](https://validator.w3.org) to validate all of my HTML files. No errors or warnings were found.

| Page | W3C URL | Screenshot | Notes |
| --- | --- | --- | --- |
| Current Moon Phase | [W3C](https://validator.w3.org/nu/?doc=https%3A%2F%2Fnataliaczeladka.github.io%2Fits-just-a-phase%2Findex.html) | ![index.html validation](docs/index.html_validation.webp) | Pass: No Errors |
| Moon Cycle Explained | [W3C](https://validator.w3.org/nu/?doc=https%3A%2F%2Fnataliaczeladka.github.io%2Fits-just-a-phase%2Fcomment.html) | ![comment.html validation](docs/comment.html_validation.webp) | Pass: No Errors |
| FAQ | [W3C](https://validator.w3.org/nu/?doc=https%3A%2F%2Fnataliaczeladka.github.io%2Fits-just-a-phase%2Ffaq.html) | ![faq.html validation](docs/faq.html_validation.webp) | Pass: No Errors |
| Gallery | [W3C](https://validator.w3.org/nu/?doc=https%3A%2F%2Fnataliaczeladka.github.io%2Fits-just-a-phase%2Fgallery.html) | ![gallery.html validation](docs/gallery.html_validation.webp) | Pass: No Errors |

### CSS Validation

I have used the recommended [CSS Jigsaw Validator](https://jigsaw.w3.org/css-validator) to validate my CSS file. No errors were found.

| File | Jigsaw URL | Screenshot | Notes |
| --- | --- | --- | --- |
| style.css | [Jigsaw](https://jigsaw.w3.org/css-validator) | ![style.css validation](docs/style.css_validation.webp) | Pass: No Errors |

### JSLint Testing

I have used [JSLint](https://www.jslint.com/) to identify potential errors in my two JavaScript files. No errors were found.

| File | Screenshot | Notes |
| --- | --- | --- |
| script.js | ![script.js](docs/script_jslint.webp) | No errors found
| gallery.js | ![gallery.js](docs/gallery_jslint.webp) | No errors found

## Browser Compatibility

I have tested my deployed project on multiple browsers to check for compatibility issues.

| Browser | Screenshot | Notes |
| --- | --- | --- |
| Chrome | ![screenshot](docs/chrome.webp) | Works as expected |
| Firefox | ![screenshot](docs/firefox.webp) | Works as expected |
| Edge | ![screenshot](docs/edge.webp) | Works as expected |
| Opera | ![screenshot](docs/opera.webp) | Works as expected |

## Responsiveness

I have tested my deployed project on multiple devices to check for responsiveness issues. It responds well to different screen sizes ensuring that users can access and navigate the content effortlessly, regardless of their chosen device. No design or functionality issues were found.

| Device | Screenshot 1 | Screenshot 2 | Screenshot 3 | Screenshot 4 | Notes |
| --- | --- | --- | --- | --- | --- |
| Mobile (DevTools) | ![screenshot1](docs/home_mobile.webp) | ![screenshot2](docs/comment_mobile.webp) | ![screenshot3](docs/faq_mobile.webp) | ![screenshot4](docs/gallery_mobile.webp) | Works as expected |
| Tablet (DevTools) | ![screenshot1](docs/tablet.webp) | ![screenshot2](docs/comment_tablet.webp) | ![screenshot3](docs/faq_tablet.webp) | ![screenshot4](docs/gallery_tablet.webp) | Works as expected |
| Desktop | ![screenshot1](docs/home_desktop.webp) | ![screenshot2](docs/comment_desktop.webp) | ![screenshot3](docs/faq_desktop.webp) | ![screenshot4](docs/gallery_desktop.webp) | Works as expected |

## Lighthouse Audit

I have tested my deployed project using the Lighthouse Audit tool to check for any major issues. 

| Page | Size | Screenshot | Notes |
| --- | --- | --- | --- |
| Current Moon Phase | Mobile | ![screenshot](docs/lighthouse_home_mobile.webp) | Few warnings |
| Current Moon Phase | Desktop | ![screenshot](docs/lighthouse_home_desktop.webp) | Few warnings |
| Moon Cycle Explained | Mobile | ![screenshot](docs/lighthouse_comment_mobile.webp) | Few warnings |
| Moon Cycle Explained | Desktop | ![screenshot](docs/lighthouse_comment_desktop.webp) | Some minor warnings |
| FAQ | Mobile | ![screenshot](docs/lighthouse_faq_mobile.webp) | Some minor warnings |
| FAQ | Desktop | ![screenshot](docs/lighthouse_faq_desktop.webp) | Some minor warnings |
| Gallery | Mobile | ![screenshot](docs/lighthouse_gallery_mobile.webp) | Few warnings |
| Gallery | Desktop | ![screenshot](docs/lighthouse_gallery_desktop.webp) | Some minor warnings |
