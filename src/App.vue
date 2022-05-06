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

@import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap');

#app {
  font-family: 'Libre Baskerville', serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;
  margin-top: 30px;
  padding-left:1rem;
  padding-right: 1rem;
}

p{
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

a{
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

.subtitle {
  font-family: Avenir, Helvetica, Arial, sans-serif;
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

li{
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

.label{
  font-family: Avenir, Helvetica, Arial, sans-serif;
}


.list-enter-from {
    opacity: 0;
  }
  .list-enter-active {
    transition: opacity 0.4s ease;
  }
  .list-leave-to {
    opacity: 0;
    transform: scale(0.6);
  }
  .list-leave-active {
    transition: all 0.4s ease;
    position: absolute; /* for move transition after item leaves */
  }
  .list-move {
    transition: all 0.3s ease;
  }

</style>
