import createInboxButton from "./inboxButton";
import createTodayButton from "./todayButton";
import createThisWeekButton from "./thisWeekButton";
import createAddProjectButton from "./projectButton";

function createSidebar() {
  const sidebar = document.createElement("div");
  sidebar.id = "sidebar";

  sidebar.append(createInboxButton());
  sidebar.append(createTodayButton());
  sidebar.append(createThisWeekButton());
  sidebar.append(createAddProjectButton());

  return sidebar;
}

export default createSidebar;