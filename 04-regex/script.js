"use strict";

/*

Les regex ( ou expression régulière) permettent la recherche dans un String, de caractère ou mots en particulier.


// "^" = Ne contient pas
// "*= 0 fois ou plus.
//"." = n'importe quel caractère
// "?" = entre 0 et 1 fois
// "\1" recherche le même résultat que la première paranthèse.
// "$" =  Recherche en fin de String

Une regex commencent et finit par "/"
*/

// Recherche la présence de "ou"
const r1 =/ou/; 

//Recherche la présence de "o" ou "u"
const r2 = /[ou]/;

// La méthode test() s'applique sur une regex et prends un string en argument. Elle retournera true ou false selon si la regex correspond ou non.

console.log(r1,r1.test("Bonjour"),r1.test("Salut"));
console.log(r2,r2.test("Bonjour"),r2.test("Salut"));

// Recherche la présence de "ou" en début de string.
const r3 = /^ou/;
console.log(r3,r3.test("Bonjour"),r3.test("outre"));

// Recherche la présence de "ou" en fin de string.

const r4 = /ou$/;
console.log(r4,r4.test("Bonjour"),r4.test("mou"));

// Recherche la présence de "ou" OU "oi"

const r5 = /ou|oi/;
console.log(r5,r5.test("Bonjour"),r5.test("Bonsoir"));

// Recherche les caractères entre a et z ( voir la table unicode)

const r6 = /[a-z]/;
console.log(r6,r6.test("Bonjour"),r6.test("056200520"));

// Recherche si le string ne contient pas ces caractères.

const r7 = /[^a-z]/;
console.log(r7,r7.test("bonjour"),r7.test("056200520"));

// Recherhe la présence de "ou" entre 0 et 1 fois.

const r8 = /(ou)?/;
console.log(r8,r8.test("Bonjour"),r8.test("Pizza"));

// Recherche la présence de "ou" entre 1 fois ou plus.

const r9 = /(ou)+]/;
console.log(r9,r9.test("Bonjour"),r9.test("Pizza"));

// Recherche la présence de " ou " 0 fois ou plus.

const r10 = /(ou)*/;
console.log(r10,r10.test("Bonjour"),r10.test("Pizza"));

// Recherche la présence de "ou " dont "u" apparaît deux fois d'affilé. ( le dernier caractère)

const r11 = /ou{2}/;
console.log(r11,r11.test("Bonjour"),r11.test("Bonjouur"),r11.test ("Bonjouuuuur"));

// Recherche la présence de "ou" 2x d'affilés. ( ce qu'il y a entre paranthèse )

const r12 = /(ou){2}/;
console.log(r12,r12.test("Bonjour"),r12.test("Bonjouur"));

// Recherche la présence entre 2 et 4 fois

const r13 = /ou{2,4}/;
console.log(r13,r13.test("Bonjour"),r13.test("Bonjouur"));

// Recerche la présence de "ou " 2fois ou plus.

const r14 = /ou{2,}/;
console.log(r14,r14.test("Bonjour"),r14.test("Bonjouur"));

// Pour rechercher un caractère utilisé par la regex comme ayant un sens, il faut que je l'échappe ( place un "\" avant)

const r15 = /\^/;
console.log(r15,r15.test("^^"),r15.test("Bonjour"));

// Inversement, des caractères normaux gagnent un sens s'ils sont échappés.

// Ici, "\s" signifie un espace.

const r16 = /\s/;
console.log(r16,r16.test("Hello World"),r16.test("Bonjour"));

// Recherche un chiffre, équivalent à [0-9]

const r17 = /\d/;
console.log(r17,r17.test("Hello World"),r17.test("Bonjour 8 fois"));

//"." recherche n'importe quel caractère
// "\1" recherche le même résultat que la première paranthèse. (Et ainsi de suite avec \2; \3...)

const r18 = /(ou).*\1/;
console.log(r18,r18.test("Coucou"),r18.test("Bonjour 8 fois"));

//-------------------------------Match------------------------------
const phrase = "J'aime la pizza, les cannelés et les okonomiyakis"; 

// Match retourne un tableau correspondant aux éléments retrouvé par ma regex.
// Match prends en argument un regex ou un string à rechercher

