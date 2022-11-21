" use strict";
//Commentaire sur une seule ligne

/* Commentaire sur plusieurs lignes 

"use strict" permet de rendre moins permissif Javascript, JS ne corrigera pas de lui même mes petites erreurs qu'il détecte.

*/

// Déclaration des variables

let banane;
// On déclare une variable avec le mot clé " let "
console.log("banane : ", banane);
// On fait appel à une variable simplement en écrivant son nom.
// ! Attention, les variables sont sensibles à la casse !
var tomate; 

// On peut aussi déclarer une variable avec " var ", mais la portée sera plus grande.

const cerise = 5; 
// Const permet de déclarer une constante, c'est à dire une variable dont la valeur ne pourra pas changer. Par ce fait, elle doit être définit à sa déclaration.

// cerise = 3 ; Cela retourne une erreur

banane = 2;
tomate = 6 ;

let a,b,c; 
var d, e=5, f=1; 

// Je peux déclarer plusieurs variables à la suite en les séparant d'une virgule.

/*
 Les noms de variables peuvent contenir des lettres, des chiffres, des "_" ou des "$" ( entre autre )
 ! Elles ne peuvent pas commencer par un chiffre.

 */

 // La portée des variables.

 let gLet = 1; 
 var gVar = 1 ; 

 {
let Hlet= 2;
var Hvar = 3;
console.log(gLet,Gvar,hLet,Hvar);
 }

// console.log(gLet,Gvar,hLet,Hvar);

 /*
 
 Une variable définit avec le let est accessible uniquement dans son bloc et ses enfants. Ici, Hlet n'est pas accesible hors de son bloc.
 const suit les même règles que let.
 */

// let gLet =5;
// On ne peut pas redéclarer une variable déjà existante.

{
let gLet = 5;
var gVar = 5;
// Redéclarer une variable dans un bloc n'est pas une erreur. C'est une variable différente. 
console.log( " Dans le bloc : ", gLet, gVar);
}

console.log( " Hors du bloc : ", gLet, gVar);

/*
let a créé une nouvelle variable dans le bloc et hors du bloc nous retourne celle d'origine.
Var a écrasé l'ancienne variable pour ne garder que la nouvelle.
*/

// Types des variables !

let num = 5;
str = "Coucou",
bol=  true,
arr = [],
obj={},
und;
//typeof va me retourner le type de la variable donné en paramètre
//Javascript a 5 types principaux :
console.log("num", typeof(num));
//Number
console.log("str", typeof(str));
// String
console.log("bol", typeof(bol));
//Boolean
console.log("arr", typeof(arr));
//Object
console.log("obj", typeof(obj));
//Object
//Les tableaux et les objets fonctionnent différemment mais sont tous les deux de type " object "
console.log("und", typeof(und));
//Undefined
bol = 42;

/*JS est un langage non typé, ce qui signifie qu'on n'a pas besoin de préciser le type d'une variable lors de sa déclaration. 
Cela signifie aussi qu'on peut changer le type d'une variable sans provoquer d'erreur.
*/

// String

let s1 ="Coucou", s2 = 'Coucou', s3= `Coucou` ;
// Pour définir un string, on utilisera au choix "", '' ou ``.
// "" et '' ont peu ou pas de différence d'utilisation.

s1= "L'apostrophe ne pose aucun problème ici."
s2= 'L\'appostrophe pose un problème ici.' ; 
s1= ' Le grand ordinateur a dit \"42\"';
s1= " Le grand ordinateur a dit \"42\"";
/*
Si on souhaite utiliser des guillemets dans un string fait à partir de guillemet ( et inversement avec les apostrophes), il nous faudra les échapper
en plaçant un "\" avant le caractère.
Cela indiquera à JS de ne pas prendre en compte ce caractère.
*/

s1="Karl";
s2='Bonjour ' +s1 + " Comment vas-tu ?"; 
console.log(s2);
// Le symbole de la concaténation (Fusion de chaîne de caractère) en JS est "+"
s3 = `Bonjour ${s1} Comment vas-tu ?`;
console.log(s3);
/*
Le String en `` permettent de faire usage d'interpolation, c'est à dire de pouvoir intégrer du JS directement dans le string.
Pour cela, on utilsiera " ${} "
*/

