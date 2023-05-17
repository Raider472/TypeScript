class CompteBancaire2 {
    private numéro_: number
    private solde_:number

    constructor(id: number) {
        this.numéro_ = id
        this.solde_ = 0
    }

    get solde(): number {
        return this.solde_
    }

    débiter(montant: number): void {
        if (montant > this.solde_) {
            Journalisation2.getInstance("echec").journaliser("Compte " + this.numéro_ + " : Débit de " + montant + "€ impossible")
        }
        else {
            this.solde_ -= montant
            Journalisation2.getInstance("effectue").journaliser("Compte " + this.numéro_ + " : Débit de " + montant + "€")
        }
    }

    créditer(montant: number): void {
        this.solde_ += montant
        Journalisation2.getInstance("effectue").journaliser("Compte " + this.numéro_ + " : Crédit de " + montant + "€")
    }
}

class Journalisation2 {
    private static instance_: Map<String, Journalisation2> = new Map<String, Journalisation2>()
    private operation_: Array<string>

    constructor() {
        this.operation_ = []
    }

    public static getInstance(clef: string): Journalisation2 {
        if(!Journalisation2.instance_.get(clef)) {
            Journalisation2.instance_.set(clef, new Journalisation2());
        }
        return Journalisation2.instance_.get(clef)!;
    }

    public journaliser(operation: string) {
        let date = new Date().toLocaleDateString()
        this.operation_.push("[ "+ date + " ] " + operation);
    }

    public afficher() {
        for(let i = 0; i < this.operation_.length; i++) {
            console.log(this.operation_[i]);
        }
    }
}

function main2() {
    const journal = Journalisation2.getInstance("effectue")
    const journal2 = Journalisation2.getInstance("echec")
    let cb1 = new CompteBancaire2(123456789)
    cb1.créditer(100)
    cb1.débiter(80)
    let cb2 = new CompteBancaire2(987654321)
    cb2.débiter(20)
    journal.afficher()
    journal2.afficher()
}

main2()