/**
* Faz um fetch no header e no footer, e insere eles nos destinos escolhidos.
* para evitar repetição de código nas outras páginas
*/

const includeHeader = document.querySelector(".include_header")
const includeFooter = document.querySelector(".include_footer")

const include = (htmlTag, htmlFile) => {
    fetch(htmlFile)
        .then(elem => elem.text())
        .then(elem => htmlTag.innerHTML = elem)
}

include(includeHeader, "../include-header-footer/include_header.html")
include(includeFooter, "../include-header-footer/include_footer.html")