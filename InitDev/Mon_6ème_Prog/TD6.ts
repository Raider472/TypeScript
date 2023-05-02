import { table } from "console";
import { cp, read } from "fs";
import * as readlineSync from "readline-sync";

//Ex 1
/*function demandeurNombre(nombre: number): void {
    let tableau = []
    let tableauPair = []
    for (let c = 0; c < nombre; c++ ) {
        let ajouteur = Number(readlineSync.question("Choisis un nombre: "))
        tableau.push(ajouteur)
        console.log("voici l'array actuelle: ", tableau)
    }
    console.log("voici l'array finale: ", tableau)
    for (let d = 0, c = 0; c < nombre; c++) {
        if ((tableau[c] % 2) === 0) {
            d = tableau[c]
            tableauPair.push(d)
        }
    }
    console.log("Voici la liste des nombre pairs: ", tableauPair)
}

demandeurNombre(5)*/

//Ex 2.1
/*function ajouterUnEtRandom(): void {
    let tableauRandom = [Math.floor(Math.random()* 10), Math.floor(Math.random()* 10), Math.floor(Math.random()* 10)]
    console.log("Voici l'Array de base: ", tableauRandom)
    for (let c = 0; c < tableauRandom.length; c++) {
        tableauRandom[c]++
    }
    console.log("Voici le tableau avec +1: ", tableauRandom)
}

ajouterUnEtRandom()*/

//Ex 2.2
/*function plusUnEtRandom(): void {
    let tableauRandom = [Math.floor(Math.random()* 10), Math.floor(Math.random()* 10), Math.floor(Math.random()* 10)]
    let tableauCopieur = []
    for (let c = 0; c < tableauRandom.length; c++) {
        tableauCopieur[c] = tableauRandom[c] + 1
    }
    console.log("Voici l'Array de base: ", tableauRandom)
    console.log("Voici le tableau copié avec +1: ", tableauCopieur)
}

plusUnEtRandom()*/

//Ex 3 Avec Unshift

/*function moulinet(): void {
    let tableauRandom = [Math.floor(Math.random()* 10), Math.floor(Math.random()* 10), Math.floor(Math.random()* 10), Math.floor(Math.random()* 10), Math.floor(Math.random()* 10)]
    console.log("voici l'Array de base: ", tableauRandom)
    let dernierIndice = tableauRandom[tableauRandom.length - 1]
    tableauRandom.unshift(dernierIndice)
    tableauRandom.pop()
    console.log("Voici l'Array avec utilisation du moulinet: ", tableauRandom)
}

moulinet()*/

//Ex3 Sans Unshift

/*function moulinet(): void {
    let tableauRandom = [Math.floor(Math.random()* 10), Math.floor(Math.random()* 10), Math.floor(Math.random()* 10), Math.floor(Math.random()* 10), Math.floor(Math.random()* 10)]
    console.log("voici l'Array de base: ", tableauRandom)
    let premierIndice = tableauRandom[0]
    for (let c = 0; c < tableauRandom.length; c++) {
        if (c === tableauRandom.length - 1) {
            tableauRandom[0] = tableauRandom[c]
        }
    }
    tableauRandom.pop()
    tableauRandom.push(premierIndice)
    console.log("Voici l'Array avec utilisation du moulinet: ", tableauRandom)
}

moulinet()*/

//Ex 4
function inversionOrdre(): void {
    let tableauRand = [Math.floor(Math.random()* 10), Math.floor(Math.random()* 10), Math.floor(Math.random()* 10), Math.floor(Math.random()* 10), Math.floor(Math.random()* 10), Math.floor(Math.random()* 10)]
    let indiceTransmut = 0
    console.log("voici l'Array de base: ", tableauRand)
    for (let c = 0; c < tableauRand.length / 2; c++) {
        indiceTransmut = tableauRand[c]
        tableauRand[c] = tableauRand[tableauRand.length - 1 - c]
        tableauRand[tableauRand.length - 1 - c] = indiceTransmut
    }
    console.log("voici l'Array avec les inversions: ", tableauRand)
}

inversionOrdre()

