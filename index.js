
const about = document.getElementById("about-anchor")
const portfolio = document.getElementById("portfolio-anchor")
const contact = document.getElementById("contact-anchor")

document.getElementById("about-button").addEventListener("click", () => about.scrollIntoView() )
document.getElementById("portfolio-button").addEventListener("click", () => portfolio.scrollIntoView() )
document.getElementById("contact-button").addEventListener("click", () => contact.scrollIntoView() )

document.getElementById("linked-in").addEventListener("click", () => window.open("https://www.linkedin.com/in/kris-eversole-82a26947/", '_blank'))
document.getElementById("github").addEventListener("click", () => window.open("https://github.com/k-eversole", '_blank'))
document.getElementById("twitter").addEventListener("click", () => window.open("https://twitter.com/KrisEversole", '_blank'))

document.getElementById("demo-1").addEventListener("click", () => window.open("https://k-eversole.github.io/narcissist-translator", '_blank'))
document.getElementById("github-1").addEventListener("click", () => window.open("https://github.com/k-eversole/narcissist-translator", '_blank'))
document.getElementById("demo-2").addEventListener("click", () => window.open("https://replit.com/@keversole/trapped-with-byron-replit", '_blank'))
document.getElementById("github-2").addEventListener("click", () => window.open("https://github.com/k-eversole/byron-game", '_blank'))

const catPopup = document.querySelector("#charlie-popup");
const catTrigger = document.querySelector(".cat-button");
const catCloseButton = document.querySelector("#charlie-close");

function toggleCatPopup() {
  catPopup.classList.toggle("show-popup");
}

function windowOnClick(event) {
  (event.target === catPopup) ? toggleCatPopup() : "" //do nothing
}

catTrigger.addEventListener("click", toggleCatPopup);
catCloseButton.addEventListener("click", toggleCatPopup);
window.addEventListener("click", windowOnClick);