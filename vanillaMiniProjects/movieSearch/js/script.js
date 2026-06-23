const searchInput = document.getElementById('search-input');
const resultsGrid = document.getElementById('results-grid');
const loader = document.getElementById('loader');
const errorMessage = document.getElementById('error-message');

let timeoutId;

// Debounce listener to restrict API requests while typing
searchInput.addEventListener('input', (e) => {
    clearTimeout(timeoutId);
    const query = e.target.value.trim();

    if (!query) {
        resultsGrid.innerHTML = '';
        return;
    }

    timeoutId = setTimeout(() => {
        fetchMovies(query);
    }, 400); // Wait 400ms after the last keypress
});

async function fetchMovies(query) {
    showLoader(true);
    showError('');

    try {
        // Constructing the URL with the exact mandatory query string structure
        const baseUrl = 'https://imdb.iamidiotareyoutoo.com/search';
        const queryString = `?q=${encodeURIComponent(query)}&tt=&lsn=1&v=1`;

        const response = await fetch(baseUrl + queryString);
        const data = await response.json();

        // The API wraps search results inside a 'description' key array
        if (data && data.description && data.description.length > 0) {
            displayMovies(data.description);
        } else {
            displayMovies([]);
            showError('No movies found matching that title.');
        }
    } catch (err) {
        showError('Failed to fetch movie data. Please check your network.');
        console.error(err);
    } finally {
        showLoader(false);
    }
}


function displayMovies(movies) {
    resultsGrid.innerHTML = movies.map(movie => {
        // FM-DB specific keys: '#title', '#year', '#img', and '#imdbId'
        const title = movie["#title"] || "Unknown Title";
        const year = movie["#year"] || "N/A";
        const poster = movie["#img"] || "https://placeholder.com";
        const imdbId = movie["#imdbId"];

        return `
      <div class="movie-card" data-id="${imdbId}">
        <img src="${poster}" alt="${title}" onerror="this.src='https://placeholder.com'">
        <h3>${title}</h3>
        <p>Year: ${year}</p>
      </div>
    `;
    }).join('');
}

function showLoader(show) {
    loader.className = show ? '' : 'hidden';
}

function showError(msg) {
    errorMessage.textContent = msg;
    errorMessage.className = msg ? '' : 'hidden';
}
