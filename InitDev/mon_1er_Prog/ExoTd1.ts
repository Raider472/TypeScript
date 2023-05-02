import * as readlineSync from "readline-sync";
//Exo 1
/*console.log("Exercice 1");
let prénom = readlineSync.question("Ton Prénom stp: ");
console.log("Bonjour", prénom);*/
//Exo 2
/*console.log("Exo 2");
let nom = readlineSync.question("Ton Nom stp: ");
console.log("Bonjour", prénom, nom);*/
//Exo 3
/*console.log("Exo 3");
let nombre_1 = Number(readlineSync.question("Tape un nombre stp: "));
let nombre_2 = Number(readlineSync.question("Tape un deuxième nombre stp: "));
console.log("La somme est", nombre_1 + nombre_2);*/
//Exo 4
/*console.log("Exo4");
let nombre_3 = Number(readlineSync.question("Tape un troisième nombre stp: "));
console.log("La résultat est", (nombre_1 + nombre_2) * nombre_3);*/
//Exo 5
/*console.log("Exo 5");
let age = Number(readlineSync.question("Ton âge stp: "));
console.log(nom, ",à votre prochain anniversaire vous aurez", age + 1);*/
//Exo 6
/*console.log("Exo 6");
let heures = 24;
let minutes = 1440;
let secondes = 86400;
let jours = Number(readlineSync.question("Combien de jours ? "));
console.log(
    "Il y a :",
    heures * jours,
    "heures",
    minutes * jours,
    "minutes",
    secondes * jours,
    "secondes"
);*/
//Exo 7
/*1console.log("Exo 7");
let poids = Number(readlineSync.question("Combien de kilogramme tu veux ? "));
console.log("Voila ton poids en livres", poids * 2.204);*/
//Exo 8
/*console.log("Exo 8");
let nombre_100 = Number(readlineSync.question("Un nombre plus grand que 100 stp: "));
let erreur = 0;
let correcteur = 0;
let erreur_calc = 0;
if (nombre_100 < 100) {
    console.log("tu est nul");
    correcteur = nombre_100;
    nombre_100 = correcteur + 100;
    erreur_calc = erreur;
    erreur = erreur_calc + 1;
}
let nombre_10 = Number(readlineSync.question("Un nombre plus petit que 10 stp: "));
if (nombre_10 > 10) {
    console.log("tu est encore nul");
    correcteur = nombre_10;
    nombre_10 = correcteur - 10;
    erreur_calc = erreur;
    erreur = erreur_calc + 1;
}
let quotient = Math.floor(nombre_100 / nombre_10);
let reste = nombre_100 % nombre_100;
if (erreur > 1) {
    console.log("gg ff");
}
console.log(
    "Le résultat est: ",
    nombre_100 % nombre_10,
    "Le quotient est",
    quotient,
    "Le reste est",
    reste
);*/
//Exo 9
/*console.log("Exo 9");
let d = 0;
let a = Number(readlineSync.question("Choisis ta valeur a: "));
let b = Number(readlineSync.question("Choisis ta valeur b: "));
let c = Number(readlineSync.question("Choisis ta valeur c: "));
d = a;
a = b;
b = c;
c = d;
console.log("Voici le résultat: ", "a = ", a, "b = ", b, "c = ", c);*/
//Exo 10
console.log("Exo 10");
let montant = Number(readlineSync.question("Entrez le montant : "));
let sommePayée = Number(readlineSync.question("Entrez la somme payée : "));
let montantARendre = sommePayée - montant;
console.log("Montant à rendre : ", montantARendre);
