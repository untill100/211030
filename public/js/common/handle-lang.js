import { scene, GUARDS_MESH, create_message_guards, infoManHead, securtyManHead, securtyManHead2 } from '../lobby/lobby.js';

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

    // let lang_session = sessionStorage.getItem("lang");
    // console.log(lang_session);

    for (let i = 0; i < GUARDS_MESH.length; i++) {
        scene.remove(GUARDS_MESH[i]);
    }

    infoManHead.message = "이곳은 로비입니다!";
    create_message_guards(infoManHead);

    securtyManHead.message = "이쪽으로 이동하세요!";
    create_message_guards(securtyManHead);

    securtyManHead2.message = "조작법을 숙지해주세요!";
    create_message_guards(securtyManHead2);
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

    // let lang_session = sessionStorage.getItem("lang");
    // console.log(lang_session);

    for (let i = 0; i < GUARDS_MESH.length; i++) {
        scene.remove(GUARDS_MESH[i]);
    }

    infoManHead.message = "This is the Lobby!";
    create_message_guards(infoManHead);

    securtyManHead.message = "Please come this way!";
    create_message_guards(securtyManHead);

    securtyManHead2.message = "Figure out how to navigate!";
    create_message_guards(securtyManHead2);
});