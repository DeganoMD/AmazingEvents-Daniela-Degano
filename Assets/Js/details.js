const eventosParaDetalles = data.events
const parametro = location.search

let carta = document.getElementById("detailsCard")
let url = new URLSearchParams(parametro)
let idUrl = url.get('parametro')
let finder = data.events.find(dato => dato._id === idUrl)
console.log(finder)
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

function crearCartaDeDetalles (cartaArmada, objetoId){
    cartaArmada.innerHTML += 
    `<div class="card mb-3" style="max-width: 540px;">
    <div class="row g-0">
    <div class="col-md-4">
        <img src="${objetoId.image}" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
    <div class="card-body">
        <h1 class="card-title">${objetoId.name}</h1>
        <p class="card-text">${objetoId.description}</p>
        <p class="card-text"><small class="text-body-secondary">${objetoId.date}</small></p>
        <p class="card-text"><small class="text-body-secondary">${objetoId.place}</small></p>
        <p class="card-text"><small class="text-body-secondary">${objetoId.capacity}</small></p>
        <p class="card-text"><small class="text-body-secondary">${objetoId.assistance}</small></p>
        <p class="card-text"><small class="text-body-secondary">${objetoId.price}</small></p>
    </div>
    </div>
</div>
</div>`
}
crearCartaDeDetalles(carta, finder)


