import createProjectSettingsForm from "../components/form/projectSettingsForm";
import openFormPopup from "../utils/openFormPopup";

function createNewProjectNotesView(userInput) {
  const newProject = document.createElement("div");
  // newProject.classList.add('note')
  newProject.id = `${userInput}-project`

  const title = document.createElement("h2");
  // title.id = (`${userInput}-title`)
  title.classList.add('project-title')
  title.textContent = userInput

  const settingsButton = document.createElement("button")
  settingsButton.id = "settings-button"
  settingsButton.textContent = "Settings"

  settingsButton.addEventListener("click", (e) => {
    console.log("Settings button has been clicked")
    openFormPopup(createProjectSettingsForm());
  });

  newProject.appendChild(title)
  newProject.appendChild(settingsButton)

  return newProject;
}

function loadNewProject(x) {
  const notesView = document.getElementById("project-view");
  notesView.textContent = ""; // Used to clear previous content before appending active content
  notesView.appendChild(createNewProjectNotesView(x));
}

export default loadNewProject;