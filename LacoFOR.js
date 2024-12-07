const leia = require('readline-sync');

let pares = 0;
let impares = 0;

for (let contador = 1; contador <= 10; contador++) {
    let numero = leia.questionInt(`Digite o ${contador}º número inteiro: `);
    if (numero % 2 === 0) {
        pares++;
    } else {
        impares++;
    }
}

console.log(`Quantidade de números pares: ${pares}`);
console.log(`Quantidade de números ímpares: ${impares}`);
