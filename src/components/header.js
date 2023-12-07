import githubLogo from '../assets/images/github-logo.svg';

function createHeader() {
  const header = document.createElement('header');

  const headerTitle = document.createElement('p');
  headerTitle.id = 'header-title';
  headerTitle.textContent = 'Todo List';

  const headerLogo = new Image();
  headerLogo.id = 'app-logo';
  headerLogo.src = githubLogo;

  header.appendChild(headerTitle);
  header.appendChild(headerLogo);

  return header;
}

export default createHeader;
