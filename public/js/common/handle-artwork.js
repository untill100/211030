window.addEventListener("resize", function(e) {
    init_artwork();
});

init_artwork();

function init_artwork() {
    const artwork = document.querySelectorAll(".artwork");

    for (let i = 0; i < artwork.length; i++) {
        artwork[i].style.left = (window.innerWidth - artwork[i].offsetWidth) / 2 + "px";
        artwork[i].style.top = (window.innerHeight - artwork[i].offsetHeight) / 2 + "px";

        const artwork_video = artwork[i].querySelector(".video");
        const videoWidth = artwork_video.offsetWidth;
        const videoHeight = artwork_video.offsetHeight;

        if (videoWidth > videoHeight) {
            artwork_video.style.width = 100 + "%";
            artwork_video.style.height = "auto";
        }
    }
}