<template>
  <div class="antialiased bg-white dark:bg-gray-900 min-h-screen">
    <router-view></router-view>
  </div>

    <Footer />
</template>

<script>
  import Footer from './components/Footer.vue';
  
  export default {
    name : 'App',
    components : {
      Footer
    }
  }
</script>

<style lang="scss" scoped>

</style>
