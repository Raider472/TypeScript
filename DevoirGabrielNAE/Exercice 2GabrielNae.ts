function rotationTableau (t: Array<number>): Array<number> {
    let premierIndice = t[0]
    for (let c = 0; c < t.length -1; c++) {
        console.log("1", t[t.length-1-c])
        console.log("2",t[t.length-2-c])
        t[0 + c] = t[0 + 1 + c]
    }
    t.pop()
    t.push(premierIndice)
    return t
}

console.log(rotationTableau([10,50,60,90,49,1000]))