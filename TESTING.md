# Testing

Return back to the [README.md](README.md) file.

## Table of Contents

- [Testing](#testing)
  - [Table of Contents](#table-of-contents)
  - [Code Validation](#code-validation)
    - [HTML Validation](#html-validation)
    - [CSS Validation](#css-validation)
    - [JS Lint Testing](#js-lint-testing)
  - [Browser Compatibility](#browser-compatibility)
  - [Responsiveness](#responsiveness)
  - [Lighthouse Audit](#lighthouse-audit)
  - [User Stories Testing](#user-stories-testing)
    - [Client Goals](#client-goals)
    - [First Time User Goals](#first-time-user-goals)
    - [Returning/Frequent User Goals](#returningfrequent-user-goals)
  - [Fixed Bugs](#fixed-bugs)
  - [Unfixed Bugs](#unfixed-bugs)

## Code Validation

[The W3C Markup Validation Service](https://validator.w3.org/) and [The W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/) were used to validate every page of the project to ensure there were no syntax errors. The results clearly showed that the website stays in compliance with the standards and recommendations set by the World Wide Web Consortium.

[JSLint](https://www.jslint.com/), a static code analysis tool, was used to check if JavaScript source code complies with coding rules. No errors were found in this area.

### HTML Validation

I have used the recommended [HTML W3C Validator](https://validator.w3.org) to validate all of my HTML files. No errors were found. A few minor warnings appeared indicating empty headings in index.html file. The headings were empty for a reason though as they were designed to be containers for external API's data.

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

### JS Lint Testing

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

## User Stories Testing

### Client Goals

| User Stories | Completed? |
| --- | --- |
| As a client, I would like to provide users with accurate and up-to-date information about the current phase of the Moon. This could include displaying the Moon's appearance, percentage of illumination, distance to the Moon from Earth, and other relevant details. | ✔️ |
| As a client, I would like to educate users about the different phases of the Moon and the science behind them. It could provide explanations, diagrams, and relevant images to help users understand the lunar cycle. | ✔️ |
| As a client, I would like to provide a visual calendar that displays the Moon phases for a specific period (e.g., a year) that can help users track the Moon's changing appearance over time. | ✔️ |
| As a client, I would like to deliver all of the above in the form of a visually appealing, intuitive, responsive across different devices and easy to navigate website. | ✔️ |

### First Time User Goals

| User Stories | Completed? |
| --- | --- |
| As a first time user, I should be able to quickly and easily see the current phase of the Moon, whether it's a Full Moon, New Moon, Waxing Crescent, Waning Gibbous, etc. | ✔️ |
| As a first time user, I should be able to access more than just the current Moon Phase. I should be able to see additional information such as Moon illumination percentage, number of days through the cycle, number of days till the next Full Moon, etc. | ✔️ |
| As a first time user, I should be able to explore a calendar view that shows the Moon's phases for a specific period, helping me understand how the Moon's appearance changes over time. | ✔️ |
| As a first time user, I should be able to learn about the different phases of the Moon, their significance and why the Moon's appearance changes over time. | ✔️ |
| As a first time user, I should be able to navigate throughout the page in an easy, effortless and intuitive way. | ✔️ |
| As a first time user, I should be able to have a positive and enjoyable experience while browsing the website. | ✔️ |

### Returning/Frequent User Goals

| User Stories | Completed? |
| --- | --- |
| As a returning/frequent user, I should be able to continue tracking the Moon's changing phases to deepen my understanding of the Lunar Cycle. | ✔️ |
| As a returning/frequent user, I should be able to plan upcoming activities that align with specific Moon phases, such as outdoor events, photography sessions, or astronomical observations. | ✔️ |
| As a returning/frequent user, I should be able to revisit the website's settings to fine-tune my preferences, such as adjusting my time zone or choosing my favorite locations. | Take a look at the Future Implementations section in [README.md](README.md) file. |
| As a returning/frequent user, I should be able to share my own observations, photos, or experiences related to Moon phases within the website's community. | Take a look at the Future Implementations section in [README.md](README.md) file. |
| As a returning/frequent user, I should be able to stay informed about upcoming celestial events beyond Moon phases, such as meteor showers, planetary alignments, asteroids and comets. | Take a look at the Future Implementations section in [README.md](README.md) file. |
| As a returning/frequent user, I should be able to access the provider's social media accounts. | ✔️ |
| As a returning/frequent user, I should be able to offer feedback to the app developers based on my experiences, helping to shape future updates and improvements. | Take a look at the Future Implementations section in [README.md](README.md) file. |
