function createInbox() {
  const inbox = document.createElement("div");
  inbox.classList.add('note')

  const title = document.createElement("h2");
  title.classList.add('note-title')
  title.textContent = "Inbox"

  inbox.appendChild(title)

  return inbox;
}

function loadInbox() {
  const notesView = document.getElementById("notes-view");
  notesView.textContent = ""; // Used to clear previous content before appending active content
  notesView.appendChild(createInbox());
}

export default loadInbox;