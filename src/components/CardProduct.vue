<template>
    <div class="w-4/12 bg-gray-900 rounded-2xl">
        <div class="p-5">
            <img src="https://source.unsplash.com/featured/?food" class="w-full h-44 rounded-2xl mb-6 object-cover" alt="card-img">
            <div class="px-4 flex items-center justify-between">
                <div>
                    <h1 class="text-xl text-white mb-1">{{ product.name }}</h1>
                    <p class="font-bold text-lg text-teal-500 ">Rp. {{ product.price }}</p>
                </div>
                <router-link to="/order"
                    class="group relative px-8 py-2 inline-flex items-center bg-teal-500 rounded-xl text-white transition-all">
                    <span class="group-hover:-translate-x-2 transition-all">Order</span>
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
</template>

<script>
    export default {
        name: 'CardProduct',
        props : ['product']
    }
</script>

<style lang="scss" scoped>

</style>