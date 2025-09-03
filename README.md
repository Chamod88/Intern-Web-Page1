# Oceanview Grand Hotel

A modern, responsive static website for a luxury hotel with smooth animations, a gallery, and a WhatsApp-based quick booking flow.

## Project Structure
```
INTERN/
├─ index.html        # Main HTML file (sections: Home, About, Rooms, Facilities, Gallery, Contact)
├─ styles.css        # Styles for layout, responsive design, animations, and components
├─ script.js         # Interactivity: mobile menu, fade-in animations, gallery lightbox, WhatsApp booking
├─ images/           # Images for hero, rooms, facilities, and gallery
│  └─ gallery/       # Gallery images used in the Gallery section
└─ README.md         # This file
```

## Features
- Responsive navigation with mobile menu
- Animated hero and section fade-ins on scroll
- Rooms & Suites cards with pricing and amenities
- Facilities grid with icons (Font Awesome)
- Gallery with captions (and lightbox hook)
- Contact & WhatsApp quick booking form (pre-fills a WhatsApp message)
- Footer with quick links and social icons

## Getting Started (Run Locally)

### Prerequisites
- Any modern web browser
- Optional: A simple static server (for best results), e.g. VS Code Live Server, Python, or Node

### Option 1: Open directly
- Double-click `index.html` to open in your browser.

### Option 2: Serve with a local server (recommended)
- Using VS Code Live Server: Right-click `index.html` → "Open with Live Server"
- Using Python (3.x):
  ```bash
  # In this folder
  python -m http.server 5500
  # Then open http://localhost:5500
  ```
- Using Node (http-server):
  ```bash
  npm i -g http-server
  http-server -p 5500
  # Then open http://localhost:5500
  ```

## How the Booking via WhatsApp Works
- Fill the form in the Contact section.
- On submit, it composes a message with your details and opens WhatsApp to send.

## Demo Video
- Watch the demonstration: https://drive.google.com/file/d/1mX70itVQMx_5uRDmkBLADz8NigRvj6NS/view?usp=drive_link

## Tech Stack
- HTML5, CSS3, JavaScript (no framework)
- Font Awesome for icons

## Notes
- Replace placeholder contact details and prices with your real data as needed.
- Ensure images exist in `images/` and `images/gallery/` for the gallery and backgrounds.


