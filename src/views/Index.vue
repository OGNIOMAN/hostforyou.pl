<template>
  <v-app>
    <AppBar/>

    <Home/>

  </v-app>
</template>

<script>
import AppBar from '@/components/AppBar.vue'
import Home from '@/components/Home.vue'
  export default {

    components: {
      AppBar, Home
    },
  }
</script>