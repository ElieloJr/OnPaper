
let pagina = document.body
pagina.onload = carregaProdutos

// Criação das Sessões
var cadernos = elementoComClass("section", "box-produto")
var canetas = elementoComClass("section", "box-produto")
var estojos = elementoComClass("section", "box-produto")
var papeis = elementoComClass("section", "box-produto")
var bolsas = elementoComClass("section", "box-produto")

function carregaProdutos() {
    // Altera o zoom da Página
    // var scale = 'scale(0.7)';
    // pagina.style.webkitTransform =  scale;    // Chrome, Opera, Safari
    // pagina.style.msTransform = 0.7;       // IE 9
    // pagina.style.transform = scale; 
    pagina.style.zoom = 0.7

    // Configuração das Sections
    criaSection(cadernos, "Cadernos", listaDeCadernos)
    criaSection(canetas, "Canetas", listaDeCanetas)
    criaSection(estojos, "Estojos", listaDeEstojos)
    criaSection(papeis, "Papeis", listaDePapeis)
    criaSection(bolsas, "Bolsas", listaDeBolsas)
    
}

function criaSection(section, nomeDaSection, listaDeProdutos) {
    for(let i = 0; i <= listaDeProdutos.length-1; i++) {
        criarCard(section, listaDeProdutos[i].url, listaDeProdutos[i].nome, listaDeProdutos[i].valor)
    }
    pagina.appendChild(tituloDaSection(nomeDaSection))
    pagina.appendChild(section)
}