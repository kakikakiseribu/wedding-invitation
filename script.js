function openInvitation() {
  document.getElementById("cover").style.display = "none";
  const music = document.getElementById("bg-music");
  music.play();
}

const weddingDate = new Date("2026-12-12");

setInterval(() => {
  const now = new Date().getTime();
  const distance = weddingDate - now;

  if (distance < 0) return;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  document.querySelector(".date").innerText =
    `${days} Hari menuju acara pernikahan`;
}, 1000);
