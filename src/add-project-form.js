function createForm() {
  // Create form element
  const form = document.createElement('form');
  form.id = 'myForm';

  // Create label for Name input
  const nameLabel = document.createElement('label');
  nameLabel.textContent = 'Name:';
  form.appendChild(nameLabel);

  // Create input for Name
  const nameInput = document.createElement('input');
  nameInput.type = 'text';
  nameInput.id = 'name';
  nameInput.name = 'name';
  form.appendChild(nameInput);

  form.appendChild(document.createElement('br'));

  // Create label for Email input
  const emailLabel = document.createElement('label');
  emailLabel.textContent = 'Email:';
  form.appendChild(emailLabel);

  // Create input for Email
  const emailInput = document.createElement('input');
  emailInput.type = 'email';
  emailInput.id = 'email';
  emailInput.name = 'email';
  form.appendChild(emailInput);

  form.appendChild(document.createElement('br'));

  // Create button for form submission
  const submitButton = document.createElement('button');
  submitButton.type = 'button'; // Set type to button to prevent form submission (for demonstration purposes)
  submitButton.textContent = 'Submit';
  submitButton.addEventListener('click', submitForm);
  form.appendChild(submitButton);

  return form;
}

// Function to handle form submission
function submitForm() {
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');

  const name = nameInput.value;
  const email = emailInput.value;

  if (name && email) {
    alert(`Form submitted!\nName: ${name}\nEmail: ${email}`);
  } else {
    alert('Please fill out all fields.');
  }
}

function openFormPopup() {
  const popup = document.createElement('div');
  popup.id = 'popup';

  const closeButton = document.createElement('button');
  closeButton.textContent = 'Close';
  closeButton.addEventListener('click', closeFormPopup);
  popup.appendChild(closeButton);

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

