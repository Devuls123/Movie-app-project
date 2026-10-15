# CineVault — Movie App

A full-stack movie catalogue project using HTML, CSS, JavaScript, Node.js, Express, MongoDB and Mongoose.

## Features
- Browse movie records in a responsive interface
- Search by title and filter by genre
- Add, view, edit and delete movies (CRUD)
- REST API with server-side validation
- MongoDB persistence
- Responsive layout for mobile and desktop

## Requirements
- Node.js (LTS recommended)
- MongoDB Community Server running locally, or a MongoDB Atlas connection string
- A terminal and code editor such as VS Code

## Setup

1. Extract the project ZIP and open its folder in VS Code.
2. Install dependencies:

   ```bash
   npm install
   ```

3. Copy `.env.example` to a new file named `.env`. Keep the default URI for local MongoDB:

   ```env
   PORT=3000
   MONGODB_URI=mongodb://127.0.0.1:27017/movie_app
   ```

   If using MongoDB Atlas, replace `MONGODB_URI` with your Atlas connection string. Do not share or commit `.env`.

4. Start MongoDB locally if you are using the local connection.
5. Start the app:

   ```bash
   npm start
   ```

6. Open **http://localhost:3000** in your browser.

## API endpoints

| Method | Endpoint | Purpose |
|---|---|---|
| GET | `/api/movies` | List movies |
| GET | `/api/movies?search=batman` | Search by title |
| GET | `/api/movies?genre=Drama` | Filter by genre |
| GET | `/api/movies/:id` | Get one movie |
| POST | `/api/movies` | Create a movie |
| PUT | `/api/movies/:id` | Update a movie |
| DELETE | `/api/movies/:id` | Delete a movie |

Example JSON body for POST or PUT:

```json
{
  "title": "Interstellar",
  "year": 2014,
  "genre": "Sci-Fi",
  "rating": 8.7,
  "director": "Christopher Nolan",
  "poster": "https://example.com/interstellar.jpg",
  "description": "A team travels beyond Earth in search of a future for humanity."
}
```

## Database
MongoDB creates the `movie_app` database and `movies` collection when the first record is saved. The schema is in `models/Movie.js`.

## Troubleshooting
- **MongoDB connection failed:** confirm the MongoDB service is running and `MONGODB_URI` is correct.
- **Port in use:** change `PORT=3001` in `.env`, restart, and open `http://localhost:3001`.
- **No movie cards:** add a movie using the button. The app does not depend on a preloaded sample dataset.
- **Poster not showing:** use a direct public image URL beginning with `https://` or leave the field empty.

## Note
This is an academic starter project. It does not include login/authentication, so do not expose it publicly with unrestricted create/update/delete routes without adding appropriate security.
