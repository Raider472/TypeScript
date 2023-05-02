import { Barème } from "./Barème";
import { Résultat } from "./Résultat";
import { TypeEpreuve } from "./TypeEpreuve";

export abstract class Epreuve {
    protected _unité: string
    protected _barème: Barème
    protected _résultats: Array<Résultat>

    protected constructor(unité: string, croissant: boolean) {
        this._unité = unité
        this._barème = new Barème(croissant)
        this._résultats = []
    }

    protected set unité(value: string) {
        this._unité = value
    }

    protected get unité(): string {
        return this._unité
    }

    protected set barème(value: Barème) {
        this._barème = value
    }

    protected get barème(): Barème {
        return this._barème
    }

    protected get résultats(): Array<Résultat> {
        return this._résultats
    }

    protected addRésultat(résultat: Résultat): void {
        this._résultats.push(résultat)
    }

    protected calculBarème(résultats: Array<number>, points = [0, 700, 750, 800, 850, 900, 950, 1000]): void {
        for (let i = 0; i < résultats.length; i++) {
            this._barème.addRésultat(résultats[i], points[i])
        }
    } 
}

export class Course extends Epreuve {
    private _typeEpreuve: TypeEpreuve

    constructor(typeEpreuve: string, croissant: boolean, unité: string) {
        super(unité, croissant)
        this._typeEpreuve = new TypeEpreuve(typeEpreuve)
        switch(this._typeEpreuve.nomEpreuve) {
            case "100 m":
                this.calculBarème([11.76, 11.75, 11.51, 11.27, 11.05, 10.82, 10.60, 10.39])
                break
            case "400 m":
                this.calculBarème([52.59, 52.58, 51.43, 50.32, 49.24, 48.19, 47.17, 46.17])
                break
            case "110 m haies":
                this.calculBarème([16.30, 16.29, 15.85, 15.41, 15.00, 14.59, 14.19, 13.81])
                break
            case "1500 m":
                this.calculBarème([276.97, 276.96, 269.25, 261.77, 254.50, 247.42, 240.53, 233.79])
                break
        }
    }

    get typeEpreuve(): TypeEpreuve {
        return this._typeEpreuve
    }

    set typeEpreuve(value: TypeEpreuve) {
        this._typeEpreuve = value
    }
}

export class Saut extends Epreuve {
    private _typeEpreuve: TypeEpreuve
}

export class lancer extends Epreuve {
    private _typeEpreuve: TypeEpreuve
}