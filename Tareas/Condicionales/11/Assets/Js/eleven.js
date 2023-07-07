let color = prompt ("Ingresa un color: (con mayuscula la primer letra)")

switch (color) {
    case 'Blanco':
    case 'Negro':
    console.log("Falta de color")
    break;
    case 'Verde':
    console.log("El color de la naturaleza");
    break;
    case 'Azul':
    console.log("El color del agua");
    break;
    case 'Amarillo':
    console.log("El color del sol");
    break;
    case 'Rojo':
    console.log("El color del fuego");
    break;
    case 'Marron':
    console.log("El color de la tierra");
    break;
    default:
    console.log("Excelente eleccion, no lo teniamos pensado");
    break;
}