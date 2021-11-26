<template>
    <Navbar />
    <main class="py-12">
        <div class="container mx-auto">
            <div class="font-bold text-3xl text-gray-900 dark:text-white mb-12 text-center">
                List <span class="text-teal-500 border-b-4 border-gray-900 dark:border-gray-400">Foods</span>
            </div>
            <div class="w-11/12 sm:w-8/12 lg:w-5/12 mx-auto mb-8">
                 <input @keyup="searchFoods" v-model="search" type="text"
                    class="px-6 pl-12 py-3 w-full bg-gray-700 text-white rounded-xl shadow focus:outline-none focus:ring-2 ring-gray-600 icon-search"
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
    import axios from 'axios';

    export default {
        name: 'Foods',
        components: {
            Navbar,
            CardFoods
        },
        data() {
            return {
                foods : [],
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
        mounted() {
            axios.get('http://localhost:4000/foods')
                .then(response => {
                    this.foods = response.data;
                })
                .catch(error => {
                    console.log(error);
                })
        },
    }
</script>

<style lang="scss" scoped>

</style>