import createSidebar from "./sidebar/sidebar";
import createNotesView from "./projectView";

function createMain() {
  const main = document.createElement("main");

  main.append(createSidebar());
  main.append(createNotesView());

  return main;
}

export default createMain;