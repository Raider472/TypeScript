import * as readlineSync from "readline-sync";
//Exo 1
/*let xMath = Number(readlineSync.question("Choisis ton nombre x stp :"));
let yMath = Number(readlineSync.question("Choisis ton nombre y stp :"));
let zMath = Number(readlineSync.question("Choisis ton nombre z stp :"));
function valeurparfait(): boolean {
  return xMath === yMath && xMath === zMath && yMath === zMath;
}
function valeurEntre(): boolean {
  return (yMath > xMath && yMath < zMath) || (yMath < xMath && yMath > zMath);
}
function valeurPair(): boolean {
  return xMath % 2 === 0;
}
if (xMath === yMath && xMath === zMath && yMath === zMath) {
  console.log("Les valeurs sont égaux : ", valeurparfait());
} else if ((yMath > xMath && yMath < zMath) || (yMath < xMath && yMath > zMath)) {
  console.log("La valeur Y est entre X et Z : ", valeurEntre());
} else if (
  !(xMath === yMath && xMath === zMath && yMath === zMath) &&
  !((yMath > xMath && yMath < zMath) || (yMath < xMath && yMath > zMath)) &&
  xMath % 2 === 0
) {
  console.log("La valeur X est pair et aucune autre condition sont correctes : ", valeurPair());
} else {
  console.log("Tu est un jaaj");
}*/

//Exo2
/*let xMatheu = Number(readlineSync.question("Choisi ton nombre x stp : "));

function I1(): boolean {
  console.log("X est supérieur ou égale à -1 et inferieur ou égale à 3");
  return xMatheu >= -1 && xMatheu <= 3;
}
function I2(): boolean {
  console.log("X est supérieur ou égale à -1 et inferieur ou égale à 3");
  return xMatheu > -1 && xMatheu <= 3;
}
function I3(): boolean {
  console.log(
    "X est supérieur ou égale à -1 et inferieur ou égale à 3 ou égale ou sup à 8 ou égale ou inférieur à 10"
  );
  return (xMatheu > -1 && xMatheu <= 3) || (xMatheu >= 8 && xMatheu <= 10);
}
function I4(): boolean {
  console.log(
    "X est supérieur ou égale à -1 et inferieur ou égale à 3 ou égale ou sup à 8 ou égale"
  );
  return (xMatheu >= -1 && xMatheu <= 3) || (xMatheu >= 8 && xMatheu < Infinity);
}

console.log(I1());
console.log(I2());
console.log(I3());
console.log(I4());*/

//Exo3
/*function SignoDeath(x: number, y: number): boolean {
  console.log("X et Y ont le m^eme signe ? : ");
  return (x > 0 && y > 0) || (x < 0 && y < 0);
}

console.log(SignoDeath(-4, -5));*/

//Exo 4
/*let a = Number(readlineSync.question("Choisis ton nombre a stp :"));
let b = Number(readlineSync.question("Choisis ton nombre b stp :"));
let c = Number(readlineSync.question("Choisis ton nombre c stp :"));

function BooleanofDeath(): boolean {
  console.log("b est supérieur à a et c est supérieur à b: ");
  return a < b && b < c;
}

console.log(BooleanofDeath()); */

//Exo 5
/*let année = Number(readlineSync.question("Choisis ton année stp :"));
function calculoBisextille(): boolean {
  console.log("L'année est bisextille : ");
  return (année % 4 === 0 && année % 100 != 0) || année % 400 === 0;
}

console.log(calculoBisextille());*/

//Exo 6
/*function TheodeMachin(a: number, b: number, c: number, n: number): void {
  let resultat = a ** n + b ** n;
  let resultat_2 = c ** n;
  console.log("Voici le résultat", resultat, "=", resultat_2);
  if (resultat === resultat_2) {
    console.log("Fermat avait tort");
  } else {
    console.log("Cela ne marche pas");
  }
  return;
}

console.log(TheodeMachin(2, 0, 2, 2));*/

//Exo 7
/*let Trait_1 = Number(readlineSync.question("Choisis ta première longeur en cm :"));
let Trait_2 = Number(readlineSync.question("Choisis ta deuxième longeur en cm :"));
let Trait_3 = Number(readlineSync.question("Choisis ta troisème longeur en cm :"));

function TriangleSimulator(): void {
  if (Trait_1 > Trait_2 + Trait_3 || Trait_2 > Trait_1 + Trait_3 || Trait_3 > Trait_1 + Trait_2) {
    console.log("Ton Triangle est débile");
  } else {
    console.log("Bravo ! tu as un triangle correcte mdr");
  }
}

console.log(TriangleSimulator());*/

