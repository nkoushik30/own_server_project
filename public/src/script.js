// Text for typing animation
const text = "My own server Hosting using userland Ubuntu";
let index = 0;

const mainText = document.getElementById("mainText");

// Typing Effect
function typeEffect() {
  if (index < text.length) {
    mainText.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeEffect, 80);
  }
}

typeEffect();


// Create Floating Particles
const particles = document.getElementById("particles");

for (let i = 0; i < 50; i++) {

  const span = document.createElement("span");

  const size = Math.random() * 8 + 2;
  const left = Math.random() * 100;
  const duration = Math.random() * 10 + 5;

  span.style.width = size + "px";
  span.style.height = size + "px";
  span.style.left = left + "%";
  span.style.animationDuration = duration + "s";

  particles.appendChild(span);
}


// Button Click
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  alert("Welcome to Your Ubuntu Server!");
});
