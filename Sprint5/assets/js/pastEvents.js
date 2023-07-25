const {createApp} = Vue

createApp({
    data(){
        return{
            arrayEventos : [], arrayCategorias : [], arrayCheckBox : [], inputSearch : "", arrayFiltrosCruzados : [], fechaActual : "", pastEvents : []
        }
    },
created(){      //api
    fetch('https://mindhub-xj03.onrender.com/api/amazing')
    .then(respuesta => respuesta.json())
    .then(datosAmazing => {
        this.arrayEventos = datosAmazing.events
        console.log(this.arrayEventos)
        this.fechaActual = datosAmazing.currentDate
        this.pastEvents = this.arrayEventos.filter(evento => evento.date < this.fechaActual)
        this.arrayCategorias = [... new Set(this.pastEvents.map(evento => evento.category))]
    })
    .catch(error => console.log(error))
},
computed:{
    filtrosCruzados(){                    
        this.arrayFiltrosCruzados = this.pastEvents.filter(evento => {
            return evento.name.toLowerCase().includes(this.inputSearch.toLowerCase()) && (this.arrayCheckBox.includes(evento.category) || this.arrayCheckBox.length == 0)
        })
    }
}
}) .mount("#app")