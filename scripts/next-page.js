document.addEventListener("DOMContentLoaded", () => {
  const nextButton = document.querySelector(".next-page__button");
  if (!nextButton) return;

  // Список страниц в порядке переключения
  const pages = [
    "./data-scientist.html",
    "./data-engineer.html",
    "./data-analyst.html",
    "./cpp-developer.html",
    "./fullstack-js.html",
    "./comparison.html",
    "./index.html", // Добавляем главную страницу для зацикливания
  ];

  // Текущая страница
  const currentPage = window.location.pathname.split("/").pop() || "index.html";

  // Находим индекс текущей страницы
  const currentIndex = pages.indexOf(`./${currentPage}`);
  const nextIndex = (currentIndex + 1) % pages.length; // Следующий индекс с зацикливанием

  // Обработчик клика
  nextButton.addEventListener("click", () => {
    window.location.href = pages[nextIndex];
  });
});
