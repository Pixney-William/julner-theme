import whenDomReady from 'when-dom-ready';
import login from "./src/style/login";
import sideBarToggler from "./src/style/openSidebar";

whenDomReady().then(() => {
    login.addLoadedClass()
});

sideBarToggler(".o-navigation__openSidebar");
