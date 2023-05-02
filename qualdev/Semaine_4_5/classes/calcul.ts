export class Calcul {
    private _résultat: number
    private _nbPoints: number

    constructor(résultat: number, nbPoints: number) {
        this._résultat = résultat
        this._nbPoints = nbPoints
    }

    get résultat(): number {
        return this._résultat
    }

    get nbPoints(): number {
        return this._nbPoints
    }

    set résultat(résultat: number) {
        this._résultat = résultat
    }

    set nbPoints(nbPoints: number) {
        this._nbPoints = nbPoints
    }
}