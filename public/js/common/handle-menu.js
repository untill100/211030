// menu
handle_menu();

function handle_menu() {
    const toggle_menu = document.querySelector("#toggle-menu");
    const main_menu = document.querySelector("#main-menu");

    toggle_menu.addEventListener("click", function(e) {
        if (main_menu.style.left !== 0 + "px") {
            main_menu.style.left = 0 + "px";
        } else {
            main_menu.style.left = -100 + "vw";

            init_navigator_item();
        }
    });
}

// navigator
handle_navigator_item();

function handle_navigator_item() {
    const navigator_item = document.querySelectorAll(".navigator-item");
    const menu_output_item = document.querySelectorAll(".menu-output-item");

    for (let i = 0; i < navigator_item.length; i++) {
        navigator_item[i].addEventListener("click", function(e) {
            if (window.innerWidth < 1000) {
                if (menu_output_item[i].style.left !== 0 + "vw") {
                    init_navigator_item();

                    menu_output_item[i].style.left = 0 + "vw";
                } else {
                    menu_output_item[i].style.left = -100 + "vw";
                }
            } else {
                if (menu_output_item[i].style.left !== 400 + "px") {
                    init_navigator_item();

                    menu_output_item[i].style.left = 400 + "px";
                } else {
                    menu_output_item[i].style.left = -100 + "vw";
                }
            }
        });
    }
}

window.addEventListener("resize", function(e) {
    init_navigator_item();
    main_menu.style.left = -100 + "vw";
});

function init_navigator_item() {
    const menu_output_item = document.querySelectorAll(".menu-output-item");

    for (let i = 0; i < menu_output_item.length; i++) {
        menu_output_item[i].style.left = -100 + "vw";
    }
}