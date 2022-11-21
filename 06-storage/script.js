"use strict" ;
const dark = document.querySelector('#darkTheme');
dark.addEventListener("input", changeTheme);

/*
Une première façon de changer un thème est de modifier la classe du body.
Le body étant le parent de tout, beaucoup d'éléments héritent de ses propriétés et tous sont enfants de lui.

*/
function changeTheme()
{

    document.body.classList.toggle("dark", dark.checked);

}

dark.addEventListener("input", changeTheme2);

/*

Une autre façon de faire est d'utiliser des variables CSS paramétrés dans l'élément racine et ensuite de venir modifier les valeurs de ces variables.

*/
function changeTheme2()
{
 if(dark.checked){

    // DocumentElement représente l'élément racine.
    document.documentElement.style.setProperty("--fond", "#333");
    document.documentElement.style.setProperty("--text", "antiquewhite");
    localStorage.setItem("theme", "dark");
    dark.checked = true ;
  }

else{

    document.documentElement.style.setProperty("--fond", "antiquewhite");
    document.documentElement.style.setProperty("--text", "#333");
    // Je retire le thème sombre
    localStorage.removeItem("theme") ;
    dark.checked = false ;
  }
}

dark.checked = localStorage.getItem("theme")==="dark";
changeTheme2();
/*

Session et localStorage permettent de sauvegarder des informations dans le navigateur sous forme de string.
Session se supprimera automatiquement à la fermeture du navigateur.
Alors que localstorage ne sera jamais supprimé si ce n'est pas fait manuellement.

!ATTENTION, localstorage ne fonctionne que peu ou pas so on se contente d'ouvrir nos fichiers sans passer par un serveur.

On pourra utiliser un serveur local style live server ou xampp pour tester localStorage.

Les deux utilisent les même méthodes et propriétés.

setItem permet de sauvegarder un élément.
Il prendra un premier argument qui sera une clef ( un titre ) pour retrouver notre information.
Et en second argument l'information à sauvegarder sous forme de string.

*/

sessionStorage.setItem("salutation", "Bonjour tous le monde !");
localStorage.setItem ("salutation", "Bonjour tous le monde !" );

/*
getItem permet de récupérer un élément stocké au préalable en le selectionnant via sa clef.
S'il n'y en a aucun, il retournera "null".

*/
console.log(sessionStorage.getItem("salutation"));

/*

RemoveItem permet de supprimer un élément stocké au préalable en le selectionnant via sa clef.

*/

localStorage.removeItem("salutation");

// Key permet de récupérer les clefs des éléments stockés via leur index

console.log(sessionStorage.key(0));

// Clear supprime tout sans état d'âme.

sessionStorage.clear();

