(function (w, d) {

    function callback() {
        setTimeout(() => {
            d.body.classList.add('-loaded');
        }, 100);
    }
    if (
        d.readyState === "complete" ||
        (d.readyState !== "loading" && !d.documentElement.doScroll)
    ) {
        callback();
    } else {
        d.addEventListener("DOMContentLoaded", callback);
    }

})(window, document);