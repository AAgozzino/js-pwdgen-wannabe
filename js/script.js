// Chiedere il nome
var nomeUtente = prompt("Scrivi il tuo nome");

// Chiedere il cognome
var cognomeUtente = prompt("Scrivi il tuo cognome");

// chedere il colore preferito
var colorePreferito = prompt("Scivi il tuo colore preferito");

// Concatenazione var con 19
var passwordUtente = nomeUtente + cognomeUtente + colorePreferito + "19";

// Stampare a video
console.log(passwordUtente);
document.getElementById("password").innerHTML = passwordUtente;
