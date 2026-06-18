let startTime = 0;
let elapsedTime = 0;
let intervalId;

const display = document.getElementById("display");

function formatTime(ms) {
  const totalSeconds = Math.floor(ms / 1000);
  const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, "0");
  const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, "0");
  const seconds = String(totalSeconds % 60).padStart(2, "0");
  return `${hours}:${minutes}:${seconds}`;
}

document.getElementById("start").onclick = () => {
  startTime = Date.now() - elapsedTime;
  intervalId = setInterval(() => {
    elapsedTime = Date.now() - startTime;
    display.textContent = formatTime(elapsedTime);
  }, 100);
};

document.getElementById("stop").onclick = () => {
  clearInterval(intervalId);
};

document.getElementById("reset").onclick = () => {
  clearInterval(intervalId);
  elapsedTime = 0;
  display.textContent = "00:00:00";
};

document.querySelectorAll("button").forEach(btn => {
  btn.addEventListener("click", function(e) {
    const rect = this.getBoundingClientRect();
    const ripple = this.querySelector("::after");
  });
});
