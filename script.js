// Party date and time (YYYY-MM-DDTHH:MM)
const partyDate = new Date("2026-11-23T19:00:00");

function tick() {
  const diff = Math.max(0, partyDate - new Date());
  const s = Math.floor(diff / 1000);
  document.getElementById("d").textContent = Math.floor(s / 86400);
  document.getElementById("h").textContent = Math.floor(s % 86400 / 3600);
  document.getElementById("m").textContent = Math.floor(s % 3600 / 60);
  document.getElementById("s").textContent = s % 60;
}
tick();
setInterval(tick, 1000);

const colors = ["#ff5c8a", "#ffc93c", "#2ec4b6", "#ffffff"];
const box = document.getElementById("confetti");
for (let i = 0; i < 40; i++) {
  const p = document.createElement("i");
  p.style.left = Math.random() * 100 + "%";
  p.style.background = colors[i % colors.length];
  p.style.animationDuration = 4 + Math.random() * 5 + "s";
  p.style.animationDelay = -Math.random() * 8 + "s";
  box.appendChild(p);
}

document.getElementById("rsvp").addEventListener("click", () => {
  document.getElementById("thanks").textContent = "Yay! See you at the party 🥳";
});