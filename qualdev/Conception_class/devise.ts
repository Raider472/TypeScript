class Devise {
    private _montant: number
    private _nom: string

    constructor(montant: number, nom: string) {
        if (montant < 0) {
            montant = montant * -1
        }
        this._montant = montant
        nom.trim()
        this._nom = nom
    }

    get montant(): number {
        return this._montant
    }

    get nom(): string {
        return this._nom
    }

    set montant(valeur: number) {
        if (valeur < 0) {
            valeur = valeur * -1
        }
        this._montant = valeur
    }

    set nom(valeur: string) {
        valeur.trim()
        this._nom = valeur
    }

    affichage(): string {
        return this._montant + " " + this._nom
    }

    equals(d:Devise): boolean {
        return this._nom.toLocaleLowerCase() === d._nom.toLocaleLowerCase()
    }

    ajouterMontant(valeur: number): void {
        if (valeur <= 0) {
            throw new Error("la valeur ne peut-^etre négatif ou 0")
        }
        else {
            this._montant += valeur
        }
    }

    retirerDevis(valeur: number): void {
        if (valeur > this._montant) {
            throw new Error("le montant es supérieur à votre devis")
        }
        else {
            this._montant -= valeur
        }
    }
}

export {Devise}