document.addEventListener("DOMContentLoaded", () => {
    let usuario = JSON.parse(localStorage.getItem("usuario"))

    let lista = document.getElementById("listaTarefas")

    adicionaElementosLista(lista, usuario.tarefas)
})


function adicionaElementosLista(lista, valores){
    lista.innerHTML = "";

    for(v of valores){
        let li = document.createElement("li");
        li.textContent = v;
        li.classList.add("list-group-item");
        appendChield(li);
    }
}



document.getElementById("tarefaForm").addEventListener("submit", (e) => {
    e.preventDefault(); 

    let tarefa = document.getElementById("tarefa").value;
    let usuario = JSON.parse(localStorage.getItem("usuario")); 

    
   


    
    usuario.tarefas.push(tarefa);

    
    localStorage.setItem("usuario", JSON.stringify(usuario));

    let lista = document.getElementById("listaTarefas");

    adicionaElementosLista(lista, usuario.tarefas)
    
    console.log(usuario);
});

document.getElementById("logout").addEventListener("clik", () => {
    localStorage.removeItem("logado")

    window.location.href = "login.html"
})