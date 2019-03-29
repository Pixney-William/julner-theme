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

sideBarToggler(".o-navigation__openSidebar");

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