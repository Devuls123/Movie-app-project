# Movie App

A full-stack movie discovery and management web application built as a college project using **HTML, CSS, JavaScript, Node.js, Express.js, and MongoDB**.

ReelView allows users to browse a movie collection, search by title, filter by genre, view movie details, and save movies to a personal watchlist in the browser. It also includes an admin page for creating, updating, and deleting movie records.

> **Project status:** Student project / development starter. Test all features and complete the remaining improvements before final submission or public deployment.

---

## 📌 Table of Contents

- [Project Overview](#-project-overview)
- [Team Members](#-team-members)
- [Objectives](#-objectives)
- [Features](#-features)
- [Technology Stack](#-technology-stack)
- [Project Structure](#-project-structure)
- [Application Screenshots](#-application-screenshots)
- [System Requirements](#-system-requirements)
- [Installation and Setup](#-installation-and-setup)
- [Environment Configuration](#-environment-configuration)
- [Running the Application](#-running-the-application)
- [API Documentation](#-api-documentation)
- [Database Design](#-database-design)
- [Team Work Distribution](#-team-work-distribution)
- [GitHub Collaboration Workflow](#-github-collaboration-workflow)
- [Testing Checklist](#-testing-checklist)
- [Security Notes](#-security-notes)
- [Limitations](#-limitations)
- [Future Enhancements](#-future-enhancements)
- [Conclusion](#-conclusion)

---

## 🎥 Project Overview

Movie platforms help users discover films by title, genre, release year, and rating. ReelView is a student-built web application that demonstrates how a frontend, backend API, and database can work together in one application.

The frontend provides the interface for viewing and searching movies. The Express.js backend exposes REST API endpoints, and MongoDB stores movie information. The admin page uses these endpoints to manage movie records.

### Problem Statement

Movie information can be scattered across different websites or lists. This project aims to provide a simple, centralized interface where users can browse a movie collection and where authorized project administrators can manage movie records.

### Proposed Solution

ReelView combines:
- A responsive movie browsing interface.
- Search by movie title and filtering by genre.
- A movie-details dialog.
- A browser-local favourites/watchlist feature.
- An admin interface for adding, editing, and deleting movie records.
- A REST API built with Express.js.
- MongoDB persistence through Mongoose.

---

## 👥 Team Members

**Institution:** LBS Institute of Technology for Women, Poojapura  
**Department / Class:** S5 IT  
**Project:** Movie App  
**Project period:** September 2026

| No. | Team Member Name |
|---|---|
| 1 | Devika A B |
| 2 | Devika B S |
| 3 | Devika S |
| 4 | Devipriya P |
| 5 | Devu L S |

All team members should contribute code, test their own features, commit their work, and push their changes to the shared GitHub repository. The division above describes each member's primary responsibility; collaboration and code review are shared tasks.

---

## 🎯 Objectives

1. Develop a user-friendly movie discovery application.
2. Display movie titles, genres, release years, ratings, posters, and descriptions.
3. Implement title-based search and genre filtering.
4. Create a backend using Node.js and Express.js.
5. Store and manage movie data using MongoDB and Mongoose.
6. Implement CRUD operations: Create, Read, Update, and Delete.
7. Provide a favourites/watchlist feature.
8. Practise teamwork, modular development, Git, and GitHub collaboration.
9. Test frontend-backend communication and database operations.

---

## ✨ Features

### 1. Movie Home Page
- Dark-themed, responsive interface.
- Movie cards with title, genre, release year, and rating.
- Poster display when a poster URL is provided.
- Navigation to the discovery page and admin page.

### 2. Search and Filtering
- Search movies by title.
- Filter the displayed results by genre.
- Show a message when no matching movies are found.

### 3. Movie Details
- Open a details dialog for a selected movie.
- Display the movie's genre, year, language, rating, and description.

### 4. Favourites / Watchlist
- Save and remove movies from the watchlist.
- Store the current watchlist in the browser's `localStorage`.
- Display a count of saved movies.

**Note:** The current watchlist is browser-local. It is not linked to a user account and does not automatically sync across browsers or devices.

### 5. Admin Dashboard
- Add movie records.
- Edit existing records.
- Delete records after confirmation.
- View existing movies in the database.

**Security note:** The starter admin page does not include login or role-based authorization. Do not deploy it publicly with unrestricted write access.

### 6. REST API
- Retrieve all movies.
- Retrieve one movie by ID.
- Create, update, and delete movie records.
- Return error messages for invalid requests or database errors.

---

## 🧰 Technology Stack

| Technology | Purpose |
|---|---|
| HTML5 | Web page structure |
| CSS3 | Layout, styling, and responsive design |
| JavaScript | Frontend interactions and API requests |
| Node.js | JavaScript runtime for the backend |
| Express.js | Web server and REST API |
| MongoDB | Document-oriented database |
| Mongoose | MongoDB object modelling and validation |
| dotenv | Loads environment configuration from `.env` |
| Nodemon | Restarts the server during development |
| Git | Version control |
| GitHub | Shared repository and team collaboration |
| Visual Studio Code | Development environment |

---

## 📁 Project Structure

```text
movie-app/
├── config/
│   └── db.js                 # MongoDB connection
├── models/
│   └── Movie.js              # Mongoose movie schema
├── routes/
│   └── movies.js             # Movie REST API routes
├── public/
│   ├── index.html            # Main movie discovery page
│   ├── style.css             # Shared styling
│   ├── script.js             # Search, filtering, and movie details
│   ├── favorites.js          # Watchlist count/helper
│   ├── admin.html            # Admin dashboard
│   └── admin.js              # Admin CRUD functionality
├── .env                      # Local environment variables (not committed)
├── .env.example              # Example configuration
├── .gitignore                # Excludes secrets and dependencies
├── package.json              # Project metadata and scripts
├── package-lock.json         # Exact dependency versions
├── server.js                 # Express application entry point
└── README.md                 # Project documentation
```

---

## 📸 Application Screenshots

Add your own screenshots in the `screenshots/` folder in the repository. The suggested image names below are examples—use the same names in this README or change the image paths to match your uploaded files.

Create a folder named `screenshots` in the project root.

### 1. Home Page

Shows the main navigation, hero section, search field, genre filter, and movie cards.

![ReelView Home Page](screenshots/home-page.png)

### 2. Movie Search and Genre Filter

Shows search results after entering a movie title or selecting a genre.

![Movie Search and Filtering](screenshots/search-filter.png)

### 3. Movie Details

Shows the details dialog for a selected movie, including its description, rating, genre, language, and release year.

![Movie Details](screenshots/movie-details.png)

### 4. Admin Dashboard

Shows the form used to add a movie and the list of existing movie records.

![Admin Dashboard](screenshots/admin-dashboard.png)

### 5. Add or Edit Movie

Shows the movie form with sample information entered or an existing record loaded for editing.

![Add or Edit Movie](screenshots/add-edit-movie.png)

### 6. MongoDB Database

Shows the movie documents stored in the MongoDB collection. Do not include credentials, connection strings, or other private information in screenshots.

![MongoDB Movie Collection](screenshots/mongodb-collection.png)

### 7. GitHub Repository

Shows the project files and commit history in the shared GitHub repository.

![GitHub Repository](screenshots/github-repository.png)

> **Screenshot instructions:** Save the screenshots you capture in the `screenshots/` directory using the filenames above. GitHub will display the images automatically when the paths and filenames match. If you use different filenames, update the corresponding Markdown image paths.

---

## 💻 System Requirements

- Windows, macOS, or Linux.
- Node.js LTS and npm.
- Git.
- Visual Studio Code or another code editor.
- A MongoDB local instance or MongoDB Atlas database.
- Internet access for installing dependencies and, if used, loading remote poster images or Google Fonts.

Check your installed versions in the VS Code terminal:

```bash
node -v
npm -v
git --version
```

---

## ⚙️ Installation and Setup

### Step 1: Get the project

Clone the GitHub repository:

```bash
git clone YOUR_REPOSITORY_URL
cd movie-app
```

Replace `YOUR_REPOSITORY_URL` with the URL of the actual shared repository.

Alternatively, download the repository ZIP from GitHub and extract it.

### Step 2: Open the project in VS Code

```bash
code .
```

Or use **File → Open Folder** in VS Code and select the project folder.

### Step 3: Install dependencies

Run:

```bash
npm install
```

This installs the dependencies specified in `package.json`.

### Step 4: Configure MongoDB

Choose one of these options:

**Option A — MongoDB Atlas:** Create a database in MongoDB Atlas, configure a database user and permitted network access, and copy the connection string.

**Option B — Local MongoDB:** Install and start MongoDB locally. The example connection string is:

```text
mongodb://127.0.0.1:27017/movie_app
```

### Step 5: Create the `.env` file

Copy `.env.example` to a new file named `.env` in the project root. Fill in your own connection details:

```env
PORT=3000
MONGODB_URI=mongodb://127.0.0.1:27017/movie_app
```

For MongoDB Atlas, replace the local URI with your Atlas connection string. Do not put placeholder text or angle brackets into the actual connection string.

Keep `.env` private and do not commit it to GitHub.

---

## ▶️ Running the Application

In the VS Code terminal, run:

```bash
npm run dev
```

If the database connection succeeds, the terminal should report that MongoDB is connected and the web server is running.

Open these URLs in your browser:

| Page | URL |
|---|---|
| Movie home page | `http://localhost:3000` |
| Admin dashboard | `http://localhost:3000/admin.html` |
| API health check | `http://localhost:3000/api/health` |
| All movies | `http://localhost:3000/api/movies` |

The home page will be empty until movie records have been added through the admin dashboard or API.

To stop the development server, press `Ctrl + C` in the terminal.

---

## 🔌 API Documentation

The API base path is `/api/movies`.

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/health` | Checks whether the API is running |
| GET | `/api/movies` | Retrieves all movie records |
| GET | `/api/movies?search=avatar` | Searches titles using a query |
| GET | `/api/movies?genre=Drama` | Filters movies by genre |
| GET | `/api/movies/:id` | Retrieves a movie by its MongoDB ID |
| POST | `/api/movies` | Creates a movie |
| PUT | `/api/movies/:id` | Updates a movie |
| DELETE | `/api/movies/:id` | Deletes a movie |

### Example request body for creating a movie

Send JSON to `POST /api/movies`:

```json
{
  "title": "Example Movie",
  "genre": "Drama",
  "releaseYear": 2024,
  "language": "English",
  "rating": 8.2,
  "description": "An example description for demonstration.",
  "posterUrl": ""
}
```

Include the header:

```text
Content-Type: application/json
```

The `title`, `genre`, and `releaseYear` fields are required by the current Mongoose schema. The `rating` must be between 0 and 10.

---

## 🗄️ Database Design

The application uses a MongoDB collection managed by the Mongoose `Movie` model.

| Field | Type | Description |
|---|---|---|
| `title` | String | Movie title; required |
| `genre` | String | Movie genre; required |
| `releaseYear` | Number | Release year; required |
| `language` | String | Movie language |
| `rating` | Number | Rating from 0 to 10 |
| `description` | String | Summary of the movie |
| `posterUrl` | String | Optional poster image URL |
| `createdAt` | Date | Automatically generated creation timestamp |
| `updatedAt` | Date | Automatically generated update timestamp |

MongoDB also assigns each document a unique `_id`.

---

### Shared responsibilities

All five members should:
- Understand the project architecture.
- Test the module they develop.
- Commit and push their own code.
- Review changes and help resolve integration issues.
- Participate in testing, documentation, and the final presentation.

---

## 🌿 GitHub Collaboration Workflow

The team uses one shared GitHub repository. Each member should work on a feature branch rather than editing the `main` branch directly.

### 1. Create a feature branch

Use a branch name that describes the task:

```bash
git switch -c feature/your-feature
```

For example:

```bash
git switch -c feature/admin-dashboard
```

### 2. Stage and commit your changes

```bash
git add .
git commit -m "Add admin dashboard"
```

### 3. Push your branch

```bash
git push -u origin HEAD
```

### 4. Open a Pull Request

On GitHub, open a Pull Request from your feature branch into `main`. Ask another team member to review it, run the relevant tests, and merge it after approval.

### 5. Update your local main branch

After your Pull Request is merged:

```bash
git switch main
git pull origin main
```

Start the next task from the updated branch.

**Important:** If two members need to edit the same shared file, coordinate before doing so. Pull the latest changes before beginning work and resolve conflicts carefully. Never upload `.env`, database passwords, or API secrets.

---

## 🧪 Testing Checklist

Use this checklist during development and before the final demonstration.

- [ ] The server starts without errors.
- [ ] MongoDB connects successfully.
- [ ] The API health check returns a successful response.
- [ ] The homepage loads.
- [ ] Movies saved in MongoDB appear on the homepage.
- [ ] Search returns matching movie titles.
- [ ] Genre filtering works.
- [ ] Movie details show the correct information.
- [ ] A new movie can be added.
- [ ] An existing movie can be edited.
- [ ] A movie can be deleted.
- [ ] The watchlist can save and remove favourites.
- [ ] The application displays useful messages for empty results and errors.
- [ ] The layout works on desktop and mobile screen sizes.
- [ ] No secrets or `.env` files are committed to GitHub.
- [ ] The team tests the merged application from a clean clone of the repository.

---

## 🔐 Security Notes

- Do not commit `.env` or credentials to GitHub.
- Use a dedicated MongoDB database user with only the permissions required by the project.
- Restrict MongoDB Atlas network access instead of allowing unrestricted access where possible.
- The current admin endpoints do not enforce authentication or authorization. Add those controls before public deployment.
- Validate and sanitize user-provided data.
- Do not store user passwords as plain text if account functionality is added.
- The watchlist currently uses browser `localStorage`; it is not a secure, account-based storage system.

---

## ⚠️ Current Limitations

- The application does not currently have user registration or login.
- Admin operations are not protected by authentication.
- The watchlist is stored only in the current browser.
- Movie posters depend on valid image URLs supplied for each movie.
- Movie data must be entered by the project team; an external movie database API is not integrated.
- The application requires a working MongoDB connection to start.

These are areas for future improvement and should be considered before deployment.

---

## 🚀 Future Enhancements

1. User registration and secure login.
2. Admin authentication and role-based access control.
3. User-specific watchlists stored in MongoDB.
4. Movie ratings and reviews submitted by users.
5. Pagination and improved sorting.
6. Integration with a movie information API.
7. Improved input validation and automated tests.
8. Deployment of the frontend and backend to a hosting platform.
9. More accessible design and improved mobile experience.

---

## 📝 Conclusion

ReelView demonstrates a full-stack web application that combines a responsive frontend, a Node.js and Express.js backend, REST API communication, and MongoDB data storage. The project gives the team practical experience in modular development, CRUD operations, database modelling, debugging, and collaborative software development using Git and GitHub.

The project can be extended with secure user accounts, personalized watchlists, ratings, reviews, and deployment after the current features are tested and the security limitations are addressed.

---

**Developed by:**  
Devika A B · Devika B S · Devika S · Devipriya P · Devu L S

**LBS Institute of Technology for Women, Poojapura**  
**S5 IT · September 2026**
