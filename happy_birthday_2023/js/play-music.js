const music = document.getElementById('music');

document.addEventListener('touchstart', function () {
    music.play();
})

if (music.paused) {
    music.paused = false;
    music.play();
}