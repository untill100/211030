const toggle_kr = document.querySelector("#toggle-kr");
const toggle_en = document.querySelector("#toggle-en");

toggle_kr.addEventListener("click", function(e) {
    sessionStorage.setItem("lang", "ko");

    const ko = document.querySelectorAll(".ko");
    const en = document.querySelectorAll(".en");

    for (let i = 0; i < ko.length; i++) {
        ko[i].style.display = "block";
    }

    for (let i = 0; i < en.length; i++) {
        en[i].style.display = "none";
    }
});

toggle_en.addEventListener("click", function(e) {
    sessionStorage.setItem("lang", "en");

    const ko = document.querySelectorAll(".ko");
    const en = document.querySelectorAll(".en");

    for (let i = 0; i < ko.length; i++) {
        ko[i].style.display = "none";
    }

    for (let i = 0; i < en.length; i++) {
        en[i].style.display = "block";
    }
});