import * as readlineSync from "readline-sync"

/*let sup = Number(readlineSync.question("Choisis ton nombre = "));
let inf = Number(readlineSync.question("Choisis ton nombre = "));

function randomisateur() : number {
    return Math.floor(Math.random() * (sup - inf + 1) + inf);
}

console.log(randomisateur());

for (let i = 0; i < 10; i++) {
    console.log(randomisateur());
}*/

//Exo 1
/*let n = Number(readlineSync.question("Choisi n ="));
let n_n = Number(readlineSync.question("Choisi -n ="));
let neg = 0
let pos = 0
let res = 0


function rando() : number {
    let res = Math.floor(Math.random() * (n - n_n + 1) + n_n);
    if (res < 0) {
        neg++
    }
    else if (res >= 0) {
        pos++
    }
    else {
        console.log("WTF")
    } 
    return res;
}

for (let i = 0; i < 10; i++) {
    console.log(rando())
}

console.log("Il y a ",neg, "nombre négative")
console.log("Il y a ",pos, "nombre positive")*/
//Exo 2
/*let n_posi = Number(readlineSync.question("Choisi n ="));
let n_nega = Number(readlineSync.question("Choisi -n ="));
let sommeFinale = 0

function randoSomme() : number { 
    let calc = Math.floor(Math.random() * (n_posi - n_nega + 1) + n_nega);
    console.log("L'aditionneur =", calc);
    console.log("L'ancienne somme finame est =", sommeFinale);
    return sommeFinale += calc;
}

for (let i = 0; i < 10; i++) {
    console.log(randoSomme());
}*/
//Exo 3
/*function randoSommeYeah( inférieur: number, supérieur: number) : number { 
    let res = Math.floor(Math.random() * (supérieur - inférieur + 1) + inférieur)
    if (res > 0) {
        return res;
    }
    else {
        return 0;
    }
}

console.log("\x1b[32m Les nombres négatives seront affichés en tant que zero \x1b[0m")
for (let i = 0; i < 10; i++) {
    console.log(randoSommeYeah(-10, 10));
}*/
//Exo 4
//let comparateurMax = 0
//let comparateurMin = 0

/*function randoSommeMinMax(inférieur: number, supérieur: number) : number { 
    let res = Math.floor(Math.random() * (supérieur - inférieur + 1) + inférieur);
    if (comparateurMax === 0 && !(res === 0)) {
        comparateurMax = res;
        console.log( "\x1b[32m La somme la plus grande est = \x1b[0m",comparateurMax)
        return res;
    }
    else if (res > comparateurMax) {
        comparateurMax = res;
        console.log( "\x1b[32m La somme la plus grande est = \x1b[0m",comparateurMax)
        return res;
    }
    else {
        return res;
    }
}*/

/*function randoSommeMinMax(inférieur: number, supérieur: number) : number { 
    let res = Math.floor(Math.random() * (supérieur - inférieur + 1) + inférieur);
    if (comparateurMin === 0 && !(res === 0)) {
        comparateurMin = res;
        console.log( "\x1b[32m La somme la plus grande est = \x1b[0m",comparateurMin)
        return res;
    }
    else if (res < comparateurMin) {
        comparateurMin = res;
        console.log( "\x1b[32m La somme la plus grande est = \x1b[0m",comparateurMin)
        return res;
    }
    else {
        return res;
    }
}*/

