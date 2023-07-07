let nUno = prompt ("Ingrese un valor")
let nDos = prompt ("Ingrese un valor")
let nTres = prompt ("Ingrese un valor")

function encontrarElMasChico(n1, n2, n3) {
    if (n1 < n2 && n1 < n3) {
        console.log("El primer numero ingresado es el de menor valor")
    } else if (n2 < n1 && n2 < n3) {
        console.log("El segundo numero ingresado es el de menor valor")
    }
    else {
        console.log("El tercer numero ingresado es el de menor valor")
    }
}

encontrarElMasChico(nUno, nDos, nTres);
