const {createApp} = Vue

createApp({
    data(){
        return{
            arrayEventos : [], arrayUnico : []
        }
    },
created(){      //api
    fetch('https://mindhub-xj03.onrender.com/api/amazing')
    .then(respuesta => respuesta.json())
    .then(datosAmazing => {
        this.arrayEventos = datosAmazing.events
        const parametro = location.search //localiza el parametro URL
        let parametroUrl = new URLSearchParams(parametro)
        let idEvento = parametroUrl.get("id")

        this.arrayUnico = this.arrayEventos.find(evento => evento._id == idEvento)
    })
    .catch(error => console.log(error))
}
}).mount("#app")