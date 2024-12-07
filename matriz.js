const leia = require('readline-sync');

function obterNota() {
    let nota;
    do {
        nota = leia.questionFloat("Digite a nota (de 0 a 10): ");
        if (nota < 0 || nota > 10) {
            console.log("Nota inválida! A nota deve estar entre 0 e 10.");
        }
    } while (nota < 0 || nota > 10);
    return nota;
}

let notas = [];
let medias = [];

for (let contador = 0; contador < 10; contador++) {
    let notasParticipante = [];
    console.log(`Digite as notas dos 4 bimestres para o participante ${contador + 1}:`);

    let soma = 0;
    for (let n = 0; n < 4; n++) {
        let nota = obterNota(); 
        notasParticipante.push(nota);
        soma += nota;
    }

    notas.push(notasParticipante);

    let media = soma / 4;
    medias.push(media.toFixed(1));
}

console.log("\nMédias e situação dos participantes:");
for (let contador = 0; contador < medias.length; contador++) {
    let situacao = medias[contador] >= 6 ? "Aprovado" : "Reprovado";
    console.log(`Participante ${contador + 1}: Média = ${medias[contador]} - ${situacao}`);
}
