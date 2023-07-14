/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let tarjet = document.getElementById("sectionTarjet")
let checkBox = document.getElementById("listaDeCheckboxTerminadaIndex")
let buscador = document.getElementById("buscadorIndex")

const events = data.events
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
                <a href="./Assets/Page/details.html?parametro=${objet._id}" class="btn btn-danger">Details</a>
            </div>
            </div>
        </div>
    </div>
</div>
`}

function show(eventos, contenedor){
    for(let evento of eventos){
        contenedor.innerHTML+=create(evento)
    }
}
show(events, tarjet)
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let lista = events.map(categoria => categoria.category)
let listaSinRepetir = new Set (lista)
let transformaciondelaLista = Array.from(listaSinRepetir)

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
mostrarListaCheckbox(transformaciondelaLista, checkBox)

let check = document.querySelectorAll("input[type='checkbox']")

function filtroCheck(array,lugarEnPag){
    lugarEnPag.innerHTML = " "
    let categoriaSeleccionada = []
    let checkSeleccionado = document.querySelectorAll("input[type='checkbox']:checked")
    checkSeleccionado.forEach(categoria => categoriaSeleccionada.push (categoria.value))
    let arrayComparacion = array.filter(evento => categoriaSeleccionada.includes(evento.category)||categoriaSeleccionada.length == 0)
    show(arrayComparacion, lugarEnPag)
    return arrayComparacion
}

checkBox.addEventListener("change",() => {
filtroCheck(events, tarjet)
filtrosCruzados(events, arrayComparacion, evento)
})

/*function filtro(lista, modulo){
const auxiliar = lista.filter(categoriaDeLosEventos => categoriaDeLosEventos.modulo == modulo)
return auxiliar
}*/

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
buscador.addEventListener('keyup', () => {
    tarjet.innerHTML = " "
    let valor = buscador.value
    console.log(valor)
    let evento = events.filter(evento => evento.name.toLowerCase().startsWith(valor.toLowerCase()))
    show(evento, tarjet)
    filtrosCruzados(events, arrayComparacion, evento)
})

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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