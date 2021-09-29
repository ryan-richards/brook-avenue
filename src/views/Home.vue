<template>
  <div>
    <div class="hero halfHome home"></div>

    <div class="buttons center" style="margin-top: -1rem">
      <router-link to="/pricing">
        <div class="button">
          <p style="font-size: 1.2em; font-weight: 500">Get Quote</p>
        </div>
      </router-link>
    </div>

    <div class="block pt-5">
      <div class="center pb-6">
        <div
          class="title has-text-centered headingBlock"
          style="font-weight: 800; font-size: 1.6em"
        >
          Homemade gelato for your wedding
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
        </div>
      </div>

      <div class="center">
        <div class="image pt-6">
          <img src="../assets/brookBW-1.webp" alt="" style="max-width: 80vh" />
        </div>
      </div>

      <div class="center pt-6">
        <div
          class="title has-text-centered headingBlock"
          style="font-weight: 800; font-size: 1.6em"
        >
          Book a bicycle-cart, filled to the brim with artisan gelato.
        </div>
      </div>
      <div class="center">
        <div class="has-text-left pt-6" style="max-width: 60vh">
          <p>
            Our custom built carts have deliveried artisan gelato flavours to wedding guests across Northern Ireland. Wether your wedding is at a hotel, boujee barn or cosy back garden we can be there to serve a special treat to your guests. 
          </p>
        </div>
      </div>
    </div>

    <div class="center">
        <div class="image pt-4 pb-6">
          <img src="../assets/brook-cart.webp" alt="" style="max-width: 80vh" />
        </div>
    </div>

    <div
      class="columns is-gapless mb-0"
      style="margin-left: -2rem; margin-right: -2rem"
    >
      <div class="column mb-0 splitBlocks">
        <router-link to="/about">
          <div class="hero halfSplit block1">
            <div class="hero-body center">
              <div class="title p-4 has-text-white" style="font-size: 4em">
                Our Story
              </div>
            </div>
          </div>
        </router-link>
      </div>
      <div class="column mb-0 splitBlocks">
        <router-link to="/pricing">
          <div class="block2">
            <div class="hero halfSplit">
              <div class="hero-body center">
                <div class="title p-4 has-text-white" style="font-size: 4em">
                  Pricing
                </div>
              </div>
            </div>
          </div>
        </router-link>
      </div>
    </div>

    <Test
      style="margin-bottom: -2rem"
      subtitle="Thank you so much for keeping all of our guests (and my hubby) fuelled with your delicious ice cream !"
      person="@stephorr2021"
    />

    <Test
      style="margin-bottom: -2rem"
      subtitle="Thank you so much! We were delighted to have you come along to help us celebrate. It was absolutely delicious....I'm very glad I got to try every flavour! Our guests haven't stopped talking about it since!"
      person="@thekatspyjamasni"
    />

    <hr />

    <div class="container has-text-centered pb-6" style="max-width: 60vh">
      <div
        class="subtitle mb-1 has-text-centered"
        style="font-weight: 800; font-size: 1.4rem"
      >
        Follow Along
      </div>
      <a href="https://www.instagram.com/brookavenue/">@brookavenue</a>
      <div class="columns pl-3 pr-3 pt-4 is-mobile">
        <div class="column">
          <img class="square" src="../assets/insta-1-min.jpeg" alt="" />
        </div>
        <div class="column">
          <img class="square" src="../assets/insta-2-min.jpeg" alt="" />
        </div>
        <div class="column">
          <img class="square" src="../assets/insta-3-min.jpeg" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Quote from "../components/Quote.vue";
import Content from "../components/Content.vue";
import { useHead } from "@vueuse/head";
import Test from "../components/Test.vue";

export default {
  components: {
    Quote,
    Content,
    Test,
  },
  data() {
    return {
      isActive: false,
    };
  },
  methods: {
    flavours() {
      console.log("fired");
      this.isActive = !this.isActive;
    },
  },
  setup() {
    useHead({
      title: "Home",
      meta: [
        {
          name: "description",
          content:
            "Brook Avenue homemade gelato ice cream cart, for hire across Northern Ireland.",
        },
      ],
    });
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

.block {
  text-align: left;
}

.image {
  object-fit: cover;
}

.button {
  color: whitesmoke;
  background-color: rgb(119, 139, 121);
}

.control.has-icons-left .input,
.control.has-icons-left .select select {
  padding-left: 2em;
}

.headingBlock {
  max-width: 500px;
}

.container {
  margin-top: 2rem;
}

a {
  color: rgb(60, 102, 72);
}

.button {
  border-radius: 0;
  outline-color: transparent;
}

.button:hover {
  background-color: rgb(185, 185, 185);
  color: black;
}

.halfHome {
  height: 80vh;
}

.halfSplit {
  overflow: hidden;
  height: 80vh;
  box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.288);
}

.square {
  object-fit: cover;
  width:150px;
  height: 150px;
}

.splitBlocks {
  overflow: hidden;
}

.block1 {
  background: black url("../assets/brook-9.webp") center / cover;
  margin-left: -3rem;
  margin-right: -3rem;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  transition: all 0.5s;
  font-size: 16px;
}

.block2 {
  background: black url("../assets/brook-5.webp") center / cover;
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

.block2:hover {
  transform: scale(1.04);
}

.home {
  background: black url("../assets/brook-13.webp") center / cover;
  margin-left: -3rem;
  margin-right: -3rem;
}

@media (max-width: 1024px) {
  .home {
    background: black url("../assets/brook-13.webp") center / cover;
    margin-left: -3rem;
    margin-right: -3rem;
  }
}

@media (max-width: 768px) {
  .home {
    background: black url("../assets/brook-13.webp") center / cover;
    margin-left: -3rem;
    margin-right: -3rem;
  }

  .halfSplit {
    height: 50vh;
    box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.226);
  }

  .halfHome {
    height: 50vh;
  }
}
</style>