//Exo 8
/*const TVAFixe = 1.196
let achatJaaj = Number(readlineSync.question("Choisis on prix :"));

function calculoTVA(): number {
  if (achatJaaj < 1000) {
    console.log("0% de TVA donc = ");
    return (TVAFixe * achatJaaj) * 1;
  } else if (achatJaaj >= 1000 && achatJaaj < 2000) {
    console.log("1% de TVA donc = ");
    return (TVAFixe * achatJaaj) * 0.99;
  } else if (achatJaaj >= 2000 && achatJaaj < 5000) {
    console.log("2% de TVA donc = ");
    return (TVAFixe * achatJaaj) * 0.98;
  } else if (achatJaaj >= 5000) {
    console.log("5% de TVA donc = ");
    return (TVAFixe * achatJaaj) * 0.95;
  } else {
    console.log("Bro Wtf !?");
    return 1 + 1;
  }
}

console.log(calculoTVA());*/

//Exo 9
let jour = Number(readlineSync.question("Le Jour ? : "))
let mois = Number(readlineSync.question("Le mois ? : "))
let ans = Number(readlineSync.question("L'année ? : "))

//jours++ = jours + 1
function DatoCalculo(): void {
  let switcho = 0;
  if (
    jour >= 31 &&
    (mois === 1 ||
      mois === 3 ||
      mois === 5 ||
      mois === 7 ||
      mois === 8 ||
      mois === 10 ||
      mois === 12)
  ) {
    if (mois === 12) {
      switcho = jour;
      jour = 1;
      mois = 1;
      switcho = ans;
      ans = switcho + 1;
      console.log("voici le lendemain : ", jour, mois, ans);
    } else {
      switcho = mois;
      jour = 1;
      mois = switcho + 1;
      console.log("voici le lendemain : ", jour, mois, ans);
    }
  } else if (jour >= 30 && (mois === 4 || mois === 6 || mois === 9 || mois === 11)) {
    switcho = mois;
    jour = 1;
    mois = switcho + 1;
    console.log("voici le lendemain : ", jour, mois, ans);
  } else if (jour >= 28 && mois === 2) {
    if (jour === 28 && ((ans % 4 === 0 && ans % 100 != 0) || ans % 400 === 0)) {
      switcho = jour;
      jour = switcho + 1;
      console.log("voici le lendemain : ", jour, mois, ans);
    } else {
      switcho = mois;
      jour = 1;
      mois = switcho + 1;
      console.log("voici le lendemain : ", jour, mois, ans);
    }
  } else {
    console.log("voici le lendemain : ", jour + 1, mois, ans);
  }
  console.log("jajaj");
}

console.log(DatoCalculo());

//Exo 10

/*function exercice_10(): void {
  let montant = Number(readlineSync.question("Entrez le montant : "));
  let sommePayée = Number(readlineSync.question("Entrez la somme payée : "));

  let montantARendre = sommePayée - montant;

  console.log("Montant à rendre :", montantARendre);

  let nbrePièces10 = Math.floor(montantARendre / 10);
  montantARendre = montantARendre % 10;
  // montantARendre %= 10;

  let nbrePièces5 = Math.floor(montantARendre / 5);
  montantARendre = montantARendre % 5;

  let nbrePièces2 = Math.floor(montantARendre / 2);
  montantARendre = montantARendre % 2;

  let nbrePièces1 = montantARendre;

  if (nbrePièces10 > 10 || nbrePièces5 > 5 || nbrePièces2 > 2 || nbrePièces1 > 1) {
    console.log("Pas assez de pièce donc tu est mort")
  }
  else {
    console.log("Nombre de pièces de 10 à rendre :", nbrePièces10);
    console.log("Nombre de pièces de 5 à rendre :", nbrePièces5);
    console.log("Nombre de pièces de 2 à rendre :", nbrePièces2);
    console.log("Nombre de pièces de 1 à rendre :", nbrePièces1);
  }
}

console.log(exercice_10())*/
