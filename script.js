//mobile hamburger menu
const hamburgerIcon = document.getElementById("hamburger-icon");
const mobileMenu = document.querySelector(".mobile-menu");
const lineOne = document.querySelector(".line-one");
const lineTwo = document.querySelector(".line-two");
const lineThree = document.querySelector(".line-three");
const menuContainer = document.querySelector(".mobile-menu-container");

hamburgerIcon.addEventListener('click', () => {
    mobileMenu.classList.toggle("open");
    lineOne.classList.toggle("hamburger-animate");
    lineTwo.classList.toggle("hamburger-animate");
    lineThree.classList.toggle("hamburger-animate");
    menuContainer.classList.toggle("open");
    
});
const anchorLinks = mobileMenu.querySelectorAll("a");
for (let link = 0; link < anchorLinks.length; link++) {
    anchorLinks[link].addEventListener('click', () => {
        mobileMenu.classList.toggle("open");
        lineOne.classList.toggle("hamburger-animate");
        lineTwo.classList.toggle("hamburger-animate");
        lineThree.classList.toggle("hamburger-animate");
        menuContainer.classList.toggle("open");        
    });

}



//header rotating text
let rotatingWords = document.querySelectorAll("rotate")
rotatingWords.forEach( word => {
    let letters = word.textContent.split("");
})

console.log(mobileMenu.querySelectorAll("a"));