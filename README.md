# Sita Ram Diwan Chand — Restaurant Website

> A responsive, modern restaurant website created for **Sita Ram Diwan Chand**, Paharganj, New Delhi.

**Future Interns — Full Stack Web Development Internship | Task 3**

---

## Live Website

**Live Demo:**  
https://mayankkmk77.github.io/FUTURE_FS_03/

> The live URL will work after GitHub Pages deployment is enabled for this repository.

---

## Project Overview

This project is a professional, responsive restaurant website developed for **Sita Ram Diwan Chand**, a well-known Delhi food establishment associated with its iconic **Chole Bhature**.

The website combines a traditional Delhi food identity with a clean and modern web interface. It provides visitors with essential restaurant information, food categories, restaurant heritage, customer reviews, location details, opening hours, contact functionality and direct access to the restaurant's official website.

The project was developed as part of the **Future Interns Full Stack Web Development Internship — Task 3**.

---

## Restaurant Information

### Sita Ram Diwan Chand

**Location:**  
2243 Raj Guru Marg,  
Chuna Mandi, Paharganj,  
New Delhi, Delhi 110055, India

**Phone:**  
+91 78725 45454

### Opening Hours

| Day | Opening Hours |
|---|---|
| Monday | 8:00 AM – 5:00 PM |
| Tuesday | 8:00 AM – 5:00 PM |
| Wednesday | 8:00 AM – 5:00 PM |
| Thursday | 8:00 AM – 5:00 PM |
| Friday | 8:00 AM – 5:00 PM |
| Saturday | 8:00 AM – 5:00 PM |
| Sunday | 8:00 AM – 5:00 PM |

---

## Key Features

### 1. Responsive Navigation

The website includes a responsive navigation system with links to:

- Home
- About
- Menu
- Why Choose Us
- Gallery
- Reviews
- Contact
- Visit Us

On smaller screens, the navigation transforms into a mobile menu controlled using JavaScript.

The mobile navigation also maintains an accessible `aria-expanded` state.

---

### 2. Hero Section

The hero section introduces the restaurant with a strong visual identity and clear calls to action.

It includes:

- Delhi food heritage statement
- Restaurant name and food identity
- Chole Bhature-focused headline
- Short restaurant introduction
- Explore Menu button
- Find Us button
- Restaurant imagery

### Hero Message

**Delhi's Iconic Chole Bhature.**

Experience the traditional flavours of Sita Ram Diwan Chand in the heart of Paharganj, Delhi.

---

### 3. Restaurant Heritage

The About section presents the restaurant's connection with Delhi's food culture.

It highlights:

- Traditional Delhi food heritage
- Chole Bhature
- The restaurant's history beginning in 1950
- Family business heritage
- Paharganj location
- Traditional flavours

The section is designed to give visitors context about the restaurant rather than presenting only a menu.

---

### 4. Menu Section

The menu section presents the restaurant's primary food categories through dedicated visual cards.

The featured categories include:

- **Chole Bhature**
- **Combos & Meals**
- **Refreshing Beverages**

Each card contains:

- Food imagery
- Category number
- Category title
- Short description
- Call-to-action link

---

### 5. Why Choose Us

The website includes a dedicated section highlighting the restaurant's identity and key strengths.

The three feature blocks are:

#### 01 — Delhi Food Heritage

A food tradition associated with Delhi's iconic Chole Bhature culture.

#### 02 — Signature Chole Bhature

The restaurant's identity is strongly connected with its signature Chole Bhature.

#### 03 — Paharganj Landmark

Located in Chuna Mandi, Paharganj, one of Delhi's well-known food and travel districts.

Small visual icons are used within the section to improve visual hierarchy.

---

### 6. Restaurant Gallery

The website includes a dedicated image gallery showcasing the restaurant and food experience.

The gallery contains images representing:

- Restaurant food
- Signature dishes
- Restaurant interior
- Seating
- Restaurant exterior
- Food selection

The gallery uses a responsive grid layout that adapts to desktop, tablet and mobile screen sizes.

---

### 7. Customer Reviews

The website contains a customer review section featuring publicly available customer feedback.

The section includes:

- Review cards
- Star ratings
- Customer feedback
- Review source information

The purpose of the section is to provide social proof and help visitors understand the customer experience.

---

### 8. Location & Google Maps

The website integrates Google Maps to help visitors locate the restaurant.

Visitors can:

- View the restaurant's location
- Check the address
- Open Google Maps
- Get directions
- Call the restaurant

The location section also contains a responsive embedded Google Maps frame.

---

