const r = true;
const playbtn = document.querySelector(".playme");
const playBtnChangestoPause = document.querySelector(".playlogo")
const music = document.querySelector("#player")
var isPlaying = false;
var filling = false ;

const unheart = document.querySelector(".heart")

playbtn.addEventListener("click" , togglePlay);
function togglePlay() {
   isPlaying ? music.pause() : music.play();
 };
 
 music.onplaying = function() {
   isPlaying = true;
   playBtnChangestoPause.src = "./svgs/pause-svgrepo-com.svg" ;
 };
 music.onpause = function() {
   isPlaying = false;
   playBtnChangestoPause.src = "./svgs/play-svgrepo-com.svg" ;
 };

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

 

 
   
    
   



