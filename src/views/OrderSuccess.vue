<template>
    <Navbar /> 
    <main class="container py-12">
        <div class="mb-10 flex justify-center">
            <img src="../assets/images/cook.svg" class="w-56 md:w-72" alt="hero-img">
        </div>
        <h1 class="mb-2 text-center text-white text-2xl font-bold">Order Successfully</h1>
        <p class="text-center text-white/60">Wait a few minutes, thank you !</p>
    </main>
</template>

<script>
    import Navbar from '../components/Navbar.vue';

    export default {
        name : 'OrderSuccess',
        components : {
            Navbar
        }
    }
</script>