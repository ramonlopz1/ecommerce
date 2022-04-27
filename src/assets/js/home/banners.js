// Translate Section
(() => {
    let contador = 0;
    const radio = document.querySelectorAll('#main_banners input[type=radio]')

    // Immediately apply elements
    radio[contador].checked = true

    const divBanner = document.querySelector('#main_banners')
    divBanner.style.backgroundImage = `url(../assets/img/main_banners/${contador}.jpeg)`

    //

    // Change radios with click and index position    
    radio.forEach((each, indice) => {
        each.onclick = () => {
            divBanner.style.backgroundImage = `url(../assets/img/main_banners/${indice}.jpeg)`
        }
    })
    //
    
    // Looping
    setInterval(() => {
        contador++;
        contador >= 3 ? contador = 0 : contador

        radio[contador].checked = true

        divBanner.style.backgroundImage = `url(../assets/img/main_banners/${contador}.jpeg)`
    }, 4000)
})()

