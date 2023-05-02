import * as readlineSync from "readline-sync";

function additionOuSoustraction() :void {
    console.log("1) Addition")
    console.log("2) Soustraction")
    let réponseUtilisateur = Number(readlineSync.question("Entrez 1 or 2 : "))
    if (réponseUtilisateur === 1 ) {
        addition()
    }
    else if (réponseUtilisateur === 2) {
        soustraction()
    }
    else {
        erreur()
    }
}

function erreur(): void {
    console.log("erreur, vous devez inserer un nombre entre 1 et 2")
    additionOuSoustraction()
}

function randomisateur(min: number, max: number) : number {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function addition (): void {
    let minimum_1 = randomisateur(5, 25)
    let maximum_1 = randomisateur(5, 25)
    console.log(minimum_1)
    console.log(maximum_1)
    let questionUtilisateur_1 = Number(readlineSync.question("quel est la somme des deux nombres généré ?"))
    if (questionUtilisateur_1 === minimum_1 + maximum_1) {
        console.log(résultatFinale(1))
    }
    else {
        console.log(résultatFinale(2))
    }
}

function soustraction (): void {
    let maximum_2 = randomisateur(25, 50)
    let minimum_2 = randomisateur(1, 25)
    console.log(maximum_2)
    console.log(minimum_2)
    let questionUtilisateur_2 = Number(readlineSync.question("quel est la différence d'écart des deux nombres généré ?"))
    if (questionUtilisateur_2 === maximum_2 - minimum_2 ) {
        console.log(résultatFinale(1))
    }
    else {
        console.log(résultatFinale(2))
    }
}

function résultatFinale (résultat: number): boolean {
    if (résultat === 1) {
        return true
    }
    else {
        return false
    }
}

additionOuSoustraction()