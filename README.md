# DiscoveryTicket – Interactive Exhibition RSVP

> A simple web‑app that lets visitors sign up for an upcoming event, shows a live list of participants, and offers a dark‑mode toggle.  
> Built with vanilla HTML/CSS/JS and designed to be extendable for future projects (Project 6‑9).

---

## Table of Contents
- [Demo](#demo)
- [Features](#features)
- [Installation / Running Locally](#installation--running-locally)
- [File Structure](#file-structure)
- [How It Works](#how-it-works)
  - [RSVP Form & Participant List](#rsvp-form--participant-list)
  - [Dark‑Mode Toggle](#dark-mode-toggle)
  - [Success Modal (future)](#success-modal-future)
- [Future Enhancements](#future-enhancements)
- [Contributing](#contributing)
- [License](#license)

---

## Demo

> 👉 Live demo: **[https://your-demo-url.com](https://your-demo-url.com)**  
> *(Replace with your own deployment link)*  

You’ll see the RSVP section on top of a “Discover Ticket” landing page, along with a button that toggles between light and dark themes.

---

## Features

| Feature | Status | Notes |
|---------|--------|-------|
| **RSVP Form** | ✅ | Users can enter full name, email, and number of guests. Current count starts at 3 (hard‑coded). |
| **Live Participant List** | ✅ | The list updates on submit; each RSVP is added to the DOM under `#participants`. |
| **Dark Mode** | ✅ | A button with ID `theme-button` toggles a `.dark-mode` class on `<body>`. |
| **Success Modal** | ❌ | Placeholder comments exist in the HTML (`<!-- Success Modal … -->`). Implementation pending. |
| **Responsive Design** | ✅ | Basic layout works across desktop and mobile (see CSS). |

---

## Installation / Running Locally

```bash
# Clone the repo
git clone https://github.com/your-username/discoveryticket.git
cd discoveryticket

# Open index.html in your browser
open index.html          # macOS
start index.html         # Windows
xdg-open index.html      # Linux
