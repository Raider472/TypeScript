//Question 1
function apparait(t1: Array<number>, indice: number, t2: Array<number>): boolean {
    for (let i = indice, j = 0; i < t1.length || j < t2.length; i++) { //i commence par la valeur "indice"
        if (t1[i] != t2[j]) { //si i n'a pas la m^eme valeur de j et que j n'a pas atteint la fin de t2, cela retourne faux
            console.log(t1[i], t2[j])
            return false
        }
        if (j != t2.length) { //si j n'est pas à la fin du tableau, on incrémente la variable
            j++
        }
    }
    return true
}

console.log(apparait([1,5,10,20,40,80], 2, [10,20,40,80]))

//Question 2
function estSousTableau(t1: Array<number>, t2: Array<number>): boolean {
    let premierIndices = 0
    for (let i = 0; i < t1.length; i++) {//Permet de recuperer l'indice de la première apprécence de t2[0]
        if(t1[i] === t2[0]) {
            premierIndices = i
        }
    }
    if (apparait(t1, premierIndices, t2) === false) { //utilise la fonction apparait pour determiner si c'est un sous tableau
        return false
    }
    return true
}

console.log(estSousTableau([50,28,46,89,107,698], [28,46,89,107,698]))

//Question 3
function estSousTableauTrie(t1: Array<number>, t2: Array<number>): boolean {
    let j = 0
    for (let i = 0, compteurDécroissant = t1[0]; i < t1.length; i++) {
        compteurDécroissant = t1[i]
        if (compteurDécroissant < t2[j] && j != t2.length) {
            return false
        }
        else if (compteurDécroissant === t2[j] && j != t2.length) { //incrémente s'il trouve un nombre de t2
            j++
        }
        else if (compteurDécroissant != t2[j] && j != t2.length) { //s'il s'agissait d'un cas isolé, on remet la varible j à 0
            j = 0
        }
    }
    if (j != t2.length) { //si la variable ne fait pas la taille de tableau t2, on retourne automatiquement faux
        return false
    }
    return true
}

console.log(estSousTableauTrie([10,8,6,4,2,1], [6,4,2]))