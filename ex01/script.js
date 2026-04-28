let numero = parseInt(prompt("Digite um número:"));

if (isNaN(numero) || numero < 1) {
    document.write("Digite um número válido maior que 0.");
} else {
    for (let i = 1; i <= numero; i++) {
        document.write(i + "<br>");
    }
}