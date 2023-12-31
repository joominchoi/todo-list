import githubLogo from '../../assets/images/github-logo.svg';
import setActiveButton from '../../utils/setActiveButton';
import loadInbox from '../../pages/inbox';
import closeFormPopup from '../../utils/closeFormPopup';

function createInboxButton() {
  const inboxButton = document.createElement('button');
  inboxButton.id = 'default-button';
  inboxButton.classList.add('sidebar-button');

  const inboxButtonIcon = new Image();
  inboxButtonIcon.classList.add('sidebar-icon');
  inboxButtonIcon.src = githubLogo;

  const inboxButtonText = document.createElement('p');
  inboxButtonText.textContent = 'Inbox';

  inboxButton.append(inboxButtonIcon);
  inboxButton.append(inboxButtonText);

  inboxButton.addEventListener('click', () => {
    console.log('Inbox button has been clicked');
    setActiveButton(inboxButton);
    closeFormPopup();
    loadInbox();
  });

  return inboxButton;
}

export default createInboxButton;
