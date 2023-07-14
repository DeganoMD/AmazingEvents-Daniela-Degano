/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let lugarDelaTarjeta = document.getElementById("sectionTarjetUp")
let checkBoxUp = document.getElementById("listaDeCheckboxTerminadaUp")
let buscadorUp = document.getElementById("buscadorUp")

const eventosCartas = data.events
const fechA = data.currentDate
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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
        if(evento.date>=data){
            contenedor.innerHTML+=create(evento)
        }
    }
}

show(eventosCartas, lugarDelaTarjeta, fechA)
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let listaCategoria = eventosCartas.map(categoria => categoria.category)
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
mostrarListaCheckbox(transformacionDelaLista, checkBoxUp)

let check = document.querySelectorAll("input[type='checkbox']")

function filtroCheck(array,lugarEnPag){
    lugarEnPag.innerHTML = " "
    let categoriaSeleccionada = []
    let checkSeleccionado = document.querySelectorAll("input[type='checkbox']:checked")
    checkSeleccionado.forEach(categoria => categoriaSeleccionada.push (categoria.value))
    let arraycomparacion = array.filter(evento => categoriaSeleccionada.includes(evento.category)||categoriaSeleccionada.length == 0)
    show(arraycomparacion, lugarEnPag, fechA)
    return arraycomparacion
}

checkBoxUp.addEventListener("change",() => {
filtroCheck(eventosCartas, lugarDelaTarjeta)
filtrosCruzados(eventosCartas, arraycomparacion, evento)
})

/*function filtro(lista, modulo){
const categoriaAux = lista.filter(categoriaDeLosEventos => categoriaDeLosEventos.modulo == modulo)
return categoriaAux
}*/
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
buscadorUp.addEventListener('keyup', () => {
    lugarDelaTarjeta.innerHTML = " "
    let valor = buscadorUp.value
    console.log(valor)
    let evento = eventosCartas.filter(evento => evento.name.toLowerCase().startsWith(valor.toLowerCase()))
    show(eventosCartas, lugarDelaTarjeta, fechA)
    filtrosCruzados(eventosCartas, arraycomparacion, evento)
})
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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