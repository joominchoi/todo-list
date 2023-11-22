import createHeader from "./components/header";
import createMain from "./components/main";
import createFooter from "./components/footer";
import setActiveButton from "./utils/setActiveButton";
import loadInbox from "./pages/inbox";


function initializeWebsite() {
  const content = document.getElementById("content");

  content.appendChild(createHeader());
  content.appendChild(createMain());
  content.appendChild(createFooter());

  setActiveButton(document.getElementById('default-button'));
  loadInbox();
}

export default initializeWebsite;