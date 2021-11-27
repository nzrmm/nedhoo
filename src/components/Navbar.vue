<template>
    <nav class="bg-teal-500 dark:bg-transparent">
        <div class="container mx-auto py-4 flex items-center">
            <div class="w-2/12 flex items-center text-white mr-4 lg:mr-0">
                <div
                    class="w-10 h-10 -rotate-12 bg-gray-900 dark:bg-teal-500 rounded-xl shadow font-bold flex justify-center items-center mr-4">
                    N
                </div>
                <span class="font-bold hidden lg:inline">Nedhoo</span>
            </div>

            <div class="w-8/12">
                <ul class="text-white flex space-x-8">
                    <li class="">
                        <router-link :to="{name : 'Home'}" class="text-white/60">Home</router-link>
                    </li>
                    <li>
                        <router-link :to="{name : 'Foods'}" class="text-white/60">Foods</router-link>
                    </li>
                </ul>
            </div>

            <div class="w-2/12 flex justify-end">
                <router-link :to="{name : 'Cart'}" class="flex items-center text-white">
                    <span class="mr-4">Cart</span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path
                            d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                    </svg>
                    <span class="bg-teal-500 text-xs h-4 w-4 rounded text-center -mt-5">{{ orderCount }}</span>
                </router-link>
            </div>
        </div>
    </nav>
</template>

<script>
    import axios from 'axios';
    export default {
        name: 'Navbar',
        data() {
            return {
                orderCount : 0
            }
        },
        mounted() {
            axios.get('http://localhost:4000/cart')
                .then(response => {
                    this.orderCount = response.data.length
                })
        }
    }
</script>

<style scoped>
    .router-link-exact-active {
        @apply py-1 text-white font-medium border-b-2 border-teal-500
    }
</style>