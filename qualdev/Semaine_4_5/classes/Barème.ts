import { Calcul } from "./calcul";

export class Barème {
    private _résultat: Array<Calcul>
    private _croissant: boolean

    constructor(croissant: boolean) {
        this._croissant = croissant
    }

    get résultat(): Array<Calcul> {
        return this._résultat;
    }

    addRésultat(résultat: number, points: number): void {
        let calcul = new Calcul(résultat, points)
        this._résultat.push(calcul);
    }

    calculNbPoints(résultat: number): number {
        let points = 0
        if(this._croissant === true) {
            for (let i = 0; i < this._résultat.length; i++) {
                if (résultat >= this._résultat[i].résultat) {
                    points = this._résultat[i].nbPoints;
                }
            }
        }
        else {
            for (let i = 0; i < this._résultat.length; i++) {
                if (résultat <= this._résultat[i].résultat) {
                    points = this._résultat[i].nbPoints;
                }
            }
        }
        return points
    }
}