function createToday() {
  const today = document.createElement('div');
  // today.classList.add('note')
  today.id = 'today-project';

  const title = document.createElement('h2');
  title.classList.add('project-title');
  title.textContent = 'Today';

  today.appendChild(title);

  return today;
}

function loadToday() {
  const notesView = document.getElementById('project-view');
  notesView.textContent = ''; // Used to clear previous content before appending active content
  notesView.appendChild(createToday());
}

export default loadToday;
