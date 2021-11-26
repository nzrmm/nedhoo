<template>
    <Navbar />
    <main class="py-12">
        <div class="container mx-auto">
            <div class="flex justify-center items-center">
                <div class="w-5/12">
                    <img src="https://source.unsplash.com/featured/?food" class="w-full h-[28rem] object-cover rounded-xl"
                        alt="">
                </div>
                <div class="w-5/12 px-8 text-white">
                    <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">{{ food.name }}</h1>
                    <p class="mb-6 text-white/60">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
                        necessitatibus.
                    </p>
                    <div class="flex items-center justify-between mb-6">
                        <div>
                            <p class="font-semibold mb-4">Order Quantity</p>
                            <div class="flex items-center space-x-4">
                                <button @click="orderDecrease" class="h-5 w-5 rounded bg-teal-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20"
                                        fill="currentColor">
                                        <path fill-rule="evenodd" d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z"
                                            clip-rule="evenodd" />
                                    </svg>
                                </button>
                                <span class="text-lg font-bold">{{ order }}</span>
                                <button @click="orderIncrease" class="h-5 w-5 rounded bg-teal-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20"
                                        fill="currentColor">
                                        <path fill-rule="evenodd"
                                            d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                                            clip-rule="evenodd" />
                                    </svg>
                                </button>

                            </div>
                        </div>
                        <p class="font-bold text-xl text-teal-600 dark:text-teal-500">Rp. {{ price }}</p>
                    </div>
                    <div class="mb-6">
                        <label for="descriptions" class="font-semibold block mb-4">Descriptions</label>
                        <textarea
                            class="bg-white dark:bg-gray-700 rounded-lg text-gray-900 dark:text-white p-4 focus:outline-none focus:ring-2 ring-gray-400 dark:ring-gray-600"
                            id="descriptions" cols="30" placeholder="Descriptions"></textarea>
                    </div>
                    <router-link :to="{name : 'Foods'}"
                        class="group relative px-8 py-2 inline-flex items-center bg-teal-500 rounded-xl text-white transition-all">
                        <span class="group-hover:-translate-x-2 transition-all">Order Now</span>
                        <svg xmlns="http://www.w3.org/2000/svg"
                            class="h-5 w-5 absolute right-0 opacity-0 group-hover:opacity-100 group-hover:mr-3 transition-all"
                            viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd"
                                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                                clip-rule="evenodd" />
                        </svg>
                    </router-link>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
    import Navbar from '../components/Navbar.vue';
    import axios from 'axios';

    export default {
        name: 'Details',
        components: {
            Navbar
        },
        data() {
            return {
                food: [],
                order: 1,
                price: ''
            }
        },
        methods: {
            orderIncrease() {
                this.order++;
                this.price += this.food.price;
            },
            orderDecrease() {
                this.order--;
                this.price -= this.food.price;
            }
        },
        mounted() {
            axios.get(`http://localhost:4000/foods/${this.$route.params.id}`)
                .then(response => {
                    this.food = response.data;
                    this.price = response.data.price;
                })
                .catch(error => {
                    console.log(error);
                })
        }
    }
</script>

<style lang="scss" scoped>

</style>