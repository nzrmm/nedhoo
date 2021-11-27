<template>
    <Navbar :carts="carts" />
    <main class="py-12">
        <div class="container mx-auto">
            <div class="font-bold text-3xl text-gray-900 dark:text-white mb-12">
                Your <span class="text-teal-500 border-b-4 border-gray-900 dark:border-gray-400">Carts</span>
            </div>
            <div v-if="carts.length" class="overflow-x-auto">
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
                            <td class="column-style whitespace-nowrap text-left">
                                {{ cart.food.name }}
                            </td>
                            <td class="column-style text-center">
                                {{ cart.descriptions.length ? cart.descriptions : '-' }}
                            </td>
                            <td class="column-style whitespace-nowrap text-center">
                                {{ cart.amount }}
                            </td>
                            <td class="column-style whitespace-nowrap text-right">
                                Rp {{ cart.food.price }}
                            </td>
                            <td class="column-style whitespace-nowrap text-right">
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
                        <tr class="text-white font-bold">
                            <td class="py-16" colspan="5" align="right">
                                <p>Total :</p>
                            </td>
                            <td class="py-16 text-teal-500 text-xl" colspan="2" align="right">
                                Rp {{ total }}
                            </td>
                        </tr>
                    </tbody>
                </table>

                <div class="flex justify-end text-white">
                    <form @submit.prevent="orderNow">
                        <div class="mb-6">
                            <label for="name" class="font-semibold block mb-4">Name</label>
                            <input v-model.trim="order.name" id="name"
                                class="px-4 py-2 bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg dark:shadow focus:outline-none focus:ring-2 ring-gray-400 dark:ring-gray-600"
                                placeholder="Name">
                        </div>
                        <div class="mb-6">
                            <label for="table" class="font-semibold block mb-4">Table</label>
                            <input type="number" v-model.number="order.table" id="table"
                                class="px-4 py-2 bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg dark:shadow focus:outline-none focus:ring-2 ring-gray-400 dark:ring-gray-600"
                                placeholder="Table">
                        </div>
                        <button type="submit"
                            class="group relative px-8 py-2 inline-flex items-center bg-teal-500 rounded-xl text-white transition-all">
                            <span class="group-hover:-translate-x-2 transition-all">Order Now</span>
                            <svg xmlns="http://www.w3.org/2000/svg"
                                class="h-5 w-5 absolute right-0 opacity-0 group-hover:opacity-100 group-hover:mr-3 transition-all"
                                viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd"
                                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                                    clip-rule="evenodd" />
                            </svg>
                        </button>
                    </form>
                </div>
            </div>
            <div v-else class="flex justify-center">
                <div class="py-2 w-96 text-center rounded-lg bg-rose-500 text-white">
                    No Foods added
                </div>
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
                carts: [],
                order: {
                    name: '',
                    table: '',
                    carts: []
                }
            }
        },
        computed: {
            total() {
                return this.carts.reduce((total, data) => {
                    return total += data.food.price * data.amount
                }, 0)
            }
        },
        methods: {
            orderNow() {
                if (this.order.name && this.order.table) {
                    this.order.carts = this.carts

                    axios.post('http://localhost:4000/order', this.order)
                        .then(() => {

                            // Delete
                            this.carts.map(food => {
                                return axios.delete(`http://localhost:4000/cart/${food.id}`)
                                .catch(error => console.log(error));
                            })

                            this.$router.push({
                                name: 'Order Success'
                            });
                            this.$toast.success('Success add to cart !', {
                                type: 'success',
                                position: 'top-right',
                                duration: 3000,
                                dismissible: true,
                                queue: true
                            })
                        })
                } else {
                    this.$toast.error('Please fill your name and table !', {
                        type: 'error',
                        position: 'top-right',
                        duration: 3000,
                        dismissible: true,
                        queue: true
                    })
                }
            },
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
            },
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