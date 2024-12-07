const leia = require('readline-sync');


let numeros = [];
let soma = 0;


for (let n = 0; n < 10; n++) {
    let numero = leia.questionInt(`Digite o ${n + 1}º número inteiro: `);
    numeros.push(numero);
    soma += numero; 
}

let media = soma / numeros.length;

let indicesImpares = [];
let numerosPares = [];

for (let n = 0; n < numeros.length; n++) {
    if (n % 2 !== 0) {
        indicesImpares.push(numeros[n]);
    }
    if (numeros[n] % 2 === 0) {
        numerosPares.push(numeros[n]);
    }
}

console.log("Elementos nos índices ímpares do vetor:", indicesImpares);
console.log("Elementos pares do vetor:", numerosPares);
console.log("Soma de todos os elementos do vetor:", soma);
console.log("Média de todos os elementos do vetor:", media.toFixed(2));
