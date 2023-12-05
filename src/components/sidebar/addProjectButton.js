import githubLogo from '../../assets/images/github-logo.svg';
import openFormPopup from '../../utils/openFormPopup';
import createProjectForm from '../form/addProjectForm';

function createAddProjectButton() {
  const addProjectButton = document.createElement('button');
  addProjectButton.classList.add('sidebar-button');

  const addProjectButtonIcon = new Image();
  addProjectButtonIcon.classList.add('sidebar-icon');
  addProjectButtonIcon.src = githubLogo;

  const addProjectButtonText = document.createElement('p');
  addProjectButtonText.textContent = 'Add Project';

  addProjectButton.append(addProjectButtonIcon);
  addProjectButton.append(addProjectButtonText);

  addProjectButton.addEventListener('click', () => {
    console.log('Add Project button has been clicked');
    openFormPopup(createProjectForm());
  });

  return addProjectButton;
}

export default createAddProjectButton;
