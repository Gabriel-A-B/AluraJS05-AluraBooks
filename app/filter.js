const botoes = document.querySelectorAll('.btn')
botoes.forEach(btn => btn.addEventListener('click', filtrarLivros))

function filtrarLivros() {
    elementoInserirLivro.innerHTML = ''
    const elementoBtn = document.getElementById(this.id)
    const categoria = elementoBtn.value
    let livrosFiltrados = categoria == 'disponiveis' ? filtrarPorDisponibilidade() : filtarPorCategoria(categoria)
    construirListaDeLivros(livrosFiltrados)
        let total = calculoValor(livrosFiltrados)
        exibirValor(total)
}

function filtrarPorDisponibilidade(){
    return livros.filter(livro => livro.quantidade > 0)
}

function filtarPorCategoria(categoria) {
    return livros.filter(livro => livro.categoria == categoria)
}

function exibirValor(total) {
    valorTotal.innerHTML = `
    <div class="livros__disponiveis">
      <p>Todos os livros disponíveis por R$ <span id="valor">${total}</span></p>
    </div>
    `
}
