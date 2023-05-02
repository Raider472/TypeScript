import { Résultat } from "./Résultat"

export class Athlète {
    private _nomAth: string
    private _nationalité: string
    private _age: number
    private _sexe: string
    private _id: number
    private _resultat: Résultat

    constructor(nomAth: string, nationalité: string, age: number, sexe: string) {
        this._nomAth = nomAth
        this._nationalité = nationalité
        this._age = age
        this._sexe = sexe
    }

    get nomAth(): string {
        return this._nomAth
    }

    set nomAth(nomAth: string) {
        this._nomAth = nomAth
    }

    get nationalité(): string {
        return this._nationalité
    }

    set nationalité(nationalité: string) {
        this._nationalité = nationalité
    }

    get age(): number {
        return this._age
    }

    set age(nationalité: number) {
        this._age = nationalité
    }


    get sexe(): string {
        return this._sexe
    }

    set sexe(sexe: string) {
        this._sexe = sexe
    }

    get id(): number {
        return this._id
    }

    set id(id: number) {
        this._id = id
    }

    toString(): string {
        return this._nomAth + " " + this._nationalité + " " +this._age + " " + this._sexe + " " + this._id
    }
}