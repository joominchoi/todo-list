import githubLogo from '../../assets/images/github-logo.svg';
import setActiveButton from '../../utils/setActiveButton';
import loadNewProject from '../../pages/newProject';
import closeFormPopup from '../../utils/closeFormPopup';

function createProjectForm() {
  const form = document.createElement('form');
  form.id = 'add-project-form';

  const nameLabel = document.createElement('label');
  nameLabel.textContent = 'Project Name: ';
  form.appendChild(nameLabel);

  const nameInput = document.createElement('input');
  nameInput.type = 'text';
  nameInput.id = 'project-name';
  nameInput.name = 'name';
  form.appendChild(nameInput);

  form.appendChild(document.createElement('br'));

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

function submitForm() {
  const sidebar = document.getElementById('sidebar');

  const nameInput = document.getElementById('project-name');

  const name = nameInput.value;

  if (name) {
    sidebar.append(createNewProject(name));
    closeFormPopup();
    loadNewProject(name);
  } else {
    alert('Please fill out all fields.');
  }
}

export function createNewProject(userInput) {
  const newProjectButton = document.createElement('button');
  newProjectButton.classList.add('sidebar-button');

  const newProjectButtonIcon = new Image();
  newProjectButtonIcon.classList.add('sidebar-icon');
  newProjectButtonIcon.src = githubLogo;

  const newProjectButtonText = document.createElement('p');
  newProjectButtonText.textContent = userInput;

  newProjectButton.append(newProjectButtonIcon);
  newProjectButton.append(newProjectButtonText);

  setActiveButton(newProjectButton);

  newProjectButton.addEventListener('click', (e) => {
    console.log(`${newProjectButtonText.textContent} has been clicked`);
    setActiveButton(newProjectButton);
    loadNewProject(newProjectButtonText.textContent);
  });

  return newProjectButton;
}

export default createProjectForm;
