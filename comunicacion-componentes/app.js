// Los componentes de Vue deben tener un único padre

// Para que el componente padre se comunique con hijos, se hace a través de propiedades, para que los hijos se comuniquen con los padres se hace a través de eventos, así mantenemos la consistencia de Vue

Vue.component('CoinDetail', {

    // props define cuáles son las propiedades que el componente padre le va a enviar al componente hijo, tienen la misma funcionalidad que las propiedades de data, solo que estás son las que setea el componente padre, por lo que el componente hijo no puede modificar el valor de estas propiedades, es decir, son read-only
    props: ["coin"],

    data() {

        return {

            showPrices: false,
            value: 0

        }

    },

    methods: {

        toggleShowPrices() {

            this.showPrices = !this.showPrices;
            
            // $emit pertenece a VueJS, con esto le indicamos que cada ves que nuestro showPrices cambie, emita el evento "change-color", podemos dejar únicamente el nombre de la función o también podemos definir un valor que acompañe a ese evento
            this.$emit("change-color", this.showPrices ? "ff96c8" : "3d3d3d");

        }

    },

    computed: {

        title() {
            return `${this.coin.name} - ${this.coin.symbol}`;
        },

        convertedValue() {

            if (this.value == 0) {
                return 0;
            }

            return this.value / this.coin.price;

        }

    },

    template: /*html*/`
    <div>
        <img 
            v-on:mouseover="toggleShowPrices" 
            v-on:mouseout="toggleShowPrices" 
            v-bind:src="coin.img" 
            v-bind:alt="coin.name"
        >
        
        <h1 v-bind:class="coin.changePercent > 0 ? 'green' : 'red'">
        
            {{ title }}
        
            <span v-if="coin.changePercent > 0">:D</span>
            <span v-else-if="coin.changePercent < 0">:D</span>
            <span v-else>:(</span>
    
            <span v-on:click="toggleShowPrices">{{ showPrices ? "^^" : ":o" }}</span>
        
        </h1>

        <input type="number" v-model="value">
        <span>{{ convertedValue }}</span>

        <ul v-show="showPrices">
            <li 
            class="uppercase"
            v-for="(p, i) in coin.pricesWithDays" 
            v-bind:key="p.day"
            v-bind:class="{ orange: p.value == coin.price, red: p.value < coin.price, green: p.value > coin.price }"
        >
                {{ i }} - {{ p.day }} - {{ p.value }}
            </li>
        </ul>

    </div>
    `

});

new Vue({

    // El nombre del container de la aplicación vue
    el: "#app",

    // las variables de la aplicación, debe retornar un objeto que contenga estas variables
    data() {
        return {

            btc: {

                name: "Bitcoin",
                symbol: "BTC",
                img: "https://cryptologos.cc/logos/bitcoin-btc-logo.png",
                changePercent: 10,
                price: 8400,
                pricesWithDays: [
                    { day: 'Lunes', value: 8400 },
                    { day: 'Martes', value: 7900 },
                    { day: 'Miercoles', value: 8200 },
                    { day: 'Jueves', value: 9000 },
                    { day: 'Viernes', value: 9400 },
                    { day: 'Sabado', value: 10000 },
                    { day: 'Domingo', value: 10200 },
                ]
                
            },

            color: "f4f4f4"

        }
    },

    // Las funciones que se pueden llamar dentro de la aplicación de Vue
    methods: {

        // Usando this se puede acceder a las propiedades que definimos en data

        updateColor(color) {

            this.color = color || this.color.split("").reverse().join("");

        }

    }



});