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
