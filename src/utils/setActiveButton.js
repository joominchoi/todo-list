function setActiveButton(button) {
  const buttons = document.querySelectorAll(".sidebar-button");

  buttons.forEach((button) => {
    if (button !== this) {
      button.classList.remove("active");
    }
  });

  button.classList.add("active");
}

export default setActiveButton;