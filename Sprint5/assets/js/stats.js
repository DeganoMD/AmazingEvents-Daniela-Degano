const { createApp } = Vue

createApp({
    data() {
        return {
            arrayEventos: [],
            arrayEventosFuturos: [],
            arrayEventosPasados: [],
            arrayCategoriasFuturas: [],
            arrayCategoriasPasadas: [],
            arrayOrdenado: [],
            eventoMayorCapacidad: "",
            capacidadMayor: Number,
            porcentajeMayorNombre: "",
            porcentajeMenorNombre: "",
            porcentajeMayor: Number,
            porcentajeMenor: Number,
            nuevoArrayPasado: [],
            nuevoArrayFuturo: []
        }
    },
    created() {      //api
        fetch('https://mindhub-xj03.onrender.com/api/amazing')
            .then(respuesta => respuesta.json())
            .then(datosAmazing => {
                this.arrayEventos = datosAmazing.events
                const fecha = datosAmazing.currentDate
                for (let evento of this.arrayEventos) {
                    if (evento.date < fecha) {
                        this.arrayEventosPasados.push(evento)
                    } else { this.arrayEventosFuturos.push(evento) }
                }
                this.arrayCategoriasPasadas = [... new Set(this.arrayEventosPasados.map(evento => evento.category))]
                this.arrayCategoriasFuturas = [... new Set(this.arrayEventosFuturos.map(evento => evento.category))]

                this.arrayOrdenado = this.arrayEventos.sort((a, b) => b.capacity - a.capacity)

                this.eventoMayorCapacidad = this.arrayOrdenado[0].name
                this.capacidadMayor = this.arrayOrdenado[0].capacity

                function calcularPorcentaje(asistencia, capacidad) {
                    let resultado = (asistencia / capacidad) * 100
                    return resultado
                }

                this.arrayEventosPasados.sort((a, b) => calcularPorcentaje(a.assistance, a.capacity) - calcularPorcentaje(b.assistance, b.capacity))

                this.porcentajeMayor = calcularPorcentaje(this.arrayEventosPasados[this.arrayEventosPasados.length - 1].assistance, this.arrayEventosPasados[this.arrayEventosPasados.length - 1].capacity).toFixed(2)
                this.porcentajeMayorNombre = this.arrayEventosPasados[this.arrayEventosPasados.length - 1].name
                this.porcentajeMenor = calcularPorcentaje(this.arrayEventosPasados[0].assistance, this.arrayEventosPasados[0].capacity).toFixed(2)
                this.porcentajeMenorNombre = this.arrayEventosPasados[0].name

                this.nuevoArrayPasado = this.arrayCategoriasPasadas.map((categoria) => {
                    let aux = {
                        category: categoria
                    }
                    console.log(this.arrayCategoriasPasadas)  //filtra en el array past
                    let categoriaEvento = this.arrayEventosPasados.filter(evento => evento.category == categoria)//segun la condicion de que la categoria del evento sea igual a categoria
                    //console.log(categoriaEvento);
                    const revenue = categoriaEvento.reduce((acc, act) => acc + (act.price * act.assistance), 0)//reduce reduce el array original a un unico valor, en este caso mi array original es categoriaEvento
                    aux.revenue = revenue.toLocaleString()
                    let porcAssist = categoriaEvento.reduce((acc, act) => acc + (act.assistance / (act.capacity / 100)), 0) / categoriaEvento.length
                    aux.porcAssist = porcAssist.toFixed(2)
                    //console.log(aux)
                    return aux
                })

                this.nuevoArrayFuturo = this.arrayCategoriasFuturas.map((categoria) => {
                    let aux = {
                        category: categoria
                    }
                    console.log(this.arrayCategoriasFuturas)  //filtra en el array past
                    let categoriaEvento = this.arrayEventosFuturos.filter(evento => evento.category == categoria)//segun la condicion de que la categoria del evento sea igual a categoria
                    //console.log(categoriaEvento);
                    const revenue = categoriaEvento.reduce((acc, act) => acc + (act.price * act.estimate), 0)//reduce reduce el array original a un unico valor, en este caso mi array original es categoriaEvento
                    aux.revenue = revenue.toLocaleString()
                    let porcAssist = categoriaEvento.reduce((acc, act) => acc + (act.estimate / (act.capacity / 100)), 0) / categoriaEvento.length
                    aux.porcAssist = porcAssist.toFixed(2)
                    //console.log(aux)
                    return aux
                })

            })
            .catch(error => console.log(error))
    },

}).mount("#app")