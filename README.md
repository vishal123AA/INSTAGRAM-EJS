# INSTAGRAM-EJS
  A server-side rendered Instagram-style profile interface for pets, demonstrating dynamic routing, templating, and mock API data integration.

---

## 📖 About This Project

This project is a lightweight, backend-driven web application that replicates the core UI and data flow of a social media profile. It was built to practice server-side rendering (SSR) and routing using **Node.js, Express, and EJS**, completely independent of a live database. 

Instead of setting up MongoDB or SQL, the application retrieves all profile data (followers, following, posts, likes, and comments) from a local `data.json` file. This architecture mirrors how a real frontend consumes external REST APIs, making it a perfect showcase of rendering dynamic views based on requested routes.

## 🚀 Tech Stack

* **Runtime:** [Node.js](https://nodejs.org/)
* **Framework:** [Express.js](https://expressjs.com/)
* **Templating:** [EJS (Embedded JavaScript)](https://ejs.co/)
* **Dev Tools:** Nodemon (Hot-reloading)
* **Data Layer:** `data.json` (Mock API response)

## ✨ Core Features

* **JSON Mock Database:** Feeds complex, structured user data (posts, metrics, profile details) directly into the frontend UI from a local JSON file.
* **Dynamic Routing:**
    * `GET /cats` — Fetches feline data and renders the cat profile.
    * `GET /dogs` — Fetches canine data and renders the dog profile.
* **Social UI Components:** 
    * Dynamic counters for **Followers, Following, and Total Posts**.
    * Individual post rendering with dynamic **Likes & Comments** metrics.
    * Interactive-looking **"Follow"** and **"Message"** action buttons.
* **Graceful Error Handling:** Features a custom `error.ejs` template to catch unresolved routes (404s), preventing default browser crash pages and maintaining a polished user experience.

## 📂 Project Structure

```text
├── views/
│   ├── instagram.ejs       # Main template for rendering user profiles
│   └── error.ejs         # Custom 404 error page
├── index.js              # Entry point & Express server setup
├── data.json             # Mock database containing /cats and /dogs data
├── package.json          # Project metadata and dependencies
└── .gitignore            # Excludes node_modules and sensitive files