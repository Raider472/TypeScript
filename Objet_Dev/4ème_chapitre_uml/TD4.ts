//Ex 2
class Timer {
    periode: number
    etat: boolean

    constructor(periode = 0.0) {
        this.periode = periode
        this.etat = false
    }

    getPeriode(): number {
        return this.periode
    }

    get Periode(): number {
        return this.periode
    }

    setPeriode (periode: number): void {
        this.periode = periode
    }

    set Periode(periode: number) {
        this.periode = periode
    }

    activer(): void {
        this.etat = true
    }

    desactiver(): void {
        this.etat = false
    }

    utiliser(): void {
        return
    }

    toString(): string {
        return "[periode=" + this.periode + ", etat=" + this.etat + "]";
    } 
}

let yewa = new Timer()