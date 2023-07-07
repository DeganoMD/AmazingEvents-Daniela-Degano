const numeroIncognita = 6;

let numeroAdivinajugador = prompt ("Primer intento para adivinar el numero")

function cuerpoDelEjercicio(incognito, adivina) {
    if (adivina == incognito) {
        console.log("Adivinaste");
    } else {
        let adivina1 = prompt("Segundo intento")
        if (adivina1 == incognito) {
            console.log("Adivinaste");
        } else {
            let adivina2 = prompt("Tercer y ultimo intento")
            if (adivina2 == incognito) {
                console.log("Adivinaste")
            } else {
                console.log("No has adivinado")
            }
        }
    }
}

cuerpoDelEjercicio(numeroIncognita, numeroAdivinajugador)