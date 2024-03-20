<template>
  <div>
    <Banner />
    <div class="hero halfHome home"></div>

    <div class="pt-4"></div>

    <div class="block pt-6">
      <div class="center pb-4">
        <div
          class="title has-text-centered headingBlock"
          style="font-weight: 800; font-size: 1.6em"
        >
          Homemade gelato for your wedding
        </div>
      </div>

      <div class="buttons center pt-4 pb-5">
        <router-link to="/pricing">
          <div class="button">
            <p style="font-size: 1.2em; font-weight: 500">Get Quote</p>
          </div>
        </router-link>
      </div>

      <div class="center">
        <div class="has-text-left" style="max-width: 60vh">
          <p>
            If you're thinking of ways to add something special to your day,
            then say 'I do' to the freshest gelato you'll ever have. We provide
            bespoke homemade gelato for you and your guests served from our one
            of a kind custom built gelato cart.
          </p>
          <p class="pt-4">
            Keep guests occupied and entertained on arrival at your reception
            while you get your photos taken, or have us there as a fun surprise
            after your ceremony. We can even come along in the evening and cool
            your guests down after dancing all night.
          </p>
        </div>
      </div>

      <div class="center">
        <div class="image pt-6 mobileImage">
          <a href="https://www.agamarsh.co.uk" target="_blank">
            <img
              src="../assets/brook-cart-wide.jpg"
              alt="Ice cream/Gelato Bicycle Cart
            at Galgorm Ballymena Northern Ireland. Mint green bicycle with floral
            wedding basket and cart setup infront of Phantom house at Galgorm
            wedding venue."
              style="max-width: 80vh"
            />
          </a>
        </div>
      </div>

      <div class="center pt-6">
        <div
          class="title has-text-centered headingBlock"
          style="font-weight: 800; font-size: 1.6em"
        >
          Book a bicycle-cart, filled to the brim with artisan gelato
        </div>
      </div>
      <div class="center">
        <div class="has-text-left pt-6" style="max-width: 60vh">
          <p>
            Many years of experimenting and perfecting our recipes means we've
            grown a long
            <a
              style="text-decoration: underline"
              href="https://yptpiheqktfmeoisgtea.supabase.co/storage/v1/object/sign/avatars/Brook%20Avenue%20FLAVOUR%20LIST%202023%20portrait.pdf?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhdmF0YXJzL0Jyb29rIEF2ZW51ZSBGTEFWT1VSIExJU1QgMjAyMyBwb3J0cmFpdC5wZGYiLCJpYXQiOjE2ODY4NTE2MTUsImV4cCI6MTcxODM4NzYxNX0.HcYRLF98bj6N2xIj-7liy2QRuExZI8vgC9d35IBQ8gE&t=2023-06-15T17%3A53%3A35.661Z"
              target="_blank"
              >list of flavours</a
            >. You and your partner get to choose four flavours from this list
            or go rogue and create your own.
          </p>
          <p class="pt-4">
            Our custom built carts have scooped artisan gelato to wedding guests
            across Northern Ireland & parts of Ireland. Whether your wedding is
            at a hotel, rustic barn or in a cosy back garden we are the perfect
            addition to any setting.
          </p>
          <p class="pt-4">
            <router-link to="/pricing" style="text-decoration: underline"
              >Find our pricing here.</router-link
            >
          </p>
        </div>
      </div>
    </div>

    <div class="center">
      <div class="image pt-4 pb-4 mobileImage">
        <a href="https://www.sheenatphotography.com" target="_blank">
          <img
            src="../assets/brookBW-1.jpg"
            alt="Black and Whire photo of homemade gelato in a personalised tub with personalised wafer at Galgorm Resort and Spa wedding venue."
            style="max-width: 80vh"
          />
        </a>
      </div>
    </div>

    <div class="center mb-6">
      <Award
        img="https://creativeoceanicblog.wordpress.com/wp-content/uploads/2024/01/8th-niwa-24.jpg?w=833"
        text="Outstanding Wedding Supplier of the Year"
        person="Northern Ireland Wedding Awards"
      />
    </div>

    <div
      class="columns is-gapless mb-0"
      style="margin-left: -2rem; margin-right: -2rem"
    >
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
    </div>

    <div class="center">
      <div id="test" class="test">
        <div class="test_item">
          <div>
            <Test
              style="margin-bottom: -2rem"
              subtitle="Brook Avenue added such a special element to our day. The sun was shining and everyone loved getting an Ice-cream. The girls were so friendly, the Icecream was DELICIOUS. Being a covid bride I had many reschedules and Naomi was always so accommodating and lovely. Honestly couldn’t recommend enough to add a special something to your special occasion."
              person="Carla A."
            />
          </div>
        </div>

        <div class="test_item">
          <div>
            <Test
              style="margin-bottom: -2rem"
              subtitle="Totally couldn’t recommend Brook Avenue enough! Naomi was so easy to communicate with and the ice cream went down a treat in the heat at our wedding in June! I was so glad we decided to give our guests this surprise as it is a fab idea!! Plus the ice cream was AMAZING!! The cart is so beautiful and totally matched our vibe!! Thanks again for everything!
