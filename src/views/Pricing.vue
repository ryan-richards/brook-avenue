<template>

<div>
<div class="pt-2"></div>

    <Content>

            <template v-slot:title>
            <div class="title">Wedding or Corporate?</div>
            </template>

            <template v-slot:subtitle>
            <div class="subtitle">Choose from over 300 flavours</div>
            </template>

            <template v-slot:content>
            <div>
            <p> 
            Welcome to Brook Avenue. We're here to add a unique touch of gelato magic to your special day as a treat for you and your guests.  
            </p>
            <p>
                Looking for a way to make your event unique, special and super tasty? There's no better way to celebrate your special day than to offer your guests the best bespoke gelato in Northern Ireland.
            </p>
            <p>
                We have an endless list of flavours...Why? Well because we make our own gelato we can pretty much make any flavour you'd like, so don't be shy, just ask!
            </p>   
            </div>
            </template>

            <template v-slot:button>
            <router-link class="button" to="/pricing#quoteform">Generate Quote</router-link>
            </template>

            <template v-slot:image>
            <img src="https://brookavenue.files.wordpress.com/2019/10/64b3aeff-2edb-4777-bd23-16a4f8563500.jpg?w=720" class="src" />
            </template>


    </Content>


    <div class="container">
    <hr /> 
    </div>

    <Content>

            <template v-slot:title>
            <div class="title">Pick some flavours.</div>
            </template>

            <template v-slot:subtitle>
            <div class="subtitle">Endless possibilities</div>
            </template>

            <template v-slot:content>
            <div>
            <p>
                Booking one of our three gelato carts couldnt be easier. Once your date is confirmed, it's time to pick your flavours!</p>
            <p>
                We make gelato fresh for every event meaning you have complete control over flavours, choose from classics like Honeycomb, Mint-Choc-Chip and Raspberry Ripple. </p>
            <p> Or try some of our more adventurous flavours like Wildberry & Lavender, Pear & Prossecco and Black Liqourice. </p>
            </div>
            </template>

            <template v-slot:button>
            <div @click="flavours" class="button">See Full List</div>
            </template>

            <template v-slot:image>
            <img src="https://brookavenue.files.wordpress.com/2019/10/3bc4264d-8e87-4477-8d47-441e1f5afa67.jpg?w=1024" class="src" />
            </template>


    </Content>

<div id="quoteform">
       <QuoteForm />
</div>
 

</div>

</template>

<script>
import BlockLeft from '../components/BlockLeft.vue'
import BlockRight from '../components/BlockRight.vue'
import QuoteForm from '../components/QuoteForm.vue'
import Content from '../components/Content.vue'
import { useHead } from '@vueuse/head'

export default {
  components: {
    BlockLeft,
    QuoteForm,
    BlockRight,
    Content
  },
  setup(){
      useHead({
          title:'Pricing',
          meta:[{
              title: 'description',
              content: 'Pricing information page'
          }
          ]
      })
  }
}
</script>
