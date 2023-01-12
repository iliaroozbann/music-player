const r = true;
const playbtn = document.querySelector(".playme");
const playBtnChangestoPause = document.querySelector(".playlogo")
const music = document.querySelector("#player")
const rangePlaying = document.querySelector("#dur");
var isPlaying = false;
var filling = false ;
var intervalId = null;
const unheart = document.querySelector(".heart")

playbtn.addEventListener("click" , togglePlay);
function togglePlay() {
    isPlaying = !isPlaying;
    isPlaying ? pauseMusic() : playMusic();
 };


 const pauseMusic = () => {
  music.pause()
  playBtnChangestoPause.src = "./svgs/play-svgrepo-com.svg" ;
  if(intervalId != null) {
    clearInterval(intervalId);
  }
 }
 
const playMusic = () => {
  music.play();
  playBtnChangestoPause.src = "./svgs/pause-svgrepo-com.svg" ;
  intervalId = setInterval(()=>{
    const duri = music.duration ;
    const maxin = rangePlaying.max ;
    rangePlaying.max = duri ;
    const dur = +rangePlaying.value++  
   },1000)
}


 unheart.addEventListener("click" , ()=>{
       if(filling === false){
        unheart.src = "./svgs/heart-filled-svgrepo-com.svg"
        filling = true;
        unheart.classList.add("heart-filled-success");
       }
       
       else if(filling === true){
        unheart.src = "./svgs/heart-svgrepo-com.svg"
        filling = false;
        
        unheart.classList.remove("heart-filled-success");
       }
       
 })