### 9. Opening Hours

The restaurant's weekly operating hours are displayed individually for all seven days.

This allows visitors to quickly check when the restaurant is available.

---

### 10. Contact Form

The website contains a frontend contact form with:

- Name
- Email address
- Message

JavaScript is used to:

1. Prevent the default browser form submission.
2. Display a confirmation message.
3. Reset the form fields.

The current form is frontend-only and does not send information to a backend server or email service.

---

### 11. Direct Call Functionality

The website uses the `tel:` protocol for the restaurant's phone number.

Example:

```html
<a href="tel:+917872545454">
    +91 78725 45454
</a>
```

This allows users on supported mobile devices to initiate a phone call directly from the website.

---

### 12. Official Website Integration

The website provides a direct link to the restaurant's official website.

**Sita Ram Diwan Chand Official Website:**

https://www.sitaramdiwanchand.co.in/

The official website link opens in a new browser tab.

---

## Technologies Used

### Frontend

- HTML5
- CSS3
- JavaScript

### External Integrations

- Google Maps Embed
- Google Maps Directions
- Restaurant Official Website

### Development Tools

- Visual Studio Code
- Git
- GitHub
- Live Server

---

## Project Structure

```text
FUTURE_FS_03/
│
├── index.html
├── style.css
├── script.js
├── README.md
├── .gitignore
│
└── images/
    ├── hero.jpg
    ├── about.jpg
    ├── menu-1.jpg
    ├── menu-2.jpg
    ├── menu-3.jpg
    ├── gallery-1.jpg
    ├── gallery-2.jpg
    ├── gallery-3.jpg
    ├── gallery-4.jpg
    ├── gallery-5.jpg
    └── gallery-6.jpg
```

---

## File Description

| File / Folder | Purpose |
|---|---|
| `index.html` | Main website structure, content and semantic HTML |
| `style.css` | Website styling, layout, visual design and responsive design |
| `script.js` | Mobile navigation and contact form interactions |
| `images/` | Restaurant, food and gallery imagery |
| `README.md` | Project documentation |
| `.gitignore` | Prevents unnecessary or private files from being committed |

---

## Responsive Design

The website is designed to provide a responsive experience across:

- Desktop computers
- Laptops
- Tablets
- Mobile phones

Responsive CSS media queries are used to adjust:

- Navigation
- Typography
- Hero section
- Content grids
- Menu cards
- Gallery
- Customer reviews
- Location section
- Contact form
- Footer

The mobile navigation menu is controlled using JavaScript and includes an accessible `aria-expanded` state.

---

## JavaScript Functionality

The project uses JavaScript to provide interactive functionality.

### Mobile Navigation

The mobile navigation can be opened and closed using the menu button.

The script updates the `aria-expanded` accessibility attribute.

When the menu is opened:

```html
aria-expanded="true"
```

When the menu is closed:

```html
aria-expanded="false"
```

The navigation menu also automatically closes when a navigation link is selected.

### Contact Form

The contact form:

1. Prevents the default browser submission.
2. Displays a success message.
3. Clears the form fields.

Example implementation:

```javascript
contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    formMessage.textContent =
        "Thank you! Your message has been received.";

    contactForm.reset();

});
```

> **Note:** The current contact form is frontend-only. Submitted information is not sent to a backend server or email service.

---

## Design Approach

The visual design follows a modern restaurant website aesthetic while maintaining the traditional identity of a Delhi food brand.

The design focuses on:

- Clean layouts
- Strong typography
- Spacious sections
- High-quality imagery
- Clear call-to-action buttons
- Warm neutral backgrounds
- Minimal visual clutter
- Consistent spacing
- Responsive layouts
- Clear content hierarchy
- Accessible navigation

The goal is to combine the traditional food identity of **Sita Ram Diwan Chand** with a clean and modern web experience.

---

## Accessibility Considerations

The website includes several accessibility-focused practices:

- Semantic HTML elements
- Descriptive image labels
- Proper form labels
- Accessible navigation button
- `aria-expanded` state for mobile navigation
- `aria-live` for contact form feedback
- Descriptive iframe title
- Keyboard-friendly form controls
- Clear visual hierarchy
- Descriptive link text

These practices help improve usability across different devices and user needs.

---

## SEO Basics

The website includes basic SEO metadata such as:

- Page title
- Meta description
- Keywords
- Author metadata
- Theme color

Example:

```html
<meta
    name="description"
    content="Visit Sita Ram Diwan Chand in Paharganj, Delhi, known for its iconic chole bhature and traditional Delhi food heritage."
>
```

