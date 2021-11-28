import axios from 'axios';

export default {
    data() {
        return {
            foods: []
        }
    },
    methods: {
        getFoods() {
            axios.get('http://localhost:4000/best-foods')
                .then(response => {
                    this.foods = response.data;
                })
                .catch(error => {
                    console.log(error);
                })
        }
    },
    mounted() {
        this.getFoods();
    }
}