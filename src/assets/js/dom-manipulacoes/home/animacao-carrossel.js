(() => {
    // Div que limita a visualização dos itens com overflow: hiden
    const envelopaDivDosCirculos = document.querySelector('#categorias__article__circles')

    // Div que contém os circulos, que está parcialmente oculta, devido o overflow:hiden da sua div pai.
    const divDosCirculos = document.querySelector('.article__circles__circle');
    
    // Valor que a divDosCirculos irá aplicar ao translate
    let valorDoTranslate = 0;
    
    // Largura da div que tem o overflow: hiden
    let envelopaDivDosCirculosLargura = envelopaDivDosCirculos.offsetWidth
    
    // Largura da div completa, que está parcialmente oculta, devido o overflow:hiden da sua div pai.
    let divDosCirculosLargura = divDosCirculos.offsetWidth
    
    // Aplica translate ao clicar no botão da esquerda
    const btnEsquerda = document.querySelector("[btnEsquerda]")
    btnEsquerda.addEventListener('click', (event) => {
        event.preventDefault()
        
        // Se estiver dentro do limite permitido, ande uma casa.

        const limiteMinimoTranslate = valorDoTranslate <= -130

        if(limiteMinimoTranslate) {
            valorDoTranslate += 130
            divDosCirculos.style.transform = `translateX(${valorDoTranslate}px)`
        }
    })
    
    // Aplica translate ao clicar no botão da direita
    const btnDireita = document.querySelector("[btnDireita]")
    btnDireita.addEventListener('click', (event) => {
        event.preventDefault()
        
        // Se estiver dentro do limite permitido, ande uma casa.

        const limiteMaximoDeTranslate = -envelopaDivDosCirculosLargura + valorDoTranslate - 350 > -divDosCirculosLargura
        
        if (limiteMaximoDeTranslate) {
            valorDoTranslate -= 130
            divDosCirculos.style.transform = `translateX(${valorDoTranslate}px)`
        }
    })
})()