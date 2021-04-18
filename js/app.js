'use strict';

/**
 * Define Global Variables
 * 
*/
const ul = document.querySelector("ul");
const fragment = document.createDocumentFragment();
const sections = document.querySelectorAll("section");
const dataNavs = document.querySelectorAll("[data-nav]");

/**
 * Anchor Click and section scroll helper function
 * 
*/
function anchorScroll(itemClick, ItemScroll) {
  itemClick.addEventListener("click", (e)=>{
    e.preventDefault();
    ItemScroll.scrollIntoView({ behavior: "smooth"});
  })
}

/**
 * Document fragment for creating and appending nav Items
 * 
*/
function menu() {
  for(const section of sections) {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.textContent = section.id;
    a.classList.add("menu__link");  
    li.appendChild(a);
    anchorScroll(li, section);
    fragment.append(li);
  }
  return fragment
}
ul.append(menu());

/**
 * In the viewport detection helper function for adding the active class 
 * 
*/
function isInViewport(element) {
  let rect = element.getBoundingClientRect();  
  return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}


/**
 * Adding the active effect
 * 
*/
function checkActive() {
  sections.classList.remove("your-active-class");

  sections.forEach(element => { 
     
  if (isInViewport(element)) {
    element.className = "your-active-class";
  }
  else if(!(isInViewport(element))){
    element.classList.remove("your-active-class");
  }
})
}

// // Window scroll event listener
 window.addEventListener('scroll', checkActive);
