import whenDomReady from 'when-dom-ready';
import login from "./src/style/login";
import sideBarToggler from "./src/style/openSidebar";
import 'simplebar'; // or "import SimpleBar from 'simplebar';" if you want to use it manually.
import 'simplebar/dist/simplebar.css';
whenDomReady().then(() => {
    login.addLoadedClass()
});

sideBarToggler(".o-navigation__openSidebar");
