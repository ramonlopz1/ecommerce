const includeHeader = document.querySelector(".include_header")
const includeFooter = document.querySelector(".include_footer")

const include = (htmlTag, htmlFile) => {
    fetch(htmlFile)
    .then(elem => elem.text())
    .then(elem => htmlTag.innerHTML = elem)
}

include(includeHeader, "../html/include_header.html")
include(includeFooter, "../html/include_footer.html")