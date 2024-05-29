document.getElementById('form-tarefa').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio do formulário e o recarregamento da página

    const novaTarefaInput = document.getElementById('nova-tarefa');
    const novaTarefa = novaTarefaInput.value.trim(); // Obtém o valor do campo de entrada e remove espaços em branco

    if (novaTarefa !== '') {
        const listaTarefas = document.getElementById('lista-tarefas');

        const tarefaItem = document.createElement('p'); // Cria um novo parágrafo para a tarefa
        tarefaItem.textContent = novaTarefa; // Define o texto do parágrafo como a nova tarefa

        listaTarefas.appendChild(tarefaItem); // Adiciona o novo parágrafo à lista de tarefas

        novaTarefaInput.value = ''; // Limpa o campo de entrada
    }
});