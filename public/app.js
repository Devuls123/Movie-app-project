const movieGrid = document.getElementById("movieGrid");
const searchInput = document.getElementById("searchInput");
const genreFilter = document.getElementById("genreFilter");
const resultCount = document.getElementById("resultCount");
const emptyState = document.getElementById("emptyState");
const notice = document.getElementById("notice");
const movieDialog = document.getElementById("movieDialog");
const detailDialog = document.getElementById("detailDialog");
const movieForm = document.getElementById("movieForm");
const formError = document.getElementById("formError");
let searchTimer;

const $ = (id) => document.getElementById(id);
const palettes = [
  ["#6c3f52", "#171c2c"], ["#b36c43", "#26203a"], ["#31626a", "#171e2c"],
  ["#6d5b90", "#1b1a2b"], ["#87603e", "#22202a"], ["#435e80", "#171b2b"]
];

function escapeHTML(value = "") {
  return String(value).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  }[char]));
}
function safeImageUrl(value = "") {
  try {
    const url = new URL(value);
    return ["http:", "https:"].includes(url.protocol) ? url.href : "";
  } catch { return ""; }
}
function showNotice(message, isError = false) {
  notice.textContent = message;
  notice.classList.toggle("error", isError);
  notice.hidden = false;
  window.clearTimeout(showNotice.timer);
  showNotice.timer = window.setTimeout(() => { notice.hidden = true; }, 4200);
}
async function api(url, options = {}) {
  const response = await fetch(url, {
    ...options,
    headers: { "Content-Type": "application/json", ...(options.headers || {}) }
  });
  const body = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(body.message || "Something went wrong.");
  return body;
}
function fallbackPoster(title, index) {
  const colors = palettes[index % palettes.length];
  const initials = title.split(/\s+/).slice(0, 2).map(word => word[0]).join("").toUpperCase();
  return `<div class="poster-placeholder" style="--poster-a:${colors[0]};--poster-b:${colors[1]}">${escapeHTML(initials)}</div>`;
}
function movieCard(movie, index) {
  const imageUrl = safeImageUrl(movie.poster);
  const poster = imageUrl
    ? `<img src="${escapeHTML(imageUrl)}" alt="${escapeHTML(movie.title)} poster" loading="lazy" onerror="this.replaceWith(Object.assign(document.createElement('div'),{className:'poster-placeholder',textContent:'${escapeHTML(movie.title.slice(0,2).toUpperCase())}'}))">`
    : fallbackPoster(movie.title, index);
  return `
    <article class="movie-card" data-id="${escapeHTML(movie._id)}">
      <div class="movie-poster" data-action="details" data-id="${escapeHTML(movie._id)}">
        ${poster}
        <span class="movie-rating">★ ${Number(movie.rating || 0).toFixed(1)}</span>
        <div class="movie-overlay">
          <button class="mini-button" data-action="details" data-id="${escapeHTML(movie._id)}">View details</button>
        </div>
      </div>
      <div class="movie-info">
        <div class="movie-title-row"><h3 class="movie-title">${escapeHTML(movie.title)}</h3><span class="movie-year">${escapeHTML(movie.year)}</span></div>
        <div class="movie-meta">${escapeHTML(movie.genre)}${movie.director ? " · " + escapeHTML(movie.director) : ""}</div>
        <div class="card-actions">
          <button data-action="edit" data-id="${escapeHTML(movie._id)}">✎ Edit</button>
          <button data-action="delete" data-id="${escapeHTML(movie._id)}">⌫ Delete</button>
        </div>
      </div>
    </article>`;
}
async function loadMovies() {
  movieGrid.innerHTML = '<div class="loading-state">Opening the curtains<span>•••</span></div>';
  emptyState.hidden = true;
  const params = new URLSearchParams();
  if (searchInput.value.trim()) params.set("search", searchInput.value.trim());
  if (genreFilter.value !== "All Genres") params.set("genre", genreFilter.value);
  try {
    const movies = await api(`/api/movies?${params.toString()}`);
    movieGrid.innerHTML = movies.map(movieCard).join("");
    resultCount.textContent = `${movies.length} ${movies.length === 1 ? "movie" : "movies"}`;
    emptyState.hidden = movies.length !== 0;
    movieGrid.hidden = movies.length === 0;
  } catch (error) {
    movieGrid.innerHTML = "";
    movieGrid.hidden = true;
    resultCount.textContent = "Unable to load";
    showNotice(`${error.message} Is the server and MongoDB running?`, true);
  }
}
function openAddDialog() {
  movieForm.reset();
  $("movieId").value = "";
  $("rating").value = "0";
  $("dialogTitle").textContent = "Add a movie";
  $("saveButton").textContent = "Save movie ↗";
  formError.hidden = true;
  movieDialog.showModal();
}
async function openEditDialog(id) {
  try {
    const movie = await api(`/api/movies/${id}`);
    $("movieId").value = movie._id;
    $("title").value = movie.title;
    $("year").value = movie.year;
    $("genre").value = movie.genre;
    $("rating").value = movie.rating ?? 0;
    $("director").value = movie.director || "";
    $("poster").value = movie.poster || "";
    $("description").value = movie.description || "";
    $("dialogTitle").textContent = "Edit movie";
    $("saveButton").textContent = "Update movie ↗";
    formError.hidden = true;
    movieDialog.showModal();
  } catch (error) { showNotice(error.message, true); }
}
async function openDetails(id) {
  try {
    const movie = await api(`/api/movies/${id}`);
    const image = safeImageUrl(movie.poster);
    const poster = image
      ? `<img class="detail-poster" src="${escapeHTML(image)}" alt="${escapeHTML(movie.title)} poster">`
      : `<div class="detail-poster poster-placeholder">${escapeHTML(movie.title.slice(0,2).toUpperCase())}</div>`;
    $("detailContent").innerHTML = `
      <div class="detail-layout">${poster}<div class="detail-copy">
        <div class="eyebrow">MOVIE DETAILS</div><h2>${escapeHTML(movie.title)}</h2>
        <div class="detail-tags">${escapeHTML(movie.genre)} · ${escapeHTML(movie.year)}</div>
        <div class="detail-rating">★ ${Number(movie.rating || 0).toFixed(1)} / 10</div>
        <h4>DIRECTOR</h4><p>${escapeHTML(movie.director || "Not specified")}</p>
        <h4>SYNOPSIS</h4><p>${escapeHTML(movie.description || "No synopsis added yet.")}</p>
        <button class="primary-button" data-action="edit" data-id="${escapeHTML(movie._id)}">✎ Edit movie</button>
      </div></div>`;
    detailDialog.showModal();
  } catch (error) { showNotice(error.message, true); }
}
movieForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  formError.hidden = true;
  const id = $("movieId").value;
  const movie = {
    title: $("title").value.trim(),
    year: Number($("year").value),
    genre: $("genre").value,
    rating: Number($("rating").value || 0),
    director: $("director").value.trim(),
    poster: $("poster").value.trim(),
    description: $("description").value.trim()
  };
  if (!movie.title || !movie.genre || !movie.year) {
    formError.textContent = "Please complete all required fields.";
    formError.hidden = false;
    return;
  }
  try {
    await api(id ? `/api/movies/${id}` : "/api/movies", {
      method: id ? "PUT" : "POST",
      body: JSON.stringify(movie)
    });
    movieDialog.close();
    showNotice(id ? "Movie updated successfully." : "Movie added to your collection.");
    await loadMovies();
  } catch (error) {
    formError.textContent = error.message;
    formError.hidden = false;
  }
});
document.addEventListener("click", async (event) => {
  const actionButton = event.target.closest("[data-action]");
  if (actionButton) {
    event.preventDefault();
    event.stopPropagation();
    const { action, id } = actionButton.dataset;
    if (action === "details") return openDetails(id);
    if (action === "edit") {
      detailDialog.close();
      return openEditDialog(id);
    }
    if (action === "delete") {
      const confirmed = window.confirm("Delete this movie from your collection?");
      if (!confirmed) return;
      try {
        await api(`/api/movies/${id}`, { method: "DELETE" });
        showNotice("Movie deleted.");
        await loadMovies();
      } catch (error) { showNotice(error.message, true); }
    }
  }
});
$("addMovieTop").addEventListener("click", openAddDialog);
$("addMovieMain").addEventListener("click", openAddDialog);
$("emptyAdd").addEventListener("click", openAddDialog);
$("closeDialog").addEventListener("click", () => movieDialog.close());
$("cancelDialog").addEventListener("click", () => movieDialog.close());
$("closeDetail").addEventListener("click", () => detailDialog.close());
searchInput.addEventListener("input", () => {
  clearTimeout(searchTimer);
  searchTimer = setTimeout(loadMovies, 250);
});
genreFilter.addEventListener("change", loadMovies);
document.addEventListener("keydown", (event) => {
  if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
    event.preventDefault();
    searchInput.focus();
  }
});
loadMovies();