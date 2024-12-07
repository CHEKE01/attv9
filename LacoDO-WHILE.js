const leia = require('readline-sync');

let somaPar = 0;
let somaImpar = 0;
let somaPositivos = 0;
let somaNegativos = 0;
let diferencaIP = 0;
let diferencaNP = 0;
let numero;

do {
    numero = leia.questionInt("Digite um número inteiro (ou 0 para sair): ");

    if (numero > 0) {
        somaPositivos += numero;

        if (numero % 2 === 0) {
            somaPar += numero;
        } else {
            somaImpar += numero;
        }
    } else if (numero < 0) {
        somaNegativos += numero;
    }
} while (numero !== 0);

diferencaIP = somaImpar - somaPar;
diferencaNP = somaNegativos - somaPositivos;

console.log(`Soma de todos os números positivos: ${somaPositivos}`);
console.log(`Soma dos números negativos: ${somaNegativos}`);
console.log(`Soma dos números ímpares: ${somaImpar}`);
console.log(`Soma dos números pares: ${somaPar}`);
console.log(`Diferença entre soma de ímpares e pares: ${diferencaIP}`);
console.log(`Diferença entre soma de negativos e positivos: ${diferencaNP}`);
