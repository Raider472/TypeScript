import * as readlineSync from "readline-sync";

const nbreSecJour = 86400;
const nbreSecAn = 365.2425 * 86400;
const nbSecMois = 30.5 * 86400;
const annéeReférence = Math.floor(86400 + 30.5 * 86400 + 1900 * 365.2425 * 86400);
const annéeReférence2 = [1, 1, 1900];

function nbSecDepuis(jour: number, mois: number, année: number, annéeReférenceVar: number): number {
  return (
    jour * nbreSecJour +
    mois * nbSecMois +
    année * nbreSecAn -
    (nbreSecJour * 1 + nbSecMois * 1 + annéeReférenceVar * nbreSecAn)
  );
}

console.log(nbSecDepuis(5, 12, 2021, 2020), "secondes s'est écouler depuis la date de reférence");

function nbSecDepuis1900(jour: number, mois: number, année: number): number {
  return jour * nbreSecJour + mois * nbSecMois + année * nbreSecAn - annéeReférence;
}

console.log(nbSecDepuis1900(5, 12, 2021), "secondes s'est écouler depuis 1/1/1900");

function nbSecDepuis1900V2(jour: number, mois: number, année: number): number {
  return (
    jour * nbreSecJour +
    mois * nbSecMois +
    année * nbreSecAn -
    (annéeReférence2[0] * nbreSecJour +
      annéeReférence2[1] * nbSecMois +
      annéeReférence2[2] * nbreSecAn)
  );
}

console.log(nbSecDepuis1900V2(5, 12, 2021), "secondes s'est écouler depuis 1/1/1900");

function nbSecDepuisAujourdHui(jours: number, moisN: number, années: number): number {
  let date = new Date();
  let jour = date.getDate();
  let mois = date.getMonth() + 1;
  let année = date.getFullYear();
  return (
    jour * nbreSecJour +
    mois * nbSecMois +
    année * nbreSecAn -
    (jours * nbreSecJour + moisN * nbSecMois + années * nbreSecAn)
  );
}

console.log(
  nbSecDepuisAujourdHui(8, 2, 2001),
  "secondes s'est écouler depuis ta date de naissance"
);

let joursDeNaissance = new Date(2001, 2, 8);
let jour = joursDeNaissance.getDate();
let mois = joursDeNaissance.getMonth();
let année = joursDeNaissance.getFullYear();

function nbSecDepuisDateNaissance(): number {
  return jour * nbreSecJour + mois * nbSecMois + année * nbreSecAn;
}

console.log("voici ta date de naissance en secondes: ", nbSecDepuisDateNaissance());

function generateurNombre(n1: number, n2: number, n3: number): number {
  n1 = Math.random() * 100;
  n2 = Math.random() * 10;
  n3 = Math.random();
  return n1 + n2 + n3;
}

console.log(generateurNombre(1, 2, 3));
