"use strict ";
// Get elements
let mobilNav = document.querySelector("[data-image='hamB-Menu']");
let dropDownMenu = document.querySelector(".drop-down-container");
//

//Click event on element
const menuToggle = () => {
  return mobilNav.src.indexOf("/images/icon-hamburger.svg") > -1
    ? showElements()
    : hideElements();
};

//Drop down menu elements

//EventListners
mobilNav.addEventListener("click", menuToggle);


function showElements() {
  mobilNav.src = "../images/icon-close.svg";
  let arr = [...dropDownMenu.children];
  dropDownMenu.style.display = "flex";
  arr.forEach(item => {
    item.style.display = "block";
    item.firstElementChild.style.display = "block";
    }
  );
}
showElements();
function hideElements() {
    mobilNav.src = "../images/icon-hamburger.svg";
    let arr = [...dropDownMenu.children];
    dropDownMenu.style.display = "none";
    arr.forEach(item => {
        item.style.display = "none";
        item.firstElementChild.style.display = "none";
    });
}
//Refacrtor this into an object

// Motion UI