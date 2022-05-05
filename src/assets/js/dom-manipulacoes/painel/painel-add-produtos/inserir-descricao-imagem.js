
const inputFile = document.querySelector("#produtoimginput")
const label = document.querySelector("#produtoimglabel")
const fileInfo = document.createElement("span")
label.appendChild(fileInfo)

const imgChecked = () => {
    fileInfo.textContent = inputFile.value
}

inputFile.addEventListener("change", imgChecked)
