//Ex 1.1
/*function valeurMaxTableau (): void {
    let tableau = []
    for (let a = 0; a < Math.floor(Math.random()* 10) * 3; a++) {
        tableau.push(Math.floor(Math.random()* 10) * Math.floor(Math.random()* 10))
    }
    let numéroMax = tableau[0]
    console.log("voici le tableau actuelle: ", tableau)
    for (let d = 0;d < tableau.length; d++ ) {
        if (numéroMax < tableau[d]) {
            numéroMax = tableau[d]
        }
    }
    console.log("Le nombre le plus grand est: ", numéroMax)
}

valeurMaxTableau()

//Ex 1.2

function valeurMinTableau (): void {
    let tableau = []
    let numéroMin = 0
    for (let a = 0; a < Math.floor(Math.random()* 10) * 3; a++) {
        tableau.push(Math.floor(Math.random()* 10) * Math.floor(Math.random()* 10))
    }
    console.log("voici le tableau actuelle: ", tableau)
    for (let c = 0; c < tableau.length; c++) {
        if (c === 0) {
            numéroMin = c
        }
        else if (c > tableau[c]) {
            numéroMin = c
        }
    }
    console.log("L'indice du nombre le plus petit est: ", numéroMin)
    console.log("l'indice", numéroMin, "égale a:", tableau[numéroMin])
}

valeurMinTableau()*/

//Ex 2.1
/*let tab = [100, 90, 80, 70, 60, 50]

function rechercheSéquentielle (t: Array<number>, x: number):boolean {
    for (let i = 0; i < tab.length; i++) {
        if (x === t[i]) {
            return true
        }
        else if ( x > t[i]) {
            return false
        }
    }
    return false;
}

console.log(rechercheSéquentielle(tab, 80))*/

//Ex 2.2

/*let tab = [100, 90, 80, 70, 60, 50]

function rechercheDichotomique (t: Array<number>, x: number, a: number, b: number):boolean {
    while (a < b) {
        let m = Math.floor((a + b -1) / 2);
        if (x === t[m]) {
            return true
        }
        else if (x < t[m]) {
            a = m
        }
        else {
            b = m + 1
        }
    }
    return false;
}

console.log(rechercheDichotomique(tab, 90, 0, tab.length))*/

//Ex 3.1
/*let tab = [20, 30, 40, 50, 50, 50, 80]

function rechercheSéquentielle (t: Array<number>, x: number):number {
    let valMin = t.length
    for (let i = 0; i < t.length +1; i++) {
        if ( x === t[i] && valMin > i) {
            valMin = i
        }
        else if ((valMin === t.length) && (i === t.length))  {
            console.log("La valeur Min n'a pas été trouver, donc voici la longeur du tableau à la place: ")
            return valMin
        }
    }
    console.log("La valeur Min est: ")
    return valMin
}

console.log(rechercheSéquentielle(tab, 40))*/

//Ex 3.2
/*let tab = [10, 20, 30, 50, 50, 60]

function rechercheDichotomique (t: Array<number>, x: number, a: number, b: number):number {
    let valIndice = t.length
    let incréSecu = 0
    while (a < b) {
        let m = Math.floor((a + b -1) / 2);
        console.log(a)
        console.log(b)
        console.log(m)
        if (x === t[m]) {
            valIndice = m
            console.log("Voici l'indice de l'élément x: ")
            return valIndice
        }
        else if (x < t[m]) {
            b = m
            incréSecu = 1
        }
        else {
            a = m + 1
        }
        if (valIndice === t.length && incréSecu === 1) {
            console.log("La valeur de l'indice n'a pas été trouver, donc voici la longeur du tableau à la place: ")
            return valIndice
        }
    }
    console.log("Voici l'indice de l'élément x: ")
    return valIndice;
}

console.log(rechercheDichotomique(tab, 50, 0, tab.length))*/

//Ex 4
let tab = [20, 30, 40, 50, 50, 55, 80]

function rechercheSéquentielle (t: Array<number>):boolean { 
    for (let i = 0, c = 0; i < t.length; i++) {
        console.log(c, "<=", t[i])
        if (c <= t[i]) {
            c = t[i]
        }
        else {
            return false
        }
    }
    return true
}

console.log(rechercheSéquentielle(tab))

//Ex 5


/*function chercheurNombre( x: number): void {
    let nombreRand = Math.floor(Math.random()*(100-1)+1)
    console.log(nombreRand)
    let a = 1
    let b = 100
    let cpt = 0

    let trouvé = false

    while (!trouvé) {
        cpt ++

        let m = Math.floor((a+b)/2)

        if (nombreRand === m) trouvé = true
        else if (m < nombreRand) a = m + 1
        else b = m - 1
    }

    console.log(cpt)
}

chercheurNombre(60)*/