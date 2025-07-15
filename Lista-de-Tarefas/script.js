let tarefas = []

//const mensagem = document.getElementById("mensagem")

function adicionarTarefas() {
    const inputTarefa = document.getElementById("inputTarefa");
    let tarefa = inputTarefa.value.trim();

    if (tarefa == "") {
        mostrarMensagem("Não é possível cadastrar uma tarefa vazia, digite uma tarefa válida!", "#A34743");

    } else {
        mostrarMensagem("Tarefa adicionada com sucesso!", "#28A745");

        tarefas.push(tarefa);
        renderizarTarefas();

        if (tarefas.length > 0) {
            document.getElementById("limparTudo").style.display = "inline-block";
        }
    };

    inputTarefa.value = "";
};

function renderizarTarefas() {
    const listaTarefas = document.getElementById("listaTarefas");
    listaTarefas.innerHTML = "";


    //i = iterador; i<tarefas.length = condição de parada; i++ = frequência
    for (let i = 0; i < tarefas.length; i++) {
        let novaTarefa = document.createElement("li");novaTarefa.textContent = tarefas[i];

        let botaoRemover = document.createElement("button")
        botaoRemover.className = "remover"
        botaoRemover.textContent = "Remover"
        botaoRemover.onclick = () => removerTarefa(i)

        let botaoEditar = document.createElement("button")
        botaoEditar.className ="editar"
        botaoEditar.textContent = "Editar"
        botaoEditar.onclick = () => editarTarefa(i)

        novaTarefa.appendChild(botaoRemover)
        novaTarefa.appendChild(botaoEditar)
        listaTarefas.appendChild(novaTarefa);
    };

    // Verifica se há tarefas na lista e exibe ou oculta o botão "Limpar Tudo" (utilizando o operador ternário --- tarefas.length > 0 ? "inline-block" : "none" --- para definir o estilo de exibição)
    document.getElementById("limparTudo").style.display = tarefas.length > 0 ? "inline-block" : "none";
};

function removerTarefa(i) {
    tarefas.splice(i, 1)

    mostrarMensagem("Tarefa removida com sucesso!", "#A34743");

    renderizarTarefas()
}

function editarTarefa(i) {
    let tarefaEditada = prompt("Edite a tarefa:")
    if (tarefaEditada.trim() != "") {
        tarefas[i] = tarefaEditada

        mostrarMensagem("Tarefa editada com sucesso!", "#28A745");

        renderizarTarefas()
    }
}

function limparLista() {
    tarefas.length = 0
    renderizarTarefas()

    mostrarMensagem("Lista de tarefas limpa com sucesso!", "#000");
}

function mostrarMensagem(texto, cor = '#000') {
    const mensagem = document.getElementById("mensagem");
    mensagem.textContent = texto;
    mensagem.style.color = cor;

    setTimeout(() => {
        mensagem.textContent = "";
    }, 3000);
}