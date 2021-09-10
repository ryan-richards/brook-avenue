<template>

<div>

  <div class="container">
  <div class="columns">

        <div class="column">
          <figure class="image is-square">
            <img class="image" src="https://brookavenue.files.wordpress.com/2020/02/21f9f67a-7a47-4d00-8f03-fe49568266aa.jpg?w=720" alt="A portrait of a girl under hanging flowers.">
          </figure>
        </div>

        <div class="column center">
          <div class="block">
            <div class=" pb-4">
            <div class="title">Artisan Gelato Cart Hire for your Wedding or Event</div>
            <div class="subtitle">Explore our packages and pricing.</div>
          </div>

          <div class="buttons">
            <router-link to="/pricing"><div class="button">Get Quote</div></router-link>
            
          </div>    
        </div>
    </div>
  </div>
</div>

<Content>

    <template v-slot:title>
      <div class="title">Homemade Gelato</div>
    </template>

    <template v-slot:subtitle>
      <div class="subtitle">Choose from over 300 flavours</div>
    </template>

    <template v-slot:content>
      <div>
      <p>We have a wide range of flavour suggestions, but you are in control, if your favourite flavour is Honeycomb or if something more unique like Jawbox Gin & Ginger hits the spot we got you covered.</p>
      <p class='pt-2'>We love experimenting with new flavour combinations so if you don’t see your favourite on our flavour list just get in touch and let us custom make your flavour choice.</p>
      </div>
    </template>

    <template v-slot:button>
      <div @click="flavours" class="button">Explore Flavours</div>
    </template>

    <template v-slot:image>
      <img src="https://brookavenue.files.wordpress.com/2019/07/d6ed5860-afa4-4846-bab4-60f49c484add.jpg?w=720" class="src" />
    </template>


</Content>


<div class="modal" v-bind:class="{'is-active': isActive, 'toggle-off': !isActive}">
  <div class="modal-background"></div>
  <div class="modal-card">
    <header class="modal-card-head">
      <p class="modal-card-title">Modal title</p>
      <button @click="flavours" class="delete" aria-label="close"></button>
    </header>
    <section class="modal-card-body">
      <!-- Content ... -->
    </section>
    <footer class="modal-card-foot">
      <button class="button is-success">Save changes</button>
      <button class="button">Cancel</button>
    </footer>
  </div>
</div>

<Quote quote-message="Use our online calculator to generate a quote" subtitle="We cater events of any size" button-text="Get Quote"/>

</div>



</template>

<script>

import BlockLeft from '../components/BlockLeft.vue'
import Quote from '../components/Quote.vue'
import Content from '../components/Content.vue'


export default {
  components: {
    BlockLeft,
    Quote,
    Content,
  },
  data () {
        return {
            isActive: false
        }
    },
  methods: {
    flavours(){
        console.log("fired")
      this.isActive = !this.isActive
    }
  }
}

</script>

<style scoped>

.center, .center-column, .top, .right, .bottom, .left {
	display: flex;
	justify-content: center;
	align-items: center;
  background-color: transparent;
}

.block {
  text-align: left;
}

.image {
  object-fit: cover;
}

.button {
  color: whitesmoke;
     background-color:rgb(119, 139, 121);
}

.control.has-icons-left .input, .control.has-icons-left .select select {
    padding-left: 2em;
}

.title {
max-width: 500px;
}

.container {
  margin-top: 2rem;
}


</style>
