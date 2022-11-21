"use strict";

/**
 * 1.Le champ nom d'utilisateur doit tourner au rouge si 
 * il contient autre chose que des lettres, - ou _;
 * 2.Le champ téléphone doit passer au rouge si ce qui est entré
 * ne correspond pas à un numéro de téléphone.
 * 3.Le champ email doit passer au rouge si ce qui est entré ne 
 * correspond pas à un email.
 * 4.Ajouter une barre de progression qui change de couleur
 * et se rempli à chaque fois que l'utilisateur sécurise 
 * un peu plus sont mdp :
 *      -lettre minuscule.
 *      -lettre majuscule.
 *      -chiffre.
 *      -caractère spécial.
 *      -au moins 8 caractère.
 * 5. le champ mdp bis doit tourner au rouge si il ne correspond 
 * pas au champ mdp.
 * (le changement au rouge peut être personalisé autrement,
 * l'important est de montrer à l'utilisateur qu'il se trompe)
 */


// - ou _, lettre.

const username = document.querySelector("user"); 
const r5 = /^-|_+[a-z]/;

username.addEventListener("input", testuser)

function testuser () {

if ( r5.test (username.value))

{
    username.style.backgroundColor = ("");
}
 else {

    username.style.backgroundColor = ("red");
}
}

// champ rouge si pas téléphone
const username1 = document.querySelector("phone"); 
const r6 = /(0|\+33)[1-9]( *[0-9]{2}){4}/ ;
username.addEventListener("input", phone)

function testphone () {

    if ( r6.test (username.value))

    {
        username.style.backgroundColor = ("");
    }
     else {
    
        username.style.backgroundColor = ("red");
    }
    }


// champ rouge si pas e-mail
const username2 = document.querySelector("mail"); 
const r7 =/#^[a-zA-Z-]+@[a-zA-Z-]+\.[a-zA-Z]{2,6}$#/ ;
username.addEventListener("input", testmail)

function testmail () {

    if ( r7.test (username.value))

    {
        username.style.backgroundColor = ("");
    }
     else {
    
        username.style.backgroundColor = ("red");
    }
    }




// barre de progression couleur, mdp

const r8 = /[a-zéèêâàA-Z][0-9]([0-9])|/;

// Si champ mdp faut, tourner rouge
