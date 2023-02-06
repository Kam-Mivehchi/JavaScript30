let vid = document.querySelector('video');
let playPauseButton = document.querySelector('button[title="Toggle Play"]')
let volumeSlider = document.querySelector('input[name="volume"]')
let playBackSlider = document.querySelector('input[name="playbackRate"]')
let rewindButton = document.querySelector('button[data-skip="-10"]')
let fastForwardButton = document.querySelector('button[data-skip="25"]')
let progressBar = document.querySelector('.progress')
let progressLoader = document.querySelector('.progress__filled')




function calculateProgress() {
   let percentComplete = 100 * (vid.currentTime / vid.duration)
   progressLoader.style.flexBasis = `${percentComplete}%`;
}
function togglePlay() {
   const method = vid.paused ? 'play' : 'pause';
   vid[method]();
}
function skip(e) {
   vid.currentTime += parseInt(e.target.dataset.skip)
}
function adjustPlayBackRate(e) {
   vid.playbackRate = e.target.value;
}
function adjustVolume(e) {
   vid.volume = e.target.value;
}

function playVid() {
   vid.play();
   playPauseButton.textContent = '❚ ❚'
}

function pauseVid() {
   vid.pause();
   playPauseButton.textContent = '►'
}
function handleTimelineChange(e) {
   const scrubTime = (e.offsetX / progressBar.offsetWidth) * vid.duration;
   vid.currentTime = scrubTime;
}
//update progress bar when time changes
vid.addEventListener('timeupdate', calculateProgress);
//start stop video
vid.addEventListener('click', togglePlay);
vid.addEventListener('play', playVid);
vid.addEventListener('pause', pauseVid);
playPauseButton.addEventListener('click', togglePlay)

//volume and playback
volumeSlider.addEventListener('input', adjustVolume)
playBackSlider.addEventListener('input', adjustPlayBackRate)

//fast forward and rewind
rewindButton.addEventListener('click', skip)
fastForwardButton.addEventListener('click', skip)

//scrub the video when user interacts with progress bar
let mousedown = false;
progressBar.addEventListener('mousemove', (e) => mousedown && handleTimelineChange(e));
progressBar.addEventListener('mousedown', () => mousedown = true);
progressBar.addEventListener('mouseup', () => mousedown = false);
