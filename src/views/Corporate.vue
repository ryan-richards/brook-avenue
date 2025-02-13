<template>
  <div class="navMargin">
    <ContentBody>
      <template v-slot:content>
        <div class="block pt-5 pb-5">
          <div class="center">
            <div class="image mobileImage">
              <img
                src="../assets/brook-cart-corp.png"
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
                Boost Your Next Corporate Event with Brook Avenue!
              </div>
              <div class="subtitle">Guide to booking your gelato cart.</div>
            </div>
          </div>

          <div class="center">
            <div class="has-text-left" style="max-width: 70vh">
              <p class="mb-1">
                Looking for a unique way to energise your team, impress clients,
                or celebrate a company milestone? Brook Avenue brings delicious,
                handcrafted treats directly to your office or event venue.
              </p>
              <p class="mb-1">
                Brook Avenue offers homemade gelato in our custom built Gelato
                Carts, Mini Dutch Style Pancakes as well as Candy & Crisp walls!
              </p>

              <div class="notification mt-6 mb-6">
                <p class="is-size-5 mb-4 has-text-left">
                  Contact us today for a personalised quote!
                </p>
                <div class="has-text-left">
                  <a @click="scrollToForm" class="button is-dark is-outlined"
                    >Enquire now</a
                  >
                </div>
              </div>

              <div class="center">
                <div class="image mobileImage video">
                  <a href="https://cinematiclove.co.uk/">
                    <video
                      src="../assets/corp-video.mp4"
                      autoplay
                      loop
                      muted
                      playsinline
                    ></video>
                  </a>
                </div>
              </div>

              <div class="box mt-6">
                <div
                  class="title has-text-centered headingBlock"
                  style="font-weight: 800; font-size: 1.6em"
                >
                  We offer
                </div>
                <div class="columns">
                  <div class="column">
                    <ul style="list-style-type: circle">
                      <li>
                        Customisable flavors and branding to match your company
                      </li>
                      <li>
                        Flexible packages to suit your budget and event size
                      </li>
                      <li>
                        Professional service with setup and cleanup included
                      </li>
                      <li>
                        Options for dietary needs (vegan, gluten-free, etc.)
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <!-- Perfect For Section -->

              <div class="box">
                <div
                  class="title has-text-centered headingBlock"
                  style="font-weight: 800; font-size: 1.6em"
                >
                  Perfect for
                </div>
                <div class="columns is-multiline">
                  <div class="column is-half">
                    <ul style="list-style-type: circle">
                      <li>Team building days</li>
                      <li>Product launches</li>
                      <li>Office parties</li>
                      <li>Staff morale boost</li>
                    </ul>
                  </div>
                  <div class="column is-half">
                    <ul style="list-style-type: circle">
                      <li>Film and TV production shoot treats</li>
                      <li>Client appreciation events</li>
                      <li>Staff Treat Day</li>
                      <li>Conferences</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="center">
          <div class="notification mt-4 mb-6">
            <p class="is-size-5 mb-4 has-text-left">
              Download our products, services, packages and pricing brochure.
            </p>
            <div class="has-text-left">
              <a href="#" class="button is-dark is-outlined">Coming soon</a>
            </div>
          </div>
        </div>

        <div class="center mb-6">
          <div class="image mobileImage">
            <img
              src="../assets/pancake-corp.png"
              class="image-crop"
              alt="Ice cream/Gelato Bicycle Cart at Galgorm Ballymena Northern Ireland. Mint green bicycle with floral wedding basket and cart setup infront of Phantom house at Galgorm wedding venue."
              style="max-width: 80vh"
            />
          </div>
        </div>

        <!-- Contact Form with ref -->
        <div ref="enquiryForm" class="wrapper">
          <div class="container" style="max-width: 60vh">
            <div class="center">
              <div>
                <div class="title">Enquire now.</div>
                <div class="subtitle">
                  Enter your details and we'll be in touch.
                </div>
              </div>
            </div>

            <div style="overflow: hidden">
              <iframe
                height="1279"
                style="min-width: 100%; max-width: 600px; border: 0"
                id="sn-form-ljtl1"
                src="https://app.studioninja.co/contactform/parser/0a800fc8-9498-1332-8194-9984287d52f9/0a800fc8-9498-1332-8194-a8e690c17e29"
                allowfullscreen
              >
              </iframe>
            </div>
          </div>
        </div>

        <!-- Testimonials -->
        <TestimonialSection :testimonials="testimonials" />
      </template>
    </ContentBody>
  </div>
</template>

<script>
import QuoteForm from "../components/QuoteForm-clone.vue";
import { useHead } from "@vueuse/head";
import ContentBody from "../components/ContentBody.vue";
import TestimonialSection from "../components/TestimonialSection.vue";
import { ref } from "vue";

export default {
  components: {
    QuoteForm,
    TestimonialSection,
    ContentBody,
  },
  setup() {
    const enquiryForm = ref(null);

    const scrollToForm = () => {
      enquiryForm.value?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    };

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

    return {
      enquiryForm,
      scrollToForm,
      testimonials: [
        {
          text: "Thank you so much for being at our event last week, I've heard only great things and we were happy to have Brook Avenue there! Thanks so much again, and I'm sure we'll see you again in the near future",
          author: "Callow Events",
          url: "https://callowevents.com",
          image: "/api/placeholder/48/48", // Replace with actual image path
        },
        {
          text: "We just wanted to drop you a line to say thank you for joining us for our first mini market. It was a great night and the feedback has been amazing. We really appreciated you partnering with us on this trial market and we are pleased to say following the success, we will run another pre Christmas.",
          author: "The Boulevard",
          url: "https://theboulevardbanbridge.com",
          image: "/api/placeholder/48/48",
        },
        {
          text: "I just wanted to thank you for all of your hard work and delicious food on Thursday, everyone was raving about the pancakes!",
          author: "Smarts Agency",
          url: "https://smartsagency.com",
          image: "/api/placeholder/48/48",
        },
        {
          text: "Thank you for an amazing service yesterday - the guys were incredible and provided such a brilliant experience for all the customers. The hotel owners were delighted and the ice cream was out of this world - the Veda was quite easily the nicest ice cream I have tasted!",
          author: "Donnchadh, Booka, Whistledown Hotel",
          url: "https://whistledownhotel.com",
          image: "/api/placeholder/48/48",
        },
        {
          text: "I want to say a big thank you for participating in our Embrace a Giant Spirit Northern Ireland Showcase event with Tourism Northern Ireland. The gelato was absolutely gorgeous, I now need to try everything else on the menu!",
          author: "PLANND",
          url: "https://plannd.co.uk",
          image: "/api/placeholder/48/48",
        },
        {
          text: "It was great to meet some of the team on Monday – we've had lots of lovely feedback from employees! I opted for Caramel Choc Brownie, delicious!",
          author: "Belfast International Airport",
          url: "https://belfastairport.com",
          image: "/api/placeholder/48/48",
        },
        {
          text: "It was a pleasure working with you and your nice family. Ice creams were a success… much more than expected! I hope we will be able to work together again. All the best!",
          author: "W.L. Gore & Associates (UK) Ltd.",
          url: "https://www.gore.com",
          image: "/api/placeholder/48/48",
        },
      ],
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

.card {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.card-content {
  flex-grow: 1;
}

.content {
  margin-bottom: 1.5rem;
}

@media (min-width: 768px) {
  .video {
    width: 100%; /* Ensure the container is full-width */
    overflow: hidden; /* Hide overflow to force cropping */
  }

  .image video {
    width: 100%; /* Stretches across full width */
    height: 50vh; /* Fixed height for wide crop */
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
