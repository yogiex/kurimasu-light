const buletan = document.getElementsByClassName('titik');
const start = document.getElementById('play')
const stop = document.getElementById('stop')
const judul = document.getElementById('judul')
var len = buletan.length;

const off = function() {
    judul.style.animation = "none";

    for(var i=0;i< len;i++){
        buletan[i].style.animation = "none";
        buletan[i].style.background = "#563260";
    }
}

const on = function() {
    judul.style.animation = "none";

    for(var i=0;i< len;i++){
        buletan[i].style.animationPlayState = "running";
    }
}

start.addEventListener('click', on);
stop.addEventListener('click', off);