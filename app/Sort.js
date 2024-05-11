let btnOrdemPreco = document.getElementById('btnOrdenarPorPreco')

btnOrdemPreco.addEventListener('click', ordenarLivros)

function ordenarLivros() {
    let livrosOrdenados = livros.sort((a, b) => a.preco - b.preco)
    construirListaDeLivros(livrosOrdenados)
}