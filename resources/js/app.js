import whenDomReady from 'when-dom-ready';
import login from "./src/style/login";
import menuToggler from "./src/style/openMenu";

whenDomReady().then(() => {
    login.addLoadedClass()
});

menuToggler(".o-navigation__openMenu");
