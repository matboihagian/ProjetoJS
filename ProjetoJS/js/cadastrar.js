document.querySelector("#botao-cadastrar").addEventListener("click", () => {
    // Pegar os valores dos inputs
    const form = document.querySelector("form")
    // Criar um objeto chamado jogador com esses valores
    const jogador = {
        id: new Date().getTime(),
        nome: document.querySelector,
        time: document.querySelector,
        gols: document.querySelector,
        assistencias: document.querySelector,
        foto: document.querySelector
    }
     
        salvar(jogador)
    })

    // Salvar o objeto no localStorage usando a chave "jogadores"
function salvar (jogador){
        const jogadores = JSON.parse(localStorage.getItem("jogadores")) || []
        jogadores.push(jogador)
        localStorage.setItem("jogadores", JSON.stringify(jogadores))
        window.location.href = "index.html"
    }
    // Redirecionar o usuário para a página inicial

    
   
    
    
  