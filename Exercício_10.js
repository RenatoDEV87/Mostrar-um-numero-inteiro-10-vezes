// Este programa lê um número inteiro e o imprime 10 vezes na tela

const prompt = require('prompt-sync')();

// Pede ao usuário para digitar um número inteiro
let numero = prompt("Digite um número inteiro: ");
numero = parseInt(numero);

// Mostra o número 10 vezes no console
for (let i = 1; i <= 10; i++) {
  console.log(`${i}ª vez: ${numero}`);
}
