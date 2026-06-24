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

    const html = movies
        .map((m) => {
            const title = m['#title'] || 'Unknown Title';
            const year = m['#year'] || 'N/A';
            const poster = m['#img'] || fallbackImg;

            return `
                <div class="movie-card">
                    <img src="${poster}" alt="${title}" onerror="this.src='${fallbackImg}'">
                    <h3>${title}</h3>
                    <p>${year}</p>
                </div>
            `;
        })
        .join('');

    resultsGrid.innerHTML = html;
}


// ===== EVENT LISTENER =====
searchInput.addEventListener(
    'input',
    debounce((e) => {
        const query = e.target.value.trim();
        if (query.length < 2) {
            resultsGrid.innerHTML = '';
            showError('');
            return;
        }
        searchMovies(query);
    }, 400)
);
