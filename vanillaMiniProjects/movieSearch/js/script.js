const API_KEY = 'YOUR_API_KEY_HERE';
const searchInput = document.getElementById('search-input');
const resultsGrid = document.getElementById('results-grid');
const loader = document.getElementById('loader');
const errorMessage = document.getElementById('error-message');

let timeoutId;

// Debounce function to wait until user stops typing
searchInput.addEventListener('input', (e) => {
    clearTimeout(timeoutId);
    const query = e.target.value.trim();

    if (!query) {
        resultsGrid.innerHTML = '';
        return;
    }

    timeoutId = setTimeout(() => {
        fetchMovies(query);
    }, 400); // Waits 400ms after last keystroke
});

async function fetchMovies(query) {
    showLoader(true);
    showError('');

    try {
        const response = await fetch(`https://omdbapi.com{query}&apikey=${API_KEY}`);
        const data = await response.json();

        if (data.Response === "True") {
            displayMovies(data.Search);
        } else {
            displayMovies([]);
            showError(data.Error);
        }
    } catch (err) {
        showError('Failed to fetch data. Check your connection.');
    } finally {
        showLoader(false);
    }
}

function displayMovies(movies) {
    resultsGrid.innerHTML = movies.map(movie => `
    <div class="movie-card">
      <img src="${movie.Poster !== 'N/A' ? movie.Poster : 'https://placeholder.com'}" alt="${movie.Title}">
      <h3>${movie.Title}</h3>
      <p>${movie.Year}</p>
    </div>
  `).join('');
}

function showLoader(show) {
    loader.className = show ? '' : 'hidden';
}

function showError(msg) {
    errorMessage.textContent = msg;
    errorMessage.className = msg ? '' : 'hidden';
}
