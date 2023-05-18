const botaoMudarTema = document.getElementById("botao-alterar-tema");
const botaoTrocarImagens = document.querySelector(".imagem-botao");
const body = document.querySelector("body");

botaoMudarTema.addEventListener("click", () => {
    const modoEscuroAtivo = body.classList.contains("modo-escuro");
    body.classList.toggle("modo-escuro");
    if (modoEscuroAtivo) {
        botaoTrocarImagens.setAttribute("src", "./imagens/sun.png");
    } else {
        botaoTrocarImagens.setAttribute("src", "./imagens/moon.png");
        botaoTrocarImagens.setAttribute("alt", "Imagem da lua");
    };
});