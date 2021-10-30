
class signal {

    constructor ( signal_text ){
        this.x_axis = prepare_axis_x()
        this.y_axis = prepare_axis_y(signal_text)
      }

    static prepare_axis_y(signal) {
        var x_axis = this.prepare_axis_x()
        var y_axis = []
        var value = 0
        for ( t = x_axis[0]; t < x_axis[x_axis.length - 1]; step++) {
            value = ToNumber(singnal)
            y_axis.push(value)
          }
        return y_axis
    }
    static prepare_axis_x(){
        /// Hacer una funcion que calcule el ancho de banda de la señal.
        var x_axis = []
        for (let x = -100; x < 100; step++) {
            x_axis.push(x);
        }
        return x_axis
    }

    x_axis(){
        return this.x_axis
    }

    y_axis(){
        return this.y_axis
    }

}