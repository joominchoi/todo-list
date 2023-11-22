import githubLogo from "../../assets/images/github-logo.svg";
import setActiveButton from "../../utils/setActiveButton";
import loadToday from "../../pages/today";

function createTodayButton() {
  const todayButton = document.createElement("button");
  todayButton.classList.add("sidebar-button");

  const todayButtonIcon = new Image();
  todayButtonIcon.classList.add("sidebar-icon")
  todayButtonIcon.src = githubLogo;

  const todayButtonText = document.createElement("p");
  todayButtonText.textContent = "Today";

  todayButton.append(todayButtonIcon);
  todayButton.append(todayButtonText);

  todayButton.addEventListener("click", (e) => {
    console.log("Today button has been clicked")
    setActiveButton(todayButton);
    loadToday();
  });

  return todayButton;
}

export default createTodayButton;