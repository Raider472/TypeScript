function indices(t: Array<number>, x: number): Array<number> {
    let indicesTableau = new Array<number>
    for (let i = 0; i < t.length; i++) {
        if (t[i] === x) {
            indicesTableau.push(i)
        }
    }
    return indicesTableau
}

console.log(indices([10, 25, 50, 10, 68, 79, 10, 10, 100], 10))