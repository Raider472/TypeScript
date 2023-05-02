
//Ex 1
console.log("Ex1")
class PointNew {
    x = 0
    y = 0
}

class Cercle {
    centre = new PointNew()
    rayon: number
}

class RectangleNew {
    longueur: number
    largeur: number
    coin: PointNew
}

let c = new Cercle()
c.centre.x = 100
c.centre.y = 150
c.rayon = 75

console.log(c.centre, c.rayon)

//Ex 2 
console.log("Ex2") //check la correction
let p1 = new PointNew()
p1.x = 60
p1.y = 70

function PointDansCercle(cercle: Cercle, point: PointNew): boolean {
    if (point.x <= cercle.rayon && point.y <= cercle.rayon) {
        return true
    }
    else {
        return false
    }
}

console.log(PointDansCercle(c, p1))

//Ex 3
console.log("Ex3")
let r1 = new RectangleNew()
r1.longueur = 15
r1.largeur = 10
r1.coin = p1

function RectangleDansCercle(cercle: Cercle, rectangle: RectangleNew): boolean {
    if (rectangle.longueur * rectangle.largeur === cercle.rayon * 2 ) {
        return true
    }
    else {
        return false
    }
}

//correction
function RectangleDansCercle2(cercle: Cercle, rectangle: RectangleNew): boolean {
    let coinSD = new PointNew()
    coinSD.x = rectangle.coin.x + rectangle.longueur
    coinSD.y = rectangle.coin.y
    let coinID = new PointNew()
    coinID.x = rectangle.coin.x + rectangle.longueur
    coinSD.y = rectangle.coin.y + rectangle.largeur
    let coinIG = new PointNew()
    coinIG.x = rectangle.coin.x
    coinIG.y = rectangle.coin.y + rectangle.largeur
    return PointDansCercle(cercle, rectangle.coin) && PointDansCercle(cercle, coinSD) && PointDansCercle(cercle, coinID) && PointDansCercle(cercle, coinID)
}

console.log(RectangleDansCercle(c, r1))

console.log(RectangleDansCercle2(c, r1))

//Ex 4
console.log("Ex4")
function chevauchement(cercle: Cercle, rectangle: RectangleNew): boolean {
    if ((rectangle.longueur * rectangle.largeur) /2 === cercle.rayon * 2 ) {
        return true
    }
    else {
        return false
    }
}

console.log(chevauchement(c, r1))

//Ex 5.1
console.log("Ex5.1")
class Temps {
    heures: number
    minutes: number
    secondes: number
}

let time = new Temps()
time.heures = 22
time.minutes = 49
time.secondes = 29

function Temps2Number(convertisseur: Temps): number {
    console.log("voici le nombre de secondes:")
    return convertisseur.heures * 3600 + convertisseur.minutes * 60 + convertisseur.secondes
}

console.log(Temps2Number(time))

//Ex 5.2
console.log("Ex5.2")
function Numbers2Temps(nombre: number): Temps {
    let timeShower = new Temps()
    timeShower.heures = Math.floor(nombre/3600)
    timeShower.minutes = Math.floor(nombre/60%60) //3600% marche aussi
    timeShower.secondes = Math.floor(nombre%60)
    return timeShower
}

console.log(Numbers2Temps(82169))

//Ex 5.3

console.log("Ex5.3")
function multiplieTemps(tempsa: Temps, nombrePassé: number): Temps {
    console.log(time)
    tempsa.heures -= Math.floor(nombrePassé/3600)
    tempsa.minutes -= Math.floor(nombrePassé/60%60)
    tempsa.secondes -= Math.floor(nombrePassé%60)
    if (tempsa.secondes < 0) {
        tempsa.minutes -= 1
        tempsa.secondes = 60 + tempsa.secondes
    }
    if (tempsa.minutes < 0) {
        tempsa.heures -= 1
        tempsa.minutes = 60 + tempsa.minutes
    }
    if (tempsa.heures < 0 ) {
        tempsa.heures = 0
    }
    console.log("Voici l'heure aprés le temps passé")
    return tempsa
}

function multiplieTemps2(tempsa: Temps, nombrePassé: number): Temps { //correction sauf que ça marche pas car j'ai pas recopier ses fonctions précedentes
    return Numbers2Temps(Temps2Number(tempsa)*nombrePassé)
}

console.log(multiplieTemps(time, 49845))

console.log(multiplieTemps2(time, 49845))

//Ex 5.4
console.log("Ex5.4")
let tempsFin = new Temps()
tempsFin.heures = 2
tempsFin.minutes = 0
tempsFin.secondes = 0

function FormulinCourse(tempsCourse: Temps): Temps {

    multiplieTemps(tempsCourse, 5400)
    return tempsCourse
}

console.log(FormulinCourse(tempsFin))