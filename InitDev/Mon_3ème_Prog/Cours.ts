function estPair(x: number): boolean {
  return x % 2 === 0;
}

console.log(estPair(0));
console.log(estPair(1));
console.log(estPair(2));
console.log(estPair(3));

console.log("comparaison 1 =", 5 === 5);
let x = 1;
let y = 2;
let z = 3;
console.log("comparaison 2 =", 2 * x + 1 <= 3 * (y + z));
console.log("comparaison 3 =", 2 * x + 1 > 3 * (y + z));
let chaîne = "George";
console.log("comparaison 4 =", "jaaj" === "jaaj");
console.log("comparaison 5 =", chaîne === "George");

let calculo = Math.random() * 100;
let calculoFinal = Math.floor(calculo);

if (calculoFinal > 50) {
  console.log("calculo est supérieur à 50 et tu est débile");
  if (calculoFinal > 75) console.log("Ton nombre est supérieur à 75");
  else console.log("Ton nombre est naze");
} else {
  console.log("calculo est inférieur à 50 et tu est débile");
  if (calculoFinal < 25) console.log("Ton nombre est faible");
  else console.log("Ton nombre est ok");
}
console.log(calculoFinal);
