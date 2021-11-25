<template>
    <div class="container mx-auto mb-20">
        <div class="flex flex-col-reverse lg:flex-row items-center">
            <div class="w-full lg:w-6/12 flex flex-col items-center lg:items-start">
                <h1 class="mb-6 text-4xl lg:text-5xl text-center lg:text-left font-bold text-gray-900 leading-tight">Discover the taste of very <span
                        class="text-teal-500">delicious</span>.</h1>
                <p class="w-11/12 text-center lg:text-left lg:w-8/12 text-gray-600 leading-relaxed mb-10">Made with mom's recipe that will make all food
                    have a taste that tells comfort and longing to the family</p>
                <div class="flex justify-center lg:justify-start">
                    <router-link to="/order" class="group relative px-8 py-2 inline-flex items-center bg-teal-500 rounded-xl text-white transition-all">
                        <span class="group-hover:-translate-x-2 transition-all">Buy Now</span>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 absolute right-0 opacity-0 group-hover:opacity-100 group-hover:mr-3 transition-all" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                        </svg>
                    </router-link>
                </div>
            </div>
            <div class="w-full lg:w-6/12 mb-6 lg:mb-0">
                <img src="../assets/images/hero.svg" alt="hero-img">
            </div>
        </div>
    </div>
</template>

<script>
    export default {

    }
</script>

<style lang="scss" scoped>

</style>