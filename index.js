let seconds = 0;
let myTimer;

function startbutton(){
    clearInterval(myTimer)
    myTimer = setInterval(starttimer,1000)
}
function starttimer(){
    seconds++
    document.getElementById('watch').innerHTML = seconds
}
function stoptimer(){
    clearInterval(myTimer)
}
function setround(){
    document.getElementById('saves').innerHTML += `<li>${seconds}</li>`
    seconds = 0
}
function cleartimer(){
    location.reload();
}

