// references to DOM element
const popcat = document.querySelector("#popcat");
const btns = document.querySelector(".btns");

// the two images of the pop cat
const openMouthImg  = "./img/open.png";
const closeMouthImg = "./img/close.png";

// the two popping sounds
const openMouthSound  = new Audio("./sound/sound-open.mp3");
const closeMouthSound = new Audio("./sound/sound-close.mp3");

//connecting functions by event handlers
btns.addEventListener("mousedown", openMouth);
btns.addEventListener("mouseup", closeMouth);




// the fuction to perform the action
function openMouth(){
   popcat.src=openMouthImg;
   openMouthSound.play();
}

function closeMouth(){
    popcat.src=closeMouthImg;
    closeMouthSound.play();
 }