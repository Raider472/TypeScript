class CompteBancaire {
    private numéro_: number
    private solde_:number
    private journalEffectue_: Journalisation
    private journalEchec_: Journalisation

    constructor(id: number) {
        this.numéro_ = id
        this.solde_ = 0
        this.journalEffectue_ = Journalisation.getInstance("effectue")
        this.journalEchec_ = Journalisation.getInstance("echec")
    }

    get solde(): number {
        return this.solde_
    }

    débiter(montant: number): void {
        if (montant > this.solde_) {
            this.journalEchec_.journaliser("Compte " + this.numéro_ + " : Débit de " + montant + "€ impossible")
        }
        else {
            this.solde_ -= montant
            this.journalEffectue_.journaliser("Compte " + this.numéro_ + " : Débit de " + montant + "€")
        }
    }

    créditer(montant: number): void {
        this.solde_ += montant
        this.journalEffectue_.journaliser("Compte " + this.numéro_ + " : Crédit de " + montant + "€")
    }
}

class Journalisation {
    private static instance_: Map<String, Journalisation>
    private operation_: Array<string>

    constructor() {
        this.operation_ = []
    }

    public static getInstance(clef: string): Journalisation {
        if(!Journalisation.instance_.get(clef)) {
            Journalisation.instance_.set(clef, new Journalisation());
        }
        return Journalisation.instance_.get(clef)!;
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

function main() {
    const journal = Journalisation.getInstance("effectue")
    const journal2 = Journalisation.getInstance("echec")
    let cb1 = new CompteBancaire(123456789)
    cb1.créditer(100)
    cb1.débiter(80)
    let cb2 = new CompteBancaire(987654321)
    cb2.débiter(20)
    journal.afficher()
    journal2.afficher()
}

main()