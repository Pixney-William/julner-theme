export default function(elClass){

    const menuToggleButton = document.querySelector(elClass);
    // const wrapper = document.querySelector(".o-navigation");
    const wrapper = document.body;

    menuToggleButton.addEventListener("click", function (event) {
                
       if(wrapper.classList.contains("-openMenu")) {
        wrapper.classList.remove("-openMenu");
       } else {
        wrapper.classList.add("-openMenu");
       }
       

     });
}