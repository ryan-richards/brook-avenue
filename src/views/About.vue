<template>
  <div class="navMargin">
    <div class="wrapper">
      <ContentBody>
        <template v-slot:content>
          <div class="block pt-5">
            <div class="center">
              <div class="image">
                <img
                  src="../assets/brook-52.webp"
                  alt=""
                  style="max-width: 80vh"
                />
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
                
<p>Our story began in 2016 when we got our first taste of making our own gelato. After years of experimenting and perfecting our recipes we decided to create Brook Avenue as a portable gelato cart catering for weddings and events.</p>

<p class='pt-2'>We showed up at our first wedding fair not knowing what to expect. Turns out when you are handing out samples of gelato you get popular very fast!</p>
 
<p class='pt-2'>We are a based from our home in East Belfast, Northern Ireland.</p>
<p class='pt-2'>We love getting to go to amazing venues across the country, whether its a hotel, barn or even a private back garden.</p>

<p class='pt-2'>After a very busy first year of business we are expanding up to three carts, so hopefully there will be less disappointment for the spring and summer months to come.</p>

<p class='pt-2'>We love that our handcrafted cart & bespoke gelato has become a unique talking point for our couples and their guests.</p>
<p class='pt-2'>We know gelato might not be the first thing people think of when they think of a wedding in Northern Ireland & Ireland but the testimonials speak for themselves, even in the rain it's hard for someone to say no.</p>
            
              </div>
              </div>


<div class="center pt-6 pb-6">
              <div class="image">
                <img
                  src="../assets/brook-9.webp"
                  alt=""
                  style="max-width: 80vh"
                />
              </div>
            </div>

<div class="center">
              <div class="has-text-left" style="max-width: 60vh">

<p class='pt-2'>We are very proud that we not only get to bring along our unique gelato cart but because we are making the gelato ourselves from scratch the positive reviews mean even more to us.</p> 
 
<p class='pt-2'>Our process for your wedding begins from as soon as the deposit secures your date in our diary. We aim to gather all the finals details from you and your significant other up to three months before your big day.</p>

<p class='pt-2'>Once your flavours are picked we can prepare our list of ingredients for the day. Our gelato process begins by sourcing our core ingredients; fresh whole milk, double cream & sugar. Our gelato base has to first be heated, rapidly cooled and then allowed to age for up to 72hours before the freezing process can begin. Other ingredients to make up your flavours are also introduced into the gelato, we always aim to use fresh ingredients wherever possible.</p>

<p class='pt-2'>Our sorbets and non-dairy gelato has a similar process or cooking, rapidly cooling and storing before we can put the base through our gelato freezing process.</p> 
 
<p class='pt-2'>The gelato we make for your day is made fresh just for you. This allows us to offer you any flavour choice you'd like, we can even custom make a flavour if it's not already in our catalogue.</p>
              </div>
            </div>

            <div class='pb-6'></div>

                      <div
      class="columns is-gapless mb-0 is-centered"
      style=""
    >
      <div class="column mb-0 splitBlocks is-two-thirds">
        <router-link :to="`/post/13`">
          <div class="hero halfSplit block1">
            <div class="hero-body center">
              <div class="title p-4 has-text-white" style="font-size: 2.5em;">
                10 Reasons to hire an ice cream cart for your Wedding!
              </div>
            </div>
          </div>
        </router-link>
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
import ContentBody from "../components/ContentBody.vue";

import { useHead } from "@vueuse/head";

export default {
  components: {
    ContentBody,
  },
  setup() {
    useHead({
      title: "About - Brook Avenue Gelato Belfast",
      meta: [
        {
          name: "description",
          content: "Brook Avenue Gelato is a wedding ice cream cart family run business. Providing homemade gelato flavours to wedding guests across Northern Ireland.",
        },
      ],
    });
  },
};
</script>

<style scoped>
.card {
  max-width: 900px;
  border: rgba(0, 0, 0, 0.158);
  border-width: 2px;
  border-style: solid;
}


.halfSplit {
  overflow: hidden;
  height: 50vh;
  padding:10%;
  box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.288);
}
.square {
  object-fit: cover;
  width: 140px;
  height: 140px;
}
.splitBlocks {
  overflow: hidden;
}
.block1 {
  background: black url("../assets/brook-2-min.jpg") center / cover;
  margin-left: -3rem;
  margin-right: -3rem;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  transition: all 0.5s;
  font-size: 16px;
}

.block1:hover {
  transform: scale(1.04);
}




</style>