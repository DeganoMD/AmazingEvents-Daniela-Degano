/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import { show, mostrarListaCheckbox, filtroCheck, filtroPorSearch, filtrosCruzados} from "../Modules/function.js"

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let tarjet = document.getElementById("sectionTarjet")
let checkBox = document.getElementById("listaDeCheckboxTerminadaIndex")
let buscador = document.getElementById("buscadorIndex")
let eventosApi

fetch("https://mindhub-xj03.onrender.com/api/amazing")
.then (respuesta => respuesta.json())
.then (informacion => { eventosApi = informacion.events 

show(eventosApi, tarjet)

let lista = eventosApi.map(categoria => categoria.category)
let listaSinRepetir = new Set (lista)
let transformaciondelaLista = Array.from(listaSinRepetir)

mostrarListaCheckbox(transformaciondelaLista, checkBox)
let check = document.querySelectorAll("input[type='checkbox']")

checkBox.addEventListener("change",() => {
    tarjet.innerHTML = " "
let categoriaSeleccionada = []
let checkSeleccionado = document.querySelectorAll("input[type='checkbox']:checked")
checkSeleccionado.forEach(categoria => categoriaSeleccionada.push (categoria.value))
let filtroCruzado = filtrosCruzados (eventosApi,categoriaSeleccionada, buscador.value)
show(filtroCruzado, tarjet)
})
})

buscador.addEventListener('keyup', () => {
    tarjet.innerHTML = " "
    let categoriaSeleccionada = []
    let checkSeleccionado = document.querySelectorAll("input[type='checkbox']:checked")
    checkSeleccionado.forEach(categoria => categoriaSeleccionada.push (categoria.value))
    let filtroCruzado = filtrosCruzados (eventosApi,categoriaSeleccionada, buscador.value)
    show(filtroCruzado, tarjet)
})

