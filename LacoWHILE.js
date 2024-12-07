const leia = require('readline-sync');

let menores21 = 0;
let maiores50 = 0;
let outraFaixaEtaria = 0;
let idade;

while (true) {
    idade = leia.questionInt("Digite uma idade (ou um número negativo para sair): ");

    
    if (idade < 0) {
        break;
    }

    if (idade < 21) {
        menores21++;
    } else if (idade > 50) {
        maiores50++;
    } else {
        outraFaixaEtaria++;
    }
}

console.log(`Total de pessoas com menos de 21 anos: ${menores21}`);
console.log(`Total de pessoas com mais de 50 anos: ${maiores50}`);
console.log(`Total de pessoas com idades entre 21 e 50 anos: ${outraFaixaEtaria}`);
