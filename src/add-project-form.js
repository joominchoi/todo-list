function createForm() {
  // Create form element
  const form = document.createElement('form');
  form.id = 'myForm';

  // Create label for Name input
  const nameLabel = document.createElement('label');
  nameLabel.textContent = 'Project Name:';
  form.appendChild(nameLabel);

  // Create input for Name
  const nameInput = document.createElement('input');
  nameInput.type = 'text';
  nameInput.id = 'name';
  nameInput.name = 'name';
  form.appendChild(nameInput);

  form.appendChild(document.createElement('br'));

  // Create button for form submission
  const submitButton = document.createElement('button');
  submitButton.type = 'button'; // Set type to button to prevent form submission (for demonstration purposes)
  submitButton.textContent = 'Submit';
  submitButton.addEventListener('click', submitForm);
  form.appendChild(submitButton);

  const closeButton = document.createElement('button');
  closeButton.textContent = 'Close';
  closeButton.addEventListener('click', closeFormPopup);
  form.appendChild(closeButton);

  return form;
}

// Function to handle form submission
function submitForm() {
  const nameInput = document.getElementById('name');

  const name = nameInput.value;

  if (name) {
    alert(`Form submitted!\nProject name: ${name}`);
  } else {
    alert('Please fill out all fields.');
  }
}

function openFormPopup() {
  const popup = document.createElement('div');
  popup.id = 'popup';

  // Create and append the form to the popup
  const form = createForm();
  popup.appendChild(form);

  // Append the popup to the body
  document.body.appendChild(popup);
}

function closeFormPopup() {
  const popup = document.getElementById('popup');
  if (popup) {
    document.body.removeChild(popup);
  }
}

export default openFormPopup;