/*function randoSommeMinMax(inférieur: number, supérieur: number) : number { 
    let res = Math.floor(Math.random() * (supérieur - inférieur + 1) + inférieur);
    if (comparateurMax === 0 && !(res === 0) || res > comparateurMax) {
        if (comparateurMax === 0 && !(res === 0)) {
            comparateurMax = res;
            console.log( "\x1b[32m La somme la plus grande est = \x1b[0m",comparateurMax)
            return res;
        }
        else if (res > comparateurMax) {
            comparateurMax = res;
            console.log( "\x1b[32m La somme la plus grande est = \x1b[0m",comparateurMax)
            return res;
        }
        else {
            return -9999
        }
    }
    if (comparateurMin === 0 && !(res === 0) || res < comparateurMin) {
        if (comparateurMin === 0 && !(res === 0)) {
            comparateurMin = res;
            console.log( "\x1b[32m La somme la plus petite est = \x1b[0m",comparateurMin)
            return res;
        }
        else if (res < comparateurMin) {
            comparateurMin = res;
            console.log( "\x1b[32m La somme la plus petite est = \x1b[0m",comparateurMin)
            return res;
        }
        else {
            return -9999
        }
    }
    else {
        return res;
    }
}

for (let i = 0; i < 10; i++) {
    console.log(randoSommeMinMax(-10, 10));
}*/
//Exo5
/*for (let i = 0; i < 5; ++i) {
    process.stdout.write("Itération :" + i + ":");
    for (let j = 0; j < 10; j++) process.stdin.write(" " + j);
    console.log();
}*/
//5.1
/*function racineCarré (nombre: number): string {
    for (let jourAdd = 0; jourAdd < nombre; jourAdd++) { //Ligne
        for (let i = 0; i < nombre; i++)  process.stdout.write(" " + (nombre - nombre)); //colonne
        console.log();
    }
    return "\x1b[32m Yolo \x1b[0m";
}
console.log(racineCarré(5));
//5.2
function racineDiagonale(nombre: number): string {
    for (let jourAdd = 0; jourAdd < nombre; jourAdd++) { //Ligne
        for (let j = 0; j < nombre; j++)
        if (jourAdd === j) process.stdout.write ("X");
        else process.stdout.write ("O");
        console.log();
    }
    return "\x1b[32m Woosh \x1b[0m";
}
console.log(racineDiagonale(5));
//5.3
function racineTriangle (nombre: number): string {
    let j = 1
    for (let jourAdd = 0; jourAdd < nombre; jourAdd++) { //Ligne
        for (let i = nombre; i-j < nombre; i++)  process.stdin.write( " " + (nombre - nombre)); //colonne //remplacer (nombre - nombre) par 0 marche aussi
        j++
        console.log();
    }
    return "\x1b[32m Yewa \x1b[0m";
}
console.log(racineTriangle(5));
//5.4
function racineCarréJaaj(nombre: number): string {
    for (let i = 1; i <= nombre; i++) { //Ligne
        for (let j = 1; j < nombre; j++) {
            for (let k = i+1; k < nombre; k++) {
                if (i **2 + j **2 === k ** 2) console.log(i,j,k);
            }
        }
    }
    return "\x1b[32m Allah \x1b[0m";
}                if (i **2 + j **2 === k ** 2) console.log(i,j,k);
//Ex0 6
/*function randoTwenty(n: number, n_n: number) : void {
    for (let i = 0; i < 10; i++) {
        if (n > 20) {
            console.log("Ton nombre dépasse 20, choisis un autre stp");
            break;
        }
        else if (n_n < 0) {
            console.log("Ton nombre est inférieur à 0, choisis un autre stp");
            break;
        }
        else {
            let res = Math.floor(Math.random() * (n - n_n + 1) + n_n);
            console.log(res);
        } 
    }
}


(randoTwenty(20, 0))*/

//Exo 7
/*function jaaj (): string {
    for (let j = 0, infinite = 0, resFin = 0, SommePos = 0, SommeNeg = 0, MaxPos = 0, MaxNeg = 0 ; infinite < 1; j++) {
        let res = Number(readlineSync.question("Choisis un nombre Stp ou sinon le CROUS Market explose: "))
        if (res < 0) {
            SommeNeg += res
            if (res < MaxNeg) {
                MaxNeg = res
            }
            else {
                console.log("Nani Deska ?")
            }
        }
        else if (res >= 0) {
            SommePos += res
            if (res > MaxPos) {
                MaxPos = res
            }
            else {
                console.log("Nani Deska ?")
            }
        }
        else {
            console.log("Wut ?")
        }
        resFin += res
        if (res === 0) {
            console.log("Voici le resultat finale =", resFin)
            console.log("voici le plus grand entiers des nombres Négatifs=", MaxNeg )
            console.log("voici le plus grand entiers des nombres Positifs=", MaxPos )
            console.log("voici la moyenne des nombres Négatifs=", SommeNeg / j )
            console.log("voici la moyenne des nombres Positifs=", SommePos / j )
            console.log("voici la somme des entiers Negatifs =", SommeNeg )
            console.log("voici la somme des entiers Positifs =", SommePos )
            break
        }
    }
    return "\x1b[32m Yolo Swag \x1b[0m"
}

(jaaj())*/

//Exo 8
/*function calcChiffreSeulYa (nombre :number): void {
    let a1 = Math.floor(nombre / 100);
    let b1 = Math.floor(nombre / 10 % 10);
    let c1 = nombre % 10;
    console.log(a1, b1, c1);
    console.log("Le résultat est donc :", a1+b1+c1);
}

console.log(calcChiffreSeulYa(695))

//Exo 9
function Mirroir (nombre :number): void {
    let a1 = Math.floor(nombre / 100);
    let b1 = Math.floor(nombre / 10 % 10);
    let c1 = nombre % 10;
    console.log("Le résultat est donc :", (a1 * 1)+(b1 *10)+ (c1*100));
}

(Mirroir(726))*/

//Exo 10
function JeuDeLaMort (): void {
    let PickBot = Math.floor(Math.random() * 100);
    for ( let i = 1; i < 10; i++ ) {
        let PickHuman = Number(readlineSync.question("Choisis un nombre Stp ou sinon le CROUS Market explose: "));
        if (PickHuman === PickBot) { //Gagné
            console.log("\x1b[32m GG, tu as sauvé le CROUS Market \x1b[0m");
            console.log("Voici ton score :", 8-i);
            break;
        }
        else if (PickHuman > PickBot) { //Nombre supérieure a Mystère
            console.log("Ton nombre est supérieur au nombre Mystère");
        }
        else if ( PickHuman < PickBot) { //Nombre inférieure;
            console.log("Ton nombre est inférieur au nombre Mystère");
        }
        else {
            console.log("Bruh wtf ?");
        }
        if ( i === 7 ) {
            console.log("Tu as waste tous tes essais et tu n'a pas trouvé le nombre mystère, gg ff");
            break;
        }
    }
}

JeuDeLaMort()