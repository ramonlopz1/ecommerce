let divAllCards = document.querySelector('#section-skills .all-cards');

let btns = document.querySelectorAll('.section-skills-btn')
let aside = document.querySelector('#section-skills aside')
    
let translateValue = 0;
let allCardsWidth = divAllCards.offsetWidth

/**Se baseia no tamanho da DIV que contém todos os CARDS e o 
 * tamanho do ASIDE + o valor do TRANSLATE a cada click, ou seja,
 * enquanto asideWidth + translateValue < AllCardsWidth: 
 */
function carrousel(btnIndex) {
    let asideWidth = aside.offsetWidth
   
    if (btnIndex == 0 && translateValue <= -170) {
        transformCondition(btnIndex)
    } else if (btnIndex == 1 && -asideWidth + translateValue > -allCardsWidth) {
        transformCondition(btnIndex)
    } 
}

// Define a direção do transform: direita ou esquerda, através do botão clicado (botão 0 ou botão 1)
function transformCondition(btnIndex) {
    if (btnIndex == 0) {
        translateValue += 170
        divAllCards.style.transform = `translateX(${translateValue}px)`
    } else {
        translateValue -= 170
        divAllCards.style.transform = `translateX(${translateValue}px)`
    }
}

// Define o botão clicado e executa a sua função.
btns.forEach((elem, btnIndex) => {
    elem.addEventListener('click', () => {
            carrousel(btnIndex)
    })
})
