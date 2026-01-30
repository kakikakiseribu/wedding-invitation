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

const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  },
  { threshold: 0.2 }
);

reveals.forEach(el => observer.observe(el));

const music = document.getElementById("bg-music");
const musicBtn = document.getElementById("music-btn");

musicBtn.onclick = () => {
  if (music.paused) {
    music.play();
    musicBtn.textContent = "⏸";
  } else {
    music.pause();
    musicBtn.textContent = "▶";
  }
};

// const params = new URLSearchParams(window.location.search);
// const guest = params.get("to");
// 
// if (guest) {
//   document.getElementById("guest-name").innerText =
//     `Kepada Yth: ${guest}`;
// }

const params = new URLSearchParams(window.location.search);
let guest = params.get("to");

if (guest) {
  guest = decodeURIComponent(guest).replace(/\+/g, " ");
  document.getElementById("guest-name").innerText =
    `Kepada Yth: ${guest}`;
} else {
  document.getElementById("guest-name").innerText =
    "Kepada Yth: Bapak/Ibu/Saudara/i";
}

function openInvitation() {
  const cover = document.getElementById("cover");
  const music = document.getElementById("bg-music");

  cover.classList.add("hide");
  music.play();

  setTimeout(() => {
    cover.style.display = "none";
  }, 1000);
}

const galleryImages = document.querySelectorAll(".gallery img");

const galleryObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.2 }
);

galleryImages.forEach(img => galleryObserver.observe(img));


