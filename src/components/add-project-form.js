import githubLogo from "./assets/images/github-logo.svg";
import { setActiveButton } from "../App";
import loadNewProject from "../pages/new-project";

function createAddProjectForm() {
  // Create form element
  const form = document.createElement('form');
  form.id = 'add-project-form';

  // Create label for Name input
  const nameLabel = document.createElement('label');
  nameLabel.textContent = 'Project Name:';
  form.appendChild(nameLabel);

  // Create input for Name
  const nameInput = document.createElement('input');
  nameInput.type = 'text';
  nameInput.id = 'project-name';
  nameInput.name = 'name';
  form.appendChild(nameInput);

  form.appendChild(document.createElement('br'));

  // Create button for form submission
  const submitButton = document.createElement('button');
  submitButton.type = 'button'; // Set type to button to prevent form submission (for demonstration purposes)
  submitButton.textContent = 'Add';
  submitButton.addEventListener('click', submitForm);
  form.appendChild(submitButton);

  const closeButton = document.createElement('button');
  closeButton.textContent = 'Close';
  closeButton.addEventListener('click', closeFormPopup);
  form.appendChild(closeButton);

  return form;
}

function createNewProject(userInput) {
  const newProjectButton = document.createElement("button");
  newProjectButton.classList.add("sidebar-button");;

  const newProjectButtonIcon = new Image();
  newProjectButtonIcon.classList.add("sidebar-icon")
  newProjectButtonIcon.src = githubLogo;

  const newProjectButtonText = document.createElement("p");
  newProjectButtonText.textContent = userInput;

  newProjectButton.append(newProjectButtonIcon);
  newProjectButton.append(newProjectButtonText);

  newProjectButton.addEventListener("click", (e) => {
    console.log(`${userInput} has been clicked`);
    setActiveButton(newProjectButton);
    loadNewProject(userInput);
  });

  return newProjectButton;
}

// Function to handle form submission
function submitForm() {
  const sidebar = document.getElementById('sidebar')

  const nameInput = document.getElementById('project-name');

  const name = nameInput.value;

  if (name) {
    // alert(`Project added!\nProject name: ${name}`);
    sidebar.append(createNewProject(name))
    closeFormPopup()
  } else {
    alert('Please fill out all fields.');
  }
}

function openFormPopup() {
  const popup = document.createElement('div');
  popup.id = 'popup';

  // Create and append the form to the popup
  const form = createAddProjectForm();
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

