" use strict";
/*

1 ) Javascript = choisir nombre aléatoire de 1 à 100. L"utilisateur doit le deviner, chaque fois une indication lui est donné ( plus grand ou plus petit ). FAIT
2 ) Il est limité à 7 essais
3 ) Lui proposer de recommencer. FAIT
4 ) 

- Zone affichant les messages du jeu. FAIT
- input pour la proposition. FAIT
- bouton valider input. FAIT 
- pouvoir valider avec entrée. FAIT
- lorsque terminé faire apparaître un bouton reccomencer. 
- lorsque le jeu commence ou que l'on appui sur un bouton, le focus doit revenir à l'input
- lorsque jeu terminé, les boutons et input désactivés
- bonus, faire de l'animation comme une carte qui se retourne.


*/
//7 fois max
let number,turn;
const max = 7,
badShadow = "1px 1px 5px red, -1px -1px 5px red"
goodShadow ="1px 1px 5px green, -1px -1px 5px green"
card = document.querySelector(".card")

function ()

var replace =document.querySelector(".intro h1")
var random = Math.round(Math.random()*100)
console.log(random);

var proposition = document.querySelector ( "#proposition")
proposition.addEventListener("change", jeu );
function jeu (e) {

   // console.log("nommé", this);
//console.log(e.target.value);

if (random < e.target.value) {

replace.innerHTML="C'est plus petit";

}

else if (random> e.target.value) {

    replace.innerHTML= "C'est plus grand";
}

else {

    replace.innerHTML= "C'est trouvé";
}

}

var stop = document.querySelector("#button")
replace.addEventListener("reset", game)
function game (f) {

if ( stop = 7) {


}

}

// proposition.addEventListener("change", function(e){
//     console.log("anonyme", this);
// } );
// proposition.addEventListener("change", (e)=>{
//     console.log("fléché", this);
// } );
// proposition.addEventListener("change", e=>console.log("fléché", this));