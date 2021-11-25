<template>
    <div class="w-full sm:w-6/12 md:w-4/12 lg:w-3/12 px-2 py-2">
        <div class="p-5 rounded-2xl bg-gray-900 ">
            <img src="https://source.unsplash.com/featured/?food" class="w-full h-44 rounded-2xl mb-6 object-cover"
                alt="card-img">
            <div class="px-4">
                <h1 class="text-xl text-white mb-1">{{ food.name }}</h1>
                <div class="flex justify-between items-center">
                    <p class="font-bold text-lg text-teal-500 ">Rp. {{ food.price }}</p>
                    <router-link to="/order"
                        class="w-8 h-8 rounded-full flex justify-center items-center bg-teal-500 hover:bg-gray-700 text-white hover:text-teal-500 transition-all">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd"
                                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                                clip-rule="evenodd" />
                        </svg>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'CardFoods',
        props: ['food']
    }
</script>

<style lang="scss" scoped>

</style>