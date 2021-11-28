<template>
    <Navbar />
    <main class="py-12">
        <div class="container">
            <div class="flex justify-center items-center">
                <div class="w-5/12">
                    <img src="https://source.unsplash.com/featured/?food"
                        class="w-full h-[28rem] object-cover rounded-xl" alt="image-details">
                </div>
                <div class="w-5/12 px-8 text-white">
                    <h1 class="mb-4 text-3xl font-bold text-gray-900 dark:text-white">{{ food.name }}</h1>
                    <p class="mb-6 text-white/60">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
                        necessitatibus.
                    </p>
                    <form @submit.prevent="addToCart">
                        <div class="mb-6 flex items-center justify-between">
                            <div>
                                <p class="mb-4 font-semibold">Amount Serving</p>
                                <input v-model.number="cart.amount"
                                    class="input-style w-16 px-2 py-2 text-center ">
                            </div>
                            <p class="font-bold text-2xl text-teal-600 dark:text-teal-500">
                                Rp. {{ cart.amount * food.price }}
                            </p>
                        </div>
                        <div class="mb-6">
                            <label for="descriptions" class="font-semibold block mb-4">Descriptions</label>
                            <textarea v-model="cart.descriptions"
                                class="input-style w-full p-4"
                                id="descriptions" placeholder="Descriptions"></textarea>
                        </div>
                        <button type="submit"
                            class="btn btn-bg group">
                            <span class="btn-text">Add to cart</span>
                            <svg xmlns="http://www.w3.org/2000/svg"
                                class="btn-icon"
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
                cart: {
                    amount: 1,
                    descriptions: '',
                    food: {}
                }
            }
        },
        methods: {
            getFoodById() {
                axios.get(`http://localhost:4000/foods/${this.$route.params.id}`)
                .then(response => {
                    this.food = response.data;
                })
                .catch(error => {
                    console.log(error);
                })
            },
            addToCart() {
                if (this.cart.amount > 0) {

                    // Assign food in cart
                    this.cart.food = this.food;

                    axios.post('http://localhost:4000/cart', this.cart)
                        .then(() => {
                            this.$router.push({ name : 'Cart' });
                            this.$toast.success('Success add to cart !', {
                                type: 'success',
                                position: 'top-right',
                                duration: 3000,
                                dismissible: true,
                                queue: true
                            })
                        })
                        .catch(error => {
                            console.log(error)
                        })
                } else {
                    this.$toast.error('Fill in the amount serving first !', {
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
            this.getFoodById()
        }
    }
</script>