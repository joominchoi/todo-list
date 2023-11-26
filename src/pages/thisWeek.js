function createThisWeek() {
  const thisWeek = document.createElement("div");
  thisWeek.classList.add('note')

  const title = document.createElement("h2");
  title.classList.add('note-title')
  title.textContent = "This Week"

  thisWeek.appendChild(title)

  return thisWeek;
}

function loadThisWeek() {
  const notesView = document.getElementById("notes-view");
  notesView.textContent = ""; // Used to clear previous content before appending active content
  notesView.appendChild(createThisWeek());
}

export default loadThisWeek;