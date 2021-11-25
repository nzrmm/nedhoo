<template>
    <Navbar />
    <main class="py-16 lg:py-28">
       <Hero />
    </main>
</template>

<script>
    import Navbar from '../components/Navbar.vue';
    import Hero from '../components/Hero.vue';

    export default {
        name: 'Home',
        components: {
            Navbar,
            Hero
        }
    }
</script>

<style lang="scss" scoped>

</style>