document.getElementById("loginForm").addEventListener("submit", (e) => {

    e.preventDefault();

    let apelido = document.getElementById("apelido").value
    let senha = document.getElementById("senha").value

    let mensagem = document.getElementById("mensagem")

    let usuario = JSON.parse(localStorage.getItem("usuario"))

    if(usuario.apelido === apelido && usuario.senha === senha){
        mensagem.textContent  = "Usuario Logado";

        localStorage.setItem("logado", usuario)

        setInterval(() => {
            window.location.href = "adicionarTarefas.html";
        }, 1500)

    }else{
        mensagem.textContent = "Usuario ou senha incorretos"
    }

})