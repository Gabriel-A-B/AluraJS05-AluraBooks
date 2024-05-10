let livros = []
const serverLivros = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'

async function pegarLivros() {
    const res = await fetch(serverLivros)
    livros = await res.json()
    console.log(livros)
}