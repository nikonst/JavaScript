const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");
const weatherBox = document.getElementById("weatherBox");

const cityNameEl = document.getElementById("cityName");
const tempEl = document.getElementById("temp");
const descEl = document.getElementById("desc");
const iconEl = document.getElementById("icon");

async function getWeather(city) {
    // 1) Convert city → coordinates
    const geo = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1`
    ).then(r => r.json());

    if (!geo.results || geo.results.length === 0) {
        alert("City not found");
        return;
    }

    const { latitude, longitude, name, country } = geo.results[0];

    // 2) Fetch weather
    const weather = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
    ).then(r => r.json());

    const w = weather.current_weather;

    // 3) Map weather code → icon + description
    const map = {
        0: ["☀️", "Clear sky"],
        1: ["🌤️", "Mainly clear"],
        2: ["⛅", "Partly cloudy"],
        3: ["☁️", "Overcast"],
        45: ["🌫️", "Fog"],
        48: ["🌫️", "Depositing rime fog"],
        51: ["🌦️", "Light drizzle"],
        61: ["🌧️", "Rain"],
        71: ["❄️", "Snow"],
        95: ["⛈️", "Thunderstorm"]
    };

    const [emoji, desc] = map[w.weathercode] || ["❓", "Unknown"];

    // 4) Update UI
    cityNameEl.textContent = `${name}, ${country}`;
    tempEl.textContent = `${w.temperature}°C`;
    descEl.textContent = desc;
    iconEl.src = `https://dummyimage.com/60x60/ffffff/000000&text=${emoji}`;

    weatherBox.classList.remove("hidden");
}

searchBtn.addEventListener("click", () => {
    const city = cityInput.value.trim();
    if (city) getWeather(city);
});
