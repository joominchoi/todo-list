import closeFormPopup from "../../utils/closeFormPopup";

function createProjectSettingsForm() {
  const form = document.createElement('form');
  form.id = 'project-settings-form';

  // Create label for Name input
  const nameLabel = document.createElement('label');
  nameLabel.textContent = 'Project Name: ';

  // Create input for Name
  const nameInput = document.createElement('input');
  nameInput.type = 'text';
  nameInput.id = 'project-name';
  nameInput.name = 'name';

  const updateButton = document.createElement("button");
  updateButton.type = 'button';
  updateButton.textContent = 'Update';
  updateButton.addEventListener('click', updateProject);

  // Create button for project deletion
  const deleteButton = document.createElement('button');
  deleteButton.type = 'button'; // Set type to button to prevent form submission (for demonstration purposes)
  deleteButton.textContent = 'Delete';
  // submitButton.addEventListener('click', submitForm);

  const closeButton = document.createElement('button');
  closeButton.textContent = 'Close';
  closeButton.addEventListener('click', closeFormPopup);

  form.appendChild(nameLabel);
  form.appendChild(nameInput);
  form.appendChild(document.createElement('br'));
  form.appendChild(updateButton);
  form.appendChild(deleteButton);
  form.appendChild(closeButton);

  return form;
}

function updateProject() {
  console.log("Update Project button clicked")

  const nameInput = document.getElementById('project-name');
  const name = nameInput.value;

  const pElementInActiveButton = document.querySelector('.sidebar-button.active p');
  const activeView = document.getElementById(`${pElementInActiveButton.textContent}-project`)
  const activeViewID = activeView.id
  const h2Element = document.querySelector(`#${activeViewID} .project-title`);

  if (name) {
    activeView.removeAttribute('id')
    activeView.id = `${name}-project`
    // activeView.textContent = name
    pElementInActiveButton.textContent = name
    h2Element.textContent = name
    console.log(activeView.id)
    closeFormPopup();
  } else {
    alert('Please fill out all fields.');
  }
}

export default createProjectSettingsForm;

