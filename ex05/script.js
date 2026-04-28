let inicio = parseInt(prompt("Digite o primeiro número:"));
let fim = parseInt(prompt("Digite o segundo número:"));

if (isNaN(inicio) || isNaN(fim)) {
    document.write("Valores inválidos.");
} else {

    if (inicio > fim) {
        let temp = inicio;
        inicio = fim;
        fim = temp;
    }

    document.write("Números pares:<br>");

    for (let i = inicio; i <= fim; i++) {
        if (i % 2 === 0) {
            document.write(i + "<br>");
        }
    }
}