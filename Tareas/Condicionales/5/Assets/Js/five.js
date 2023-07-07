let primerPersona = {
    nombre: "Osvaldo",
    edad: 24,
    altura: 194,
}

let segundaPersona = {
    nombre: "Samuel",
    edad: 34,
    altura: 184,
}

function mayorEdad(p1, p2) {
    if (p1.edad > p2.edad) {
        console.log(p1.nombre + " es el de mayor de edad");
    }
    else {
        console.log(p2.nombre + " es el de mayor de edad");
    }
}
mayorEdad(primerPersona, segundaPersona)

function masAlta(p1, p2) {
    if (p1.altura > p2.altura) {
        console.log(p1.nombre + " es más alto"); 
    } else {
        console.log(p2.nombre + " es más alto");
    }
}
masAlta(primerPersona, segundaPersona)