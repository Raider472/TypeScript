import * as readlineSync from "readline-sync";

//EXO 1
/*function dashinator(mots: string, c1: string ): string {
    let nouvcha = ""
    for (let c of mots) {
        nouvcha += c
        nouvcha += c1
    }
    return nouvcha;
}

console.log(dashinator("JeanVal Jean Gaming Yewa", "-"))
//1.2
function dashinator2(mots: string, c1: string, c2:string ): string {
    let nouvcha = ""
    for (let c of mots) {
        if (c === c2) {
            nouvcha += c
        }
        else {
            nouvcha += c
            nouvcha += c1
        }
    }
    return nouvcha;
}

console.log(dashinator2("JeanVal Jean Gaming Yewa", "-", " "))
//1.3
function dashinator3(mots: string, c1: string, c2:string ): string {
    let nouvcha = "";
    let calculateurLenght = mots.length - 1;
    for (let c = 0; c < mots.length; c++ ) {
        if (c === calculateurLenght) {
            nouvcha += mots[c];
        }
        else if (mots[c] === c2) {
            nouvcha += mots[c];
        }
        else {
            nouvcha += mots[c];
            nouvcha += c1;
        }
    }
    return nouvcha;
}

console.log(dashinator3("JeanVal Jean Gaming Yewa", "-", " "))

//1.3,2 Méthode alternative
function dashinator4(mots: string, c1: string, c2:string ): string {
    let nouvcha = ""
    let calcLenght = mots.length - 1 
    let compta = 0
    for (let c of mots) {
        if (compta === calcLenght ) {
            nouvcha += c
        }
        else if (c === c2) {
            nouvcha += c
            compta ++
        }
        else {
            nouvcha += c
            nouvcha += c1
            compta ++
        }
    }
    return nouvcha;
}

console.log(dashinator4("JeanVal Jean Gaming Yewa le Second", "-", " "))*/

// Exo 2

/*function Palindrome(): boolean {
    let mots = String(readlineSync.question("Choisis ton mot Palindrome: "))
    for (let c = 0, d = mots.length - 1; c < mots.length; c++, d--) {
        if (mots[c] === mots[d]) {
            console.log(mots[c])
            console.log(mots[d])
            console.log("C'est juste pour l'instant")
        }
        else if (mots[c] !== mots[d]) {
            console.log(mots[c])
            console.log(mots[d])
            console.log("Ton mot n'est pas un Palindrome")
            return false;
        }
    }
    console.log("Bien jouée !\nTon mot est un palindrome !")
    return true;
}

console.log(Palindrome());*/

//Exo 3

/*function Mirroir(character: string): string {
    let nouvchar = ""
    for (let c = character.length - 1, d = 0; d < character.length; c--, d++ ) {
        nouvchar += character[c]
    }
    return nouvchar;
}

console.log(Mirroir("Timoléon"))*/

//Exo 4

/*function suprimateurofDeath(chara: string, jaaj: number): string {
    let newChar = "";
    for (let c = 0; c < chara.length -1 ; c++) {
        if (c === jaaj) {
            newChar += ""
        }
        else {
            newChar += chara[c]
        }
    }
    return newChar;
}

console.log(suprimateurofDeath("Timoléon", 5))*/

//Exo 5

/*function AjouteurofDeath(chara: string, indice: number, lettre: string): string {
    let newChar = "";
    for (let c = 0; c < chara.length; c++) {
        if (c === indice) {
            newChar += chara[c]
            newChar += lettre 
        }
        else {
            newChar += chara[c]
        }
    }
    return newChar;
}

console.log(AjouteurofDeath("Timoléon", 6, "h"))*/

//Exo ADN
//1
/*function ADNVerificateur(chaine: string): boolean {
  for (let c = 0; c < chaine.length; c++) {
    if (chaine[c] === "A" || chaine[c] === "C" || chaine[c] === "G" || chaine[c] === "T") {
      console.log(chaine[c]);
    } else {
      return false;
    }
  }
  return true;
}

console.log(ADNVerificateur("ACCCCGGGGGTTTTAAATGCGTACGTAGCTTTTTTTTTTTTTTTTTTTTTTSTTTTTTTTTTTTTTTTTTTTTT"));*/

