window.addEventListener("load", function(e) {
    init_keyboard();
});

window.addEventListener("resize", function(e) {
    init_keyboard();
});

function init_keyboard() {
    const mobile_keyboard = document.querySelector("#mobile-keyboard");
    const footer = document.querySelector("#main-footer");

    mobile_keyboard.style.left = (window.innerWidth - mobile_keyboard.offsetWidth) / 2 + "px";
    mobile_keyboard.style.opacity = 1;

    if (window.innerWidth < 1000) {
        mobile_keyboard.style.bottom = 75 + "px";
    } else {
        mobile_keyboard.style.bottom = footer.offsetHeight + "px";
    }
};