"use strict";


const b3 = document.querySelector('.div3 button');
const m = document.querySelector('.modal');
const btnModal = document.querySelector(".modal button:last-of-type")
function modal()
{
    m.classList.toggle("hidden");
}
b3.addEventListener("click", modal);
btnModal.addEventListener("click", modal);