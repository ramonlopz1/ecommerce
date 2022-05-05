/**
* Faz um fetch no header e no footer, e insere eles nos destinos escolhidos.
* para evitar repetição de código nas outras páginas.
*/

const destinoHeader = document.querySelector(".include_header")
const destinoFooter = document.querySelector(".include_footer")

const include = (htmlTag, htmlFile) => {
    fetch(htmlFile)
        .then(elem => elem.text())
        .then(elem => htmlTag.innerHTML = elem)
}

include(destinoHeader, "../include-header-footer/include_header.html")
include(destinoFooter, "../include-header-footer/include_footer.html")