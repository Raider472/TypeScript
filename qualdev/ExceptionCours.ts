import * as readLineSync from "readline-sync"

class RecursivitéInfinieError extends Error {
    constructor(message: string) {
        super(message)
        this.name = "RecursivitéInfinieError"
    }
}

function puissanceRec(x: number, n: number): number {
    if ( n < 0) throw new RecursivitéInfinieError("n doit ^etre positif")
    else if (n === 0) return 1;
    else return x * puissanceRec(x, n - 1);
}

let n = Number(readLineSync.question("entre une valeur"))

try {
    puissanceRec(10, n)
}
catch (e) {
    if (e instanceof RangeError) {
        console.log("RangeError" + e.message)
    }
    else if(e instanceof Error) {
        console.log("Merci de rentrer une puissance positive")
        console.log("erreurjaaj" + e.message +"yolo")
        console.log("erreurjaaj" + e +"yolo")
    }
    else if (e instanceof RecursivitéInfinieError) {
        console.log("swag")
        console.log("Merci de rentrer une puissance positive")
        console.log("erreurjaaj" + e.message +"yolo")
        console.log("erreurjaaj" + e +"yolo")
    }
}

console.log(puissanceRec(10, n))

function rechercheErronée(t: Array<number>, x: number): boolean {
    for (let i = 0; i <= t.length; i++) {
        if (t[i] === x) return true;
    }
    return false;
}

let tableau = [0, 5, 8, 10]

console.log(rechercheErronée(tableau, 10))