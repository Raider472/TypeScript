//Ex 1

class Caractères {
    private _caractere: string

    get caractere(): string {
        return this._caractere
    }

    set caractere(caracter: string) {
        this._caractere = caracter
    }

    constructor (caractere = " ") {
        this._caractere = caractere
    }

    estVoyelle(): boolean {
        return this._caractere.toLowerCase() === ("a") || this._caractere === ("e") || this._caractere.toLocaleLowerCase() === ("i") || this._caractere === ("O") || this._caractere === ("u") || this._caractere === ("y")
    }
}

let testCara = new Caractères("A")

let tesCara2 = new Caractères()

let tesCara3 = new Caractères("i")

console.log(testCara.caractere)

tesCara2.caractere = "r"

console.log(testCara)

console.log(tesCara2)

console.log(tesCara3)

console.log(testCara.estVoyelle())

console.log(tesCara2.estVoyelle())

console.log(tesCara3.estVoyelle())

//Ex 2
class RectangleTD2 {
    private _longueur: number
    private _largeur: number

    constructor(longueur = 1, largeur = 1) {
        this._longueur = longueur
        this._largeur = largeur
    }

    perimétre(): number {
        return (this._longueur + this._largeur) * 2   
    }

    surface(): number {
        return this._longueur * this._largeur
    }

    aggrandir(multiplicateur: number): RectangleTD2 {
        this._longueur *= multiplicateur
        this._largeur *= multiplicateur
        return this
    }
}

let rectangleTest = new RectangleTD2(5, 6)

console.log(rectangleTest)

console.log(rectangleTest.perimétre())

console.log(rectangleTest.surface())

console.log(rectangleTest.aggrandir( 5))

//Ex 3

class ReservoirTD2 {

    private _capacitéReservoir: number
    private _resevoirActuel: number

    constructor (capacitéReservoir = 500, reservoirActuel = 0) {
        this._capacitéReservoir = capacitéReservoir
        this._resevoirActuel = reservoirActuel
    }

    verse(ajout: number): void {
        this._resevoirActuel += ajout
        let tropPlein = 0
        if (this._resevoirActuel > this._capacitéReservoir) {
            tropPlein = this._resevoirActuel - this._capacitéReservoir
            this._resevoirActuel = this._capacitéReservoir
            console.log("Voici le trop plein", tropPlein)
        }
    }

    puise(retrait: number): void {
        this._resevoirActuel -= retrait
        let tropPuisé = 0
        if (this._resevoirActuel < 0) {
            this._resevoirActuel = 0
            tropPuisé = -this._resevoirActuel
            console.log("Voici le trop puisé", tropPuisé)
        }
    }

    jauge(): number {
        return this._resevoirActuel
    }
}

let testReservoir = new ReservoirTD2()

console.log(testReservoir)

testReservoir.verse(510)

console.log(testReservoir.jauge())

testReservoir.puise(400)

console.log(testReservoir.jauge())

//Ex 4

class PointTD2 {
    private abs_ = 0;
    private ord_ = 0;

    constructor(abs = 0, ord = 0) {
        this.abs_ = abs;
        this.ord_ = ord;
    }

    get abs(): number {
        return this.abs_;
    }

    set abs(valeur: number) {
        this.abs_ = valeur;
    }

    get ord(): number {
        return this.ord_;
    }

    set ord(valeur: number) {
        this.ord_ = valeur;
    }

    toString(): string {
        return "(" + this.abs_ + ", " + this.ord_ + ")";
    }

    déplace(dabs: number, dord: number): void {
        this.abs_ += dabs;
        this.ord_ += dord;
    }

    somme(unPoint: PointTD2): PointTD2 {
        let sommePoint = new PointTD2(this.abs_, this.ord_) //ou unPoint.abs
        sommePoint.abs_ += unPoint.abs_
        sommePoint.ord_ += unPoint.ord_
        //return new PointTD2(this.abs + unPoint.abs, this.ord + unPoint.ord)
        return sommePoint
    }

    //Le reste ce sont des trucs statiques que on n'a pas encore vu donc probavlement faux

    statique(unPoint: PointTD2): boolean {
        return this.abs_ === unPoint.abs_ && this.ord_ === unPoint.ord_
    }

