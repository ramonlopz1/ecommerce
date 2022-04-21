const checkSessionAndEnableButtons = () => {
    const localSt = sessionStorage.getItem("usuarioLogado")
    
    if (localSt === "true") {
        const btnsAcesso = document.querySelectorAll('.top__lista__link')
        btnsAcesso.forEach(btn => {
            btn.style.display = 'none'
        })
    
        const btnPainel = document.querySelector('[data-header-painel]')
        btnPainel.style.display = 'flex'
    }
}

checkSessionAndEnableButtons()


