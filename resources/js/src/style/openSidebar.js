export default function(elClass){

    //TODO: Handle if more than one element should be able to toggle 
    // the sidebar open.
    const menuToggleButton = document.querySelector(elClass);
    // const wrapper = document.querySelector(".o-navigation");
    const wrapper = document.body;

    menuToggleButton.addEventListener("click", function (event) {
                
       if(wrapper.classList.contains("-sidebarIsOpen")) {
        wrapper.classList.remove("-sidebarIsOpen");
       } else {
        wrapper.classList.add("-sidebarIsOpen");
       }
       

     });
}