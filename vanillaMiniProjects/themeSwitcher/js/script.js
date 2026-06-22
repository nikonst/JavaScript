const rootElement = document.documentElement;

// Target the three separate theme buttons
const lightBtn = document.getElementById('theme-light');
const darkBtn = document.getElementById('theme-dark');
const redBtn = document.getElementById('theme-red');

// Check local storage or system preference on load
const savedTheme = localStorage.getItem('theme');
const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const initialTheme = savedTheme || (systemPrefersDark ? 'dark' : 'light');

// Apply the initial theme
rootElement.setAttribute('data-theme', initialTheme);

// Helper function to update the theme attribute and save it
const setTheme = (themeName) => {
    rootElement.setAttribute('data-theme', themeName);
    localStorage.setItem('theme', themeName);
};

// Event listeners for individual theme buttons
lightBtn.addEventListener('click', () => setTheme('light'));
darkBtn.addEventListener('click', () => setTheme('dark'));
redBtn.addEventListener('click', () => setTheme('red'));
