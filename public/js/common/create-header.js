const main_header = document.querySelector("#main-header");
main_header.innerHTML = `
    <div class="header-item">
        <div id="toggle-menu" class="header-item-child">
            <p class="en" style="cursor: pointer;">MENU</p>
            <p class="ko" style="cursor: pointer;">메뉴</p>
        </div>
    </div>
    <div class="header-item">
        <div class="header-item-child" id="change-lang">
            <p><a id="toggle-kr">KR</a>/<a id="toggle-en">EN</a></p>
        </div>
    </div>`;