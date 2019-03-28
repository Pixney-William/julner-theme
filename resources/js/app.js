// // require('./bootstrap-native-v4');
// var bsn = require('bootstrap.native/dist/bootstrap-native-v4');
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

tippy('[title]',{
    theme: 'pyro',
    arrow: true,
    animation:'scale',
    placement:'top-start'
  });

// const myTabs = document.querySelector('.nav-sections');
// var tab = new bsn.Tab(myTabs,{});
// // first, we reference the .nav component that holds all tabs
// //var myTabs = document.getElementById('myTabs');
// var myCarousel = new bsn.Carousel(element,options);
// const myTabs = document.querySelector('.nav-sections');

// // let's give the initialization a JavaScript reference for the "target" option
// var myTabsCollection = myTabs.getElementsByTagName('A');

// // initialize the component for all items in the collection
// for (var i = 0; i < myTabsCollection.length; i++) {
//   new Tab(myTabsCollection[i], // our target
//   { // our options
//     height: true
//   });
// }

// // get last item from collection and reference it's initialization
// var myLastTab = myTabsCollection[myTabsCollection.length-1];
// var myLastTabInit = myLastTab.Tab;

// // assuming the last tab is not active, we can show it
// myLastTabInit.show();

// // attach an event handler as well
// myLastTab.addEventListener('show.bs.tab', function(event){
//   // do some cool stuff
//   // event.target is myLastTab
//   // event.relatedTarget is the previous active tab 
// }, false);