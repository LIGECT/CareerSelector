document.addEventListener("DOMContentLoaded", () => {
  const nextButton = document.querySelector(".next-page__button");
  if (!nextButton) return;

  const pages = [
    "./data-scientist.html",
    "./data-engineer.html",
    "./data-analyst.html",
    "./cpp-developer.html",
    "./fullstack-js.html",
    "./comparison.html",
    "./index.html",
  ];

  const currentPage = window.location.pathname.split("/").pop() || "index.html";

  const currentIndex = pages.indexOf(`./${currentPage}`);
  const nextIndex = (currentIndex + 1) % pages.length;

  nextButton.addEventListener("click", () => {
    window.location.href = pages[nextIndex];
  });
});
