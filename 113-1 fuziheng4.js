let music;

function preload() {
    music = loadSound('path-to-your-audio-file.mp3');
}

document.getElementById('playMusic').onclick = () => {
    if (!music.isPlaying()) {
        music.loop();
    }
};
