<template>
    <div>
        <Navbar />
        <h1>Home</h1>
        <button class="px-6 py-2 bg-green-500 rounded-xl">Button</button>
    </div>
</template>

<script>
    import Navbar from '../components/Navbar.vue';

    export default {
        name: 'Home',
        components: {
            Navbar
        }
    }
</script>

<style lang="scss" scoped>

</style>