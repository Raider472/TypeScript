import * as readlineSync from "readline-sync";
class TempsTD2 {
    heure = 0
    minute = 0
    seconde = 0

    affichageMethode(): void {
        let ch=""
        if (this.heure < 10) ch += "0"
        ch += this.heure + ":"
        if (this.minute < 10) ch += "0"
        ch += this.minute + ":"
        if (this.seconde < 10) ch += "0"
        ch += this.seconde
        console.log(ch)
    } //méthode et non fonction

    temps2Number(): number {
        console.log("jaaj")
        return this.heure * 3600 + this.minute * 60 + this.seconde
    }

    Numbers2Temps(nombre: number): TempsTD2 {
        let timeShower = new TempsTD2()
        timeShower.heure = Math.floor(nombre/3600)
        timeShower.minute = Math.floor(nombre/60%60) //3600% marche aussi
        timeShower.seconde = Math.floor(nombre%60)
        return timeShower
    }

    incrémente(nbrsecondes: number): void {
        let secondesC = this.temps2Number()
        secondesC += nbrsecondes
        this.Numbers2Temps(secondesC)
    }
}

let temps = new TempsTD2()
temps.heure = 9
temps.minute = 45
temps.seconde = 0

let temps2 = new TempsTD2()
temps2.heure = 10
temps2.minute = 47
temps2.seconde = 2

function affichage(temps: TempsTD2): void {
    let ch = ""
    if (temps.heure < 10) ch += "0"
    ch += temps.heure
    if (temps.minute < 10) ch += "0"
    ch += temps.minute
    if (temps.seconde < 10) ch += "0"
    ch += temps.seconde

    console.log(ch)
}

affichage(temps)
console.log("Maintenant la méthode: ")
temps2.affichageMethode()
temps2.temps2Number() //marche pas, comme les fonctions
console.log(temps2.temps2Number())
console.log(temps2.incrémente(1000))
console.log(temps2.Numbers2Temps(1000))

//Constructeur
class TestPoint {
    x: number
    y: number
    
    constructor(x = 0, y = 0) { //mettre les valeurs par défauts
        this.x = x 
        this.y = y
    }
}

let po = new TestPoint(1, 3)
console.log(po)
let po2 = new TestPoint() //Version par défaut
console.log(po2)

//Visibilité
//Membre = attribut ou méthode

//Visibilité publique, tous le monde peut le voir et y acceder et c'est par défaut (public)

class Salutateur {
    message ="bonjour"

    saluer(): string {
        return this.message
    }
}

let s = new Salutateur()
console.log(s.saluer())
s.message = "jaaj"
console.log(s.saluer())

//private, il ne peut ^etre accéder que dans la classe

class Salutateur2 {
    private message ="bonjour"

    saluer(): string {
        return this.message
    }

    NouveauMessag(message: string): void {
        this.message = message
    }
}

let j = new Salutateur2()
console.log(j.saluer())
//j.message = "jaaj" = plus le droit de la faire car il est en privé
console.log(j.saluer())
j.NouveauMessag("yolo")
console.log(j.saluer()) //de base tous les attributs orientés objet sont privés

class TestPoint2 {
    private _x: number
    private y: number
    
    constructor(x = 0, y = 0) { //mettre les valeurs par défauts
        this._x = x 
        this.y = y
    }

    get x(): number {
        return this._x
    }

    set x(valeur: number) {
        this._x = valeur
    }

    getx(): number {
        return this.x
    }
    setx(valeur: number): void { 
        this._x = valeur
    }

    gety(): number {
        return this.x
    }
    sety(valeur: number): void { 
        this._x = valeur
    }

    affichage(): void {
        console.log("(" + this.x + ", " + this.y + ")")
    }
}

let pa = new TestPoint2(2, 6)

pa.affichage()

console.log(pa.getx())
pa.sety(19)
console.log(pa.gety())

pa.affichage()

//alternative pour typescritp = t = new Aray <number>, ---- t.lenght 

console.log(pa.x) // grace au get x()