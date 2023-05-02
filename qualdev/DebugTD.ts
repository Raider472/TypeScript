//Ex1
function deb1(): number {
    let j = 200
    let tab = new Array<number>
    for (let i = 0; i<10; i++) {
        j -= 10
        tab.push(j)
    }
    return j
}

let testdeb = deb1()
console.log(testdeb)

//Ex3
function deb2(x: number, y: number): void {
    const tmp = y
    y = x
    x = tmp
    console.log(x, y)
}

let xdeb2 = 10
let ydeb2 = 20
deb2(xdeb2,ydeb2)
console.log(xdeb2, ydeb2)

//EX4
function deb3(xy: number[]): void {
    let tmp = xy[0]
    xy[0] = xy[1]
    xy[1] = tmp
}
let xy = [10, 20]
deb3(xy)

//EX5
let j = 10
j = deb4()
console.log(j, "test")
function deb4(): number {
    let j = 25
    for (let i = 0; i<10; i++) {
        j = 2 * i
        console.log(j)
    }
    return j
}

//EX6
let tab1 = [1,2,3]
let tab2 = [...tab1]

tab1[1] = 5

console.log(tab1, tab2)

//EX7
deb7(5, -3)
function deb7(x: number, y: number): number {
    let val = 0

    for (let i = 0; i < y; i++) {
        val += x
    }

    return val
}

//EX8
let n = 5
console.log(deb6(n))
function deb6(n: number): number {
    if (n === 0) {
        return 1
    }
    let valeur = n * deb6(n-1)
    return valeur
}