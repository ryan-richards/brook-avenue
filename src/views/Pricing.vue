<template>
  <div class="navMargin">
    <div class="pt-6"></div>

    <ContentBody>
      <template v-slot:content>
        <div class="block pt-5 pb-5">
          <div class="center">
            <div class="image">
              <img
                src="../assets/brook-27.jpg"
                alt=""
                style="max-width: 80vh"
              />
            </div>
          </div>

          <div class="center pt-6 pb-6">
            <div>
              <div
                class="title has-text-centered headingBlock"
                style="font-weight: 800; font-size: 1.6em"
              >
                Wedding Pricing
              </div>
              <div class="subtitle">
                Guide to booking your wedding gelato cart.
              </div>
            </div>
          </div>

          <div class="center">
            <div class="has-text-left" style="max-width: 60vh">
              <p>
Brook Avenue aims to bring bespoke homemade gelato into the hands of our wonderful couples and your guests. 

              </p>
              <p>
We make gelato classics from our milk and cream base but we also love to make non-dairy and vegan options so everyone can enjoy gelato on your big day.
              </p>
              <p>
Our handcrafted cart situates itself perfectly into the wedding day whether it be right after your ceremony, during the welcome reception or even as a surprise in the evening.
              </p>
              <p>
                You can generate an estimated quote below.
              </p>
              <div class="pt-5">
                <router-link class="button" to="/pricing#quoteform"
                  >Generate Quote</router-link
                >
              </div>
            </div>
          </div>
        </div>
      </template>
    </ContentBody>

    <ContentBody>
      <template v-slot:content>
        <div class="block pt-5 pb-5">
          <div class="center">
            <div class="image">
              <img
                src="../assets/brook-23-crop.jpg"
                alt=""
                style="max-width: 80vh"
              />
            </div>
          </div>

          <div class="center pt-6 pb-6">
            <div>
              <div
                class="title has-text-centered headingBlock"
                style="font-weight: 800; font-size: 1.6em"
              >
                Pick some Flavours
              </div>
              <div class="subtitle">Endless Possibilities</div>
            </div>
          </div>

          <div class="center">
            <div class="has-text-left" style="max-width: 60vh">
              <p>
We have been passionate about making great gelato for several years now and naturally we've ended up with a rather large list of flavour options including many non-dairy and vegan flavours.
              </p>
              <p class="pt-1">
One of the best parts of booking with us is that the choice of flavours is up to you and they are completely unique to your day as we make it fresh for each event.
              </p>
              <p class="pt-1">
Our handcrafted cart can hold up to four different flavours, you can either choose from our catalogue or we can craft a custom flavour.
              </p>
<p class="pt-1">
Your combination can be made up of fan favourites, or you can choose something you've never tried before as a surprise on the day.
              </p>
              <p class="pt-1">
Have some fun and use the randomise button below to explore some of our artisan flavours!
              </p>


              <div class="buttons pt-5">
                <div class="button" @click="randomFlavour">
                  <p v-if="!randomFlavourText">Random Flavour</p>
                  <p v-else>{{randomFlavourText.Flavours}}</p>
                </div>
                
                   <a href="https://yptpiheqktfmeoisgtea.supabase.in/storage/v1/object/sign/avatars/2021 Flavour List Brook Avenue.pdf?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhdmF0YXJzLzIwMjEgRmxhdm91ciBMaXN0IEJyb29rIEF2ZW51ZS5wZGYiLCJpYXQiOjE2MzcxNTUzMTUsImV4cCI6MTk1MjUxNTMxNX0.XpZ1nyd3bjYLTsv6lbi_YWTcLd0tf-YiobCmgrm5lLs" target="_blank">
                  <div class="button">
                  <p>Download Full List</p>
                     </div>
                  </a>
             
              </div>
              <p v-if="randomFlavourText" style="margin-top:-1rem;">keep tapping!</p>
            </div>
          </div>
        </div>
      </template>
    </ContentBody>

    <ContentBody>
      <template v-slot:content>
        <div class="block pt-5 pb-5">
          <div class="center">
            <div class="image">
              <img
                src="../assets/brook-43.jpg"
                alt=""
                style="max-width: 80vh"
              />
            </div>
          </div>

          <div class="center pt-6 pb-6">
            <div>
              <div
                class="title has-text-centered headingBlock"
                style="font-weight: 800; font-size: 1.6em"
              >
                What's included?
              </div>
              <div class="subtitle">Personalise your package</div>
            </div>
          </div>


          <div class="center">
            <div class="has-text-left">
            <div class="columns pl-5 ">
              <div class="column">
              <p>As Standard:</p>
                <ul style="list-style-type: circle" class="pt-3">
                  <li>Choice of 4 gelato flavours</li>
                  <li>Plain & Luxury waffle cones</li>
                  <li>'Just Married' gelato tubs</li>
                  <li>2hrs of scooping service</li>
                  <li>Member of staff</li>
                  <li>Travel within 20 miles of Belfast (A small travel fee will apply beyond 20 miles of belfast - submit a request below for exact quote)</li>
                </ul>
              </div>
              <div class="column">
<div>
                  <p>Optional Extras:</p>
                  <ul style="list-style-type: circle" class="pt-3">
                    <li>Personalised wafer discs</li>
                    <li>Personalised gelato tubs</li>
                    <li>Cadbury's Flakes</li>
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <p>
                Have something in mind not listed here? <router-link to="/contact" style="text-decoration:underline;color:rgb(60, 102, 72);">Get in touch!</router-link> 
                </p>
            </div>
            </div>
          </div>
        </div>
      </template>
    </ContentBody>

    <div class="container pt-6 pb-6">
      <hr />
    </div>

    <div id="quoteform">
      <QuoteForm />
    </div>
  </div>
</template>

<script>
import QuoteForm from "../components/QuoteForm.vue";
import { useHead } from "@vueuse/head";
import ContentBody from "../components/ContentBody.vue";
import { ref } from "vue";
import { supabase } from "../supabase";

export default {
  components: {
    QuoteForm,
    ContentBody,
  },
  setup() {
    let randomNumber = 0;
    const randomFlavourText = ref("");
    useHead({
      title: "Pricing",
      meta: [
        {
          title: "description",
          content: "Pricing information page",
        },
      ],
    });

  async function randomFlavour(){
    randomNumber = Math.floor(Math.random() * 60 + 1);
      let { data, error } = await supabase
        .from("flavours")
        .select("*")
        .eq("id", randomNumber)
        .single()
      randomFlavourText.value = data;
  }


    return {
      randomNumber,
      randomFlavour,
      randomFlavourText
    };
  },
};
</script>

<style scoped>
.center,
.center-column,
.top,
.right,
.bottom,
.left {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
}

</style>