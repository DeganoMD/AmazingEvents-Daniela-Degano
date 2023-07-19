/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
import { show, mostrarListaCheckbox, filtroCheck, filtroPorSearch, filtrosCruzados}from "../Modules/function.js"
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let lugarDelaTarjeta = document.getElementById("sectionTarjetUp")
let checkBoxUp = document.getElementById("listaDeCheckboxTerminadaUp")
let buscadorUp = document.getElementById("buscadorUp")

let eventosApi

fetch("https://mindhub-xj03.onrender.com/api/amazing")//devuelve una promesa
.then (respuesta => respuesta.json())//si la respuesta es afirmativa, con el metodo json vuelvo esa respuesta  en un objeto mas facil de usar
.then (informacion => { eventosApi = informacion.events
    console.log(informacion)

let fechaApi = informacion.currentDate
let eventosFuturos = eventosApi.filter(evento => evento.date>=fechaApi)

show(eventosFuturos, lugarDelaTarjeta)

let listaCategoria = eventosFuturos.map(categoria => categoria.category)
let listasinRepetir = new Set (listaCategoria)
let transformacionDelaLista = Array.from(listasinRepetir)

mostrarListaCheckbox(transformacionDelaLista, checkBoxUp)
let check = document.querySelectorAll("input[type='checkbox']")

checkBoxUp.addEventListener("change",() => {
    lugarDelaTarjeta.innerHTML = " "
let categoriaSeleccionada = []
let checkSeleccionado = document.querySelectorAll("input[type='checkbox']:checked")
checkSeleccionado.forEach(categoria => categoriaSeleccionada.push (categoria.value))
let filtroCruzado = filtrosCruzados (eventosApi,categoriaSeleccionada, buscadorUp.value)
show(filtroCruzado, lugarDelaTarjeta)
})
})

buscadorUp.addEventListener('keyup', () => {
    lugarDelaTarjeta.innerHTML = " "
    let categoriaSeleccionada = []
    let checkSeleccionado = document.querySelectorAll("input[type='checkbox']:checked")
    checkSeleccionado.forEach(categoria => categoriaSeleccionada.push (categoria.value))
    let filtroCruzado = filtrosCruzados (eventosApi,categoriaSeleccionada, buscadorUp.value)
    show(filtroCruzado, lugarDelaTarjeta)
})



