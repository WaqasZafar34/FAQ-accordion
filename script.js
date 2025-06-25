const faqButtons = document.querySelectorAll(".faq-questions");

faqButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    const answer = button.nextElementSibling;

    // Toggle answer visibility
    answer.classList.toggle("show");

    // Toggle icon visibility
    button.classList.toggle("active");
  });
});
