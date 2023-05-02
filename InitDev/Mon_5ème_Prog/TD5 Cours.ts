let stringo = "arabe"

console.log(stringo)
console.log(stringo[0])
console.log(stringo[1])
console.log(stringo[1 + 1])
console.log(stringo[4])

console.log("La longueur du mot", stringo, "est", stringo.length)

function épeler(chaîne: string): void {
    for (let i = 0; i < chaîne.length; i++) console.log("chaîne" + "[" + i + "]",
    "=", chaîne[i]);
}

for (let i of stringo) console.log(i);

épeler("Allahu Akbar");

let chiffreo = [10, 15, 20]

for (let i of chiffreo) console.log(i);

let chaîne = "Hallo";

function modification(chaîne: string, indice: number, caractère: string): string {
    let nouvelleChaîne = "";
    for (let i = 0; i < chaîne.length; ++i)
    if (i === indice) nouvelleChaîne += caractère;
    else nouvelleChaîne += chaîne[i];
    return nouvelleChaîne;
}

console.log(modification(chaîne, 1, "e"));
console.log("chaîne =", chaîne);
// Si on veut "corriger" chaîne il faut affecter le retour de fonction
chaîne = modification(chaîne, 1, "e");
console.log("\nchaîne =", chaîne);


function modification2(chaîne2: string, indice: number, caractère: string): string {
    let nouvelleChaîne = "";
    for (let i = 0; i < chaîne2.length; ++i)
    if (i === indice) nouvelleChaîne += caractère;
    else nouvelleChaîne += chaîne2[i];
    return nouvelleChaîne;
}

let chaîne2 = "E"
chaîne2 = modification2("Yazi" , 0, "N")
console.log(chaîne2)

function turfu( chara: string, a : string, b : string): string {
    let nouvcha = "";
    for (let c of chara) {
        if (c === a) {
            nouvcha += b
        }
        else {
            nouvcha += c
        }
    }
    return nouvcha;
}
let arabe = turfu("Arabe du turfu explosives", " ", "_")
console.log(arabe)
console.log(turfu("Arabe du turfu explosives", " ", "_"))

function Jean( chara: string, a : string, b : string): string {
    let nouvcha = "";
    for (let c = 0; c < chara.length; c++ ) {
        if (chara[c] === a) {
            nouvcha += b
        }
        else {
            nouvcha += chara[c]
        }
    }
    return nouvcha;
}
let Jolo = Jean("Jean Valjean Gaming De La Mort", " ", "_")
console.log(Jolo)

function Fritte( mots: string, comp: string): boolean {
    for (let c of mots) {
        if (c === comp) {
            return true;
        }
    }
    return false;
}

console.log('yolo', Fritte("Jean Gamiing", 'z'))

let mot = "Arabe";
if (mot === "Banane") console.log("Votre mot est bien Banane");
else if (mot < "Banane") console.log(mot, "est avant Banane");
else if (mot > "Banane") console.log(mot, "est après Banane");
else console.log("Aucun des cas");