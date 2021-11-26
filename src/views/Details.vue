<template>
    <Navbar />
    <main class="py-12">
        <div class="container mx-auto">
            <div class="flex justify-center items-center">
                <div class="w-5/12">
                    <img src="https://source.unsplash.com/featured/?food"
                        class="w-full h-[28rem] object-cover rounded-xl" alt="">
                </div>
                <div class="w-5/12 px-8 text-white">
                    <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">{{ food.name }}</h1>
                    <p class="mb-6 text-white/60">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
                        necessitatibus.
                    </p>
                    <form @submit.prevent="checkoutOrder">
                        <div class="flex items-center justify-between mb-6">
                            <div>
                                <p class="font-semibold mb-4">Amount Serving</p>
                                <input v-model.number="checkout.amount"
                                    class="w-16 px-2 py-2 text-center bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg dark:shadow focus:outline-none focus:ring-2 ring-gray-400 dark:ring-gray-600">
                            </div>
                            <p class="font-bold text-2xl text-teal-600 dark:text-teal-500">
                                Rp. {{ checkout.amount * food.price }}
                            </p>
                        </div>
                        <div class="mb-6">
                            <label for="descriptions" class="font-semibold block mb-4">Descriptions</label>
                            <textarea v-model="checkout.descriptions"
                                class="w-full bg-white dark:bg-gray-700 rounded-lg text-gray-900 dark:text-white p-4 focus:outline-none focus:ring-2 ring-gray-400 dark:ring-gray-600"
                                id="descriptions" placeholder="Descriptions"></textarea>
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
        </div>
    </main>
</template>

<script>
    import Navbar from '../components/Navbar.vue';

    import axios from 'axios';

    export default {
        name: 'Details',
        components: {
            Navbar,
        },
        data() {
            return {
                food: [],
                checkout: {
                    amount: 1,
                    descriptions: '',
                    food: {}
                }
            }
        },
        methods: {
            checkoutOrder() {
                if (this.checkout.amount > 0) {
                    this.checkout.food = this.food;
                    axios.post('http://localhost:4000/cart', this.checkout)
                        .then(() => {
                            this.$toast.success('Success add to cart !', {
                                type: 'success',
                                position: 'top-right',
                                duration: 3000,
                                dismissible: true,
                                queue: true
                            })
                        })
                        .catch(error => {
                            console.log(error, 'Ora berhasil')
                        })
                } else {
                    this.$toast.error('Fill in the amount order first !', {
                        type: 'error',
                        position: 'top-right',
                        duration: 3000,
                        dismissible: true,
                        queue: true
                    })
                }

            }
        },
        mounted() {
            axios.get(`http://localhost:4000/foods/${this.$route.params.id}`)
                .then(response => {
                    this.food = response.data;
                })
                .catch(error => {
                    console.log(error);
                })
        }
    }
</script>