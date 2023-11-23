import githubLogo from "../../assets/images/github-logo.svg";
import setActiveButton from "../../utils/setActiveButton";
import loadThisWeek from "../../pages/thisWeek";
import closeFormPopup from "../../utils/closeFormPopup";

function createThisWeekButton() {
  const thisWeekButton = document.createElement("button");
  thisWeekButton.classList.add("sidebar-button");;

  const thisWeekButtonIcon = new Image();
  thisWeekButtonIcon.classList.add("sidebar-icon")
  thisWeekButtonIcon.src = githubLogo;

  const thisWeekButtonText = document.createElement("p");
  thisWeekButtonText.textContent = "This Week";

  thisWeekButton.append(thisWeekButtonIcon);
  thisWeekButton.append(thisWeekButtonText);

  thisWeekButton.addEventListener("click", (e) => {
    console.log("This Week button has been clicked")
    setActiveButton(thisWeekButton)
    closeFormPopup();
    loadThisWeek();
  });

  return thisWeekButton;
}

export default createThisWeekButton;