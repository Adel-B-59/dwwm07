"use strict";

/*

1) Ajouter un menu de sélection qui permettra de choisir 3 thèmes de couleurs.
2) Appliquer le thème selectionné grâce à JS ( pas besoin de thème compliqué).
3) Faire en sore que le choix de l'utilisateur soit toujours appliqué lorsqu'il change de page 
( que ce soit  visible dans le menu de sélection autant que dans les couleurs du site.)
4 )Bonus. Faire un bouton qui changé aléatoirement les couleurs du site et sauvegarder.

*/

const dark = document.querySelector('#darkTheme');
dark.addEventListener("input", changeTheme);

const Light = document.querySelector('#LightTheme');
Light.addEventListener("input", changeTheme3);

const Neutral = document.querySelector('#NeutralTheme');
Neutral.addEventListener("input", changeTheme5);

function changeTheme()
{

    document.body.className= "";
    document.body.classList.toggle("dark", dark.checked);
    dark.checked = localStorage.getItem("theme")==="dark";

}

function changeTheme2(){


if(dark.checked){

    document.documentElement.style.setProperty("--fond", "#333");
    document.documentElement.style.setProperty("--text", "antiquewhite");
    
    dark.checked = true ;

}


}

function changeTheme3 ()
{

    document.body.className= "";
    document.body.classList.toggle("Light", Light.checked);
 

}

function changeTheme4()
{
    if(Light.checked){

        document.documentElement.style.setProperty("--fond", "antiquewhite");
        document.documentElement.style.setProperty("--text", "#333");
        Light.checked = localStorage.getItem("theme")==="Light";
        Light.checked = true ;
    
    }
   
}
function changeTheme5 ()

{
    document.body.className= "";
    document.body.classList.toggle("Neutral", Neutral.checked);
  
}

function changeTheme6 ()

{

    if(Neutral.checked){

        document.documentElement.style.setProperty("--color", "#4D4D4D");
        Neutral.checked = localStorage.getItem("theme")==="Neutral";
        Neutral.checked = true ;
    
    }



}