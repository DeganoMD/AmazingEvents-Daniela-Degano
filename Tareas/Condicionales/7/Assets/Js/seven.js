let nombreDelCliente = prompt("Ingrese su nombre")
let paseVIPoNormal = prompt("¿Tiene pase vip o normal?")
let entrada = prompt("¿Tiene entrada?")

function chocloDeCosas(nC, pVoN ,entrada) {
    if ((nC === "Daniela" || pVoN === "vip")) {
        console.log("Sea Bienvenid@")
    } else if (entrada === "Si") {
        let usarEntrada = prompt("¿Desea utilizar su entrada (si o no)?:")

        if (usarEntrada === "Si") {
            console.log("Bienvenid@")
        }
        else {
            console.log("No utilizara su entrada")
        }
    } else {
        let comprarEntrada = prompt("¿Desea comprar una entrada? (si o no):")
        
        if (comprarEntrada === "Si") {
            let dineroDisponible = prompt("Ingrese la cantidad de dinero disponible:");
            if (dineroDisponible >= 1000) {
                console.log("Venta exitosa, Bienvenid@ puede ingresar.");
            } else {
                console.log("Lo siento, no tiene suficiente dinero para comprar una entrada.");
            }
        }
        }
    }

chocloDeCosas(nombreDelCliente, paseVIPoNormal, entrada)
