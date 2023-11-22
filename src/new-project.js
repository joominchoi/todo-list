function createNewProjectNotesView(userInput) {
  const newProject = document.createElement("div");
  newProject.id = userInput;

  const title = document.createElement("h2");
  title.id = `${userInput}-title`;
  title.textContent = userInput

  newProject.appendChild(title)

  return newProject;
}

function loadNewProject(x) {
  const notesView = document.getElementById("notes-view");
  notesView.textContent = ""; // Used to clear previous content before appending active content
  notesView.appendChild(createNewProjectNotesView(x));
}

export default loadNewProject;