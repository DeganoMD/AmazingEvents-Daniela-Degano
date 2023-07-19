////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
import {show, mostrarListaCheckbox, filtroCheck, filtroPorSearch, filtrosCruzados} from "../Modules/function.js"
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let lugarDeTarjeta = document.getElementById("sectionTarjetPast")
let checkBoxPast = document.getElementById("listaDeCheckboxTerminadaPast")
let buscador = document.getElementById("buscadorPast")

let eventosApi

fetch("https://mindhub-xj03.onrender.com/api/amazing")
.then (respuesta => respuesta.json())
.then (informacion => { eventosApi = informacion.events 

let fechaApi = informacion.currentDate
let eventosPasados = eventosApi.filter(evento => evento.date<fechaApi)
show(eventosPasados, lugarDeTarjeta)

let listaCategoria = eventosPasados.map(categoria => categoria.category)
let listasinRepetir = new Set (listaCategoria)
let transformacionDelaLista = Array.from(listasinRepetir)


mostrarListaCheckbox(transformacionDelaLista, checkBoxPast)
let check = document.querySelectorAll("input[type='checkbox']")

checkBoxPast.addEventListener("change",() => {
    lugarDeTarjeta.innerHTML = " "
let categoriaSeleccionada = []
let checkSeleccionado = document.querySelectorAll("input[type='checkbox']:checked")
checkSeleccionado.forEach(categoria => categoriaSeleccionada.push (categoria.value))
let filtroCruzado = filtrosCruzados (eventosApi,categoriaSeleccionada, buscador.value)
show(filtroCruzado, lugarDeTarjeta)
})
})

buscador.addEventListener('keyup', () => {
    lugarDeTarjeta.innerHTML = " "
    let categoriaSeleccionada = []
    let checkSeleccionado = document.querySelectorAll("input[type='checkbox']:checked")
    checkSeleccionado.forEach(categoria => categoriaSeleccionada.push (categoria.value))
    let filtroCruzado = filtrosCruzados (eventosApi,categoriaSeleccionada, buscador.value)
    show(filtroCruzado, lugarDeTarjeta)
})
