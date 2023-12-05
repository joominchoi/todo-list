function openFormPopup(form) {
  const popup = document.createElement('div');
  popup.id = 'popup';

  // Create and append the form to the popup
  popup.appendChild(form);

  // Append the popup to the body
  document.body.appendChild(popup);
}

export default openFormPopup;
