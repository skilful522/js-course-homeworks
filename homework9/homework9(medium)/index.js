const play = document.createElement("button");
const stop = document.createElement("button");
const videoBlock = document.querySelector("#videoBlock");
const video= document.querySelector("#video");
play.id = "play";
stop.id = "stop";
play.name = "Play";
stop.name = "Stop";w
videoBlock.appendChild(play);
videoBlock.appendChild(stop);

video.width = 500;
video.height = 300;

navigator.getUserMedia({
    audio: false,
    video: {width: 500, height: 300}
},(stream) => {
        video.srcObject = stream;
        video.onloadedmetadata = () => video.play();
},
    (error) => console.warn(error));