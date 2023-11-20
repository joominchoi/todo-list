function createInbox() {
  const inbox = document.createElement("div");
  inbox.id = "inbox";

  const title = document.createElement("h2");
  title.id ="inbox-title";
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