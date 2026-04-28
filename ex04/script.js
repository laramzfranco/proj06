let soma = 0;

for (let i = 1; i <= 5; i++) {
    let nota = parseFloat(prompt(`Digite a ${i}ª nota:`));

    if (isNaN(nota)) {
        alert("Nota inválida!");
        i--;
    } else {
        soma += nota;
    }
}

let media = soma / 5;
document.write("Média: " + media.toFixed(2));