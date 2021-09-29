<template>

<div class="navMargin">
    <div class="wrapper">

      <ContentBody class="">
      <template v-slot:content>
           <div class="block pt-5">

  <div class="center">
        <div class="image">
          <img src="../assets/brook-52.webp" alt="" style="max-width: 80vh" />
        </div>
  </div>

      <div class="center pt-6 pb-6">
        <div
          class="title has-text-centered headingBlock"
          style="font-weight: 800; font-size: 1.6em"
        >
          Our Story
        </div>
      </div>

      <div class="center">
        <div class="has-text-left" style="max-width: 60vh">
          <p>
            Brook Avenue is a family run business with years of experience making arguably the best gelato in Northern Ireland. 
          </p>
          <p class="pt-2">
            Using all natural ingredients we make unique twists on the classics and have been known to experiment with some crazier flavour combinations. 
          </p>
          <p class="pt-2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima nam mollitia itaque cumque rem earum maiores atque voluptates tenetur fugiat sint eius deleniti, commodi excepturi debitis perspiciatis aliquid est. Debitis et doloremque dolorum, quae deserunt a tempore optio modi qui neque est voluptates impedit, cumque officiis ad assumenda, maxime inventore? 
          </p>
        </div>
      </div>


    <div class="center pt-6">
        <div class="image">
          <img src="../assets/brook-9.webp" alt="" style="max-width: 80vh" />
        </div>
    </div>

    
           </div>
      </template>
    </ContentBody>
    
    <div class="pt-6"></div>
    
    </div>



</div>


    
</template>

<script>
import BlockLeft from '../components/BlockLeft.vue'
import Quote from '../components/Quote.vue'
import ContentBody from '../components/ContentBody.vue'

import {useHead } from '@vueuse/head'

export default {
  components: {
    BlockLeft,
    Quote,
    ContentBody,
  }, 
  setup(){
    useHead({
      title: "About",
      meta:[
        {
          name: 'description',
          content: "About brook avenue gelato"
        }
      ]
    })
  }
}
</script>