//2
/*function ConvertisseurADNARN(chaine: string): string {
  let nouchar = "";
  for (let c of chaine) {
    if (c === "A" || c === "C" || c === "G" || c === "T") {
      if (c === "T") {
        nouchar += "U";
      } else {
        nouchar += c;
      }
    } else {
      console.log("Ta chaine est fausse, ressaye");
      break;
    }
  }
  return nouchar;
}

console.log(ConvertisseurADNARN("ACGTTTTTCGCGAGAGATTCGATGCTGAC"));*/

//3
/*function Bassecomplémentaire(chaine: string): string {
  let nouchar = "";
  for (let c of chaine) {
    if (c === "A" || c === "C" || c === "G" || c === "T") {
      if (c === "T") {
        nouchar += "A";
      }
      else if (c === "A") {
        nouchar += "T";
      }
      else if (c === "C") {
        nouchar += "G";
      }
      else if (c === "G") {
        nouchar += "C";
      }

    } 
    else {
      nouchar += "";
    }
  }
  return nouchar;
}

console.log(Bassecomplémentaire("S"));*/

//4
/*function séquenceComplémentaireInversée(chaine: string): string {
  let nouchar= ""
  for (let c of chaine) {
    if (c === "A" || c === "C" || c === "G" || c === "T") {
      if (c === "T") {
        nouchar += "A";
      }
      else if (c === "A") {
        nouchar += "T";
      }
      else if (c === "C") {
        nouchar += "G";
      }
      else if (c === "G") {
        nouchar += "C";
      }

    } 
    else {
      nouchar += "?";
    }
  }
  return nouchar
}
console.log(séquenceComplémentaireInversée("ACGTCGATCGATCG"))*/

//5
/*function nombreOccurrencesCodon(comparateur: string, chaine: string): number {
  let compteur = 0
  for (let c = 0, i = 0; c < chaine.length; c++ ) {
    if (chaine[c] === comparateur[i]) {
      if (chaine[c + 1] === comparateur[i + 1]) {
        if (chaine[c + 2] === comparateur[i + 2]) {
          compteur++
        }
      }
    } 
  }
  return compteur
}
console.log(nombreOccurrencesCodon("ACG", "ACGTCGATCGATCGTCTCTCGTACGT"))*/

//6
function ADNofDEATH(): void {
  let chaineADN = String(readlineSync.question("Choisis ta chaine ADN: "))
  //vérificateur de chaine ADN
  for (let c = 0; c < chaineADN.length; c++) {
    if (chaineADN[c] !== "A" && chaineADN[c] !== "G" && chaineADN[c] !== "C" && chaineADN[c] !== "T") {
      console.log("La chaine ADN est erroné")
      return
    }
  }
  console.log("La chaine ADN est correct")
  //vérificateur de Codon ARN
  let CodonARN = String(readlineSync.question("Choisis ton codon ARN: "))
  for (let c = 0; c < CodonARN.length; c++ ) {
    if ( (CodonARN[c] !== "A" && CodonARN[c] !== "G" && CodonARN[c] !== "C" && CodonARN[c] !== "U") || !(CodonARN.length <= 4)) {
      console.log("Le Codon ARN est erroné")
      return
    }
  }
  console.log("Le Codon ARN est correct")
  let noucharADN = ""
  let noucharARN = ""
  let comparateur = 0
  //séquence complétion
  for (let c of chaineADN) {
    if (c === "T") {
      noucharADN += "A";
    }
    else if (c === "A") {
      noucharADN += "T";
    }
    else if (c === "C") {
      noucharADN += "G";
    }
    else if (c === "G") {
      noucharADN += "C";
    }
    else {
      noucharADN += "?"
    }
  }
  // Séquence ARN
  for (let c of chaineADN) {
    if (c === "A" || c === "C" || c === "G" || c === "T") {
      if (c === "T") {
        noucharARN += "U";
      } else {
        noucharARN += c;
      }
    } 
    else {
      noucharARN += "?";
    }
  }
  //Codon Comparateur
  for (let c = 0, i = 0; c < noucharARN.length; c++ ) {
    if (noucharARN[c] === CodonARN[i]) {
      if (noucharARN[c + 1] === CodonARN[i + 1]) {
        if (noucharARN[c + 2] === CodonARN[i + 2]) {
          comparateur++
        }
      }
    } 
  }
  console.log("Voici la séquence Complémentaire-inversée: ", noucharADN)
  console.log("Voici la séquence ARN: ", noucharARN)
  console.log("Le condon", CodonARN, "apparait", comparateur, "fois dans la séquence ARN")
}

(ADNofDEATH())