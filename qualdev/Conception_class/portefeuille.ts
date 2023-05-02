import { Devise } from "./devise"

class Portefeuille {
    private _devise: Array<Devise>

    constructor(euro = 0, dollar = "") {
        let array = new Array<Devise>()
        let devise = new Devise(euro, dollar)
        array.push(devise)
        this._devise = array
    }

    get devise(): Array<Devise> {
        return this._devise
    }

    set devise(valeur: Array<Devise>) {
        this._devise = valeur
    }

    ajouterDevis(valeur: number, nom: string): void {
        this._devise.push(new Devise(valeur, nom))
    }
}

export {Portefeuille}