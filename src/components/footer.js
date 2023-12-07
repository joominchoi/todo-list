import githubLogo from '../assets/images/github-logo.svg';

function createFooter() {
  const footer = document.createElement('footer');
  footer.id = 'footer';

  const creator = document.createElement('p');
  creator.id = 'creator';
  creator.textContent = 'Created by jooomin';

  const githubLink = document.createElement('a');
  githubLink.setAttribute('href', 'https://github.com/jooomin');

  const githubIcon = new Image();
  githubIcon.id = 'github-logo';
  githubIcon.src = githubLogo;

  footer.append(creator);
  footer.append(githubLink);
  githubLink.append(githubIcon);

  return footer;
}

export default createFooter;
