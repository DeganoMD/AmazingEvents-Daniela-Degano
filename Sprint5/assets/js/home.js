const {createApp} = Vue

createApp({
    data(){
        return{
            arrayEventos : [], arrayCategorias : [], arrayCheckBox : [], inputSearch : "", arrayFiltrosCruzados : []//curretnDate
        }
    },
created(){      //api
    fetch('https://mindhub-xj03.onrender.com/api/amazing')
    .then(respuesta => respuesta.json())
    .then(datosAmazing => {
        this.arrayEventos = datosAmazing.events
        console.log(this.arrayEventos)
        //this.currentDate = datosAmazing.currentDate
        //this.pasEvents = this.arrayEventos.filter(evento => evento.date < this.currentDate)
        this.arrayCategorias = [... new Set(this.arrayEventos.map(evento => evento.category))]
    })
    .catch(error => console.log(error))
},
computed:{
    filtrosCruzados(){                    //pastEvents
        this.arrayFiltrosCruzados = this.arrayEventos.filter(evento => {
            return evento.name.toLowerCase().includes(this.inputSearch.toLowerCase()) && (this.arrayCheckBox.includes(evento.category) || this.arrayCheckBox.length == 0)
        })
    }
}
}) .mount("#app")