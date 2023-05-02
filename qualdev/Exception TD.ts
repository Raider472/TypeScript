import * as readLineSync from "readline-sync"

//Ex 1

/*class NomVideError extends Error {
    constructor(message: string) {
        super(message)
        this.name = "NomVideError"
    }
}

class PrenomVideError extends Error {
    constructor(message: string) {
        super(message)
        this.name = "PrenomVideError"
    }
}

class NomEtPrenomVideError extends Error {
    constructor(message: string) {
        super(message)
        this.name = "NomEtPrenomVideError"
    }
}

function creeInitiales(nom: string, prenom: string): string {
    if (nom.length == 0 && prenom.length == 0) {
        throw new NomEtPrenomVideError("Le prénom et nom ne doivent pas être vides");
    }
    else if (nom.length == 0) {
        throw new NomVideError("Le nom ne doit pas être vide");
    }
    else if (prenom.length === 0) {
        throw new PrenomVideError("Le prénom ne doit pas être vide");
    }
    return nom[0].toUpperCase() + prenom[0].toUpperCase();
}

function verifieurErreur(): void {
    let nom = String(readLineSync.question("Veuillez rentrer votre nom: "))
    let prénom = String(readLineSync.question("Veuillez rentrer votre prénom: "))
    try {
        creeInitiales(nom, prénom)
    }
    catch (e) {
        if (e instanceof NomEtPrenomVideError){
            console.log("Fin du programme")
            console.log(e.message)
        }
        else if (e instanceof NomVideError) {
            console.log("Fin du programme")
            console.log(e.message)
        }
        else if (e instanceof PrenomVideError) {
            console.log("Fin du programme")
            console.log(e.message)
        }
        else {
            throw e
        }
    }
    console.log(creeInitiales(nom, prénom))
}

verifieurErreur()*/

//Ex 2

/*class PasDeNombre extends Error {
    constructor(message: string) {
        super(message)
        this.name = "PasDeNombre"
    }
}

class MauvaisFormat extends Error {
    constructor(message: string) {
        super(message)
        this.name = "MauvaisFormat"
    }
}

class MauvaisFormatUS extends Error {
    constructor(message: string) {
        super(message)
        this.name = "MauvaisFormatUS"
    }
}

function verifieErreur(): void {
    let dateTab = String(readLineSync.question("Entre une date en format jj/mm/ans"))
    try {
        splitCalendrier(dateTab)
    }
    catch (e) {
        if (e instanceof PasDeNombre) {
            console.log(e.message)
            return verifieErreur()
        }
        else if (e instanceof MauvaisFormat) {
            console.log(e.message)
            return verifieErreur()
        }
        else if (e instanceof MauvaisFormatUS) {
            console.log(e.message)
            return verifieErreur()
        }
        else {
            throw e
        }
    }
    console.log(splitCalendrier(dateTab))
}

function splitCalendrier(date: string): Array<number> {
    let jaaj = ""
    for (let i = 0; i < date.length; i ++) {
        if (isDigit(date[i]) === false) {
            throw new PasDeNombre("veuillez choisir des entiers")
        }
    }
    if (estFormatUs(date) === true) {
        throw new MauvaisFormatUS("veuillez saisir un format non américain")
    }
    else if (estBonFormat(date) === false) {
        throw new MauvaisFormat("veuillez saisir un format valide")
    }
    console.log(jaaj)
    let tab = date.split("/")
    let tabNum = []
    for (let i = 0; i < tab.length; i++) {
        tabNum.push(parseInt(tab[i], 10))
    }
    return tabNum
}

function isDigit(c: string): boolean {
    return (c >= "0" && c <= "9") || c === "/";
}

function estBonFormat(c: string): boolean {
    if ((((c[0] >= "0" && c[0] <= "2") && (c[1] >= "1" && c[1] <= "9")) || (c[0] === "3" && (c[1] === "1") || (c[1] === "0")))
    && c[2] === "/"
    && ((c[3] === "1" && c[4] <= "2") || (c[3] === "0" && c[4] >= "1" && c[4] <= "9"))
    && c[5] === "/"
    ) {
        return true
    }
    return false
}

function estFormatUs(c:string):boolean {
    if ((c[3] >= "2") || (c[3] === "1" && c[4] >= "3")) {
        return true
    }
    return false
}

verifieErreur()*/

//Ex 3

class ErrorINE extends Error {
    constructor(message: string) {
        super(message)
        this.name = "ErrorINE"
    }
}

class Etudiant {
    private _nom: string
    private _prenom: string
    private _numeroINE: string

    constructor(nom: string, prenom:string, numeroIne: string) {
        this.nom = nom
        this.prenom = prenom
        this.numeroINE = numeroIne
    }

    set nom(nom: string) {
        this._nom = nom
    }

    set prenom(prenom: string) {
        this._prenom = prenom
    }

    set numeroINE(numeroIne: string) {
        try {
            this.numeroINE = numeroIne
        }
        catch (e) {
            if (e instanceof ErrorINE) {
                console.log(e.message)
            }
            else  {
                throw e
            }
        }
        if (numeroIne.length != 11 ) {
            throw new ErrorINE("l'INE doit avoir une taille de 11 caractères")
        }
        this._numeroINE = numeroIne
    }

    estUnDigite(c: string): boolean {
        return (c >= "0" && c <= "9")
    }
}

let rar = new Etudiant("Yolo", "valjean", "48313123")