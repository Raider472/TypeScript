//Ex 1.1 et 1.2
//le nombre n s'ajoute à s petit à petit, la fonction montre le résultat de s une fois qu'il ne peut plus additioner n à s
//1.3
//la fonction continue à l'infinie car elle ne peut pas atteindre 0, la raison est que vue que n est négatif et que on le soustrait à chaque fois, ils ne peut pas atteindre 0
/*function recursive(n: number, s: number): void {
    if (n === 0) console.log(s);
    else {
        console.log("debug",s)
        console.log("debug", n)
        recursive(n - 1, n + s);
    }    
}

recursive(3, 0)*/

//Ex 2
/*function fibonacci(n: number): number {
    if (n < 2) {
        return n
    }
    else {
        let résulta = fibonacci(n - 1) + fibonacci(n - 2)
        return résulta
    }
}

console.log(fibonacci(30))*/

//Ex 3

/*function rechercheDichotomique(t: Array<number>, x: number, a: number, b:number): boolean {
    if (a >= b) return false
    else {
        let m = Math.floor((a + b -1)/2)
        if (x === t[m]) return true
        else if (x <= t[m]) return rechercheDichotomique(t, x, a, m)
        else return rechercheDichotomique(t, x, m+1, b)
    }
}

rechercheDichotomique()*/

//Ex 4
/*function premièreLettre(mot: string): string {
    return mot[0]!;
}

function dernièreLettre(mot: string): string {
    return mot[mot.length - 1];
}

function sousMot(mot: string): string {
    return mot.substring(1, mot.length)
}

function palindrome(mot: string): boolean {
    if (mot.length === 0) return true
    else if (premièreLettre(mot) != dernièreLettre(mot)) return false
    else return palindrome(sousMot(mot))
}

console.log(palindrome("non"))*/

/*function palindrome(mot: string): boolean {
    let n = 0
    let x = mot.length - 1
    if (premièreLettre(mot[n]) !== dernièreLettre(mot[x])) {
        return false
    }
    else {

    }
    return true
}*/

//Ex 5
function divisionEuclidienne (a: number, b: number): number {
    let ab = a % b 
    if (ab === 0) return b
    else {
        return divisionEuclidienne(b, ab)
    }
}

console.log(divisionEuclidienne(522, 1000))
