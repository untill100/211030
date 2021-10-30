const init_check_browser = check_browser();
const init_check_device = check_mobile();

if (init_check_device === "ios") {
    window.alert("In IOS, please use Chrome app or Chrome browser on desktop as much as possible!");
    window.alert("아이폰 운영체제에서는 가급적 크롬 앱, 혹은 데스크톱의 크롬 브라우저를 이용해주세요!");
} else if (init_check_device === "android") {
    //
} else { // DESKTOP
    if (init_check_browser === 'MS') {
        window.alert("Please use the latest browser such as Chrome as possible!");
        window.alert("가급적 크롬 등의 최신 브라우저를 이용해주세요!");
    } else if (init_check_browser === 'firefox') {
        //
    } else if (init_check_browser === 'safari') {
        window.alert("If possible, please use a browser such as Chrome!");
        window.alert("가급적 크롬 등의 브라우저를 이용해주세요!");
    } else {
        //
    }
}


// function
function check_browser() {
    var agent = navigator.userAgent.toLowerCase(),
        name = navigator.appName,
        browser = '';

    if (name === 'Microsoft Internet Explorer' || agent.indexOf('trident') > -1 || agent.indexOf('edge/') > -1) {
        browser = 'MS'; // 'ie';
        if (name === 'Microsoft Internet Explorer') { // IE old version (IE 10 or Lower)
            agent = /msie ([0-9]{1,}[\.0-9]{0,})/.exec(agent);
            browser += parseInt(agent[1]);
            browser = 'MS';
        } else { // IE 11+
            if (agent.indexOf('trident') > -1) { // IE 11
                browser += 11;
                browser = 'MS';
            } else if (agent.indexOf('edge/') > -1) { // Edge
                browser = 'edge';
            }
        }
    } else if (agent.indexOf('safari') > -1) { // Chrome or Safari
        if (agent.indexOf('opr') > -1) { // Opera
            browser = 'opera';
        } else if (agent.indexOf('chrome') > -1) { // Chrome
            browser = 'chrome';
        } else { // Safari
            browser = 'safari';
        }
    } else if (agent.indexOf('firefox') > -1) { // Firefox
        browser = 'firefox';
    } else {
        browser = 'other';
    }

    return browser;
}

function check_mobile() {
    var varUA = navigator.userAgent.toLowerCase();
    if (varUA.indexOf('android') > -1) {
        return "android";
    } else if (varUA.indexOf("iphone") > -1 || varUA.indexOf("ipad") > -1 || varUA.indexOf("ipod") > -1) {
        return "ios";
    } else {
        return "other";
    }
}