function calcular(operacao) {
    let numero1 = parseFloat(document.getElementById('numero1').value);
    let numero2 = parseFloat(document.getElementById('numero2').value);
    let resultado;

    if (operacao === '+') {
        resultado = numero1 + numero2;
    } else if (operacao === '-') {
        resultado = numero1 - numero2;
    } else if (operacao === '*') {
        resultado = numero1 * numero2;
    } else if (operacao === '/') {
        if (numero2 === 0) {
            resultado = 'Erro: Divisão por zero';
        } else {
            resultado = numero1 / numero2;
        }
    }

    document.getElementById('resultado').innerText = `Resultado: ${resultado}`;
}