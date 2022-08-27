let select = document.getElementById("select")
let button = document.querySelector("button")
let resultado = document.getElementById("resultado")

button.addEventListener("click", () => {
    let num1 = Number(document.getElementById("num1").value)
    let num2 = Number(document.getElementById("num2").value)
    let option = select.options[select.selectedIndex].value
    if (option == "+"){
        resultado.value = num1 + num2
    }else if (option == "-"){
        resultado.value = num1 - num2
    }else if (option == "*"){
        resultado.value = num1 * num2
    }else if (option == "/"){
        resultado.value = num1 / num2
    }else {
        alert("Seleciond uma operação para calcular")
    }
})