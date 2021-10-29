// Obtener una referencia al elemento canvas del DOM
const $grafica = document.querySelector("#grafica");
const signal = document.getElementById("temp_sing");

// Las etiquetas son las que van en el eje X. 
const etiquetas = ["Enero", "Febrero", "Marzo", "Abril"]

// Podemos tener varios conjuntos de datos. Comencemos con uno

const datosVentas2020 = {
    label: "Amplitud",
    data: [5000, 1500, 8000, 5102], // La data es un arreglo que debe tener la misma cantidad de valores que la cantidad de etiquetas

// Editar la grafica	
           backgroundColor: 'rgba(54, 162, 235, 0.2)', // Color de fondo
           borderColor: 'rgba(54, 162, 235, 1)', // Color del borde
           borderWidth: 1,// Ancho del borde
};

new Chart($grafica, {
    type: 'line',// Tipo de gráfica
    data: {
        labels: etiquetas,
        datasets: [
            datosVentas2020
            // Aquí más datos...
        ]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }],
        },
    }
});
