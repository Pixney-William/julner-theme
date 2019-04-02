var bsn = require('bootstrap.native/dist/bootstrap-native-v4');
import tippy from 'tippy.js'
import whenDomReady from 'when-dom-ready';
import login from "./src/style/login";
import sideBarToggler from "./src/style/openSidebar";
import 'simplebar'; // or "import SimpleBar from 'simplebar';" if you want to use it manually.
import 'simplebar/dist/simplebar.css';
whenDomReady().then(() => {
  login.addLoadedClass()
});

sideBarToggler(".-toggleSidebar");

// let elems = document.querySelectorAll('.o-navigation__sidebar .m-list .icon');
// let alle = document.querySelector(".o-navigation__sidebar .m-list");

// alle.addEventListener("mouseleave", function (event) {
//   document.body.classList.remove("-sidebarIsOpen");

// }, false);

// elems.forEach(function (elem, index) {
//   elem.addEventListener("mouseenter", function (event) {
//     document.body.classList.add("-sidebarIsOpen");
//   }, false);
// });


const menubutton = document.querySelector('.m-menu__open');
const menu = document.querySelector('.m-menu');

// menu.addEventListener("click", function (event) {
//   document.body.classList.remove("-sidebarIsOpen");

// }, false);

menubutton.addEventListener("click", function (event) {
  
  if(menu.classList.contains("-close"))
  {
    menu.classList.remove("-close");
  } else 
  {
    menu.classList.add("-close");
  }
}, false);

// menu.forEach(function (elem, index) {
//   elem.addEventListener("click", function (event) {
//     document.body.classList.add("-sidebarIsOpen");
//   }, false);
// });




if (!document.body.classList.contains('-keepSidebarOpen')) {
  tippy('[data-tippy-content]', {
    theme: 'pyro',
    arrow: true,
    animation: 'scale',
    placement: 'right-start',
    delay: [300, 0]
  });
}

window.addEventListener("scroll", function (e) {
  const a = document.querySelector('.m-formControls.-bottom');
  if (window.scrollY > 50) {
    a.classList.add('-show');
  } else {
    a.classList.remove('-show');
  }
});