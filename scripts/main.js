document.addEventListener("DOMContentLoaded", function () {
  const title = document.querySelector(".title");
  const text = title.textContent;
  title.innerHTML = "";

  text.split("").forEach((char, i) => {
    let span = document.createElement("span");
    span.textContent = char;
    span.style.animationDelay = `${i * 0.1}s`;
    title.appendChild(span);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const subtitle = document.querySelector(".subtitle");
  setTimeout(() => {
    subtitle.style.opacity = "1";
    subtitle.style.transition = "opacity 0.5s ease-in-out";
  }, 200);
});

particlesJS("particles-js", {
  particles: {
    number: { value: 50, density: { enable: true, value_area: 800 } },
    color: { value: "#ff5e00" },
    shape: { type: "circle" },
    opacity: { value: 0.5, random: true },
    size: { value: 3, random: true },
    line_linked: { enable: false },
    move: { enable: true, speed: 1, direction: "none", random: true },
  },
  interactivity: {
    detect_on: "canvas",
    events: { onhover: { enable: false } },
  },
  retina_detect: true,
});

const burger = document.querySelector(".burger-menu");
const navbar = document.querySelector(".navbar");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  navbar.classList.toggle("active");
  console.log("Navbar classList:", navbar.classList);
});

document.querySelectorAll("strong").forEach((element) => {
  const content =
    element.getAttribute("data-tippy-content") || "Это важный термин!";

  tippy(element, {
    content: content,
    theme: "custom",
    placement: "top",
    animation: "shift-away",
    duration: [300, 200],
    arrow: true,
    interactive: true,
  });
});

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".profession-card button").forEach((button) => {
    button.addEventListener("click", () => {
      window.location.href = "./success.html";
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".progress-circle").forEach((circle) => {
    const progress = circle.getAttribute("data-progress");
    circle.style.setProperty("--progress", progress);
  });
});
