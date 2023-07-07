const tarjets = document.getElementById("sectionTarjet");
const events = data.events

const date = data.currentDate

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
                <a href="./../Page/details.html" class="btn btn-danger">Details</a>
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

show(events, tarjets, date)