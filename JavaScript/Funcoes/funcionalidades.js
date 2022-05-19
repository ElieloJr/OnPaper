function elementoSemClass(elemento) {
    return document.createElement(`${elemento}`)
}

function elementoComClass(elemento, classe) {
    let element = document.createElement(`${elemento}`)
    element.classList.add(`${classe}`)
    return element
}

function tituloDaSection(titulo) {
    var nomeSection = elementoSemClass("h2")
    nomeSection.innerText = titulo
    nomeSection.id = titulo
    return nomeSection
}