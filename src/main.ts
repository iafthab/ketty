// Animation on Scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      container.classList.add("animate-spark");
      halfCircle.classList.add("animate-sparkOut");
    } else {
      container.classList.remove("animate-spark");
      halfCircle.classList.remove("animate-sparkOut");
    }
  });
});

const halfCircle = document.getElementById("half_circle") as HTMLDivElement;
const container = document.getElementById("list_container") as HTMLDivElement;
observer.observe(container);

// player
const player = document.getElementById("player") as HTMLAudioElement;
player.volume = 0.3;

// controls
const volUp = document.getElementById("volUp");
volUp?.addEventListener("click", () => {
  if (player.volume < 0.9) player.volume = player.volume + 0.1;
  console.log("volup clicked");
});

const volDown = document.getElementById("volDown");
volDown?.addEventListener("click", () => {
  if (player.volume > 0.2) player.volume = player.volume - 0.1;
  console.log("voldown clicked");
});

const mute = document.getElementById("mute");
mute?.addEventListener("click", () => {
  player.muted = player.muted ? false : true;
  console.log("mute clicked");
});

const tune = document.getElementById("tune");
tune?.addEventListener("click", () => {
  player.muted = false;
  console.log("clicked");
});
