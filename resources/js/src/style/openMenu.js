export default function(elClass){

    const menuToggleButton = document.querySelector(elClass);
    const wrapper = document.querySelector(".o-navigation");
    menuToggleButton.addEventListener("click", function (event) {
                
       if(wrapper.classList.contains("-open")) {
        wrapper.classList.remove("-open");
       } else {
        wrapper.classList.add("-open");
       }
       

     });
}