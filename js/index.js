let progress = document.getElementById("progress");
let song = document.getElementById("song");
let ctrICON = document.getElementById("ctrICON");

song.onloadedmetadata = function(){
    progress.max = song.duration;
    progress.value = song.currentTime;
}
function playPause(){
    if(ctrICON.classList.contains("fa-pause")){
        song.pause();
        ctrICON.classList.remove("fa-pause");
        ctrICON.classList.add("fa-play");
    }
    else{
        song.play();
        ctrICON.classList.add("fa-pause");
        ctrICON.classList.remove("fa-play");
    }
}
if(song.play()){
    setInterval(()=>{
        progress.value = song.currentTime;
    },500);
}
progress.onchange = function(){
    song.play();
    song.currentTime = progress.value;
    ctrICON.classList.add("fa-pause");
    ctrICON.classList.remove("fa-play");
}