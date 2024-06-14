
function addTarefas() {// Função para adicionar tarefas
   
    const taskInput = document.getElementById("taskInput"); // Obter o elemento de entrada da tarefa
   
    const taskList = document.getElementById("taskList"); // Obter a lista de tarefas
    
    const taskText = taskInput.value.trim();// Obter o texto da tarefa, removendo espaços em branco extras
    
    if (taskText !== "") {// Verificar se o texto da tarefa não está vazio
       
        const listItem = document.createElement("li"); // Criar um novo elemento de lista
       
        listItem.textContent = taskText; // Definir o texto do novo item de lista como o texto da tarefa
       
        const deleteBtn = document.createElement("span"); // Criar um botão de exclusão
        
        deleteBtn.textContent = "           (X)";// Definir o texto do botão de exclusão como "x"
        
        deleteBtn.className = "delete";// Adicionar uma classe ao botão de exclusão para estilização
       
        deleteBtn.onclick = function() { // Adicionar um evento de clique ao botão de exclusão para remover a tarefa
            console.log("Clicou para excluir");
            taskList.removeChild(listItem);
        };
       
        listItem.appendChild(deleteBtn); // Adicionar o botão de exclusão ao item da lista
      
        taskList.appendChild(listItem);  // Adicionar o item da lista à lista de tarefas
        
        taskInput.value = "";// Limpar o valor do campo de entrada da tarefa
    }
}


document.getElementById("taskInput").addEventListener("keypress", function(e) {// Adicionar um evento de ouvir pressionar tecla para o campo de entrada da tarefa
    
    if (e.key === "Enter") {// Verificar se a tecla pressionada é "Enter"
      
        addTarefas();  // Chamar a função para adicionar tarefa
    }
});


document.addEventListener("click", function(e) {// Adicionar um evento de clique para elementos com a classe "delete"
    if (e.target && e.target.classList.contains("delete")) {
        const listItem = e.target.parentNode;
        const taskList = listItem.parentNode;
        taskList.removeChild(listItem);
    }
});
