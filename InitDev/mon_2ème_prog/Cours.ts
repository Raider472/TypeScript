import * as readlineSync from "readline-sync";

const pi = 3.1415;

console.log();
let résultat = Number("42");
console.log(résultat);
console.log(Number("42") * 2);
let calcul = Number("42") * résultat;
let jaaj = Number("10");
console.log(jaaj * Number("9"));
console.log(Math.sin(59 / 360) * 5 * Math.PI);
function randomisateur(): void {
  let random = Math.random() * 100;
  let resultat = Math.floor(random);
  console.log(resultat);
}

function casino(): void {
  randomisateur();
  randomisateur();
  randomisateur();
}

casino();

function afficherDeuxFois(message: number): void {
  console.log(message);
  console.log(message);
}

afficherDeuxFois(96);

function calculateur(chiffre: number): void {
  console.log(chiffre * Math.floor(Math.random() * 10));
}

calculateur(27 * 100);

function monneRendu(prix: number, monna: number): void {
  let montant_reste = prix - monna;
  return console.log("Ta monney :", -1 * montant_reste);
}

function testReturn(): number {
  return 1 + 1;
}

monneRendu(50, 156);
console.log(testReturn());

function distance(x1: number, y1: number, x2: number, y2: number): number {
  let dx = x2 - x1;
  let dy = y2 - y1;
  let sommeCarrés = dx ** 2 + dy ** 2;

  return Math.sqrt(sommeCarrés);
}

console.log("distance =", distance(1, 2, 4, 6));

function aire(rayon: number): number {
  return pi * rayon * rayon;
}
// Définition de la fonction princaple
function main(): void {
  let rayon = Number(readlineSync.question("Entrez le rayon du disque :"));
  console.log("L'aire du disque de rayon est", aire(rayon));
}
//let rayon = Number(readlineSync.question("Entrez le rayon du disque :")); marche aussi
// Appel de la fonction principale
main();
