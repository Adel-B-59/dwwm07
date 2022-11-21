"use script";
/*
On va chercher la méthode " floor " de l'objet " Math " qui nous permet d'arrondir à l'intérieur.
Math.random() nous permet d'obtenir un chiffre entre  0 et 1.
x contiendra donc un chiffre entre 0 et 20.  

*/
let x = Math.floor(Math.random()*20); 
// Un if permet de vérifier une condition, il attends un boolean pour savoir s'il peut faire l'action entre accolade ou non.
if( x<10 ) 

{

 console.log(x + "est plus petit que 10");

} 
// A la suite d'un if, on peut optionnellement ajouter un else if pour vérifier une autre condition.
else if (x>10)
{
    console.log(x + "est plus grand que 10");

}
// A la suite d'un if ou else if, on peut ajouter un else qui s'enclenchera si toutes les autres conditions sont fausses.

else {

    console.log( "x est égal à 10")
;
}

// On peut mettre autant de else if que l'on veut.
/* D'autres syntaxes existent, comme en ne mettant pas d'accolade, dans ce cas là. Seule la première instruction qui suis sera dans le if. 
Les autres seront considérés hors du if.*/

if( x<10 ) 
{
 console.log(x + "est plus petit que 10");

} 
else if (x>10)
{
    console.log(x + "est plus grand que 10");

}
else {
    console.log( "x est égal à 10")
;
}
/*
On peut dire aussi utiliser ternaire, c'est à dire une condition sous la forme: condition?true:false;
*/
let message = x<10? "est plus petit que 10":x + " est plus grand que 10";
console.log(message);
// Je peux imbriquer une ternaire dans une autre.
message = x<10?x + " est plus petit que 10" : x>10?x + " est plus grand que 10" : " x vaut 10";
console.log(message);
// -----------------------------------------------------------Switch-------------------------------------------------------------------

let ville = prompt ("De quelle ville venez-vous ?");
console.log(ville);
// Le switch accueil une variable en paramètre puis lance le cas qui correspond
switch(ville.toLocaleLowerCase)
{

    // Plusieurs cas peuvent lancer les mêmes actions.
case "Tokyo":
case "Londres":    
case "paris": alert("De la capital");
// Le mot clé " break " permet  d'arrêter le cas ici et de ne pas lancer les prochaines actions.
break;
case " lille": alert( "Moule, frite et bière")
break;
// Le mot clé "default" permet de  créer un cas par défaut qui se lance si les précédents ne correpondent pas.

default:
    alert (" Je ne connais pas");
}
// ----------------------------------------------------------------??---------------------------------------------------------------------

let a, b = undefined, c = null, d = "chaussette", e = { nom: "Bruno"}, f = ["test"];
// Le " ??" permet de vérifier si la variable précédente est définit et dans le cas contraire, utiliser ce qui est donné après le " ??" 
console.log(a??"Coucou", b?? "Coucou", c?? "Coucou",d?? "Coucou", e.nom?? " Coucou", e.prenom??"Coucou",f[0]??"Coucou",f[1]??"Coucou");