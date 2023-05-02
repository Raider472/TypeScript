import { Athlète } from "./Athlète"
import { Epreuve } from "./Epreuve"

export class Décathlon {
    private _lieu: string
    private _dateAnnée: number
    private _epreuves: Array<Epreuve>
    private _Athèletes: Array<Athlète>

    constructor(lieu: string, dateAnnée: number) {
        this._lieu = lieu
        this._dateAnnée = dateAnnée
        this._epreuves = []
        this._Athèletes = []
    }

    addEpreuve(epreuve: Epreuve): void {
        this._epreuves.push(epreuve)
    }

    addAthlète(athlète: Athlète): void {
        this._Athèletes.push(athlète)
    }
}
