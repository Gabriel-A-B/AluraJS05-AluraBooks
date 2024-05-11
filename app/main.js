let livros = []
const serverLivros = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'
const elementoInserirLivro = document.getElementById('livros')
pegarLivros()

async function pegarLivros() {
    const res = await fetch(serverLivros)
    livros = await res.json()
    console.table(livros)
    let total = calculoValor(livros)
    construirListaDeLivros(livros)
    exibirValor(total)
}