    somme2(unPoint: PointTD2, deuxPoint: PointTD2): PointTD2 {
        let sommePoint = new PointTD2(this.abs_, this.ord_) 
        sommePoint.abs_ = unPoint.abs_ + deuxPoint.abs_
        sommePoint.ord_ = unPoint.ord_ + deuxPoint.ord_
        return sommePoint
    }

    statique2(unPoint: PointTD2, deuxPoint: PointTD2): boolean {
        return this.abs_ === unPoint.abs_ + deuxPoint.abs_ && this.ord_ === unPoint.ord_ + deuxPoint.ord_
    }

    sommeEtStatique(unPoint: PointTD2, deuxPoint: PointTD2): void {
        console.log(this.somme2(unPoint, deuxPoint))
        console.log(this.statique2(unPoint, deuxPoint))
    }

    égalité(p: PointTD2): boolean {
        return this.abs === p.abs && this.ord === p.ord;
      }
}

let testPointTD2 = new PointTD2(48, 69)

let testPointTD22 = new PointTD2(22, 11)

let testPointTD222 = new PointTD2(48, 69)

let testPointTD2222 = new PointTD2(70, 80)

console.log(testPointTD2)

console.log(testPointTD22)

console.log(testPointTD2.somme(testPointTD22))

console.log(testPointTD2.statique(testPointTD22))

console.log(testPointTD2.statique(testPointTD222))

testPointTD2222.sommeEtStatique(testPointTD22, testPointTD222)

//Ex 5

class Segment {
    private extremité1_: PointTD2
    private extremité2_: PointTD2

    constructor(abs1 = 0, abs2 =0, ord1 = 0, ord2 = 0) {
        this.extremité1_ = new PointTD2(abs1, ord1)
        this.extremité2_ = new PointTD2(abs2, ord2)
    }

    get extrem1Abs(): number {
        return this.extremité1_.abs;
    }

    set extrem1Abs(valeur: number) {
        this.extremité1_.abs = valeur;
    }

    get extrem1Ord(): number {
        return this.extremité1_.ord;
    }

    set extrem1Ord(valeur: number) {
        this.extremité1_.ord = valeur;
    }

    //

    get extrem2Abs(): number {
        return this.extremité2_.abs;
    }

    set extrem2Abs(valeur: number) {
        this.extremité2_.abs = valeur;
    }

    get extrem2Ord(): number {
        return this.extremité2_.ord;
    }

    set extrem2Ord(valeur: number) {
        this.extremité2_.ord = valeur;
    }

    inversion(): void {
        let change = 0
        change = this.extremité1_.abs
        this.extremité1_.abs = this.extremité2_.abs
        this.extremité2_.abs = change
        change = this.extremité1_.ord
        this.extremité1_.ord = this.extremité2_.ord
        this.extremité2_.ord = change
    }
    
    longueurSegment(): number {
        return Math.sqrt(((this.extremité1_.abs - this.extremité1_.ord)**2) + ((this.extremité2_.abs - this.extremité2_.ord)**2))
    }

    cloneSuperficiel(): Segment {
        let cloneSup = new Segment()
        cloneSup.extremité1_ = this.extremité1_
        cloneSup.extremité2_ = this.extremité2_
        return cloneSup
    }

    cloneSProfond(): Segment {
        return new Segment(this.extremité1_.abs, this.extremité2_.abs, this.extremité1_.ord, this.extremité2_.ord)
    }

    égale(segment: Segment): boolean {
        return this.extremité1_.égalité(segment.extremité1_) && this.extremité2_.égalité(segment.extremité2_)
        // return segment.extremité1_.abs === this.extremité1_.abs && segment.extremité2_.abs === this.extremité2_.abs && segment.extremité1_.ord === this.extremité1_.ord && segment.extremité2_.ord === this.extremité2_.ord 
    }
}

let segmentTest = new Segment(8,5,6,9)

console.log(segmentTest.cloneSuperficiel())

let s3 = segmentTest.cloneSuperficiel()

console.log("debug jaaj")
console.log("jaaj", s3)

let s4 = segmentTest.cloneSProfond()

console.log("debug jaaj2")
console.log("jaaj2", s4)

console.log(segmentTest.cloneSProfond())

console.log(segmentTest)

console.log(segmentTest.longueurSegment())

segmentTest.inversion()

console.log(segmentTest)

segmentTest.extrem1Abs = 15
segmentTest.extrem1Ord = 20
segmentTest.extrem2Abs = 30
segmentTest.extrem2Ord = 40