The page title is:

```html
<title>
    Sita Ram Diwan Chand | Iconic Chole Bhature in Delhi
</title>
```

The website also uses descriptive headings and restaurant-related content to establish a clear page structure.

---

## Installation & Local Setup

Follow the steps below to run the website locally.

### 1. Clone the Repository

Open Git Bash, Command Prompt or the VS Code Terminal and run:

```bash
git clone https://github.com/mayankkmk77/FUTURE_FS_03.git
```

### 2. Open the Project Directory

```bash
cd FUTURE_FS_03
```

### 3. Open the Project in Visual Studio Code

If the `code` command is available:

```bash
code .
```

Alternatively, open Visual Studio Code manually and select:

**File → Open Folder → FUTURE_FS_03**

### 4. Verify the Project Structure

Make sure the project contains:

```text
FUTURE_FS_03/
│
├── index.html
├── style.css
├── script.js
├── README.md
├── .gitignore
│
└── images/
    ├── hero.jpg
    ├── about.jpg
    ├── menu-1.jpg
    ├── menu-2.jpg
    ├── menu-3.jpg
    ├── gallery-1.jpg
    ├── gallery-2.jpg
    ├── gallery-3.jpg
    ├── gallery-4.jpg
    ├── gallery-5.jpg
    └── gallery-6.jpg
```

### 5. Run Using Live Server

The recommended development method is **Live Server** in Visual Studio Code.

If Live Server is not installed:

1. Open Visual Studio Code.
2. Open the Extensions panel.
3. Search for **Live Server**.
4. Install the extension.
5. Open `index.html`.
6. Right-click inside the HTML file.
7. Select:

```text
Open with Live Server
```

The website will then open in your default browser.

### 6. Alternative Method

Because this project uses plain HTML, CSS and JavaScript, no Node.js or npm installation is required.

You can also open:

```text
index.html
```

directly in a modern web browser.

Live Server is recommended during development because it automatically reloads the webpage when files are changed.

---

## GitHub Pages Deployment

This project can be deployed using **GitHub Pages**.

### Recommended Settings

Open the repository on GitHub and go to:

```text
Settings
→ Pages
```

Under **Build and deployment**, configure:

```text
Source: Deploy from a branch
Branch: main
Folder: / (root)
```

Save the settings and wait for GitHub Pages to complete the deployment.

### Live Website URL

After successful deployment:

```text
https://mayankkmk77.github.io/FUTURE_FS_03/
```

---

## Future Improvements

The current project is a frontend-focused restaurant website.

Possible future improvements include:

- Online food ordering
- Online table reservation
- Backend-powered contact form
- Email notification system
- Dynamic menu management
- Restaurant admin dashboard
- Customer authentication
- Database integration
- Online payment integration
- Dynamic customer reviews
- Image lightbox/gallery viewer
- Advanced restaurant SEO
- Google Analytics integration
- Performance optimization
- Progressive Web App support

---

## Internship Project

This project was developed as part of:

**Future Interns — Full Stack Web Development Internship**

**Task:** Task 3 — Restaurant / Local Business Website

The project demonstrates practical implementation of:

- HTML
- CSS
- JavaScript
- Responsive web design
- UI/UX principles
- Local business website development
- Google Maps integration
- Git
- GitHub
- GitHub Pages deployment

---

## Project Status

**Status: Completed**

The current version includes the primary frontend functionality required for the internship project, including:

- Restaurant branding
- Responsive navigation
- Hero section
- Restaurant heritage section
- Menu section
- Why Choose Us section
- Restaurant gallery
- Customer reviews
- Opening hours
- Location section
- Google Maps integration
- Contact section
- Interactive contact form
- Responsive mobile navigation
- Footer
- Official restaurant website integration
- Responsive design
- SEO metadata
- Accessibility considerations

The website is ready for GitHub hosting and final internship submission.

---

## Author

### Mayank Mihir

Computer Science Engineering Student

Full Stack Web Development Enthusiast

**GitHub:**  
https://github.com/mayankkmk77

---

## Disclaimer

This project was created for educational and internship purposes.

Restaurant information, opening hours, contact information, location information, reviews, images and other third-party content should be verified against the restaurant's current official sources before being used for commercial purposes.

This project does not claim ownership of third-party trademarks, photographs, reviews, logos or other copyrighted materials belonging to the restaurant or their respective owners.

---

<p align="center">
    Made with HTML, CSS & JavaScript
</p>

<p align="center">
    <strong>Future Interns — Full Stack Web Development Internship</strong>
</p>