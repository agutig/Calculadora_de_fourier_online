
class signal_char {

    constructor ( signal_text ){
        this.x_axis = this.prepare_axis_x()
        this.y_axis = this.prepare_axis_y(signal_text)
      }

    prepare_axis_y(signal) {
        var x_axis = this.prepare_axis_x()
        var y_axis = []
        var value = 0
        // el mas x++ será sustituido por la frecuencia de muestreo que a ver como la saco
        for ( let x = x_axis[0]; x <= x_axis[x_axis.length - 1]; x++) {

            var sig_cal = this.especial_funcs(signal)
            sig_cal = sig_cal.replace('x' , "(" + x + ")")
            value = eval(sig_cal)
            console.log(sig_cal)
            console.log(value)
            y_axis.push(value)
          }
        return y_axis
    }
    prepare_axis_x(){
        /// Hacer una funcion que calcule el ancho de banda de la señal.
         //Si es definida --> Que muestre su tamaño + la mitad de su tamaño por la derecha + la mitad de su tamaño por la izquierda
         //Si es periodica --> Que muestre dos periodos por alante y dos por detras (revisar autocorrelacion)
         //si es infinita en ancho de banda --> +-1000s
         
        var x_axis = []
        for (let x = -100; x < 100; x++) {
            x_axis.push(x);
        }
        return x_axis
    }

    especial_funcs(text){
        var text_changed = text
        text_changed = text_changed.replaceAll('^' , ' ** ')
        text_changed = text_changed.replaceAll('cos' , 'Math.cos')
        text_changed = text_changed.replaceAll('sin' , 'Math.sin')
        text_changed = text_changed.replaceAll('sen' , 'Math.sin')
        text_changed = text_changed.replaceAll('e' , 'Math.E')
        text_changed = text_changed.replaceAll('abs' , 'Math.abs')
        text_changed = text_changed.replaceAll('pi' , 'Math.PI')
        text_changed = text_changed.replaceAll('ln' , 'Math.log') //log nepe
        text_changed = text_changed.replaceAll('log' , 'Math.log10') //log base 10
        // meter el resto: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Math/log10

        return text_changed;
    }



}