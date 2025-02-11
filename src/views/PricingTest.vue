<template>
  <div class="navMargin">
    <ContentBody>
      <template v-slot:content>
        <div class="block pt-5 pb-5">
          <div class="center">
            <div class="image mobileImage">
              <img
                src="../assets/brook-wide.jpg"
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
              <p>You can get a personalised quote below:</p>
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
            <div class="image mobileImage video">
              <a href="https://cinematiclove.co.uk/">
                <video
                  src="../assets/brook-video.mp4"
                  autoplay
                  loop
                  muted
                  playsinline
                ></video>
              </a>
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
                We have been passionate about making great gelato for almost ten
                years now and naturally we've ended up with a rather large list
                of flavour options including many non-dairy and vegan flavours.
              </p>
              <p class="pt-1">
                One of the best parts of booking with us is that the choice of
                flavours is up to you and they are completely unique to your day
                as we make it fresh for each event.
              </p>
              <p class="pt-1">
                Our handcrafted cart can hold up to four different flavours.
              </p>
              <p class="pt-1">
                Your combination can be made up of fan favourites, or you can
                choose something you've never tried before as a surprise on the
                day.
              </p>

              <div class="buttons pt-5">
                <a href="/best.pdf" target="_blank">
                  <div class="button">
                    <p>Best Sellers!</p>
                  </div>
                </a>
                <a href="/full.pdf" target="_blank">
                  <div class="button">
                    <p>Full Flavour list - Over 50+ flavours</p>
                  </div>
                </a>
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
              <a href="https://wildfernphoto.co.uk" target="_blank">
                <img
                  src="../assets/brook-44.jpg"
                  alt="Close up photo of a gelato tub with a personalised wafer disc reading bride and grooms names. Sitting on Brook Avenue's custom made quirky gelato cart. Ivy and Rose garland visible beneath, attached to the cart."
                  style="max-width: 80vh"
                />
              </a>
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
            <p>Pick One of our Three Packages to suit your day perfectly:</p>

            <p class="has-text-weight-bold">
              Simply Gelato, Personal Touch and The Ultimate All Day Package.
              Prices start from £460
            </p>

            <p class="pt-3">
              Our Simply Gelato Package is our standard package, extras can be
              added on individually, or bump up to our other packages which have
              extras included!
            </p>

            <div class="columns is-centered pt-6">
              <div class="column is-half">
                <div class="has-text-left">
                  <div class="box">
                    <p class="has-text-weight-bold">Simply Gelato Package:</p>
                    <ul style="list-style-type: circle" class="pt-3">
                      <li>
                        Choice of up to 4 gelato flavours from our Best Sellers
                        list! (Personal Touch and The Ultimate All Day package
                        includes our Full Flavour List - Over 50 Flavours and
                        the option to create custom flavours!)
                      </li>
                      <li>Plain & chocolate dipped waffle cones</li>
                      <li>Wedding themed stamped eco friendly gelato tubs</li>
                      <li>
                        90mins of scooping service time (Personal Touch Package
                        and The Ultimate All Day Package comes with 2 hours of
                        service time)
                      </li>
                      <li>Member of staff</li>
                      <li>
                        Travel within 40 miles of Belfast (A small travel fee
                        will apply beyond 40 miles of Belfast - submit a request
                        below for an exact quote)
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="column is-half">
                <div class="has-text-left">
                  <div class="box">
                    <p class="has-text-weight-bold">Add-ons and Extras:</p>
                    <ul style="list-style-type: circle" class="pt-3">
                      <li>Personalised wafer discs</li>
                      <li>Personalised gelato tubs</li>
                      <li>Cadbury's Flakes</li>
                      <li>
                        <a href="https://thepancakecart.com" target="_blank"
                          ><span class="has-text-weight-semibold"
                            >Mini Pancake Cart</span
                          ></a
                        >
                        - 2 Hours of Pancake Service. Choose from a range of
                        toppings and sauces: Choose 1 fresh fruit option, 2
                        toppings and 2 sauces. Maple Syrup, Fresh whipped cream
                        and icing sugar come as standard.
                      </li>
                      <li>
                        <a href="/add-on.pdf" target="_blank"
                          ><span class="has-text-weight-semibold"
                            >Candy Wall</span
                          ></a
                        >
                        - 8 Full Dispensers of popular sweets and candies.
                      </li>
                      <li>
                        <a href="/add-on.pdf" target="_blank"
                          ><span class="has-text-weight-semibold"
                            >Crisp Wall</span
                          ></a
                        >
                        - Holds 90 packets Mixture of popular Crisp brands and
                        flavours. (additional packs can be added on at your
                        request)
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="has-text-centered">
              <p class="pt-6">
                Get details and pricing on our Personal Touch Package and The
                Ultimate All Day Package by entering your details below:
              </p>

              <p class="pt-6">
                Have a Question or don’t have a date/venue set yet? Get in touch
                Here and we can provide you with some provisional Quote
                Information
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

    async function randomFlavour() {}

    return {
      randomNumber,
      randomFlavour,
      randomFlavourText,
    };
  },
};
</script>

<style scoped>
<style scoped > .center,
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

@media (min-width: 768px) {
  .video {
    width: 100%; /* Ensure the container is full-width */
    overflow: hidden; /* Hide overflow to force cropping */
  }

  .image video {
    width: 100%; /* Stretches across full width */
    height: 60vh; /* Fixed height for wide crop */
    object-fit: cover; /* Crops instead of shrinking */
    object-position: center 30%; /* Adjust vertical position */
    position: relative;
    overflow: hidden;
  }
}

@media (max-width: 768px) {
  .mobileImage {
    margin-left: -3rem;
    margin-right: -3rem;
  }

  .image video {
    display: block; /* Removes extra space under the video */
    width: 100vw; /* Makes it full width */
    max-width: 100%; /* Prevents overflow on desktop */
    height: auto; /* Keeps aspect ratio */
    object-fit: cover; /* Ensures no white bars */
  }
}
</style>
