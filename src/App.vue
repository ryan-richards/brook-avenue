<template>



  <Navbar />
<router-view v-slot="{ Component, route }">
  <transition name="fade" mode="out-in">
    <component :is="Component" :key="route.path" />
  </transition>
</router-view>
  <Footer />




  
</template>

<script>

import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'


export default {
  components: {
    Navbar,
    Footer,
  }
}


</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 30px;
  padding-left:1rem;
  padding-right: 1rem;
}

html {
  scroll-behavior: smooth;
}


body {
  overflow-x: hidden ;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}


.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

</style>
