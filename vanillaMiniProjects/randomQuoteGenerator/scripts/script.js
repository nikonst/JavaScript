// DOM Elements
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const newQuoteBtn = document.getElementById('new-quote-btn');

// Async function to fetch a specific quote by ID
async function getNewQuote() {
    quoteText.textContent = "Loading new quote...";
    authorText.textContent = "";

    try {
        const response = await fetch("https://zenquotes.io/api/random");

        if (!response.ok) {
            throw new Error("HTTP status error: " + response.status);
        }

        const data = await response.json();

        quoteText.textContent = `"${data[0].q}"`;
        authorText.textContent = `- ${data[0].a}`;
    } catch (error) {
        console.error("Error fetching the quote:", error);
        quoteText.textContent = "Oops! Something went wrong.";
        authorText.textContent = "- Error Loader";
    }
}


// Event Listeners
newQuoteBtn.addEventListener('click', getNewQuote);

// Fixed: Removed getNewQuote() from here so "Press the button to start" shows first
