let soma = 0;

for (let i = 1; i <= 10; i++) {
    let num = parseInt(prompt(`Digite o ${i}º número:`));

    if (isNaN(num)) {
        alert("Valor inválido! Tente novamente.");
        i--; // repete a tentativa
    } else {
        soma += num;
    }
}

document.write("Soma total: " + soma);