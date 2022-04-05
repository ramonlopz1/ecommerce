const headerLogin = document.querySelector("#header_login")

fetch("../html/header.html")
    .then(elem => elem.text())
    .then(elem => headerLogin.innerHTML = elem)
