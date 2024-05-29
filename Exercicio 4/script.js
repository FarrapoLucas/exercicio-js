let contador = 0;

document.getElementById('botao-cliques').onclick = function() {
    contador++;
    document.getElementById('contador-cliques').textContent = 'Cliques: ' + contador;
};