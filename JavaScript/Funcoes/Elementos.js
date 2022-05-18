
function criarCard(section, imagem, descricao, valor) {
    var divPrincipal = elementoComClass("div", "row")

    var divImagem = criaImagem(imagem)
    var divDescricao = criaDescricao(descricao)
    var porApenas = criaPorApenas()
    var br = elementoSemClass("br")
    var divPreco = criaPreco(valor)
    
    divPrincipal.appendChild(divImagem)
    divPrincipal.appendChild(divDescricao)
    divPrincipal.appendChild(porApenas)
    divPrincipal.appendChild(br)
    divPrincipal.appendChild(divPreco)

    section.appendChild(divPrincipal)
}

function criaImagem(text) {
    var divImagem = elementoComClass("div", "produto")

    var imagem = document.createElement("img")
    imagem.src = text
    divImagem.appendChild(imagem)

    return divImagem
}

function criaDescricao(text) {
    var divDescricao = elementoComClass("div", "descricao")

    var descricao = elementoSemClass("p")
    descricao.textContent = `${text}  `
    divDescricao.appendChild(descricao)

    return divDescricao
}

function criaPorApenas() {
    var porApenas = elementoComClass("p", "apartir")
    porApenas.textContent = "Por apenas:"

    return porApenas
}

function criaPreco(text) {
    var divPreco = elementoComClass("div", "preco")

    var valor = elementoComClass("p", "valor")
    valor.innerHTML = `<sup>R$</sup>${text}`

    var button = elementoSemClass("button")
    button.textContent = "Ver mais"

    divPreco.appendChild(valor)
    divPreco.appendChild(button)

    return divPreco
}