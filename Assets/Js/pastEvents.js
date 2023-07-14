////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let lugarDeTarjeta = document.getElementById("sectionTarjetPast")
let checkBoxPast = document.getElementById("listaDeCheckboxTerminadaPast")
let buscador = document.getElementById("buscadorPast")

const eventosCarta = data.events
const fecha = data.currentDate
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function create(objet){
    return `
    <div class="d-flex justify-content-center">
    <div>
        <div class="card">
            <img src=${objet.image} class="card-img-top" alt="">
        <div class="card-body">
                <h5 class="card-title">${objet.name}</h5>
                <p class="card-text">${objet.description}</p>
                </div>
                <div class="card-footer">
                <p>Price:${objet.price}</p>
                <a href="./../Page/details.html?parametro=${objet._id}" class="btn btn-danger">Details</a>
            </div>
            </div>
        </div>
    </div>
</div>
`}

function show(eventos, contenedor, data){
    for(let evento of eventos){
        if(evento.date<data){
            contenedor.innerHTML+=create(evento)
        }
    }
}
show(eventosCarta, lugarDeTarjeta, fecha)
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let listaCategoria = eventosCarta.map(categoria => categoria.category)
let listasinRepetir = new Set (listaCategoria)
let transformacionDelaLista = Array.from(listasinRepetir)

function crearListaCheckbox(modulo){
    return` <div class="form-check">
    <input class="form-check-input" type="checkbox" value="${modulo}" id="${modulo}">
    <label class="form-check-label" for="${modulo}">${modulo}</label>
            </div> `
}

function mostrarListaCheckbox(array, lugarEnLaPag){
    for(let elemento of array ){
        lugarEnLaPag.innerHTML += crearListaCheckbox(elemento)
    }
}
mostrarListaCheckbox(transformacionDelaLista, checkBoxPast)

let check = document.querySelectorAll("input[type='checkbox']")

function filtroCheck(array,lugarEnPag){
    lugarEnPag.innerHTML = " "
    let categoriaSeleccionada = []
    let checkSeleccionado = document.querySelectorAll("input[type='checkbox']:checked")
    checkSeleccionado.forEach(categoria => categoriaSeleccionada.push (categoria.value))
    let arrayComparacion = array.filter(evento => categoriaSeleccionada.includes(evento.category)||categoriaSeleccionada.length == 0)
    show(arrayComparacion, lugarEnPag, fecha)
    return arrayComparacion
}

checkBoxPast.addEventListener("change",() => {
filtroCheck(eventosCarta, lugarDeTarjeta)
filtrosCruzados(eventosCarta, arrayComparacion, evento)
})

/*function filtro(lista, modulo){
const categoriaAux = lista.filter(categoriaDeLosEventos => categoriaDeLosEventos.modulo == modulo)
return categoriaAux
}*/
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
buscador.addEventListener('keyup', () => {
    lugarDeTarjeta.innerHTML = " "
    let valor = buscador.value
    console.log(valor)
    let evento = eventosCarta.filter(evento => evento.name.toLowerCase().startsWith(valor.toLowerCase()))
    show(evento, lugarDeTarjeta, fecha)
    filtrosCruzados(eventosCarta, arrayComparacion, evento)
})
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function filtroPorSearch(evento, categorias) {
    if(categorias.length == 0){
        return evento
    }else{
        const aux = evento.filter(evento => categorias.startsWith(evento.category));
        console.log(aux);
        return aux;
    }
}

function filtrosCruzados(eventos, checkbox, ingresadoPorUsuario) {
    let filtroPorCheckbox = filtroPorCheckbox(eventos, checkbox)
    let filtroporSearch = filtroPorSearch(filtroPorCheckbox, ingresadoPorUsuario)
    return filtroporSearch
}