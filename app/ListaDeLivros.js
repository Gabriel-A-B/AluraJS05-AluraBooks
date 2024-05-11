const valorTotal = document.getElementById('valor_total_livros_disponiveis')

function construirListaDeLivros(listaDeLivros){
    valorTotal.innerHTML = ``
    listaDeLivros.forEach(livro => {
        let disponibilidade = livro.quantidade > 0 ? 'livro_imagens' : 'livro_imagens indisponivel'
        if (livro.preco > 100) {
            aplicarDesconto()
        }
        elementoInserirLivro.innerHTML += `
        <div class="livro ">
            <img class="${disponibilidade}" src="${livro.imagem}" alt="Capa do livro Cangaceiro JavaScript" />
            <h2 class="livro__titulo">
                ${livro.titulo}
            </h2>
            <p class="livro__descricao">${livro.autor}</p>
            <p class="livro__preco" id="preco">R$${livro.preco.toFixed(2)}</p>
            <div class="tags">
                <span class="tag">Front-end</span>
            </div>
        </div>
        `
    })

}