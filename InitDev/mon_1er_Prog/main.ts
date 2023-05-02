import * as readlineSync from "readline-sync";

console.log("Hello World !");
let strung = "jaaj";
let a = 58,
  b = 78;
let var1 = a;
console.log(strung);
console.log(a, b);
a = b;
b = var1;
console.log(a, b);
b = a + ((57 * 10) / (5 + 7)) * 8;
console.log(b);
console.log(a + b);
console.log("Test argent");
let type_argent = readlineSync.question("Type d'argent: ");
let quantité = Number(readlineSync.question("Quantité d'argent: "));
console.log("Tu as", 2 * quantité, type_argent);
