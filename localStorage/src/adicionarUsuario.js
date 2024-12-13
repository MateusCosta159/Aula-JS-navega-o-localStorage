


document.getElementById("cadastroForm").addEventListener("submit", (e) =>{

    e.preventDefault();

    let nome = document.getElementById("nome").value
    let apelido = document.getElementById("apelido").value
    let senha = document.getElementById("senha").value


    let usuario = {
        nome : nome,
        apelido : apelido,
        senha : senha,
        tarefas : []
    }

    console.log(usuario)

    //TRansforma um objeto em uma String para localStorage
    localStorage.setItem("usuario", JSON.stringify(usuario))

    console.log(JSON.parse(localStorage.getItem("usuario")))
})

