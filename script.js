const h1 = document.querySelector("h1");
const form = document.querySelector("#form")
const input1 = document.querySelector("#calculo1");
const input2 = document.querySelector("#calculo2");
const button = document.querySelector("#btnCalcular");
const pResultado = document.querySelector("#pResultado")

form.addEventListener("submit", submitEvento)

function submitEvento (event) {
    //alert ("El suma fue " + (parseInt(input1.value) + parseInt(input2.value)));
    event.preventDefault();
    const sumaResultado = parseInt(input1.value) + parseInt(input2.value);
    pResultado.innerHTML = "La suma fue " + sumaResultado

}

