import githubLogo from "./assets/images/github-logo.svg"

function createHeader() {
  const header = document.createElement("header");

  const headerTitle = document.createElement("p");
  headerTitle.setAttribute("id", "header-title");
  headerTitle.textContent = "Todo List";

  const headerLogo = new Image();
  headerLogo.setAttribute("id", "app-logo")
  headerLogo.src = githubLogo

  header.appendChild(headerTitle)
  header.appendChild(headerLogo);

  return header;
}

// function createNav() {
//   const nav = document.createElement("nav");

//   const homeButton = document.createElement("button");
//   homeButton.classList.add("nav-button");
//   homeButton.setAttribute("id", "home-button")
//   homeButton.textContent = "home";
//   homeButton.addEventListener("click", (e) => {
//     console.log("Home button has been clicked")
//     setActiveButton(homeButton)
//     loadHome();
//   });

//   const foodButton = document.createElement("button");
//   foodButton.classList.add("nav-button");
//   foodButton.textContent = "food";
//   foodButton.addEventListener("click", (e) => {
//     console.log("Food button has been clicked")
//     setActiveButton(foodButton)
//     loadfood();
//   });

//   const drinksButton = document.createElement("button");
//   drinksButton.classList.add("nav-button");
//   drinksButton.textContent = "drinks";
//   drinksButton.addEventListener("click", (e) => {
//     console.log("Drinks button has been clicked")
//     setActiveButton(drinksButton)
//     loaddrinks();
//   });

//   const contactButton = document.createElement("button");
//   contactButton.classList.add("nav-button");
//   contactButton.textContent = "contact";
//   contactButton.addEventListener("click", (e) => {
//     console.log("Contact button has been clicked")
//     setActiveButton(contactButton)
//     loadContact();
//   });

//   nav.appendChild(homeButton);
//   nav.appendChild(foodButton);
//   nav.appendChild(drinksButton);
//   nav.appendChild(contactButton);

//   return nav;
// }

// function setActiveButton(button) {
//   const buttons = document.querySelectorAll(".nav-button");

//   buttons.forEach((button) => {
//     if (button !== this) {
//       button.classList.remove("active");
//     }
//   });

//   button.classList.add("active");
// }


// function createMainContainer() {
//   const mainContainer = document.createElement("main");
//   mainContainer.setAttribute("id", "main-container");

//   return mainContainer;
// }

// function createFooter() {
//   const footer = document.createElement("footer");
//   footer.setAttribute("id", "footer");

//   const footerSignature = document.createElement("div")
//   footerSignature.setAttribute("id", "footer-signature")

//   const creator = document.createElement("p");
//   creator.setAttribute("id", "creator");
//   creator.textContent = "Created by jooomin";

//   const githubLink = document.createElement("a")
//   githubLink.setAttribute("href", "https://github.com/jooomin")

//   const githubLogo = new Image();
//   githubLogo.setAttribute("id", "github-logo")
//   githubLogo.src = githubIcon

//   footer.append(footerSignature);
//   footerSignature.append(creator);
//   footerSignature.append(githubLink)
//   githubLink.append(githubLogo)

//   return footer;
// }

function initializeWebsite() {
  const content = document.getElementById("content");

  content.appendChild(createHeader());
  // content.appendChild(createMainContainer());
  // content.appendChild(createFooter());

  // setActiveButton(document.getElementById('home-button'))
  // loadHome(); 
}

export default initializeWebsite;