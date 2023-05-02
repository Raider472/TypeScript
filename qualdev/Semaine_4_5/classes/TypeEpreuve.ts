export class TypeEpreuve {
    private _nomEpreuve: string;

    constructor(nomEpreuve: string) {
        this._nomEpreuve = nomEpreuve;
    }

    set nomEpreuve(nomEpreuve: string) {
        this._nomEpreuve = nomEpreuve;
    }

    get nomEpreuve(): string {
        return this._nomEpreuve;
    }
}