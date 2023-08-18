const addToggleButton = () => {
  const button = document.createElement("button");
  button.innerHTML = "▼";
  button.style.position = "fixed";
  button.style.right = "64px";
  button.style.bottom = "64px";
  button.style.zIndex = "1000";
  button.addEventListener("click", () => {
    const questions = document.querySelectorAll(
      ".group.w-full.text-token-text-primary.border-b.border-black\\/10.dark\\:border-gray-900\\/50.dark\\:bg-gray-800"
    );
    questions.forEach((question) => toggleAnswer(question));
  });

  document.body.appendChild(button);
};

const toggleAnswer = (element) => {
  const answer = element.nextElementSibling;
  const codes = element.querySelectorAll('code');
  if (answer && answer.classList.contains('bg-gray-50')) {
    answer.style.display = answer.style.display === 'none' ? '' : 'none';
  }
  codes.forEach(codeTag => {
    codeTag.style.display = codeTag.style.display === 'none' ? '' : 'none';
  });
};

const init = () => {
  addToggleButton();
};

init();
