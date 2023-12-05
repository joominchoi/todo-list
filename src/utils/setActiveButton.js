function setActiveButton(activeButton) {
  const buttons = document.querySelectorAll('.sidebar-button, .note');

  buttons.forEach((button) => {
    if (button !== this) {
      button.classList.remove('active');
    }
  });

  activeButton.classList.add('active');
}

export default setActiveButton;