console.log(phrase.match(/pizza/));

// Par défaut, match s'arrête au premier élément trouvé.
console.log(phrase.match(/les/));

// Le flag "g" pour global permet de ne pas s'arrêter au premier résultat mais de fouiller le string en particulier.
console.log(phrase.match(/les/g));

const phrase2 = "Vive les regex et vive javascript";

// Avec le flag "i", la regex devient insensible à la casse ( minuscule/majuscule )
console.log(phrase2.match(/vive/gi));

//----------------------------------replace--------------------------------------
// Replace est une méthode de string aussi qui va remplacer le premier élément donné en argument par le second. ( il accepte string comme regex ).

console.log(phrase.replace("pizza","salade",));
// Même résultat.

console.log(phrase.replace(/pizza/,/salade/,));

// L'avantage d'une regex, c'est que l'on peut vérifier des cas plus complexe

console.log(phrase.replace(/pizza|okonomiyaki|cannelé/gi," salade (s)"));
console.log(phrase2.replace(/regex|javascript/gi,"*******"));

//On peut avec "$&" garder l'élément recherché et lui accoler d'autres éléments.

console.log(phrase2.replace(/javascript/gi,"$& et CSS"));
console.log(phrase2.replace(/regex/gi, "'$&' (c'est faux ) "));


//----------------------------bonus-----------------------------

const phrase3 = 
`1er: Maurice
2ème: Paul
3ème: Charli`; 

// avec le flag "m" chaque ligne sera testé comme un string séparé, donc ici il nous trouvera tous les chiffres.

console.log(phrase3.match(/^\d/gm));

// Cela fonctionne aussi avec la fin des lignes. 

console.log(phrase3.match(/(\w+)$/gm));
console.log(/^[a-z]+$/.test("paul"));
console.log(/^[a-z]+$/.test("élodie"));

// Pas de magie, les accents comme les caractères spéciaux doivent être listé un à un après le z

console.log(/^[a-zéèàâê]+$/.test("élodie"));

// Par défaut "." ne prends pas en compte les sauts à la ligne. Avec le flag "s" ils sont pris en compte.

console.log(phrase3.match (/1.+3/s));

// On peut aussi construire une regex via un string grâce au constructeur de regex " RegExp" qui prends en premier argument la regex et en second les flags

const r19 = new RegExp ("^[A-z]$", "gi");

// Attention, de A majuscule à z minuscule, certains caractères spéciaux se cachent : 

console.log(r19,r19.test("Hello_World"));

// - ou _, lettre.

const username = document.querySelector("#user"); 
const r23 = /[^-_]+[a-z]+[^1-9]/;

username.addEventListener("input", testuser)

function testuser () {

if ( r23.test (username.value))

{
    username.style.backgroundColor = "";
}
 else {

    username.style.backgroundColor = "red";
}
}

// champ rouge si pas téléphone

const phone = document.querySelector("#telephone"); 
const r20 = /(0|\+33)[1-9]( *[0-9]{2}){4}/ ;
phone.addEventListener("input", testphone)

function testphone () {
console.log(26);
    if ( r20.test (phone.value)||phone.value == "")

    {
        phone.style.backgroundColor = "";
    }
     else {
    
        phone.style.backgroundColor = "red";
    }
    }


// champ rouge si pas e-mail
const mail = document.querySelector("#email"); 
const r21 =/#^[a-zA-Z-]+@[a-zA-Z-]+\.[a-zA-Z]{2,6}$#/ ;
mail.addEventListener("input", testmail)

function testmail () {

    if ( r21.test (mail.value)||mail.value == "")

    {
        mail.style.backgroundColor = "";
    }
     else {
    
        mail.style.backgroundColor = "red";
    }
    }

// barre de progression couleur, mdp
const barre = document.querySelector ("#passBis");
const r22 = /[a-zéèêâàA-Z][0-9]([0-9])|/;
barre.addEventListener ("input",testbarre)

function testbarre () {

    if ( r22.test (barre.value))

    {
        barre.style.backgroundColor = "";
    }
     else {
    
        barre .style.backgroundColor = "red";
    }
}

// Si champ mdp faut, tourner rouge

