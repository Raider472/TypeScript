
class Clientèle {
    protected _nomClient: string
    protected _prenomClient: string
    protected _CA: number
    protected _reduction: number

    constructor(nom: string, prenom: string, ca: number, réduction: number) {
        this._nomClient = nom
        this._prenomClient = prenom
        this._CA = ca
        this._reduction = réduction
    }
}

class Client extends Clientèle {

    constructor(nom: string, prenom: string, ca: number) {
        if (ca > 1000) {
            throw new Error("le chiffre d'affaire ne peut ^etre supérieur à 1000 pour les clients normaux" + ca)
        }
        else {
            super(nom, prenom, ca, 0)
        }
    }

    ajouterCA(montant: number):void {
        if (montant < 0) {
            throw new Error("Montant doit ^etre positif")
        }
        else {
            this._CA += montant
        }
    }

    achatCA(montant: number): void {
        this.retirerCA(montant)
    }

    private retirerCA(montant: number): void {
        if (montant < 0) {
            throw new Error("Montant doit ^etre positif")
        }
        else {
            this._CA -= montant
        }
    }
}

class BonClient extends Clientèle {

    constructor(nom: string, prenom: string, ca: number) {
        if (ca > 3000 || ca < 1000) {
            throw new Error("le chiffre d'affaire ne peut ^etre supérieur à 3000 ou inférieur à 1000 pour les bons clients" + ca)
        }
        else {
            super(nom, prenom, ca, 0.05)
        }
    }

    ajouterCA(montant: number):void {
        if (montant < 0) {
            throw new Error("Montant doit ^etre positif")
        }
        else {
            this._CA += montant
        }
    }

    achatCA(montant: number): void {
        this.retirerCA(montant)
    }

    private retirerCA(montant: number): void {
        if (montant < 0) {
            throw new Error("Montant doit ^etre positif")
        }
        else {
            let montant2 = montant * this._reduction
            this._CA -= montant - montant2
        }
    }
}

class ClientExceptionnel extends Clientèle {

    constructor(nom: string, prenom: string, ca: number) {
        if (ca > 10000 || ca < 3000) {
            throw new Error("le chiffre d'affaire ne peut ^etre supérieur à 10000 ou inférieur à 3000 pour les clients exceptionnels" + ca)
        }
        else {
            super(nom, prenom, ca, 0.15)
        }
    }
}

class Vic extends Clientèle {

    constructor(nom: string, prenom: string, ca: number) {
        if (ca < 10000) {
            throw new Error("le chiffre d'affaire ne peut ^etre inférieur à 10000 pour les VIC" + ca)
        }
        else {
            super(nom, prenom, ca, 0.3)
        }
    }
}

let newTest = new Client("Jean", "ValJean", 950)
let newTest2 = new BonClient("Jean", "YewaJean", 2500)
let newTest3 = new ClientExceptionnel("Yewa", "ValJean", 3500)
let newTest4 = new Vic("Jean", "Jaboul", 99999)
console.log(newTest, newTest2, newTest3, newTest4)
newTest.ajouterCA(30)
newTest.achatCA(980)
console.log(newTest)
newTest.ajouterCA(1010)
console.log(newTest)
newTest2.achatCA(100)
console.log(newTest2)