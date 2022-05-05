(() => {
    // SELEÇÃO MANUAL DAS IMAGENS:
    
    const radio = document.querySelectorAll('#main_banners input[type=radio]')
    let contador = 0;

    // Ativa o primeiro botão radio (indice 0)
    radio[contador].checked = true

    // Preenche o background da div com a imagem referente ao número atual do contador.
    const divBanner = document.querySelector('#main_banners')
    divBanner.style.backgroundImage = `url(../assets/img/home/main_banners/${contador}.jpeg)`

    // O forEach retorna o índice do botão clicado e muda o caminho da imagem de acordo com o índice do botão. Ex: img[0], img[2], img[3].
    radio.forEach((btn, indice) => {
        btn.onclick = () => {
            divBanner.style.backgroundImage = `url(../assets/img/home/main_banners/${indice}.jpeg)`
        }
    })
    //

    // LOOPING:
    // Quando estiver no terceiro radio, é feito reset para que volte ao primeiro radio. E mude para primeira imagem
    setInterval(() => {
        contador++;
        contador >= 3 ? contador = 0 : contador

        radio[contador].checked = true

        divBanner.style.backgroundImage = `url(../assets/img/home/main_banners/${contador}.jpeg)`
    }, 4000)
})()

