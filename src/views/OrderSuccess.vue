<template>
    <Navbar /> 
    <main class="container py-12 mx-auto">
        <div class="text-xl text-white font-bold">
            Order Successfull
        </div>
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