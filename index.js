
const about = document.getElementById("about-anchor")
const portfolio = document.getElementById("portfolio-anchor")
const contact = document.getElementById("contact-anchor")

document.getElementById("about-button").addEventListener("click", () => about.scrollIntoView() )
document.getElementById("portfolio-button").addEventListener("click", () => portfolio.scrollIntoView() )
document.getElementById("contact-button").addEventListener("click", () => contact.scrollIntoView() )

document.getElementById("linked-in").addEventListener("click", () => window.open("https://www.linkedin.com/in/kris-eversole-82a26947/", '_blank'))
document.getElementById("github").addEventListener("click", () => window.open("https://github.com/k-eversole", '_blank'))
document.getElementById("twitter").addEventListener("click", () => window.open("https://twitter.com/KrisEversole", '_blank'))