let numeroUno = parseFloat(prompt("Ingrese el primer valor:"));
let numeroDos = parseFloat(prompt("Ingrese el segundo valor:"));
let calculo = prompt("Ingrese la operación que desea realizar (suma, resta, multiplicacion, division):");

    switch (calculo) {
    case "suma":
        let operacion = numeroUno + numeroUno;
        mensaje = "El resultado de la suma es: " + operacion;
        break;
    case "resta":
        let resultado = numeroUno - numeroDos;
        mensaje = "El resultado de la resta es: " + resultado;
        break;
    case "multiplicacion":
        let resulta = numeroUno * numeroDos;
        mensaje = "El resultado de la multiplicación es: " + resulta;
        break;
    case "division":
        if (numeroDos !== 0) {
        resto = numeroUno / numeroDos;
        mensaje = "El resultado de la división es: " + resto;
        } else {
        mensaje = "ERROR: No se puede dividir entre cero (0).";
        }
        break;
    default:
        mensaje = "Operación no válida.";
    }
console.log(mensaje)
