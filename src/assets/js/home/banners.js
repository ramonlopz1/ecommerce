// Translate Section
(() => {
    let contador = 0;
    const h1Array = ["Texto 1", "Texto 2", "Texto 3"]
    const spanArray = ["Span 1", "Span 2", "Span 3"]
    const h1 = document.createElement('h1')
    const span = document.createElement('span')
    const radio = document.querySelectorAll('#main_banners input[type=radio]')

    // Immediately apply elements
    h1.innerHTML = h1Array[contador]
    span.innerHTML = spanArray[contador]
    radio[contador].checked = true
    $('#main_banners').css('background-image', `url(../img/main_banners/${contador}.jpg)`)

    $('#main_banners').prepend(span)
    $('#main_banners').prepend(h1)
    //

    // Change radios with click and index position    
    radio.forEach((each, indice) => {
        each.onclick = () => {
            $('#main_banners').css('background-image', `url(../img/main_banners/${indice}.jpg)`)
            h1.innerHTML = h1Array[indice]
            span.innerHTML = spanArray[indice]
        }
    })
    //
    
    // Looping
    setInterval(() => {
        contador++;
        contador >= 3 ? contador = 0 : contador

        h1.innerHTML = h1Array[contador]
        span.innerHTML = spanArray[contador]
        radio[contador].checked = true

        $('#main_banners').css('background-image', `url(../img/main_banners/${contador}.jpg)`)
    }, 4000)
})()

