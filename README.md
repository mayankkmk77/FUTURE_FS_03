# Sita Ram Diwan Chand — Restaurant Website

<p align="center">
  <strong>A responsive and professional restaurant website for Sita Ram Diwan Chand, Paharganj, Delhi.</strong>
</p>

<p align="center">
  Built as part of the <strong>Future Interns Full Stack Web Development Internship — Task 3</strong>.
</p>

---

## Live Website

> Add your GitHub Pages live URL here after deployment.

**Live Demo:** `https://github.com/mayankkmk77/sita-ram-diwan-chand-website/`

---

## Project Overview

This project is a modern, responsive restaurant website created for **Sita Ram Diwan Chand**, a well-known Delhi food establishment associated with traditional **Chole Bhature**.

The website is designed to provide visitors with an easy way to discover the restaurant, learn about its heritage, explore its food offerings, view images, read customer feedback, check opening hours, find the location, and contact the restaurant.

The design focuses on a clean restaurant-oriented visual style, strong typography, responsive layouts, clear calls-to-action, and easy navigation across desktop and mobile devices.

---

## Restaurant Information

**Sita Ram Diwan Chand**

**Address:**

2243 Raj Guru Marg,  
Chuna Mandi, Paharganj,  
New Delhi, Delhi 110055

**Phone:**  
+91 78725 45454

**Opening Hours:**

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

The website includes a responsive navigation bar with:

- Home
- About
- Menu
- Why Choose Us
- Gallery
- Reviews
- Contact
- Visit Us CTA

On smaller screens, the navigation changes into a mobile menu controlled using JavaScript.

---

### 2. Hero Section

The landing section introduces the restaurant with:

- Restaurant heritage statement
- Strong headline
- Short restaurant description
- Explore Menu CTA
- Find Us CTA
- Restaurant hero imagery

The hero section is designed to immediately communicate the restaurant's identity and traditional Delhi food heritage.

---

### 3. About / Restaurant Heritage

The About section introduces the story and identity of Sita Ram Diwan Chand.

It highlights:

- Delhi food heritage
- The restaurant's association with Chole Bhature
- Its history beginning in 1950
- Traditional flavours
- Its Paharganj location

---

### 4. Menu Section

The website presents the restaurant's food offerings through dedicated menu cards.

The main categories include:

- **Chole Bhature**
- **Combos & Meals**
- **Refreshing Beverages**

Each card includes:

- Food imagery
- Category number
- Description
- Call-to-action link

---

### 5. Why Choose Us

A dedicated section communicates the restaurant's major strengths through three feature blocks:

**01 — Delhi Food Heritage**

A long-standing name associated with one of Delhi's most recognizable street-food dishes.

**02 — Signature Chole Bhature**

The restaurant's identity is built around its iconic Chole Bhature and traditional flavours.

**03 — Paharganj Landmark**

Located in Chuna Mandi, Paharganj, in the heart of Delhi's historic food and travel district.

The section also uses small visual icons to improve hierarchy and presentation.

---

### 6. Image Gallery

The gallery provides a visual representation of the restaurant experience.

It includes dedicated images for:

- Restaurant food
- Restaurant interior
- Signature dishes
- Seating
- Exterior
- Food selection

The gallery uses a responsive grid that adapts to different screen sizes.

---

### 7. Customer Reviews

The website includes a customer reviews section featuring publicly available customer feedback.

The section contains:

- Customer review cards
- Star ratings
- Review text
- Review source link

This helps provide visitors with social proof and a better understanding of the customer experience.

---

### 8. Location & Google Maps

The website includes an embedded Google Maps section for the restaurant's Paharganj location.

Visitors can:

- View the restaurant location
- Check the address
- Open Google Maps
- Get directions
- Call the restaurant directly

---

### 9. Opening Hours

The location section displays the restaurant's weekly operating hours in an easy-to-read format.

All seven days are displayed individually for clarity.

---

### 10. Contact Form

The website contains a contact form with fields for:

- Name
- Email
- Message

JavaScript is used to:

- Prevent the default page refresh
- Display a confirmation message
- Reset the form after submission

> Note: The current form is a front-end demonstration and does not send the message to a backend server or email service.

