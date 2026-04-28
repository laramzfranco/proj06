let numero = parseInt(prompt("Digite um número:"));

if (isNaN(numero)) {
    document.write("Número inválido.");
} else {
    for (let i = 1; i <= 10; i++) {
        document.write(numero + " x " + i + " = " + (numero * i) + "<br>");
    }
}