/* Get Our Elementa */

const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelector('[data-skip]');
const ranges = player.querySelector('.player__slider');
/* Build our functions */

function togglePlay() {

    const method = video.paused ? 'play' : 'pause';


    // if(video.paused){
    //     video.player();
    // }else{video.pause();}

    video[method]();

}

function updateButton() {
    const icon = this.paused ? "play" : 'stop';

    toggle.textContent = icon;
}

/* Hook up the event listeners*/

video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
toggle.addEventListener('click', togglePlay);