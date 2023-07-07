let dni = prompt("Ingrese el número de DNI:");
let nombre = prompt("Ingrese su nombre:");
let apellido = prompt("Ingrese su apellido:");
let nacimiento = prompt("Ingrese su fecha de nacimiento:");

console.log("Número de DNI: " + dni);
console.log("Nombre: " + nombre);
console.log("Apellido: " + apellido);
console.log("Fecha de nacimiento: " + nacimiento);

let afirmativo = prompt("¿Los datos ingresados son correctos? (si o no)");

    if (afirmativo == "si") {
    let documento = {
        dni: dni,
        nombre: nombre,
        apellido: apellido,
        nacimiento: nacimiento
    }
    console.log("Registro exitoso. Los datos ingresados son:");
    console.log(documento);
    } else {
    console.log("Vuelva a intentarlo en un mes.");
    }
