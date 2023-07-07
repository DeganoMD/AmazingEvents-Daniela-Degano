let edad = prompt("Ingresa tu edad")

function edadMayor(anios) {
    if (anios > 100) {
        console.log("¿Estas seguro de que esa es tu edad?");
    } else if (anios <= 12) {
        console.log("Eres un infante");
    } else if (anios <= 18) {
        console.log("Eres un adolescente");
    } else if (anios <= 45) {
        console.log("Eres un adulto");
    } else {
        console.log("Eres un anciano");
    }
}
edadMayor(edad)
