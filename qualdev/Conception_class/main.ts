import { Devise } from "./devise";
import { Portefeuille } from "./portefeuille";

let porte_feuille = new Portefeuille(1.50, "Euro")
console.log(porte_feuille)
porte_feuille.devise[0].montant = -80
console.log(porte_feuille)
porte_feuille.devise[0].retirerDevis(50)
console.log(porte_feuille)
porte_feuille.ajouterDevis(-89, "Yens")
porte_feuille.devise[0].ajouterMontant(500)
console.log(porte_feuille)
