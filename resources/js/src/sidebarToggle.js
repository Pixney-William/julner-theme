(function (w, d) {

  const elClass = ".-toggleSidebar";
  const wrapper = document.body;

  function toggleMenu() {
    const togglers = document.querySelectorAll(elClass);

    for (let i = 0; i < togglers.length; i++) {
      const element = togglers[i];
      element.addEventListener("click", function (event) {
        wrapper.classList.toggle("-sidebarIsOpen");
      });

    }
  }

  d.addEventListener("DOMContentLoaded", toggleMenu);

})(window, document);