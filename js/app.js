'use strict';

/**
 * Define Global Variables
 * 
*/
const list = ["Home", "service", "About", "contact"];
const link = ["#sectionLink1", "#sectionLink2", "#sectionLink3", "#sectionLink4"];
const container = document.querySelector(".navbar__menu");
const ul = document.querySelector("#navbar__list");
const section= document.querySelectorAll("section");

// logo
const logo = document.createElement("div");
logo.textContent ="LOGO";
logo.setAttribute("class", "logo")
container.appendChild(logo);

// main functionalities
function navElem() {
  const fragment = document.createDocumentFragment();

  // check if browser is internet explorer
  const isIE11 = !!window.MSInputMethodContext && !!document.documentMode;

  // build the nav
  for (let i = 0; i < list.length; i++) {
  const li = document.createElement("li");
   const a =  document.createElement("a")
   a.textContent = list[i];
   a.classList.add("menu__link")
   a.setAttribute("href", link[i] )

  //  click event
   a.addEventListener("click", ()=>{
     section.forEach((item) =>{
     item.classList.contains("your-active-class")? item.classList.remove("your-active-class"): item.className = "your-active-class";
     })
     let hRef = a.href.split('#sectionLink');
     hRef = "#section" + hRef[1]

  // scroll effect
     if (isIE11) {
      window.scrollTo(0, document.querySelector(ref).offsetTop);
    } else {
      window.scroll({
        behavior: 'smooth',
        left: 0,
        // top is the distance from the top of the page to the target element
        top: document.querySelector(hRef).offsetTop
      });
    }
   })
   
   li.appendChild(a);
   fragment.appendChild(li)
  }
  return fragment
}
ul.append(navElem());
