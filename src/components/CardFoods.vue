<template>
    <div class="w-full sm:w-6/12 md:w-4/12 lg:w-3/12 px-3 py-3">
        <router-link :to="{name : 'Details', params: {id : food.id}}" class="p-5 block rounded-2xl bg-gray-300 dark:bg-gray-800">
            <img src="https://source.unsplash.com/featured/?food" class="w-full h-44 rounded-2xl mb-6 object-cover"
                alt="card-img">
            <div class="px-4">
                <h1 class="text-xl text-gray-900 dark:text-white mb-1">{{ food.name }}</h1>
                <p class="font-bold text-lg text-teal-600 dark:text-teal-500 ">Rp. {{ food.price }}</p>
            </div>
        </router-link>
    </div>
</template>

<script>
    export default {
        name: 'CardFoods',
        props: ['food']
    }
</script>