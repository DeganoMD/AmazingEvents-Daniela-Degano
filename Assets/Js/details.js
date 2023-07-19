const parametro = location.search

let carta = document.getElementById("detailsCard")
let url = new URLSearchParams(parametro)
let idUrl = url.get('parametro')

let = eventosApi

fetch("https://mindhub-xj03.onrender.com/api/amazing")
.then (convertidor => convertidor.json())
.then (informacion => { eventosApi = informacion.events

let finder = eventosApi.events.find(informacion => informacion._id === idUrl)

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
        <p class="card-text"><small class="text-body-secondary">Date: ${objetoId.date}</small></p>
        <p class="card-text"><small class="text-body-secondary">Place: ${objetoId.place}</small></p>
        <p class="card-text"><small class="text-body-secondary">Capacity: ${objetoId.capacity}</small></p>
        <p class="card-text"><small class="text-body-secondary">Assistance: ${objetoId.assistance}</small></p>
        <p class="card-text"><small class="text-body-secondary">Price: ${objetoId.price}</small></p>
    </div>
    </div>
</div>
</div>`
}
crearCartaDeDetalles(carta, finder)})





