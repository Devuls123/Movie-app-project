require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const Movie = require("./models/Movie");

const app = express();
const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/movie_app";

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// Connect to MongoDB, then start the server.
mongoose.connect(MONGODB_URI)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => console.log(`Movie App running at http://localhost:${PORT}`));
  })
  .catch((error) => {
    console.error("MongoDB connection failed:", error.message);
    console.error("Check that MongoDB is running and your MONGODB_URI is correct.");
    process.exit(1);
  });

// GET /api/movies?search=...&genre=...
app.get("/api/movies", async (req, res) => {
  try {
    const { search = "", genre = "" } = req.query;
    const filter = {};

    if (search.trim()) {
      filter.title = { $regex: search.trim(), $options: "i" };
    }
    if (genre.trim() && genre !== "All Genres") {
      filter.genre = genre;
    }

    const movies = await Movie.find(filter).sort({ createdAt: -1 });
    res.json(movies);
  } catch (error) {
    res.status(500).json({ message: "Unable to retrieve movies." });
  }
});

// GET /api/movies/:id
app.get("/api/movies/:id", async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);
    if (!movie) return res.status(404).json({ message: "Movie not found." });
    res.json(movie);
  } catch {
    res.status(400).json({ message: "Invalid movie ID." });
  }
});

// POST /api/movies
app.post("/api/movies", async (req, res) => {
  try {
    const movie = await Movie.create(req.body);
    res.status(201).json(movie);
  } catch (error) {
    res.status(400).json({
      message: error.name === "ValidationError"
        ? Object.values(error.errors).map((item) => item.message).join(" ")
        : "Could not create movie. Check the submitted details."
    });
  }
});

// PUT /api/movies/:id
app.put("/api/movies/:id", async (req, res) => {
  try {
    const movie = await Movie.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    if (!movie) return res.status(404).json({ message: "Movie not found." });
    res.json(movie);
  } catch (error) {
    res.status(400).json({
      message: error.name === "ValidationError"
        ? Object.values(error.errors).map((item) => item.message).join(" ")
        : "Could not update movie. Check the submitted details."
    });
  }
});

// DELETE /api/movies/:id
app.delete("/api/movies/:id", async (req, res) => {
  try {
    const movie = await Movie.findByIdAndDelete(req.params.id);
    if (!movie) return res.status(404).json({ message: "Movie not found." });
    res.json({ message: "Movie deleted successfully." });
  } catch {
    res.status(400).json({ message: "Invalid movie ID." });
  }
});

// Return the app page for the root URL.
app.get("/", (_req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});