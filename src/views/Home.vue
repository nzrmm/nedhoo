<template>
    <Navbar />
    <main class="py-16 lg:py-28">
        <Hero />

        <div class="container mx-auto">
            <div class="font-bold text-3xl mb-8">
                Best <span class="text-teal-500 border-b-4 border-gray-900">Foods</span>
            </div>
            <div class="flex space-x-6 mb-10">
                <template v-for="product in products" :key="product.id">
                    <CardProduct :product="product" />
                </template>
            </div>
            <div class="flex justify-center">
                <router-link to="/all"
                    class="group relative px-8 inline-flex items-center text-gray-900 transition-all">
                    <span class="py-2 group-hover:-translate-x-2 transition-all group-hover:border-b border-teal-500 font-medium">All Products</span>
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
    </main>
</template>

<script>
    import Navbar from '../components/Navbar.vue';
    import Hero from '../components/Hero.vue';
    import CardProduct from '../components/CardProduct.vue';
    import axios from 'axios';

    export default {
        name: 'Home',
        components: {
            Navbar,
            Hero,
            CardProduct
        },
        data() {
            return {
                products: []
            }
        },
        mounted() {
            axios.get('http://localhost:4000/best-products')
                .then(response => {
                    this.products = response.data;
                })
                .catch(error => {
                    console.log(error);
                })
        }
    }
</script>

<style lang="scss" scoped>

</style>