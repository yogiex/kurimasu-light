const buletan = document.getElementsByName('titik');
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

stop.addEventListener('click',off);