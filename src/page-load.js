import githubLogo from "./assets/images/github-logo.svg";
import loadInbox from "./inbox";
import loadToday from "./today";
import loadThisWeek from "./this-week";
import openFormPopup from "./add-project-form";

function createHeader() {
  const header = document.createElement("header");

  const headerTitle = document.createElement("p");
  headerTitle.id = "header-title";
  headerTitle.textContent = "Todo List";

  const headerLogo = new Image();
  headerLogo.id = "app-logo";
  headerLogo.src = githubLogo

  header.appendChild(headerTitle)
  header.appendChild(headerLogo);

  return header;
}

function createMain() {
  const main = document.createElement("main");

  main.append(createSidebar());
  main.append(createNotesView());

  return main;
}

function createSidebar() {
  const sidebar = document.createElement("div");
  sidebar.id = "sidebar";

  sidebar.append(createAddProjectButton());
  sidebar.append(createInboxButton());
  sidebar.append(createTodayButton());
  sidebar.append(createThisWeekButton());

  return sidebar;
}

function createAddProjectButton() {
  const addProjectButton = document.createElement("button")
  addProjectButton.classList.add("sidebar-button");;

  const addProjectButtonIcon = new Image();
  addProjectButtonIcon.classList.add("sidebar-icon")
  addProjectButtonIcon.src = githubLogo;

  const addProjectButtonText = document.createElement("p");
  addProjectButtonText.textContent = "Add Project";

  addProjectButton.append(addProjectButtonIcon);
  addProjectButton.append(addProjectButtonText);

  addProjectButton.addEventListener("click", (e) => {
    console.log("Add Project button has been clicked")
    openFormPopup();
    // setActiveButton(inboxButton)
    // loadInbox();
  });

  return addProjectButton;
}

function createInboxButton() {
  const inboxButton = document.createElement("button");
  inboxButton.classList.add("sidebar-button");;

  const inboxButtonIcon = new Image();
  inboxButtonIcon.classList.add("sidebar-icon")
  inboxButtonIcon.src = githubLogo;

  const inboxButtonText = document.createElement("p");
  inboxButtonText.textContent = "Inbox";

  inboxButton.append(inboxButtonIcon);
  inboxButton.append(inboxButtonText);

  inboxButton.addEventListener("click", (e) => {
    console.log("Inbox button has been clicked")
    setActiveButton(inboxButton)
    loadInbox();
  });

  return inboxButton;
}

function createTodayButton() {
  const todayButton = document.createElement("button");
  todayButton.classList.add("sidebar-button");;

  const todayButtonIcon = new Image();
  todayButtonIcon.classList.add("sidebar-icon")
  todayButtonIcon.src = githubLogo;

  const todayButtonText = document.createElement("p");
  todayButtonText.textContent = "Today";

  todayButton.append(todayButtonIcon);
  todayButton.append(todayButtonText);

  todayButton.addEventListener("click", (e) => {
    console.log("Today button has been clicked")
    setActiveButton(todayButton);
    loadToday();
  });

  return todayButton;
}

function createThisWeekButton() {
  const thisWeekButton = document.createElement("button");
  thisWeekButton.classList.add("sidebar-button");;

  const thisWeekButtonIcon = new Image();
  thisWeekButtonIcon.classList.add("sidebar-icon")
  thisWeekButtonIcon.src = githubLogo;

  const thisWeekButtonText = document.createElement("p");
  thisWeekButtonText.textContent = "This Week";

  thisWeekButton.append(thisWeekButtonIcon);
  thisWeekButton.append(thisWeekButtonText);

  thisWeekButton.addEventListener("click", (e) => {
    console.log("This Week button has been clicked")
    setActiveButton(thisWeekButton)
    loadThisWeek();
  });

  return thisWeekButton;
}

function setActiveButton(button) {
  const buttons = document.querySelectorAll(".sidebar-button");

  buttons.forEach((button) => {
    if (button !== this) {
      button.classList.remove("active");
    }
  });

  button.classList.add("active");
}

function createNotesView() {
  const notesView = document.createElement("div");
  notesView.id = "notes-view";

  return notesView;
}

function createFooter() {
  const footer = document.createElement("footer");
  footer.id = "footer";

  const creator = document.createElement("p");
  creator.id = "creator";
  creator.textContent = "Created by jooomin";

  const githubLink = document.createElement("a")
  githubLink.setAttribute("href", "https://github.com/jooomin")

  const githubIcon = new Image();
  githubIcon.id ="github-logo";
  githubIcon.src = githubLogo

  footer.append(creator);
  footer.append(githubLink)
  githubLink.append(githubIcon)

  return footer;
}

function initializeWebsite() {
  const content = document.getElementById("content");

  content.appendChild(createHeader());
  content.appendChild(createMain());
  content.appendChild(createFooter());

  // setActiveButton(document.getElementById('home-button'))
  // loadHome(); 
}

export default initializeWebsite;