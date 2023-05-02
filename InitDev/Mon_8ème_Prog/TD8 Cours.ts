function comptearebours(n: number): void {
    if (n <= 0) {
        console.log("jaaj")
    }
    else {
        console.log(n)
        comptearebours(n - 1)
    }
}

comptearebours(10)

function factoriel(n: number): number {
    let res = 1

    for (let i = 1; 1 <= n; i++) {
        res *= i
    }

    return res
}

factoriel(5)

function factorielRecursif(n: number): number {
    if (n <= 0) return 1
    else {
        let résultatRécursion = factorielRecursif(n - 1)
        let résultat = n * résultatRécursion
        return résultat
    }
}

function factorielRecursif2(n: number): number {
    if (n <= 0) return 1
    else {
        return n *factorielRecursif2(n - 1)
    }
}