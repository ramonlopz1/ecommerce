const a = document.querySelectorAll("[data-header-login]")
const main = document.querySelector('#home_main')

a.forEach(link => {
    
    link.onclick = e => {
        e.preventDefault()

        fetch(link.href)
            .then(elem => elem.text())
            .then(elem => main.innerHTML = elem)
    }

})

