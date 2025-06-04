# Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes

# Exercício 10: Exibir Número Inteiro 10 Vezes

---

## 📑 Índice

1. [📖 Descrição](#descrição)  
2. [💻 Código](#código)  
3. [🚀 Como Executar](#como-executar)   
4. [🛠️ Tecnologias Utilizadas](#tecnologias-utilizadas)  
5. [📜 Licença](#licença)  

---

## Descrição

Este programa solicita que o usuário digite um número inteiro e o exibe no console 10 vezes utilizando um laço `for`.

---

## Código

Abaixo está o código-fonte do programa:

```JavaScript
// Este programa lê um número inteiro e o imprime 10 vezes na tela

const prompt = require('prompt-sync')();

// Pede ao usuário para digitar um número inteiro
let numero = prompt("Digite um número inteiro: ");
numero = parseInt(numero);

// Mostra o número 10 vezes no console
for (let i = 1; i <= 10; i++) {
  console.log(`${i}ª vez: ${numero}`);
}

```

---

## Como Executar

🛠️ Instruções para executar localmente

1. Instale o Node.js se ainda não tiver: https://nodejs.org

2. Abra o terminal e instale o prompt-sync (usado para entrada do usuário):

```
npm install prompt-sync
```

3. Salve o arquivo como `exercício_10.js` e execute com:

```
node exercício_10.js
```

---

## Tecnologias Utilizadas

- Linguagem: JavaScript
- Node.Js

---

## Licença

Este projeto está licenciado sob a MIT License.
