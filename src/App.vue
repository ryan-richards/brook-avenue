<template>
  <Navbar />
  <Home  />
  <BlockLeft 
  title="Homemade Gelato" 
  subtitle="Choose from over 300 flavours"
  content="
  <p>We have a wide range of flavour suggestions, but you are in control, if your favourite flavour is Honeycomb or if something more unique like Jawbox Gin & Ginger hits the spot we got you covered.</p>
   <p class='pt-2'>We love experimenting with new flavour combinations so if you don’t see your favourite on our flavour list just get in touch and let us custom make your flavour choice.</p>"
  button-text="Explore Flavours" 
  imageurl="https://brookavenue.files.wordpress.com/2019/07/d6ed5860-afa4-4846-bab4-60f49c484add.jpg?w=720"
  />
  <Quote quote-message="Use our online calculator to generate a quote" subtitle="We cater events of any size" button-text="Get Quote"/>
  <Footer />
</template>

<script>
import Home from './components/Home.vue'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import BlockLeft from './components/BlockLeft.vue'
import BlockRight from './components/BlockRight.vue'
import Quote from './components/Quote.vue'

export default {
  components: {
    Navbar,
    Home,
    BlockLeft,
    BlockRight,
    Quote,
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

body {
  overflow-x: hidden ;
}

</style>
