
'use strict ';
// Get elements 
let mobilNav = document.querySelector("[data-image='hamB-Menu']");
let dropDownMenu = document.querySelector(".drop-down-container");
//

//Click event on element
const menuToggle = () => {
    return (mobilNav.src.indexOf("/images/icon-hamburger.svg")>-1?showElements():hideElements())
}

//Drop down menu elements
 

//EventListners
mobilNav.addEventListener("click", menuToggle)

//Rearrange Drop-Down-Container to the left of toggle menu

//For the elements to show, I need to write an algothim that will traverse downward from an element switch all element to block

// dropdown-content->selection>1st div 
// dropDownMenu.children.forEach(elem=> elem.style.display = "block")
function showElements(){
    mobilNav.src ="../images/icon-close.svg"
    let arr = [...dropDownMenu.children];
    dropDownMenu.style.display = "block";
    arr.forEach((item) => {
        item.style.display="block"
        item.firstElementChild.style.display = "block";
    });
    // console.log(arr[0].firstElementChild)
    // arr[0].firstElementChild.style.display = "block";
}
showElements()
// Motion UI
function hideElements(){
    mobilNav.src ="../images/icon-hamburger.svg"
    let arr = [...dropDownMenu.children];
    dropDownMenu.style.display = "none";
    arr.forEach((item) => {
        item.style.display="none"
        item.firstElementChild.style.display = "none";
    });
}
//Refacrtor this into an object

