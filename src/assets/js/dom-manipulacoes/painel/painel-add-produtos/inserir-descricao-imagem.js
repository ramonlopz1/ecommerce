// Insere no span, a descrição da imagem recebida no input.
const inputFile = document.querySelector("#produtoimginput")

const inserirDescricaoDaImagem = () => {
    const label = document.querySelector("#produtoimglabel")
    const fileInfo = document.createElement("span")

    label.appendChild(fileInfo)

    fileInfo.textContent = inputFile.value
}

inputFile.addEventListener("change", inserirDescricaoDaImagem)