Mr and Mrs Sharvin xo"
              person="Lisa S."
            />
          </div>
        </div>

        <div class="test_item">
          <div>
            <Test
              style="margin-bottom: -2rem"
              subtitle="Thank you so much for keeping all of our guests (and my hubby) fuelled with your delicious ice cream !"
              person="@stephorr2021"
            />
          </div>
        </div>

        <div class="test_item">
          <div>
            <Test
              style="margin-bottom: -2rem"
              subtitle="Thank you so much! We were delighted to have you come along to help us celebrate. It was absolutely delicious....I'm very glad I got to try every flavour! Our guests haven't stopped talking about it since!"
              person="@thekatspyjamasni"
            />
          </div>
        </div>

        <div class="test_item">
          <div>
            <Test
              style="margin-bottom: -2rem"
              subtitle="So glad we booked Brook Avenue for our wedding. A last minute addition, we were very lucky that they had availability! We ended up getting married on the hottest day ever recorded in N.I. and our guests were so grateful for an ice cream while sitting out enjoying the sunshine! The flavours were to die for, with white chocolate kinder bueno being the absolute winner 😍 Thank you so, so much for the fantastic service, amazing ice cream and professional communication throughout!"
              person="Karis B."
            />
          </div>
        </div>

        <div class="test_item">
          <div>
            <Test
              style="margin-bottom: -2rem"
              subtitle="100% recommend! This was the nicest touch to our day the guests loved it! The flavours were amazing and the whole set up was perfect! Thank you again so much!"
              person="Megan G."
            />
          </div>
        </div>

        <div class="test_item">
          <div>
            <Test
              style="margin-bottom: -2rem"
              subtitle="A perfect after wedding ceremony treat! Presented beautifully with fabulous staff! Highly recommend booking Brook Avenue! All of our guests commented on how lovely their ice cream was! I loved the extra touch of “Just Married” on the ice cream tubs l! 💕"
              person="Sophie McN."
            />
          </div>
        </div>

        <div class="test_item">
          <div>
            <Test
              style="margin-bottom: -2rem"
              subtitle="Brook Avenue attended our after wedding BBQ at Rossharbour. They were great!
The guests absolutely loved the gelato. It was so tasty!! They went over and above and catered to our needs. Couldn't recommend them enough!"
              person="Lisa H."
            />
          </div>
        </div>
      </div>
    </div>

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
          <img
            class="square"
            src="../assets/insta-1-min.jpeg"
            alt="Instagram photo of ice cream tub with just married stamp setup at Castle Leslie Northern Ireland, County Monaghan, Bride and Groom looking at each other in background."
          />
        </div>
        <div class="column">
          <img
            class="square"
            src="../assets/insta-2-min.jpeg"
            alt="Instagram photo at Castle Leslie Northern Ireland, County Monaghan. White ice cream cart, with ivy and rose garland setup with mint green bike and floral wedding flowers and custom flavour ice cream chalkboard."
          />
        </div>
        <div class="column">
          <img
            class="square"
            src="../assets/insta-3-min.jpeg"
            alt="Instagram photo of ice cream tub at Riverdale Barn, Moira wedding venue Northern Ireland."
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useHead } from "@vueuse/head";
import Test from "../components/Test.vue";
import Banner from "../components/Banner.vue";
import Award from "../components/Award.vue";

export default {
  components: {
    Award,
    Test,
    Banner,
  },
  data() {
    return {
      isActive: false,
    };
  },
  methods: {
    flavours() {
      this.isActive = !this.isActive;
    },
  },
  setup() {
    useHead({
      title: "Brook Avenue Gelato Cart Hire Belfast Northern Ireland.",
      meta: [
        {
          name: "title",
          content: "Brook Avenue Gelato Cart Hire Belfast Northern Ireland.",
        },
        {
          name: "description",
          content:
            "Brook Avenue homemade gelato ice cream cart for weddings, available for hire across Northern Ireland. Based in Belfast, we make artisan gelato ice cream fresh for every wedding or coroprate/private events. Our Quirky custom build ice cream cart is a fantastic alternative to hiring an ice cream van.",
        },
        {
          name: "og:type",
          content: "website",
        },
        {
          name: "og:url",
          content: "https://brookavenue.co.uk",
        },
        {
          name: "og:title",
          content: "Brook Avenue Gelato Cart Hire Belfast Northern Ireland.",
        },
        {
          name: "og:description",
          content:
            "Brook Avenue homemade gelato ice cream cart for weddings, available for hire across Northern Ireland.",
        },
        {
          name: "og:image",
          content: "https://brookavenue.co.uk/assets/brook-hero-1.jpg",
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
  border-radius: 10;
  outline-color: transparent;
}

.button:hover {
  background-color: rgb(123, 134, 124);
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
  width: 140px;
  height: 140px;
}

.splitBlocks {
  overflow: hidden;
}

.block1 {
  background: black url("../assets/brook-9.jpg") center / cover;
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
  background: black url("../assets/brook-hero-1-min.jpg") center / cover;
  margin-left: -3rem;
  margin-right: -3rem;
}

/* test scoll snapping */
.test {
  display: flex;
  max-width: 450px;
  overflow-x: auto;
  overflow-y: hidden;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  scroll-padding: 0rem;
  padding: 0rem;
}

#test::-webkit-scrollbar {
  display: none;
}

.test_item {
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 0 0 450px;
  scroll-snap-align: start;
  font-size: 1.5rem;
}

@media (max-width: 1024px) {
  .home {
    background: black url("../assets/brook-hero-1-min.jpg") center / cover;
    margin-left: -3rem;
    margin-right: -3rem;
  }
}

@media (max-width: 768px) {
  .home {
    background: black url("../assets/brook-hero-1-min.jpg") center / cover;
    margin-left: -3rem;
    margin-right: -3rem;
  }

  .mobileImage {
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

  .test {
    display: flex;
    max-width: 350px;
    overflow-x: auto;
    overflow-y: hidden;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
    scroll-padding: 0rem;
    padding: 0rem;
  }

  #test::-webkit-scrollbar {
    display: none;
  }

  .test_item {
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 0 0 350px;
    scroll-snap-align: start;
    font-size: 1.5rem;
  }
}
</style>
