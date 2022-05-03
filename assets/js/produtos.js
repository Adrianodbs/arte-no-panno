const produto = document.querySelectorAll('.produto')
const cartaoPosicao = document.querySelectorAll('produtos__card')

produto.forEach(lista => {
  lista.addEventListener('click', () => {
    const cartaoAberto = document.querySelector('.aberto')
    cartaoAberto.classList.remove('aberto')

    const idCartaoSelecionado = lista.attributes.id.value

    const cartaoParaAbrir = document.getElementById(
      'cartao-' + idCartaoSelecionado
    )
    cartaoParaAbrir.classList.add('aberto')

    const ativoNaListagem = document.querySelector('.produto__ativo')
    ativoNaListagem.classList.remove('produto__ativo')

    const selecionadoNaListagem = document.getElementById(idCartaoSelecionado)
    selecionadoNaListagem.classList.add('produto__ativo')
  })
})
