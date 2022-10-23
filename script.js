let songIndex =0;
let audioElement = new Audio('songs/3.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myprogressbar');
let songs = [
    {songName: "song1" , filePath:"songs/1.mp3" , coverPath: "covers/1.jpg"},
    {songName: "song1" , filePath:"songs/1.mp3" , coverPath: "covers/1.jpg"},
    {songName: "song1" , filePath:"songs/1.mp3" , coverPath: "covers/1.jpg"},
    {songName: "song1" , filePath:"songs/1.mp3" , coverPath: "covers/1.jpg"},
    {songName: "song1" , filePath:"songs/1.mp3" , coverPath: "covers/1.jpg"},
]
masterPlay.addEventListener('click' , ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play()
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        
       
    }else{
        console.log("yh")
        audioElement.pause()
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        
    }
    
})
audioElement.addEventListener('timeupdate', ()=>{
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100)
    myProgressBar.value =progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime= myProgressBar.value*audioElement.duration/100
})



