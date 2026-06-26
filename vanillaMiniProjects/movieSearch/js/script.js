// ===== DOM ELEMENTS =====
const searchInput = document.querySelector('#search-input');
const resultsGrid = document.querySelector('#results-grid');
const loader = document.querySelector('#loader');
const errorBox = document.querySelector('#error-message');

// ===== UTILITIES =====
const debounce = (fn, delay = 400) => {
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => fn(...args), delay);
    };
};

const showLoader = (state) => {
    loader.classList.toggle('hidden', !state);
};

const showError = (msg = '') => {
    errorBox.textContent = msg;
    errorBox.classList.toggle('hidden', msg === '');
};

const clearBtn = document.querySelector('#clear-btn');

// Show/hide clear button while typing
searchInput.addEventListener('input', () => {
    clearBtn.style.display = searchInput.value.trim() ? 'flex' : 'none';
});

// Clear everything on click
clearBtn.addEventListener('click', () => {
    searchInput.value = '';
    clearBtn.style.display = 'none';
    resultsGrid.innerHTML = '';
    showError('');
});

// ===== API CALL =====
async function searchMovies(query) {
    showLoader(true);
    showError('');
    resultsGrid.innerHTML = '';

    const url = `https://imdb.iamidiotareyoutoo.com/search?q=${encodeURIComponent(query)}&tt=&lsn=1&v=1`;

    try {
        const res = await fetch(url);
        const data = await res.json();

        const movies = data?.description || [];

        if (movies.length === 0) {
            showError('No movies found.');
            return;
        }

        renderMovies(movies);
    } catch (err) {
        showError('Network error. Try again later.');
        console.error(err);
    } finally {
        showLoader(false);
    }
}

// ===== RENDERING =====
function renderMovies(movies) {
    const fallbackImg = "https://placehold.co/300x450?text=No+Image";

    // Clear grid safely
    while (resultsGrid.firstChild) {
        resultsGrid.removeChild(resultsGrid.firstChild);
    }

    if (!movies || movies.length === 0) {
        showError("No movies found.");
        return;
    }

    movies.forEach(movie => {
        const title = movie["#TITLE"] || "Unknown Title";
        const year = movie["#YEAR"] || "N/A";
        const poster = movie["#IMG_POSTER"] || fallbackImg;

        const card = document.createElement("div");
        card.className = "movie-card";

        card.innerHTML = `
            <img src="${poster}" alt="${title}" onerror="this.src='${fallbackImg}'">
            <h3>${title}</h3>
            <p>${year}</p>
        `;

        resultsGrid.appendChild(card);
    });
}

// ===== EVENT LISTENER =====
searchInput.addEventListener(
    'input',
    debounce((e) => {
        const query = e.target.value.trim();
        if (query.length < 2) {
            while (resultsGrid.firstChild) {
                resultsGrid.removeChild(resultsGrid.firstChild);
            }

            showError('');
            return;
        }
        searchMovies(query);
    }, 400)
);
