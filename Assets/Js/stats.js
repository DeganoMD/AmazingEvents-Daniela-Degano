const primerTabla = document.getElementById("tableP")
const segundaTabla = document.getElementById("tableS")
const tercerTabla = document.getElementById("tableT")

let primero = document.getElementById("primero")
let segundo = document.getElementById("segundo")
let tercero = document.getElementById("tercero")


function primerCelda (array, doc, porcentaje){
    return doc.innerHTML = `<td>${array.name} ${porcentaje}% </td>`
}
function segundaCelda (array, doc, capacity){
    return doc.innerHTML = `<td>${array.name} ${capacity} </td>`
}

let eventosApi
let fechaActual 

function PrimerTabla(array,documento, porcentaje){
return documento.innerHTML = `<td>${array.name} ${porcentaje}%</td>`
}

fetch("https://mindhub-xj03.onrender.com/api/amazing")
.then (respuesta => respuesta.json())
.then (informacion => { eventosApi = informacion.events
                        fechaActual = informacion.currentDate

let past = eventosApi.filter(evento => evento.date < fechaActual)
let upComing = eventosApi.filter(evento => evento.date > fechaActual )

let arrayOrdenado = Array.from(past).sort(function (a,b)
{
    return b.capacity-a.capacity
})

past.sort((a,b) => calcularPorcentaje(a.assistance, a.capacity) - calcularPorcentaje(b.assistance, b.capacity))

let nombreDelMayorCapacidad = arrayOrdenado[0]
let mayorCapacidad = arrayOrdenado[0].capacity
let nombreMenorAsistencia = past [0]
let nombreMayorAsistencia = past [past.length-1]

let porcentajeMayor = calcularPorcentaje(nombreMayorAsistencia.assistance, nombreMayorAsistencia.capacity)
let porcentajeMenor = calcularPorcentaje(nombreMenorAsistencia.assistance, nombreMenorAsistencia.capacity)

primerCelda (nombreMayorAsistencia, primero, porcentajeMayor)
primerCelda (nombreMenorAsistencia, segundo, porcentajeMenor)
segundaCelda (nombreDelMayorCapacidad, tercero, mayorCapacidad)

let repetirPast = past.map(evento => evento.category)
let repetirUP = upComing.map(event => event.category)//recore el array y mapea la catergoria
let noRepitePast = Array.from(new Set(repetirPast))
console.log(noRepitePast)
let noRepiteUp = Array.from(new Set(repetirUP))

let objEventoPast = noRepitePast.map((categoria) => {
            let aux = {
                category: categoria
            }
console.log(noRepitePast)
    let categoriaEvento = past.filter(evento => evento.category == categoria)
            console.log(categoriaEvento);
            const revenue = categoriaEvento.reduce((acc, act) => acc + (act.price * act.assistance), 0)
            aux.revenue = revenue
            let porcAssist = categoriaEvento.reduce((acc, act) => acc + (act.assistance / (act.capacity / 100)), 0) / categoriaEvento.length
            aux.porcAssist = porcAssist
console.log(aux)
            return aux
        })

let objEventoUp = noRepiteUp.map((categoria) => {
    let auxiliar = {
        category: categoria
    }
    let catEvento = upComing.filter(evento => evento.category == categoria)
    console.log(catEvento)
    const revenue = catEvento.reduce((acc, act) => acc + (act.price * act.estimate), 0)
    auxiliar.revenue = revenue
    let porcEstimate = catEvento.reduce((acc, act) => acc + (act.estimate / (act.capacity / 100)), 0) / catEvento.length
    auxiliar.porcEstimate = porcEstimate
    console.log(auxiliar)
    return auxiliar
    
})

upComingTabla (objEventoUp, segundaTabla )
pastEventsTabla (objEventoPast, tercerTabla)
console.log(objEventoPast)
})

function calcularPorcentaje (asistencia, capacidad ){ 
    let resultado = (asistencia /capacidad)*100
    return resultado
}
function upComingTabla (eventos,containertb){
    for (let event of eventos) {
        containertb.innerHTML += 
        `<tr class=''>
        <td >${event.category}</td>
        <td >${event.revenue.toLocaleString()}</td>
        <td >${event.porcEstimate.toFixed(2)}%</td>
        </tr>`
        
    }
}
function pastEventsTabla (eventos,containertb){
    for (let event of eventos) {
        containertb.innerHTML += 
        `<tr class=''>
        <td >${event.category}</td>
        <td >${event.revenue.toLocaleString()}</td>
        <td >${event.porcAssist.toFixed(2)}%</td>
        </tr>`
        
    }
}


