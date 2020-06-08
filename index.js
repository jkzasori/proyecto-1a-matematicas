module.exports = {
    /**
     * Suma de dos números
     * @example
     * n1 = 1, n2 = 3 => resultado 4
     * @param {*} n1 Número uno de la Suma
     * @param {*} n2 Número dos de la Suma
     */
    suma: function (n1, n2) {
        return (this.esNumero(n1, n2) ? n1 + n2: this.mensajeError());
    },
    /**
     * Resta de dos números
     * @example
     * n1 = 1, n2 = 3 => resultado -2
     * @param {*} n1 Número uno de la Resta
     * @param {*} n2 Número dos de la Resta
     */
    resta: function (n1, n2) {
        return (this.esNumero(n1, n2) ? n1 - n2: this.mensajeError())
    },
        /**
     * Multiplicación de dos números
     * @example
     * n1 = 1, n2 = 3 => resultado 3
     * @param {*} n1 Número uno de la Multiplicación
     * @param {*} n2 Número dos de la Multiplicación
     */
    multiplicacion: function (n1, n2) {
        return (this.esNumero(n1, n2) ? n1 * n2: this.mensajeError());
    },
        /**
     * División de dos números
     * @example
     * n1 = 1, n2 = 3 => resultado 0,333
     * @param {*} n1 Número uno de la División
     * @param {*} n2 Número dos de la División
     */
    division: function (n1, n2) {
        return (this.esNumero(n1, n2) ? n1 / n2: this.mensajeError())
    },
    /**
     * Mensaje de error que se ejecuta cuando no tengamos valores numéricos
     */
    mensajeError: function() {
        console.log('Un valor o los dos no son numéricos')
    },
    /**
     * Comprueba que son Valores numéricos
     * @param {*} n1 
     * @param {*} n2 
     */
    esNumero: function(n1, n2) {
        if(typeof n1 !== 'number' || typeof n2 !== 'number') {
            return false;
        }
        return true;
    }
}