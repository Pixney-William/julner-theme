export default function(elClass){

    const menuToggleButton = document.querySelector(elClass);
    // const wrapper = document.querySelector(".o-navigation");
    const wrapper = document.body;

    menuToggleButton.addEventListener("click", function (event) {
                
       if(wrapper.classList.contains("-openSidebar")) {
        wrapper.classList.remove("-openSidebar");
       } else {
        wrapper.classList.add("-openSidebar");
       }
       

     });
}