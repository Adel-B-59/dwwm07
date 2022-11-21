" use strict " ;

//---------------WHILE-----------------

let a = 0; 
// tant que a est inférieur à 10:
while(a<10) 
{
// On répète ce qui se trouve entre accolade    
console.log("a vaut", a);
// On prévoit la condition de sortie.
a++;
}
// ! ATTENTION de toujours prévoir un moyen de sortir
while ( true)

{

    a++;
    if(a<20){
// Continue met fin à l'itération mais continue la boucle.

        continue;
        // Ici, ce qui se suis ne s'executera que si a arrive à 20.
    }
    console.log(" a vaut", a);
 if (a ==25)
 {
    // Break met fin à la boucle.
    break;
}
}
/*
do while permet de lancer une action au moins une fois avant de vérifier si elle doit être répété.
Ici, a est plus grand que 5, donc il n'y aura pas de boucle. Mais le console.log se lancera quand même une fois.
*/
do{

console.log("a vaut", a);
  
}
while(a<5);

//---------------------------FOR-----------------------------------------

for (let i = 0; i<10; i++)
{

    /*
La boucle for prends 3 paramètres séparés de ";"
- Le premier est une déclaration et définition de variable qui sera éxecuté avant le début de la boucle.
- le second est la condition qui sera vérifié avant chaque itération pour savoir si la boucle continue.
- le troisième est la modification de la variable qui aura lieu à la fin de chaque itération.
*/

console.log("i vaut ", i);

}

let arr =["pizza","cannelé","gratin dauphinois"];
let person =  { nom: "Maurice", age:55, yeux:"vert"};

for ( let food in arr)

{

// for in permet de récupérer les différents index d'un tableau.
    console.log(food, "->", arr [food]);
// a chaque itération, la variable déclaré dans le for prendra la valeur de l'index suivant.
}

for (let carac in person )

{
// utilisé sur un objet, on obtient le nom des propriétés.
console.log(carac, " ->", person[carac]);

}

for( let f of arr)
{

    // For of comme for in va parcourir mon tableau, mais au lieu de sélectionner les index, il sélectionnera directement les valeurs.
    console.log(f);

}
// for of ne fonctionne pas sur les objets.
// for ( let truc of person) {}


//------------------------------------- forEach et map------------------------------

let a1 = [8,15,23,65,84];

/*
forEach et map sont des méthodes appartenant aux tableaux.
Elles ne fonctionneront que sur les tableaux avec la syntaxe suivante: 
tableau.forEach(fonction);
tableau.map(fonction);
*/

a1.forEach(chiffre =>console.log(chiffre));

/*
forEach crée une ittération pour chaque élément du tableau.
Cet élément est récupéré dans la variable donné en paramètre de forEach et peut être utilisé comme on le souhaite dans la fonction callback.
(plus de détail dans le cours sur les fonctions.)
 */

let a2 = a1.map(val=> val*2)
console.log(a2);

/*

Le fonctionnement de map se rapproche de celui de forEach, à la différence qu'il permet de modifier les valeurs d'un tableau et nous retourne un nouveau tableau
contenant les valeurs retournés par la fonction callback.

*/

let a3 = arr.map(food=>food.toUpperCase()) ;
console.log(a3);

// ---------------------- EXO 5.1 ---------------------
/* écrire un algorithme qui demande à l'utilisateur un nombre compris entre 1 et 3 
jusqu'à ce que la réponse convienne.*/

let n;
do{

n = prompt   ("Ecrivez un chiffre entre 1 et 3"); 
}

// tant que n est inférieur à 3:
while(n<1|| n>3) 
console.log("n vaut", n);
if(n<1 || n>3 )
console.log("Erreur");
{

n++;}

// ---------------------- EXO 5.2 ---------------------
/* Ecrire un algorithme qui demande un nombre compris entre 10 et 20, jusqu'à ce que 
la réponse convienne, en cas de réponse superieur à 20, on ferra apparaître un message
"Plus petit !" et inversement "plus grand !" si inférieur à 10. */

let m,x =("Ecrivez un chiffre entre 10 et 20");
do{

m =prompt(x);   
x = m<10? "Plus grand !": "Plus petit";  
}
while (m<10||m>20)


// -------------------- EXO 5.3 ---------------------
/* Demander un nombre à l'utilisateur, puis afficher les dix nombres suivants. */


let z = parseInt(prompt(" Ecrivez un nombre, j'afficherais les 10 suivants"));
for(let i = z+1; i<=z+10;i++)
{

    console.log(i);
}




// -------------------- EXO 5.4 ---------------------
/* Ecrire un algorithme qui demande un nombre puis écrit la table de multiplication
de ce nombre. */

let w = prompt ("Ecrivez un nombre, j'afficherais sa table de multiplication");
for ( let i = 1; i<10;i++) {

    console.log(`${w}*${i}=${w*i}`);
   // console.log(w +" * "+i+" = " + w*i);
}


// -------------------- EXO 5.6 (5.5) ---------------------

/* Ecrire un algorithme qui demande un nombre puis calcul la factoriel de ce nombre
(le 5.5 demande la même chose mais avec des additions plutôt que des multiplications) */

let v = prompt ("Ecrivez un nombre"), total = 1;
for (let i = 1; i<v; i++){

    total *=i;
}

console.log("La factoriel de" +v+"vaut" +total);

// -------------------- EXO 5.7 ---------------------
/* Ecrire un algorithme qui demande successivement 5 nombres
et qui lui dise ensuite quel était le plus grand parmi ces nombres. 
Bonus : Indiquer la position à laquelle a été donné ce nombre*/

let nb, max, pos ;
for (let i = 1; i<=5; i++) {

    nb = parseInt(prompt( "Donne moi un fichu nombre !") ); 
    if ( i==1|| max<nb)
    {
        max = nb ;
        pos = i;
    }
}
console.log(`Le nombre le plus grand est ${max} et a été donné à la saisie numéro ${pos}`);

// -------------------- EXO 5.8 ---------------------
/* même exercice que précédement mais on arrête de demander des nombres que si l'utilisateur
entre un 0 */

let i = 1;

do{

    nb = parseInt(prompt(" Donne moi un fichu nombre !" ));
    if( i==1||max<nb){

    max =nb;
    pos=i;
}
}while (nb!=0)
console.log(`Le nombre le plus grand est ${max} et a été donné à la saisie numéro ${pos}`);