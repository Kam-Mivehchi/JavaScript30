const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');

async function startWebcam() {
   try {

      const mediaStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
      console.log(mediaStream);
      video.srcObject = mediaStream;

      video.play();
   } catch (e) {
      console.error(e, "something went wrong")
   }
}
startWebcam()