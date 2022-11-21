"use strict" ;
const copyright = document.querySelector('footer span');
const mainTime = document.querySelector('main time');
const mainBtn = document.querySelector ('main button');

let date = new Date ();
copyright.textContent = date.getFullYear();
mainTime.textContent = date.toLocaleDateString();
function timer () {

    const dateTimer = new Date ();
    mainTime.textContent = dateTimer.toLocaleDateString ();  
}

let idInterval = setInterval(timer, 1000);
mainBtn.addEventListener ("click", ()=>clearInterval(idInterval));

let idTimeout = setTimeout (()=>console.log("Coucou en retard !"),3000);

clearTimeout(idTimeout);

const progress = document.querySelector('.progress');
let w=0;
function load()

{

    if (w ===100) return;
    w++;
    progress.style.width = w+"%";
    setTimeout(load, 100);
}

load();



