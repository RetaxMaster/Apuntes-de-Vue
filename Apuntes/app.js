new Vue({

    // El nombre del container de la aplicación vue
    el: "#app",

    // las variables de la aplicación, debe retornar un objeto que contenga estas variables
    data() {
        return {

            name: "Bitcoin",
            symbol: "BTC",
            img: "https://cryptologos.cc/logos/bitcoin-btc-logo.png",
            changePercent: 10,

            value: 0,

            color: "f4f4f4",

            price: 8400,

            prices: [8400, 7900, 8200, 9000, 9400, 10000, 10200],
            pricesWithDays: [
                { day: 'Lunes', value: 8400 },
                { day: 'Martes', value: 7900 },
                { day: 'Miercoles', value: 8200 },
                { day: 'Jueves', value: 9000 },
                { day: 'Viernes', value: 9400 },
                { day: 'Sabado', value: 10000 },
                { day: 'Domingo', value: 10200 },
            ],
            showPrices: false

        }
    },

    // Las funciones que se pueden llamar dentro de la aplicación de Vue
    methods: {

        // Usando this se puede acceder a las propiedades que definimos en data

        toggleShowPrices() {

            this.showPrices = !this.showPrices;

            this.color = this.color.split("").reverse().join("");


        }

    },

    // Las propiedades computadas son las que se generan a partir del valor de otras propiedades de data, suelen ser útiles cuando dos varibales tiene que mostrarse de manera conjunta, es decir, que si uno cambia que el otro también cambie, dentro del objeto computed las funciones SIEMPRE tienen que devolver un valor
    computed: {

        // Por ejemplo, esta propiedad va a modificarse cada vez que cambien los valores de la propiedad name o symbol, es decir, se ejecutará cada vez que cualquiera de las variables aquí dentro cambien
        title() {
            return `${this.name} - ${this.symbol}`;
        },

        convertedValue() {

            if (this.value == 0) {
                return 0;
            }

            return this.value / this.price;

        }

    },

    // Los watchers tienen un comportamiento similar a las propiedades computadas, pero en lugar de devolver un valor, ejecutan un código, es decir, que a partir del cambio del valor de una variable, puedo ejecutar un código, el nombre de la función tiene que corresponder con el nombre de la propiedad que quiero a la que trackear su cambio

    watch: {

        // Recibe dos valores, el valor nuevo y el valor antiguo
        showPrices(newValue, oldValue) {
            
            console.log(newValue, oldValue);

        }

    }



});