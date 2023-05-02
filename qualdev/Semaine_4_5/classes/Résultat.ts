import { Athlète } from "./Athlète"
import { Epreuve } from "./Epreuve"

export class Résultat {
    private _résultat: number
    private _score: number
    private _résultatAthlète: Map<Epreuve, Athlète>

    constructor(résultat: number, score: number) {
        this._résultat = résultat
        this._score = score
    }
}