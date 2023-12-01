import loadInbox from "../../pages/inbox";
import closeFormPopup from "../../utils/closeFormPopup";
import setActiveButton from "../../utils/setActiveButton";

function createProjectSettingsForm() {
  const form = document.createElement('form');
  form.id = 'project-settings-form';

  const nameLabel = document.createElement('label');
  nameLabel.textContent = 'Project Name: ';

  const nameInput = document.createElement('input');
  nameInput.type = 'text';
  nameInput.id = 'project-name';
  nameInput.name = 'name';

  const updateButton = document.createElement("button");
  updateButton.type = 'button';
  updateButton.textContent = 'Update';
  updateButton.addEventListener('click', updateProject);

  const deleteButton = document.createElement('button');
  deleteButton.type = 'button'; // Set type to button to prevent form submission (for demonstration purposes)
  deleteButton.textContent = 'Delete';
  deleteButton.addEventListener('click', deleteProject);

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
  console.log("Update button clicked")

  const nameInput = document.getElementById('project-name');
  const name = nameInput.value;

  const pElementInActiveButton = document.querySelector('.sidebar-button.active p');
  const activeView = document.getElementById(`${pElementInActiveButton.textContent}-project`)
  const activeViewID = activeView.id
  const h2Element = document.querySelector(`#${activeViewID} .project-title`);

  if (name) {
    activeView.removeAttribute('id')
    activeView.id = `${name}-project`
    pElementInActiveButton.textContent = name
    h2Element.textContent = name
    console.log(activeView.id)
    closeFormPopup();
  } else {
    alert('Please fill out all fields.');
  }
}

function deleteProject() {
  console.log("Delete button clicked");

  const activeSidebarButton = document.querySelector('.sidebar-button.active');;
  const activeProjectName = document.querySelector('.sidebar-button.active p').textContent;
  const activeProjectView = document.getElementById(`${activeProjectName}-project`);

  const userConfirmation = confirm(`Are you sure you want to delete "${activeProjectName}"?`);

  if (userConfirmation) {
    activeSidebarButton.parentNode.removeChild(activeSidebarButton);
    activeProjectView.parentNode.removeChild(activeProjectView);
    setActiveButton(document.getElementById('default-button'));
    loadInbox();
  } else {
    console.log("Cancel button clicked")
  }

  closeFormPopup();

}

export default createProjectSettingsForm;

