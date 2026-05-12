let prenom = "Toto";
let addresse = "11 avenue de l'europe"
let ville = "Paris";
let numéro_de_telephone = "XX.XX.XX.XX.XX"
let commande = "Regina"
let temps = "30 minutes"
let enseigne = "\"La Pizzeria Raffinata\""

let SumUpOrderPhrase = `Bonjour Mr ${prenom}, votre pizza :${commande} est en cours de préparation. Elle vous sera livrée d'ici ${temps} au ${addresse}, ${ville}. À l'arrivé, le livreur vous appellera au: ${numéro_de_telephone}.
Merci d'avoir commandé chez ${enseigne}
Ps: Qu'est-ce qu'une pizza dit à une autre pizza qui lui fait de l'ombre ? 
\"Arrête de me trancher la route !\"`;
console.log(SumUpOrderPhrase)
