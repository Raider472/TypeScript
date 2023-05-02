import { Athlète } from "./Athlète";
import { Résultat } from "./Résultat";

export class Classement {
    private _scores: Array<Résultat>
    private _meilleursLanceurs: Athlète | null
    private _meilleursCoureurs: Athlète | null
    private _meilleurSauteur: Athlète | null
    private _meilleurFrancais: boolean 

    constructor() {
        this._scores = []
        this._meilleursLanceurs = null
        this._meilleursCoureurs = null
        this._meilleurSauteur = null
        this._meilleurFrancais = false
    }

    addScore(score: Résultat): void {
        this._scores.push(score)
    }

    getScore(index: number): Résultat {
        return this._scores[index]
    }
}