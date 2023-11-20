function createThisWeek() {
  const thisWeek = document.createElement("div");
  thisWeek.setAttribute("id", "this-week");

  const title = document.createElement("h2");
  title.setAttribute("id", "this-week-title")
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