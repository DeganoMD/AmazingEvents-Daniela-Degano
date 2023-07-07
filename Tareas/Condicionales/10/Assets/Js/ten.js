let jugador1 = prompt("Jugador 1, ingresa tu opción (PIEDRA, PAPEL o TIJERAS):");
let jugador2 = prompt("Jugador 2, ingresa tu opción (PIEDRA, PAPEL o TIJERAS):");

function jugar(pp, sp) {
    const opcionesValidas = ["PIEDRA", "PAPEL", "TIJERAS"];
    if (!opcionesValidas.includes(pp) || !opcionesValidas.includes(sp)) {
        console.log("UN JUGADOR HIZO TRAMPA")
    }else if (pp === sp) {
        console.log("Empate");
    }else if (
        (pp === "PIEDRA" && sp === "TIJERAS") || (pp === "PAPEL" && sp === "PIEDRA") || (pp === "TIJERAS" && sp === "PAPEL")
    ){
        console.log("Jugador 1 ha ganado")
    } else {
        console.log("Jugador 2 ha ganado")
    }
    }
jugar(jugador1, jugador2)
    