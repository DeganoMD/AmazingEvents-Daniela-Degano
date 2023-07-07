let numberOne = prompt ("Ingrese un valor")
let numberTwo = prompt ("Ingrese un valor")

function verifica(n1, n2) {
    if (n1 !== n2) {
        console.log("Los numeros son diferentes")
    }
    else {
        console.log("Los numeros son iguales")
    }
}

verifica(numberOne, numberTwo)