//s2 = ' Je ne peux pas
//sauter à la ligne '; 

s3 = `Je peux très bien
sauter à la ligne` ; 
console.log(s3);

// Number

console.log(99999999);

// JS perds en précision sur les très grand nombre.
console.log(0.2+0.1);
// JS peut avoir des imprécisions avec les nombres à virgule.
console.log(5+5,5-5,5*5,5/5,5%2,5**5);

// % le modulo ( retourne le reste de la division )
// ** la puissance.

console.log(5+"5",5-"5",5+"banane",5-"banane",);

/* JS s'il doit additioner un string et un nombre, fera une concaténation.
S'il doit soustraire un string et un nombre, il fera la soustraction, sinon, il répondra NaN ( Not a Number )*/

console.log(typeof(NaN));
// isNaN() permet de vérifier si le paramètre n'est pas un nombre.
console.log(isNaN(5-"chaussette"), isNaN(5-"1"));
// Le mot clef infinity représente le nombre maximum utilisable en JS.
console.log(Infinity, -Infinity);
// Blague JS:
console.log(("b"+"a"+ +"a"+ "a").toLowerCase());

let n = 0;
n = n+5;
n += 5;
n-=2;
n*=3;
n/=4;
console.log(n);
//+= permet de donner à la variable sa propre valeur additionné du nombre suivant, ( de même pour les autres opérateurs ).

n+=1; 
n++; 
++n;
n--;
--n;
console.log(n,n++,++n,n--,--n);

/*
L'incrémentation ++ et la décrémentation -- permettent d'augmenter ou diminuer la valeur d'une variable de 1. 
Selon si les opérateurs sont placés avant ou après la variable. La valeur retourné sera celle d'avant ou après l'opération.
*/

n=17;
console.log(n.toString(),n.toString(2));

/*
La méthode toString() permet de transformer un nombre en chaîne de caractère sans lui donner un paramètre, il utilisera la base 10. 
On peut lui donner une autre base en paramètre.
*/
let s = "10011101";
console.log(pareseInt(s,2), parseInt(s), parseInt(s,16));
/*
Inversement on peut utiliser la fonction parseInt() pour transformer un string en nombre.
 */

// Array 

let a1= [5,"truc", true],
a2 = new Array (5," truc",true); 
console.log(a1,a2);
// Pour accéder une valeur en particulier au tableau :
console.log(a1[0], a1.length);
/*
Mettre le nom de la variable suivit de crochet permet d'indiquer l'index de l'élément que l'on souhaite afficher.
Un tableau commence toujours à l'index 0.
On peut aussi accéder à ses propriétés en faisant suivre la variable d'un point puis du nom de la propriété.

*/

console.log(a1[a1.length-1]);
/*
Accèder au dernier élément d'un tableau :
au dessus: avant Ecmascript 2022
en dessous: depuis Ecmascript 2022

*/
console.log(a1.at(-1));
//.at () fonctionne aussi sur les string
console.log("Salut".at(-1));

// La méthode push permet d'ajouter un élément à la fin du tableau.
a1.push ("bidule");
console.log(a1);
// pop retire le dernier élément du tableau.
a1.pop();
console.log(a1);
// shift retire le premier élément du tableau.
a1.shift ();
console.log(a1);
// Ajoute un élément au début du tableau. 
a1.unshift (42) ;
console.log(a1);
// Splice retire depuis l'index donné en premier argument le nombre d'élément donné en second paramètre
a1.splice(1,1);
console.log(a1);
a1.push("chaussette");
// On peut ajouter autant de paramètre que l'on veut à splice. Il placera ces paramètres à la place des éléments retirés.
a1.splice(1,1," machin", "test") ;
console.log(a1);

let a3 = [4,1,42,8,14];
// Sort tri le tableau par ordre alphabétique, même les chiffres.
a3.sort();
console.log(a3);
// On verra plus tard comment lui faire bien trier les chiffres. 

// On peut modifier ou ajouter des éléments ainsi : 

