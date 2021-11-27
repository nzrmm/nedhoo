<template>
    <Navbar />
    <main class="py-12">
        <div class="container mx-auto">
            <div class="font-bold text-3xl text-gray-900 dark:text-white mb-12">
                Your <span class="text-teal-500 border-b-4 border-gray-900 dark:border-gray-400">Carts</span>
            </div>
            <div class="overflow-x-auto">
                <table class="mb-4 table-auto w-full">
                    <thead>
                        <tr>
                            <th class="w-52 column-style whitespace-nowrap">Image</th>
                            <th class="column-style whitespace-nowrap">Name</th>
                            <th class="column-style">Descriptions</th>
                            <th class="column-style whitespace-nowrap">Amount</th>
                            <th class="column-style whitespace-nowrap">Price</th>
                            <th class="column-style whitespace-nowrap">Total</th>
                            <th class="column-style whitespace-nowrap">#</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="cart in carts" :key="cart.id" class="hover:bg-gray-100 dark:hover:bg-gray-700">
                            <td class="column-style whitespace-nowrap">
                                <img src="https://source.unsplash.com/featured/?food"
                                    class="w-52 h-28 object-cover rounded-xl" alt="image-details">
                            </td>
                            <td class="column-style whitespace-nowrap">
                                {{ cart.food.name }}
                            </td>
                            <td class="column-style">
                                {{ cart.descriptions }}
                            </td>
                            <td class="column-style whitespace-nowrap">
                                {{ cart.amount }}
                            </td>
                            <td class="column-style whitespace-nowrap">
                                Rp {{ cart.food.price }}
                            </td>
                            <td class="column-style whitespace-nowrap">
                                Rp {{ cart.amount * cart.food.price }}
                            </td>
                            <td class="column-style whitespace-nowrap">
                                <div @click="deleteOrder(cart.id)" class="cursor-pointer flex justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-rose-500"
                                        viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd"
                                            d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                            clip-rule="evenodd" />
                                    </svg>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </main>

</template>

<script>
    import Navbar from '../components/Navbar.vue';
    import axios from 'axios';
    export default {
        name: 'Cart',
        components: {
            Navbar
        },
        data() {
            return {
                carts: []
            }
        },
        methods: {
            deleteOrder(id) {
                axios.delete(`http://localhost:4000/cart/${id}`)
                    .then(() => {
                        this.$toast.error('Success delete food !', {
                            type: 'error',
                            position: 'top-right',
                            duration: 3000,
                            dismissible: true,
                            queue: true
                        })

                        axios.get('http://localhost:4000/cart')
                            .then(response => {
                                this.carts = response.data;
                            })
                            .catch(error => {
                                console.log(error);
                            })
                    })
                    .catch(error => {
                        console.log(error);
                    })
            }
        },
        mounted() {
            axios.get('http://localhost:4000/cart')
                .then(response => {
                    this.carts = response.data;
                })
                .catch(error => {
                    console.log(error);
                })
        }
    }
</script>

<style scoped>
    .column-style {
        @apply py-3 px-4 border border-gray-300 dark:border-gray-500 text-gray-700 dark:text-white;
    }
</style>