//Ex 5.1 Ma version
/*function SimulateurDee(): void {
    let stockageCompteur = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    let totaleTirages = 0
    let nombreTirage = Number(readlineSync.question("Combien de tirage veux-tu faire ?: "))
    for (let c = 0; c < nombreTirage; c++) {
        let deeOfDeath = (Math.floor(Math.random() * (6 - 1 + 1) + 6))+(Math.floor(Math.random() * (6 - 1 + 1) + 6));
        if ( deeOfDeath === 2) {
            stockageCompteur[0]++
        }
        else if (deeOfDeath === 3) {
            stockageCompteur[1]++
        }
        else if (deeOfDeath === 4) {
            stockageCompteur[2]++
        }
        else if (deeOfDeath === 5) {
            stockageCompteur[3]++
        }
        else if (deeOfDeath === 6) {
            stockageCompteur[4]++
        }
        else if (deeOfDeath === 7) {
            stockageCompteur[5]++
        }
        else if (deeOfDeath === 8) {
            stockageCompteur[6]++
        }
        else if (deeOfDeath === 9) {
            stockageCompteur[7]++
        }
        else if (deeOfDeath === 10) {
            stockageCompteur[8]++
        }
        else if (deeOfDeath === 11) {
            stockageCompteur[9]++
        }
        else if (deeOfDeath === 12) {
            stockageCompteur[10]++
        }
        else {
            console.log("Il y a une erreur")
        }
    }
    for (let c = 0; c < stockageCompteur.length; c++) {
        console.log("Somme de", c+2, ":", stockageCompteur[c], "tirages")
    }
    for (let c = 0; c < stockageCompteur.length; c++) { //Pour compter le nombre de Tirages
        totaleTirages += stockageCompteur[c]
    }
    console.log("Tirages totale =", totaleTirages)
}

SimulateurDee()*/

//Ex 5.1 Version du prof
/*function SimulateurDee(): void {
    let stockageCompteur = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    let totaleTirages = 0
    let nombreTirage = Number(readlineSync.question("Combien de tirage veux-tu faire ?: "))
    for (let c = 0; c < nombreTirage; c++) {
        let deeOfDeath = Math.floor(Math.random() * (12 - 2 + 1) + 2);
    }
    for (let c = 0; c < stockageCompteur.length; c++) {
        console.log("Somme de", c+2, ":", stockageCompteur[c], "tirages")
    }
    for (let c = 0; c < stockageCompteur.length; c++) { //Pour compter le nombre de Tirages
        totaleTirages += stockageCompteur[c]
    }
    console.log("Tirages totale =", totaleTirages)
}

SimulateurDee()/*

//Ex 5.2
/*function SimulateurDee(): void {
    let stockageCompteur = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    let totaleTirages = 0
    let nombreTirage = Number(readlineSync.question("Combien de tirage veux-tu faire ?: "))
    for (let c = 0; c < nombreTirage; c++) {
        let deeOfDeath = Math.floor(Math.random() * (12 - 2 + 1) + 2);
        if ( deeOfDeath === 2) {
            stockageCompteur[0]++
        }
        else if (deeOfDeath === 3) {
            stockageCompteur[1]++
        }
        else if (deeOfDeath === 4) {
            stockageCompteur[2]++
        }
        else if (deeOfDeath === 5) {
            stockageCompteur[3]++
        }
        else if (deeOfDeath === 6) {
            stockageCompteur[4]++
        }
        else if (deeOfDeath === 7) {
            stockageCompteur[5]++
        }
        else if (deeOfDeath === 8) {
            stockageCompteur[6]++
        }
        else if (deeOfDeath === 9) {
            stockageCompteur[7]++
        }
        else if (deeOfDeath === 10) {
            stockageCompteur[8]++
        }
        else if (deeOfDeath === 11) {
            stockageCompteur[9]++
        }
        else if (deeOfDeath === 12) {
            stockageCompteur[10]++
        }
        else {
            console.log("Il y a une erreur")
        }
    }
    for (let c = 0; c < stockageCompteur.length; c++) {
        console.log("Somme de", c+2, ":", stockageCompteur[c], "tirages")
    }
    for (let c = 0; c < stockageCompteur.length; c++) { //Pour compter le nombre de Tirages
        totaleTirages += stockageCompteur[c]
    }
    console.log("Tirages totale =", totaleTirages)
}

SimulateurDee()*/