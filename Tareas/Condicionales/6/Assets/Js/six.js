let nombre = prompt("Ingrese su nombre")
let edad = prompt("Ingrese su edad")
let altura = prompt("Ingrese su altura")
let vision = prompt("Ingrese numero de vision")

function edadRequerida(anios) {
    if (anios>= 18) {
        console.log("Cumples con la edad requerida");
    } else {
        console.log("No cumples con la edad requerida");
    }
}
edadRequerida(edad)

function alturaRequerida(haltura) {
    if (haltura>= 150) {
        console.log("Cumples con la altura requerida");
    } else {
        console.log("No cumples con la altura requerida");
    }
}
alturaRequerida(altura)

function visionRequerida(vista) {
    if (vision>= 8) {
        console.log("Cumples con la vision requerida");
    } else {
        console.log("No cumples con la vision requerida");
    }
}
visionRequerida(vision)