const toggleBtn = document.getElementById('theme-toggle');
const rootElement = document.documentElement;

// Check local storage or system preference on load
const savedTheme = localStorage.getItem('theme');
const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const initialTheme = savedTheme || (systemPrefersDark ? 'dark' : 'light');

rootElement.setAttribute('data-theme', initialTheme);

// Toggle theme on click
toggleBtn.addEventListener('click', () => {
    const currentTheme = rootElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';

    rootElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
});
