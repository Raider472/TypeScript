let ya = 0;
let ya2 = 0;
while(ya < 10) {
    ya++;
    console.log("=", ya);
}

do
    ya2++
while (ya2 < 5);
console.log(ya2)

for (let ya3 = 0; ya3 < 6; ya3++) {
    console.log("Jaaj =", ya3);
}

let jaaj, yolo, somme = 0

for (jaaj = 0, yolo = 10, somme = 1; jaaj < yolo; jaaj++, yolo-- ) {
    console.log(somme);
    console.log(jaaj);
    console.log(yolo);
    somme += (jaaj * yolo);
    console.log("La somme =", somme);
    somme = 1;
}
