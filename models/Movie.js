const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Movie title is required."],
    trim: true,
    maxlength: [120, "Title must be 120 characters or fewer."]
  },
  year: {
    type: Number,
    required: [true, "Release year is required."],
    min: [1888, "Enter a valid release year."],
    max: [2100, "Enter a valid release year."]
  },
  genre: {
    type: String,
    required: [true, "Genre is required."],
    trim: true
  },
  rating: {
    type: Number,
    default: 0,
    min: [0, "Rating must be at least 0."],
    max: [10, "Rating cannot exceed 10."]
  },
  director: { type: String, trim: true, default: "" },
  poster: { type: String, trim: true, default: "" },
  description: { type: String, trim: true, default: "", maxlength: 1000 }
}, { timestamps: true });

module.exports = mongoose.model("Movie", movieSchema);