a1 [a1.length] = " Pizza";
console.log(a1);

// Je souhaite faire une copie de mon tableau :
let a4 = a1;
console.log(a1, a4);
/*
les  variables de tableau ne contiennent pas les  valeurs du tableau mais l'adresse mémoire où se trouve le tableau dans l'ordinateur.
De ce fait, on a juste à indiquer à a4 qu'il contient la même adresse qu'a1. En modifier en modifiera une autre.

*/
a4.push("Cerise"); 
console.log(a1,a4);
/*
En utilisant le spread operator (...) on demande à JS de déconstruire notre tableau, plaçant différentes valeurs dans le tableau les unes après les autres.
Ici, je l'ai mit dans un nouveau tableau. Permettant ainsi de faire une copie de notre tableau.

*/

let a5 = [...a1];
a5.push ("avocat");
console.log(a1, a5);
console.log(...a5);
/*
Si je place un tableau dans un autre tablea, je me retrouve avec un tableau multidimensionnel.
Si je souhaite simplement les fusionner, je devrais là aussi utiliser le spread operator.

*/
let a6 = ["pomme", "banane", a5, "orange"];
console.log(a6);

let a7 = [ "pomme", "banane", a5, "orange" ];
console.log(a7);
// Pour accéder à un élément d'un tableau multidimensionnel, il me suffit d'indiquer plusieurs index à la suite.
console.log(a6[2][3]);
let a8 = [[[[[["Coucou"]]]]]];
console.log(a8 [0] [0] [0] [0] [0] [0]);
// On peut ou devrait utiliser des const pour les tableaux puisque ce qui est stocké est l'adresse mémoire, on peut donc modifier autant que l'on veut le tableau.
const a9= [ "test" ];
a9 [1] = " test2";
console.log(a9);

// Object

const o1 = { nom:" Dupont", age:45, loisir: ["bowling", "mahjong"]};
/*
Les objets ressemblent à des tableaux mais dans lesquels au lieu d'indexer par des chiffres, on index par des noms de propriétés. 
( ces noms ont les même règles de nomination que les variables)

*/
console.log(o1);
/*
 On peut accéder aux données de la même façon qu'un tableau mais aussi via un "." suivit du nom de la propriété.
*/
console.log(o1["age"],o1.age);
console.log(o1["loisir"], [0],o1.loisir[0]);
const o2 = {vegetal: {legume: {haricots: {couleurs: "vert"}}}};
console.log(o2.vegetal.legume.haricots.couleurs);

// Pareillement aux tableaux, c'est l'adresse qui est sauvegardé.
const o3= o1;
o3.signe ="Balance";
console.log(o1,o3);
// Là aussi on pourra utiliser le spread operator pour faire une copie.
const o4 = { ...o1};
o4.signe = "Scorpion"
console.log(o1,o4);
// On peut transformer un tableau en objet mais pas inversement.
console.log({...a1});

o4.yeux = "verts";

// En cas de fusion, les doublons sont remplacés par ceux du dernier objet.
const o5 = {...o4,...o1}; 
console.log(o5);

// Boolean 

let b1 = true, b2 = false ;
// Les booleans ne peuvent avoir que 2 valeurs, true or false.

// Mais on peut les faire apparaître de plein de façon : 

console.log(" 1 < 2: ", 1<2 );
console.log(" 1>2 : ", 1>2);
console.log(" 1<=2: ", 1<=2);
console.log(" 1>=2 : ", 1>=2);
// == permet de vérifier l'égalité entre deux éléments. ( attention un seul = sert seulement à la definition des variables)
console.log(" 1== '1': ", 1 == '1');
// === va vérifier si le type correspond aussi
console.log(" 1==='1': ",1 ==='1' );
// Strictement différent :
console.log(" 1!=='1': ",1!=='1' );
// différent :
console.log(" 1!='1': ", 1!='1');
console.log(" b1: ",b1, "b2 :", b2 );
console.log(" !b1: ",!b1,  "!b2 :", !b2);
// le "!" avant un boolean inverse le résultat.
console.log("!b1 :", !b1, "!b2 :", !b2);
