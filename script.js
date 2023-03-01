//mobile hamburger menu
const hamburgerIcon = document.getElementById("hamburger-icon");
const mobileMenu = document.querySelector(".mobile-menu");
const lineOne = document.querySelector(".line-one");
const lineTwo = document.querySelector(".line-two");
const lineThree = document.querySelector(".line-three");
const menuContainer = document.querySelector(".mobile-menu-container");
// const wholePage = document.querySelector("body");

hamburgerIcon.addEventListener('click', () => {
    mobileMenu.classList.toggle("open");
    lineOne.classList.toggle("hamburger-animate");
    lineTwo.classList.toggle("hamburger-animate");
    lineThree.classList.toggle("hamburger-animate");
    menuContainer.classList.toggle("open");
    // wholePage.classList.toggle("open");
})



//header rotating text
let rotatingWords = document.querySelectorAll("rotate")
rotatingWords.forEach( word => {
    let letters = word.textContent.split("");
})