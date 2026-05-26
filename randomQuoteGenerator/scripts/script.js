// DOM Elements
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const newQuoteBtn = document.getElementById('new-quote-btn');

// Async function to fetch a specific quote by ID
async function getNewQuote() {
    // Show a temporary loading state
    quoteText.textContent = "Loading new quote...";
    authorText.textContent = "";
    
    try {
        // Generate a random ID between 1 and 100
        const randomId = Math.floor(Math.random() * 100) + 1;
        const apiUrl = "https://dummyjson.com/comments/" + randomId;
        const response = await fetch(apiUrl);
        
        if (!response.ok) {
            throw new Error("HTTP status error: " + response.status);
        }
        
        const data = await response.json();
        
        // Fixed: dummyjson uses .body and .user.username
        quoteText.textContent = '"' + data.body + '"';
        authorText.textContent = "- " + data.user.username;
    } catch (error) {
        console.error("Error fetching the quote:", error);
        quoteText.textContent = "Oops! Something went wrong.";
        authorText.textContent = "- Error Loader";
    }
}

// Event Listeners
newQuoteBtn.addEventListener('click', getNewQuote);

// Fixed: Removed getNewQuote() from here so "Press the button to start" shows first
