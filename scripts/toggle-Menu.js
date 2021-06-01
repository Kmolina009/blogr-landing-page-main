
'use strict ';
// Get element 
let mobilNav = document.querySelector("[data-image='hamB-Menu']");
//Click event on element
const menuToggle = () => {
    return (mobilNav.src.indexOf("/images/icon-hamburger.svg")>-1?mobilNav.src ="../images/icon-close.svg":mobilNav.src ="../images/icon-hamburger.svg")
    //Regex check for directory
    return (mobilNav.src.indexOf("/images/icon-hamburger.svg")>-1?console.log("True"):console.log("False"))
}

mobilNav.addEventListener("click", menuToggle)


