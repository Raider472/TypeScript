//point dans l'espace (x, y)

class Point {
    x = 4
    y = 6
}

//let p: Point //attribuer une variable

//p = new Point() //atribuer une valeur

let p = new Point() //attribuer une variable et une valeur

let q = new Point()

q.x = 10
q.y = 9

console.log(p.x, p.y)

function distance(p: Point, q: Point ): number { //On peut utiliser p dans les fonctions
    return Math.sqrt((p.x - q.x) **  2 + (p.y - q.y) ** 2 )
}

console.log("distance =", distance(p, q))

function décale(plocal: Point, dx: number, dy: number): void { //la fonction modifie la variable p
    plocal.x += dx
    plocal.y += dy
}

décale(p, 10, 20)
console.log(p.x, p.y)

function créateur(dx: number, dy: number): Point { //On peut créer une classe dans une fonction
    let p = new Point()
    p.x = dx
    p.y = dy
    return p
}

let p3 = créateur(56, 89) // = aussi à let p3 = new point() et p3.x = dx, p3.y = dy
console.log(p3.x, p3.y)

class Rectangle { //On peut utiliser une classe dans une classe
    longueur = 0
    largeur = 0
    //xcoin = 0
    //ycoin = 0
    //coin: Point
    coin = new Point()
}

let r = new Rectangle()
r.longueur = 100
r.largeur = 50
r.coin.x = 10
r.coin.y = 12

console.log(r.longueur, r.largeur, r.coin)

//let pc = new Point()
//r.coin = pc

q = p // Cela ne fait pas une copie, q referencera p
