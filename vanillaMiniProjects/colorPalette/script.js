const palette = document.getElementById("palette");
const generateBtn = document.getElementById("generate");

const COUNT = 5;

function randomHex() {
    return "#" + Math.floor(Math.random() * 0xffffff)
        .toString(16)
        .padStart(6, "0");
}

function generate() {
    palette.innerHTML = "";

    for (let i = 0; i < COUNT; i++) {
        const color = randomHex();   // only declare once
        const textColor = getTextColor(color);

        const col = document.createElement("div");
        col.className = "col-md-2 col-sm-4 col-6";

        const box = document.createElement("div");
        box.className = "color-box";
        box.style.background = color;
        box.style.color = textColor;
        box.textContent = color.toUpperCase();

        box.addEventListener("click", () => {
            navigator.clipboard.writeText(color);
            box.textContent = "Copied!";
            setTimeout(() => (box.textContent = color.toUpperCase()), 600);
        });

        col.appendChild(box);
        palette.appendChild(col);
    }
}

function getTextColor(hex) {
    const r = parseInt(hex.substr(1, 2), 16);
    const g = parseInt(hex.substr(3, 2), 16);
    const b = parseInt(hex.substr(5, 2), 16);

    const brightness = (r * 299 + g * 587 + b * 114) / 1000;

    return brightness > 150 ? "#000" : "#fff";
}

generateBtn.addEventListener("click", generate);
generate();
