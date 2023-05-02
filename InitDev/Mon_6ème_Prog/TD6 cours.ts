/*let tab = [0, 2, 4, 8, 96, 8531, 66, 444, 6846, 89684, 8, 4,23,2];
while (tab.length > 0) {
console.log("élément retiré =", tab.pop());
console.log("tab après pop =", tab);
}*/

/*let tab = [0, 2, 4, 8];
for (let i in tab) {
    console.log("tab[" + i + "] = " + tab[i])
    console.log(i);
} 

let tab2 = [0, 2, 4, 8];
for (let valeur of tab2) console.log(valeur);*/

/*let t1 = [1, 2, 3, 4, 5, 78]; 

function copie(t: Array<number>): Array<number> {
    let nouveau: Array<number> = new Array<number>();
    for (let valeur of t) nouveau.push(valeur);
    return nouveau;
}

let t2 = copie(t1);

console.log(t2)

let t3 = [5, 6, 3];
let t4 = [...t3];

console.log(t4)

//t3[0] = 98095

console.log(t3)
console.log(t4)*/

/*function égal(a: Array<number>, b: Array<number>): boolean {
    if (a === b) return true;
    if (a == null || b == null) return false;
    if (t3.length != t4.length) return false;
    for (let i in t1) if (t3[i] !== t4[i]) return false;
    return true;
}

console.log (égal(t3, t4))*/

let a1 = [5, 0 ,3 ,9 ,10]
a1.pop()
a1.push(a1.length -2)
a1.push(a1[0])
console.log(a1)

let a2 = [5, 0 ,3 ,9 ,10]
a2.unshift(50)
console.log(a2)

let test = a2[a2.length - 1]
console.log(test)