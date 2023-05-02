class Disque {
    private _numéroDisque: number

    constructor(numéroDisque: number) {
        this._numéroDisque = numéroDisque
    }

    get numéroDisque(): number {
        return this._numéroDisque
    }

    set numéroDisque(numéroDisque: number) {
        this._numéroDisque = numéroDisque
    }
}

class Tours {
    private _disque: Array<Disque>

    constructor() {
        this._disque = new Array<Disque>
    }

    get arrayDisque(): Array<Disque> {
        return this._disque
    }

    set arrayDisque(arrayDisque: Array<Disque>) {
        this._disque = arrayDisque
    }

    private testAdditionEnHautDeLaTour(numéroDisque: number): boolean {
        for (let i = 0; i < this._disque.length; i ++) {
            if (numéroDisque > this._disque[i].numéroDisque) {
                return false
            }
        }
        return true
    }

    ajoutTailleDisque(numéroDisque: number): void {
        if (this.testAdditionEnHautDeLaTour(numéroDisque) === true) {
            let longueurArray = this._disque.length
            this.arrayDisque[longueurArray] = new Disque(numéroDisque)
        }
        else {
            console.log("le disque ne peut etre ajouter")
        }
    }

    connaitreTailleDisquePlusHaut(): number {
        return this._disque[this._disque.length-1].numéroDisque
    }
    
    retireDisquePlusHaut(): void {
        this._disque.pop()
    }

    verifierTourVide(): boolean {
        if (this._disque.length === 0) {
            return true
        }
        else {
            return false
        }
    }

    nombreDisqueTour(): number {
        return this._disque.length
    }
}

class JeuDeHanoi {
    private _arrayTours: Array<Tours>

    constructor(nombreTours = 3, nombreDisque = 5) {
        this._arrayTours = new Array<Tours>()
        for (let i = 0; i < nombreTours; i++) {
            this._arrayTours.push(new Tours())
        }
        for (let i = 0; i < nombreDisque; i++) {
            this._arrayTours[0].ajoutTailleDisque(nombreDisque-i)
        }
    }

    get arrayTours(): Array<Tours> {
        return this._arrayTours
    }

    set arrayTours(_arrayTours: Array<Tours>) {
        this._arrayTours = _arrayTours
    }

    //testTransportDisqueVersTours(premièreTours: number, deuxièmeTours: number): boolean {
    //    if (this.) {
    //
    //    }
    //    return true
    //}

    verificationFinDuJeu(): boolean {
        for (let i = 0; i < this.arrayTours.length-1; i++) {
            if (this.arrayTours[i].nombreDisqueTour() != 0) {
                return false
            }
        }
        return true
    }

    nombreDeTours(): number {
        return this._arrayTours.length
    }

    nombreDeDisque(): number {
        let nombreDisqueTotale = 0
        for (let i = 0; i < this.arrayTours.length; i++) {
            nombreDisqueTotale += this.arrayTours[i].nombreDisqueTour()
        }
        return nombreDisqueTotale
    }
}

//let testTours = new Tours()
//testTours.ajoutTailleDisque(1)
//console.log(testTours.connaitreTailleDisquePlusHaut())

let testHanoi = new JeuDeHanoi()
console.log(testHanoi.arrayTours[0].arrayDisque)
console.log(testHanoi.nombreDeDisque())
console.log(testHanoi.nombreDeTours())
console.log(testHanoi.verificationFinDuJeu())