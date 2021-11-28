<template>
    <Navbar />
    <main class="py-16">
        <Hero />

        <div class="container">
            <div class="text-title">
                Best <span class="text-title-teal">Foods</span>
            </div>

            <div class="flex flex-wrap -mx-3 mb-10">
                <template v-for="food in foods" :key="food.id">
                    <CardFoods :food="food" />
                </template>
            </div>

            <div class="flex justify-center">
                <router-link :to="{name : 'Foods'}" class="btn btn-transparent group">
                    <span class="btn-text group-hover:border-b border-teal-500">All Foods</span>
                    <svg xmlns="http://www.w3.org/2000/svg"
                        class="btn-icon"
                        viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd"
                            d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                            clip-rule="evenodd" />
                    </svg>
                </router-link>
            </div>
        </div>
    </main>
</template>

<script>
    import Navbar from '../components/Navbar.vue';
    import Hero from '../components/Hero.vue';
    import CardFoods from '../components/CardFoods.vue';
    import getBestFoods from '../mixins/getBestFoods'

    export default {
        name: 'Home',
        components: {
            Navbar,
            Hero,
            CardFoods
        },
        mixins : [getBestFoods]
    }
</script>
