let asideCircles = document.querySelector('#categorias__article__circles')
let circlesDiv = document.querySelector('.article__circles__circle');

let btns = document.querySelectorAll('.categorias__article__btns')
    
let translateValue = 0;
let circlesDivWidth = circlesDiv.offsetWidth

/**Se baseia no tamanho da DIV que contém todos os CARDS e o 
 * tamanho do ASIDE + o valor do TRANSLATE a cada click, ou seja,
 * enquanto asideWidth + translateValue < AllCardsWidth: 
 */
function carrousel(btnIndex) {
    let asideCirclesWidth = asideCircles.offsetWidth
   
    if (btnIndex == 0 && translateValue <= -130) {
        transformCondition(btnIndex)
    } else if (btnIndex == 1 && -asideCirclesWidth + translateValue - 400 > -circlesDivWidth) {
        transformCondition(btnIndex)
    } 
}

// Define a direção do transform: direita ou esquerda, através do botão clicado (botão 0 ou botão 1)
function transformCondition(btnIndex) {
    if (btnIndex == 0) {
        translateValue += 130
        circlesDiv.style.transform = `translateX(${translateValue}px)`
    } else {
        translateValue -= 130
        circlesDiv.style.transform = `translateX(${translateValue}px)`
    }
}

// Define o botão clicado e executa a sua função.
btns.forEach((elem, btnIndex) => {
    elem.addEventListener('click', () => {
            carrousel(btnIndex)
    })
})
