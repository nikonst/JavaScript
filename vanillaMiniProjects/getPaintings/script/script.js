// DOM elements
const artContainer = document.getElementById('artContainer');
const loader = document.getElementById('loader');
const artImage = document.getElementById('artImage');
const artTitle = document.getElementById('artTitle');
const artArtist = document.getElementById('artArtist');
const artDate = document.getElementById('artDate');
const refreshBtn = document.getElementById('refreshBtn');

let cachedObjectIds = [];

async function initializeGallery() {
    showLoader(true);
    try {

        const baseUrl = 'https://collectionapi.metmuseum.org/public/collection/v1/search';

        const params = new URLSearchParams({
            q: 'Van Gogh',
            hasImages: 'true'
        });

        const response = await fetch(`${baseUrl}?${params.toString()}`);
        const data = await response.json();

        if (data.objectIDs && data.objectIDs.length > 0) {
            cachedObjectIds = data.objectIDs;
            fetchRandomArtwork();
        } else {
            loader.textContent = 'No artworks found.';
        }
    } catch (error) {
        loader.textContent = 'Failed to fetch search results.';
        console.error('Fetch Error:', error);
    }
}

// Step 2: Pick a random ID from our cache and fetch its specific data
async function fetchRandomArtwork() {
    showLoader(true);

    const randomIndex = Math.floor(Math.random() * cachedObjectIds.length);
    const objectId = cachedObjectIds[randomIndex];

    try {
        const response = await fetch(
            `https://collectionapi.metmuseum.org/public/collection/v1/objects/${objectId}`
        );
        const artwork = await response.json();

        if (!artwork.primaryImage) {
            // If no image, try another one recursively
            fetchRandomArtwork();
            return;
        }

        // Inject data into DOM
        artImage.src = artwork.primaryImage;
        artTitle.textContent = artwork.title || 'Untitled';
        artArtist.textContent = artwork.artistDisplayName || 'Unknown Artist';
        artDate.textContent = artwork.objectDate || '';

        showLoader(false);
    } catch (error) {
        console.error('Error fetching artwork details:', error);
        // Try again with a different random ID if one fails
        fetchRandomArtwork();
    }
}

function showLoader(isLoading) {
    if (isLoading) {
        loader.classList.remove('hidden');
        artContainer.classList.add('hidden');
    } else {
        loader.classList.add('hidden');
        artContainer.classList.remove('hidden');
    }
}

// Event Listeners
refreshBtn.addEventListener('click', fetchRandomArtwork);

// Start the application
initializeGallery();
