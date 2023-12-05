function createInbox() {
  const inbox = document.createElement('div');
  // inbox.classList.add('note')
  inbox.id = 'inbox-project';

  const title = document.createElement('h2');
  title.classList.add('project-title');
  title.textContent = 'Inbox';

  inbox.appendChild(title);

  return inbox;
}

function loadInbox() {
  const notesView = document.getElementById('project-view');
  notesView.textContent = ''; // Used to clear previous content before appending active content
  notesView.appendChild(createInbox());
}

export default loadInbox;
