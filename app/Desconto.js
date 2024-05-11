
function aplicarDesconto(){
const desconto = 0.2
const livrosComDesconto = livros.map(livro => {
    return {...livro, preco: livro.preco - (livro.preco * desconto)}
})
    return
}