console.log(segmentTest.extrem1Abs)
console.log(segmentTest.extrem1Ord)
console.log(segmentTest.extrem2Abs)
console.log(segmentTest.extrem2Ord)

console.log(segmentTest)

let testSegment2 = new Segment(15,30,20,40)

console.log(testSegment2)

console.log(segmentTest.égale(testSegment2))

//Ex 6
class Élève {
    private nom_: string;
    private prénom_: string;
    private âge_: number;

    public constructor(nom: string, prénom: string, âge: number) {
        this.nom_ = nom
        this.prénom_ = prénom
        this.âge_ = âge
    }

    get nom(): string {
        return this.nom_;
    }

    set nom(valeur: string) {
        this.nom_ = valeur;
    }

    get prénom(): string {
        return this.prénom_;
    }

    set prénom(valeur: string) {
        this.prénom_ = valeur;
    }

    get age(): number {
        return this.âge_;
    }

    set age(valeur: number) {
        this.âge_ = valeur;
    }
    // méthodes pour afficher
    get élève(): Élève {
        return this
    }

    afficher(): Élève {
        return this
    }

    afficherConsole(): void {
        console.log("Test méthode" ,this.nom, this.prénom, this.age)
    }

    est(nom: string, prénom: string): boolean {
        return this.nom === nom && this.prénom === prénom
    }
}

let testEleve = new Élève("jean", "jacque", 58)

console.log("jaaj3", testEleve)

console.log(testEleve.afficher())

console.log(testEleve.élève)

testEleve.afficherConsole()

class Classe {
    private nombreMaximumÉlèves_: number;
    private élèves_: Array<Élève>;

    constructor(nombreMaximumÉlèves: number) {
        this.nombreMaximumÉlèves_ = nombreMaximumÉlèves
        this.élèves_ = new Array<Élève>()
    }

    // Méthodes pour accéder aux informations sur la classe
    tailleMaximum(): number {
        return this.nombreMaximumÉlèves_
    } // retourne le nombre maximum d'élèves

    tailleCourante(): number {
        return this.élèves_.length
    } // retourne le nombre d'élèves actuellement

    pleine(): boolean {
        return this.tailleMaximum() === this.tailleCourante()
    } // indique si la classe est pleine ou non

    // méthodes pour ajouter un élève
    // Si la classe est pleine, la méthode ne doit rien faire et renvoyer false
    // sinon l'élève est ajouter et on retourne true
    ajout(nom: string, prénom: string, age: number): boolean {
        if (this.pleine() || this.dansClasse(nom, prénom)) {
            console.log("Le tableau est rempli donc l'élève n'a pas été ajouter")
            return false
        }
        else {
            console.log("L'élève", nom, prénom, "a été ajouter")
            let ajoutEleve = new Élève(nom, prénom, age)
            this.élèves_.push(ajoutEleve)
        }
        return true
    }
    // Méthodes sur les élèves
    dansClasse(nom: string, prénom: string): boolean {
        for (let i = 0; i < this.élèves_.length; i ++) {
            if (this.élèves_[i].nom === nom && this.élèves_[i].prénom === prénom) {
                return true
            }
        }
        return false
    }
    élève(nom: string, prénom: string): Élève | undefined {
        for (let i = 0; i < this.élève.length; i ++) {
            if (this.élèves_[i].nom === nom && this.élèves_[i].prénom === prénom) {
                console.log("jojo")
                return this.élèves_[i]
            }
        }
        return undefined

    }
    public affiche(): void { //Ou un for qui affiche avec la méthode élève
        console.log(this.élèves_)
    } // affiche la liste des élèves de la classe
}

let classedeclasse = new Classe(5)

console.log(classedeclasse)

classedeclasse.ajout(testEleve.nom, testEleve.prénom, testEleve.age)

classedeclasse.ajout("Yolo", "Yewa", 79)

classedeclasse.ajout("Jaajboulay", "Jean", 21)

classedeclasse.ajout("Alex", "Kheder", 24)

classedeclasse.ajout("LeJaaj", "Boeuf", 189)

classedeclasse.ajout("LeJooj", "Yowa", 3389)

classedeclasse.affiche()

console.log(classedeclasse.dansClasse("jean", "jacque"))

console.log(classedeclasse.élève("jean", "jacque"))

classedeclasse.ajout(testEleve.nom, testEleve.prénom, testEleve.age)