# 📝 Commit History for `Notes WebApp-mernstack-project`

---

This file provides a detailed record of all significant commits for both the backend and frontend of the project. Each entry includes the commit hash, author, date, and a summary of the changes.

---

## Backend Commit History

<details>
<summary><strong>commit</strong> <code>044a3be</code></summary>

- **Author:** Om Kumar <<iitian-om@users.noreply.github.com>>
- **Date:** 2025-06-15 14:32

#### Initialized project and REST API set up

**Details:**
- Set up Express server and basic REST API structure.
- Added .gitignore to exclude .env and node_modules from version control.

</details>

<details>
<summary><strong>commit</strong> <code>96153b3</code></summary>

- **Author:** Om Kumar <<iitian-om@users.noreply.github.com>>
- **Date:** 2025-06-15 14:32

#### Initial commit

**Details:**
- Add MongoDB connection and Note model
- Created Note schema and model with timestamps.
- Set up Express routes for all note operations.
- Implemented MongoDB connection using Mongoose.
- Added controllers for creating, reading, updating, and deleting notes.
- _(No more additional details added because of lack of track.)_

</details>

<details>
<summary><strong>commit</strong> <code>6c788a7</code></summary>

- **Author:** Om Kumar <<iitian-om@users.noreply.github.com>>
- **Date:** 2025-06-15 15:10

#### Added Readme

**Details:**
- Added Readme and other documentation stuff.
-  _(No more additional details added because of lack of track.)_

</details>

<details>
<summary><strong>commit</strong> <code>9b82933</code></summary>

- **Author:** Om Kumar <<iitian-om@users.noreply.github.com>>
- **Date:** Mon Jun 16 22:11:47 2025 +0530

#### V1 - Initial Server SetUp, Add Middilewares, Request Limit Set

**Details:**
- Created middleware to limit requests per IP address.
- Added Upstash Redis and Ratelimit for API rate limiting.
- Integrated dotenv to securely manage sensitive configuration.
- Implemented Rate Limiting to prevent server crashes from overloading of requests.
</details>

---

## Frontend Commit History

<details>
<summary><strong>commit</strong> <code>607a552105baf456a6c884225e4ae73c0c78c557</code></summary>

- **Author:** Om Kumar <<iitian-om@users.noreply.github.com>>
- **Date:** Tue Jun 17 00:12:59 2025 +0530

#### V1 - Frontend Initialised

**Details:**
- 🚀 Basic Frontend App created using **VITE** (React + JavaScript) and folder structure set up.
- 🗂️ Initialized `App.jsx` & `main.jsx`
- 📁 Created `src/pages/`
- 📝 Made basic website pages:
    1. `HomePage.jsx`
    2. `AboutPage.jsx`
    3. `ContactPage.jsx`
    4. `DevelopersPage.jsx`
    5. `NoteDetailsPage.jsx`
    6. `NotFoundPage.jsx`
    7. `ViewNotePage.jsx`
    8. `CreatePage.jsx` (for creating Notes)
- 🔗 Built routes for pages
- 📦 Installed dependencies:
    - `react-hot-toast`
    - `react-router`
    - `react-router-dom`

</details>

<details>
<summary><strong>commit</strong> <code>9e837676da24a7e8f96c578a4155e9fbcf1fc328</code></summary>

- **Author:** Om Kumar <<iitian-om@users.noreply.github.com>>
- **Date:** Tue Jun 17 19:58:00 2025 +0530

#### Frontend SetUp

**Details:**
- Made `root/package.json`.
- Updated the `root/frontend/packages` and `root/backend/packages`.
- Updated `frontend/src/main.jsx` and `frontend/src/App.jsx` for better readability.
- Installed all the remaining packages and libraries into the packages.
    - In `root/frontend/package.json`:
        1. "axios": "^1.9.0"
        2. "daisyui": "^4.12.24"
        3. "tailwindcss": "^3.4.17"
        4. "autoprefixer": "^10.4.21"
        5. "lucide-react": "^0.510.0"
    - In `root/backend/package.json`:
        1. "nodemon": "^3.1.10"
        2. "cors": "^2.8.5"
        3. "dotenv": "^16.5.0"
        4. "mongoose": "^8.15.2"
        5. "express": "^4.18.2"
        6. "@upstash/redis": "^1.34.9"
        7. "@upstash/ratelimit": "^2.0.5"

</details>

<details>
<summary><strong>commit</strong> <code>b2d22aec0e1d4b4ba3380db52f89f53b2edf0600</code> <em>(HEAD → main)</em></summary>

- **Author:** Om Kumar <<iitian-om@users.noreply.github.com>>
- **Date:** Tue Jun 17 20:30:28 2025 +0530

#### Added proper documentation work

**Details:**
- Fixed and improved the designs and styles of documentation files.
- Updated commit history and documentation for better clarity and tracking.
- Ensured all documentation is up to date with the latest project changes.

</details>

---

*Replace the backend commit hashes and dates with your actual commit IDs and times from `git log --oneline --date=iso` for accuracy.*

---