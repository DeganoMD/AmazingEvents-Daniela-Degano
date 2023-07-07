let tarjet = document.getElementById("sectionTarjet");
const events = data.events
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
                <a href="./Assets/Page/details.html" class="btn btn-danger">Details</a>
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

console.log(eventos)

