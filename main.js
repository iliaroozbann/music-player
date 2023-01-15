const r = true;
const playbtn = document.querySelector(".playme");
const playBtnChangestoPause = document.querySelector(".playlogo")
const music = document.querySelector("#player")
const rangePlaying = document.querySelector("#dur");
var isPlaying = false;
var filling = false ;
var intervalId = null;
const unheart = document.querySelector(".heart")
const pict = document.querySelector(".cover");
const songname = document.querySelector(".song-name");
const artistname = document.querySelector(".artist-name");
const next = document.querySelector(".next");
const prev =document.querySelector(".prev");




//sourses

const songn = ["la espada" , "TV" , "snowfall"];
const artists = ["eternal raijin" , "bilie eilish" , "Oneheart"];
const coverad= ["./imgas/500x500.jpg" , "./imgas/tv.jpg" , "./imgas/d0b6e07bfad9fee7a210e212b1a3da3f.jpg"];
const songsrc = ["./music/eternal_raijin_la_espada 128.mp3" , "./music/billie_eilish_-_tv.mp3","./music/Snowfall_sped_up__D7Vx6srE3Vk_140.mp3" ];



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
    let maxin = rangePlaying.max ;
    rangePlaying.max = duri ;
    const dur = +rangePlaying.value++;
    if(rangePlaying.value == rangePlaying.max){
      clearInterval(intervalId);
      rangePlaying.value = "0";
      playBtnChangestoPause.src = "./svgs/play-svgrepo-com.svg" ;
    }
 
   },1000)
   

}

   
   var i = 0 ;

  //1 
      music.addEventListener("ended", () =>{
        clearInterval(intervalId);
        
        rangePlaying.value = "0" ;
        playBtnChangestoPause.src = "./svgs/play-svgrepo-com.svg" ;
        songname.innerText = songn[i];  
        artistname.innerText = artists[i];  
        music.src = songsrc[i];
        pict.src = coverad[i];
        if(i==3){
          i = 0;
          playBtnChangestoPause.src = "./svgs/pause-svgrepo-com.svg" ;
          songname.innerText = songn[i];  
          artistname.innerText = artists[i];  
          music.src = songsrc[i];
          pict.src = coverad[i];
          
          }
          i++
          
           
          intervalId = setInterval(()=>{
           const duri = music.duration ;
           let maxin = rangePlaying.max ;
           rangePlaying.max = duri ;
           const dur = +rangePlaying.value++;
           if(rangePlaying.value == rangePlaying.max){
             clearInterval(intervalId);
             rangePlaying.value = "0";
             playBtnChangestoPause.src = "./svgs/play-svgrepo-com.svg" ;
           }
        
          },1000)
         })

//1


//2
         next.addEventListener("click", () =>{
          clearInterval(intervalId);
          rangePlaying.value = "0" ;
          music.autoplay = true;
          playBtnChangestoPause.src = "./svgs/pause-svgrepo-com.svg" ;
          songname.innerText = songn[i];  
          artistname.innerText = artists[i];  
          music.src = songsrc[i];
          pict.src = coverad[i];
          if(i==3){
           i = 0;
           playBtnChangestoPause.src = "./svgs/pause-svgrepo-com.svg" ;
           songname.innerText = songn[i];  
           artistname.innerText = artists[i];  
           music.src = songsrc[i];
           pict.src = coverad[i];
           
           }
           i++
           
            
           intervalId = setInterval(()=>{
            const duri = music.duration ;
            let maxin = rangePlaying.max ;
            rangePlaying.max = duri ;
            const dur = +rangePlaying.value++;
            if(rangePlaying.value == rangePlaying.max){
              clearInterval(intervalId);
              rangePlaying.value = "0";
              playBtnChangestoPause.src = "./svgs/play-svgrepo-com.svg" ;
            }
         
           },1000)
           })

//2

//3 

prev.addEventListener("click", () =>{
  clearInterval(intervalId);
  rangePlaying.value = "0" ;
  music.autoplay = true;
  playBtnChangestoPause.src = "./svgs/pause-svgrepo-com.svg" ;
  i == 0;
    
      if(i === 0){
      i = 3;
      }
  
      i--;
      songname.innerText = songn[i];  
      artistname.innerText = artists[i];  
      music.src = songsrc[i];
      pict.src = coverad[i];
      
       
    
  
   intervalId = setInterval(()=>{
    const duri = music.duration ;
    let maxin = rangePlaying.max ;
    rangePlaying.max = duri ;
    const dur = +rangePlaying.value++;
    if(rangePlaying.value == rangePlaying.max){
      clearInterval(intervalId);
      rangePlaying.value = "0";
      playBtnChangestoPause.src = "./svgs/play-svgrepo-com.svg" ;
    }
 
   },1000)
   })

     




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






 