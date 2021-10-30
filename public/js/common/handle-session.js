let lang_session = sessionStorage.getItem("lang");

if (lang_session !== undefined && lang_session !== null) {
    if (lang_session === "en") {
        console.log(lang_session);

        const ko = document.querySelectorAll(".ko");
        for (let i = 0; i < ko.length; i++) {
            ko[i].style.display = "none";
        }

        const en = document.querySelectorAll(".en");
        for (let i = 0; i < en.length; i++) {
            en[i].style.display = "block";
        }
    } else if (lang_session === "ko") {
        const ko = document.querySelectorAll(".ko");
        for (let i = 0; i < ko.length; i++) {
            ko[i].style.display = "block";
        }

        const en = document.querySelectorAll(".en");
        for (let i = 0; i < en.length; i++) {
            en[i].style.display = "none";
        }
    }
} else {
    sessionStorage.setItem("lang", "en");
}