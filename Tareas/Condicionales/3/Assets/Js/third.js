let nUno = prompt ("Ingrese un valor")
let nDos = prompt ("Ingrese un valor")

function comparacion(n1, n2) {
    if (n1 == n2) {
        console.log("son iguales");
    }
    if (n1 > n2) {
        console.log("El numero mayor es: " + n1);
    } else {
        console.log("El numero mayor es: " + n2);
    }
}
comparacion(nUno, nDos)