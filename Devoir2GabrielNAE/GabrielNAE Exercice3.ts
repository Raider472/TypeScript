function sommeNombre(a: number, b: number): number {
    if (a < 0) {
        console.log(a, b)
        return sommeNombre(a+1, a+b)
    }
    else if (a > 0) {
        console.log(a, b)
        return sommeNombre(a-1, a+b)
    }
    else {
        console.log(a, b)
        return a+b
    }
}

console.log(sommeNombre(5, 9))