<template>
    <Navbar />
    <main class="py-12">
        <div class="container">
            <div class="text-title">
                List <span class="text-title-teal">Foods</span>
            </div>
            <div class="w-11/12 sm:w-8/12 lg:w-5/12 mx-auto mb-8">
                 <input @keyup="searchFoods" v-model="search" type="text"
                    class="px-6 pl-12 py-3 w-full bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-white rounded-xl dark:shadow focus:outline-none focus:ring-2 ring-gray-400 dark:ring-gray-600 icon-search"
                    placeholder="Search foods...">
            </div>
            <div class="flex flex-wrap -mx-2 mb-10">
                <template v-for="food in foods" :key="food.id">
                    <CardFoods :food="food" />
                </template>
            </div>
        </div>
    </main>
</template>

<script>
    import Navbar from '../components/Navbar.vue';
    import CardFoods from '../components/CardFoods.vue';
    import getFoods from '../mixins/getFoods'
    import axios from 'axios';

    export default {
        name: 'Foods',
        components: {
            Navbar,
            CardFoods
        },
        mixins : [getFoods],
        data() {
            return {
                search : ''
            }
        },
        methods: {
            searchFoods() {
                axios.get(`http://localhost:4000/foods?q=${this.search}`)
                    .then(response => {
                        this.foods = response.data;
                    })
                    .catch(error => {
                        console.log(error);
                    })
            }
        },
    }
</script>