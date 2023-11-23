function createToday() {
  const today = document.createElement("div");
  today.id = "today";

  const title = document.createElement("h2");
  title.id = "today-title";
  title.textContent = "Today"

  today.appendChild(title)

  return today;
}

function loadToday() {
  const notesView = document.getElementById("notes-view");
  notesView.textContent = ""; // Used to clear previous content before appending active content
  notesView.appendChild(createToday());
}

export default loadToday;