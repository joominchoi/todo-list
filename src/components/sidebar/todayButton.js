import githubLogo from '../../assets/images/github-logo.svg';
import setActiveButton from '../../utils/setActiveButton';
import loadToday from '../../pages/today';
import closeFormPopup from '../../utils/closeFormPopup';

function createTodayButton() {
  const todayButton = document.createElement('button');
  todayButton.classList.add('sidebar-button');

  const todayButtonIcon = new Image();
  todayButtonIcon.classList.add('sidebar-icon');
  todayButtonIcon.src = githubLogo;

  const todayButtonText = document.createElement('p');
  todayButtonText.textContent = 'Today';

  todayButton.append(todayButtonIcon);
  todayButton.append(todayButtonText);

  todayButton.addEventListener('click', () => {
    console.log('Today button has been clicked');
    setActiveButton(todayButton);
    closeFormPopup();
    loadToday();
  });

  return todayButton;
}

export default createTodayButton;
