const checkSessionAndEnableButtons = () => {
    const logado = sessionStorage.getItem("usuarioLogado")
    
    if (logado === "true") {
        const btnsAcesso = document.querySelectorAll('.top__lista__link')
        btnsAcesso.forEach(btn => {
            btn.style.display = 'none'
        })
    
        const btnPainel = document.querySelector('[data-header-painel]')
        btnPainel.style.display = 'flex'


        const btnAcessar = document.querySelector('[data-btnMobile]')
        btnAcessar.addEventListener("click", (event) => {
            event.preventDefault()
            window.location.href = 'assets/html/painel.html'
        })
        
    }
}

checkSessionAndEnableButtons()


