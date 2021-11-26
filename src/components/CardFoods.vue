<template>
    <div class="w-full sm:w-6/12 md:w-4/12 lg:w-3/12 px-3 py-3">
        <router-link to="/order" class="block p-5 rounded-2xl bg-gray-900 dark:bg-gray-800">
            <img src="https://source.unsplash.com/featured/?food" class="w-full h-44 rounded-2xl mb-6 object-cover"
                alt="card-img">
            <div class="px-4">
                <h1 class="text-xl text-white mb-1">{{ food.name }}</h1>
                <p class="font-bold text-lg text-teal-500 ">Rp. {{ food.price }}</p>
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

<style lang="scss" scoped>

</style>