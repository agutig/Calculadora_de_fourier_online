// Obtener una referencia al elemento canvas del DOM
const $grafica = document.querySelector("#grafica");
const text_block = document.getElementById("temp_sing");
const ready = document.getElementById("ready_butt");
var singnal_text = ""

ready.onclick = function(){
    singnal_text = text_block.innerHtml;


    const signal = new signal(singnal_text);

// Las etiquetas son las que van en el eje X. 
    var x_axis = signal.x_axis();

// Podemos tener varios conjuntos de datos. Comencemos con uno

var y_axis = {
    label: "Amplitud",
    data: signal.y_axis(), // La data es un arreglo que debe tener la misma cantidad de valores que la cantidad de etiquetas

// Editar la grafica	
           backgroundColor: 'rgba(54, 162, 235, 0.2)', // Color de fondo
           borderColor: 'rgba(54, 162, 235, 1)', // Color del borde
           borderWidth: 1,// Ancho del borde
};

new Chart($grafica, {
    type: 'line',// Tipo de gráfica
    data: {
        labels: x_axis,
        datasets: [
            y_axis
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

}