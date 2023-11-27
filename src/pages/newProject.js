import createProjectSettingsForm from "../components/projectSettingsForm";
import openFormPopup from "../utils/openFormPopup";

function createNewProjectNotesView(userInput) {
  const newProject = document.createElement("div");
  newProject.classList.add('note')

  const title = document.createElement("h2");
  title.id = (`${userInput}-title`)
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
  const notesView = document.getElementById("notes-view");
  notesView.textContent = ""; // Used to clear previous content before appending active content
  notesView.appendChild(createNewProjectNotesView(x));
}

export default loadNewProject;