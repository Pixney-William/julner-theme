export default function(elClass){

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