let key = document.querySelectorAll('.key')


key.forEach((note) => {
   note.addEventListener('transitionend', removeAnimation)
})


function playSong(e) {
   let currentKey = document.querySelector(`div[data-key="${e.keyCode}"]`)
   let currentAudio = document.querySelector(`audio[data-key="${e.keyCode}"]`)

   // note.classList.add('playing');
   currentKey.classList.add('playing')
   currentAudio.currentTime = 0
   currentAudio.play()

   console.log(currentKey)

}
function removeAnimation(e) {


   e.target.classList.remove('playing');

   // note.classList.add('playing');
   // currentKey.classList.remove('playing')




}

window.addEventListener('keydown', playSong);