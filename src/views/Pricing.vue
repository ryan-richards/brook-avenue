<template>
  <div class="navMargin">
    <ContentBody>
      <template v-slot:content>
        <div class="block pt-5 pb-5">
          <div class="center">
            <div class="image mobileImage">
              <img
                src="../assets/brook-99.jpg"
                class="image-crop"
                alt="Ice cream/Gelato Bicycle Cart at Galgorm Ballymena Northern Ireland. Mint green bicycle with floral wedding basket and cart setup infront of Phantom house at Galgorm wedding venue."
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
                Brook Avenue aims to bring bespoke homemade gelato into the
                hands of our wonderful couples and your guests.
              </p>
              <p>
                We make gelato classics from our milk and cream base but we also
                love to make non-dairy and vegan options so everyone can enjoy
                gelato on your big day.
              </p>
              <p>
                Our handcrafted cart situates itself perfectly into the wedding
                day whether it be right after your ceremony, during the welcome
                reception or even as a surprise in the evening.
              </p>
              <p>You can generate an estimated quote below.</p>
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
            <div class="image mobileImage">
              <img
                src="../assets/brook-23-crop.jpg"
                alt="Gelato flavours being written onto a custom chalkboard for a wedding at Galgorm Resort and Spa, Ballymena, Northern Ireland."
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
                We have been passionate about making great gelato for several
                years now and naturally we've ended up with a rather large list
                of flavour options including many non-dairy and vegan flavours.
              </p>
              <p class="pt-1">
                One of the best parts of booking with us is that the choice of
                flavours is up to you and they are completely unique to your day
                as we make it fresh for each event.
              </p>
              <p class="pt-1">
                Our handcrafted cart can hold up to four different flavours, you
                can either choose from our catalogue or we can craft a custom
                flavour.
              </p>
              <p class="pt-1">
                Your combination can be made up of fan favourites, or you can
                choose something you've never tried before as a surprise on the
                day.
              </p>
              <p class="pt-1">
                Have some fun and use the randomise button below to explore some
                of our artisan flavours!
              </p>

              <div class="buttons pt-5">
                <div class="button" @click="randomFlavour">
                  <p v-if="!randomFlavourText">Random Flavour</p>
                  <p v-else>{{ randomFlavourText.Flavours }}</p>
                </div>

                <a
                  href="https://yptpiheqktfmeoisgtea.supabase.co/storage/v1/object/sign/avatars/Brook%20Avenue%20FLAVOUR%20LIST%202023%20portrait.pdf?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhdmF0YXJzL0Jyb29rIEF2ZW51ZSBGTEFWT1VSIExJU1QgMjAyMyBwb3J0cmFpdC5wZGYiLCJpYXQiOjE2ODY4NTE2MTUsImV4cCI6MTcxODM4NzYxNX0.HcYRLF98bj6N2xIj-7liy2QRuExZI8vgC9d35IBQ8gE&t=2023-06-15T17%3A53%3A35.661Z"
                  target="_blank"
                >
                  <div class="button">
                    <p>Download Full List</p>
                  </div>
                </a>
              </div>
              <p v-if="randomFlavourText" style="margin-top: -1rem">
                keep tapping!
              </p>
            </div>
          </div>
        </div>
      </template>
    </ContentBody>

    <ContentBody>
      <template v-slot:content>
        <div class="block pt-5 pb-5">
          <div class="center">
            <div class="image mobileImage">
              <img
                src="../assets/brook-44.jpg"
                alt="Close up photo of a gelato tub with a personalised wafer disc reading bride and grooms names. Sitting on Brook Avenue's custom made quirky gelato cart. Ivy and Rose garland visible beneath, attached to the cart."
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

          <div class="container">
            <div class="columns is-centered">
              <div class="column is-half">
                <div class="has-text-left">
                  <div class="box">
                    <p>As Standard:</p>
                    <ul style="list-style-type: circle" class="pt-3">
                      <li>Choice of 4 gelato flavours</li>
                      <li>Plain & Luxury waffle cones</li>
                      <li>'Just Married' gelato tubs</li>
                      <li>2hrs of scooping service</li>
                      <li>Member of staff</li>
                      <li>
                        Travel within 20 miles of Belfast (A small travel fee
                        will apply beyond 20 miles of Belfast - submit a request
                        below for an exact quote)
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="column is-half">
                <div class="has-text-left">
                  <div class="box">
                    <p>Optional Extras:</p>
                    <ul style="list-style-type: circle" class="pt-3">
                      <li>Personalised wafer discs</li>
                      <li>Personalised gelato tubs</li>
                      <li>Cadbury's Flakes</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="has-text-centered">
              <p>
                Have something in mind not listed here?
                <router-link
                  to="/contact"
                  style="text-decoration: underline; color: rgb(60, 102, 72)"
                  >Get in touch!</router-link
                >
              </p>
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
      title: "Pricing - Brook Avenue Gelato Cart Hire Belfast",
      meta: [
        {
          title: "description",
          content:
            "Get pricing details for homemade gelato and ice cream cart hire in Belfast, Northern Ireland for your Wedding or Corporate/Private Event. ",
        },
      ],
    });

    async function randomFlavour() {
      randomNumber = Math.floor(Math.random() * 60 + 1);
      let { data, error } = await supabase
        .from("flavours")
        .select("*")
        .eq("id", randomNumber)
        .single();
      randomFlavourText.value = data;
    }

    return {
      randomNumber,
      randomFlavour,
      randomFlavourText,
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

.image-crop {
  aspect-ratio: 3/2;
  object-fit: cover;
}

.box {
  background-color: "transparent";
  box-shadow: none;
  border-radius: none;
}

.center-block {
  display: flex;
  justify-content: center;
  align-items: center;
}
@media (max-width: 768px) {
  .mobileImage {
    margin-left: -3rem;
    margin-right: -3rem;
  }
}
</style>