---

### 11. Direct Call Functionality

Phone numbers use the `tel:` protocol so that visitors on supported mobile devices can directly call the restaurant.

Example:

```html
<a href="tel:+917872545454">
    +91 78725 45454
</a>

---

### 12. Official Website Integration

The website provides a direct link to the restaurant's official website:

**Sita Ram Diwan Chand Official Website**

[Visit the Official Website](https://www.sitaramdiwanchand.co.in/)

The link opens in a new browser tab.

---

## Technologies Used

### Frontend

- HTML5
- CSS3
- JavaScript

### External Integration

- Google Maps Embed
- Google Maps Directions
- Restaurant Official Website

### Development Tools

- Visual Studio Code
- Git
- GitHub
- Live Server

---

### Project Structure

```text
sita-ram-diwan-chand-website/
│
├── index.html
├── style.css
├── script.js
├── README.md
├── .gitignore
│
└── images/
    │
    ├── hero.jpg
    ├── about.jpg
    │
    ├── menu-1.jpg
    ├── menu-2.jpg
    ├── menu-3.jpg
    │
    ├── gallery-1.jpg
    ├── gallery-2.jpg
    ├── gallery-3.jpg
    ├── gallery-4.jpg
    ├── gallery-5.jpg
    └── gallery-6.jpg




### File Description

| File / Folder | Purpose |
|---|---|
| `index.html` | Main website structure, content and semantic HTML |
| `style.css` | Website styling, layout, visual design and responsive design |
| `script.js` | Mobile navigation and contact form interactions |
| `images/` | Restaurant, food and gallery imagery |
| `README.md` | Project documentation |
| `.gitignore` | Prevents unnecessary or private files from being committed |

---

### Responsive Design

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

### JavaScript Functionality

The project uses JavaScript to provide interactive functionality.

### Mobile Navigation

The mobile navigation can be opened and closed using the menu button.

The script updates the following accessibility attribute:

```text
aria-expanded    

## Installation & Local Setup

Follow the steps below to run the Sita Ram Diwan Chand restaurant website on your local system.

### 1. Clone the Repository

Open **Git Bash**, **Command Prompt**, or the **VS Code Terminal** and run:

```bash
git clone https://github.com/YOUR-USERNAME/sita-ram-diwan-chand-website.git
```

Replace `YOUR-USERNAME` with your actual GitHub username.

### 2. Open the Project Directory

Move into the project folder:

```bash
cd sita-ram-diwan-chand-website
```

### 3. Open the Project in Visual Studio Code

If Visual Studio Code is installed and the `code` command is available, run:

```bash
code .
```

Alternatively, open Visual Studio Code manually and select:

**File → Open Folder → sita-ram-diwan-chand-website**

### 4. Verify the Project Structure

Make sure the project contains the following files and folders:

```text
sita-ram-diwan-chand-website/
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

### 5. Run the Website Using Live Server

The recommended way to run the website locally is through the **Live Server** extension in Visual Studio Code.

If Live Server is not installed:

1. Open Visual Studio Code.
2. Open the **Extensions** panel.
3. Search for **Live Server**.
4. Install the extension.
5. Open `index.html`.
6. Right-click inside the HTML file.
7. Select:

```text
Open with Live Server
```

The website will open automatically in your default browser.

### 6. Alternative Method

Since this project is built using plain HTML, CSS and JavaScript, no Node.js installation or package installation is required.

You can also open:

```text
index.html
```

directly in a modern web browser.

However, **Live Server is recommended** during development because it automatically refreshes the webpage when files are modified.

### 7. Making Changes

The main files used for development are:

```text
index.html  → Website structure and content
style.css   → Styling, layout and responsive design
script.js   → Navigation and interactive functionality
images/     → Restaurant and food images
```

After making changes, save the file and refresh the browser if necessary.

### 8. Local Development Complete

Once the website opens successfully in the browser, the local setup is complete.

The project does not require:

- Node.js
- npm
- Database configuration
- Backend server
- Environment variables
- API keys

The Google Maps section uses an embedded Google Maps URL, while the restaurant's official website and directions are accessed through external links.