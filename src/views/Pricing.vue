<template>
  <div class="navMargin">
    <div class="pt-6"></div>

    <Content>
      <template v-slot:title>
        <div class="title">Wedding Pricing</div>
      </template>

      <template v-slot:subtitle>
        <div class="subtitle"></div>
      </template>

      <template v-slot:content>
        <div>
          <p>
            Welcome to Brook Avenue. We're here to add a unique touch of gelato
            magic to your special day as a treat for you and your guests.
          </p>
          <p>
            Looking for a way to make your event unique, special and super
            tasty? There's no better way to celebrate your special day than to
            offer your guests the best bespoke gelato in Northern Ireland.
          </p>
          <p>
            We have an endless list of flavours...Why? Well because we make our
            own gelato we can pretty much make any flavour you'd like, so don't
            be shy, just ask!
          </p>
        </div>
      </template>

      <template v-slot:button>
        <router-link class="button" to="/pricing#quoteform"
          >Generate Quote</router-link
        >
      </template>

      <template v-slot:image>
        <img
          src="https://brookavenue.files.wordpress.com/2019/10/64b3aeff-2edb-4777-bd23-16a4f8563500.jpg?w=720"
          class="src"
        />
      </template>
    </Content>

    <div class="container pt-6 pb-6">

      <hr />
    </div>

    <ContentFlavour>
      <template v-slot:title>
        <div class="title">Pick some flavours.</div>
      </template>

      <template v-slot:subtitle>
        <div class="subtitle">Endless possibilities</div>
      </template>

      <template v-slot:content>
        <div>
          <p>
            Booking one of our three gelato carts couldnt be easier. Once your
            date is confirmed, it's time to pick your flavours!
          </p>
          <p class="pt-1">
            Have some fun and use the randomise button below to explore some of our artisan flavours! Or get in touch to get full list of all our current flavour suggestions. 
          </p>
          <div class="buttons">
            <div class="button" @click="randomise">
              <p>Randomise</p>
            </div>
          </div>
        </div>
      </template>
      <template v-slot:contentRight>
        <div class="block blob has-text-centered">
          <transition-group name="list" appear>
          <ul v-for="flavour in flavourList" :key="flavour.id" style="list-style: none; margin-left: 0">
            <li>{{ flavour.Flavours }}</li>
          </ul>
          </transition-group>
        </div>
      </template>
    </ContentFlavour>
    <div class="container pt-6 pb-6">
      <hr />
    </div>

    <Content>
      <template v-slot:title>
        <div class="title">What's included?</div>
      </template>

      <template v-slot:subtitle>
        <div class="subtitle"></div>
      </template>

      <template v-slot:content>
        <div>
          <div class="pt-2" style="margin-bottom: -2rem">
            <p>As Standard:</p>
            <ul>
              <li>Choice of 4 gelato flavours</li>
              <li>Plain & Luxury waffle cones</li>
              <li>'Just Married' gelato tubs</li>
              <li>2hrs of scooping service</li>
              <li>Travel within 20 miles of Belfast</li>
            </ul>
            <div>
              <p>Optional Extras:</p>
              <ul>
                <li>Personalised wafer disks</li>
                <li>Personalised gelato tubs</li>
                <li>Cadbury's Flakes</li>
              </ul>
            </div>
          </div>
        </div>
      </template>

      <template v-slot:image>
        <img
          src="https://brookavenue.files.wordpress.com/2019/10/3bc4264d-8e87-4477-8d47-441e1f5afa67.jpg?w=1024"
          class="src"
        />
      </template>
    </Content>

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
import Content from "../components/Content.vue";
import { useHead } from "@vueuse/head";
import ContentFlavour from "../components/ContentFlavour.vue";
import { ref, onMounted } from "vue";
import { supabase } from "../supabase";

export default {
  components: {
    QuoteForm,
    Content,
    ContentFlavour,
  },
  setup() {
    const randomList = ref([]);
    const randomNumber = ref("");
    const flavourList = ref([])

    useHead({
      title: "Pricing",
      meta: [
        {
          title: "description",
          content: "Pricing information page",
        },
      ],
    });

    async function randomise() {
      randomList.value = [];
      for (let i = 0; i < 4; i++) {
        randomNumber.value = Math.floor(Math.random() * 60 + 1);
        if(randomList.value.includes(randomNumber.value)){
          randomNumber.value = Math.floor(Math.random() * 60 + 1);
          randomList.value.push(randomNumber.value);
        } else {
          randomList.value.push(randomNumber.value);
        }
      }
      let { data, error } = await supabase
      .from('flavours')
      .select('*')
      .in('id', randomList.value)
      flavourList.value = data
    }

    onMounted(() => {
     randomise()
    })

    return {
      randomList,
      randomNumber,
      randomise,
      flavourList,
    }



  },
};
</script>

<style>
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

.blob {
  background-color: rgba(238, 188, 227, 0.664);
  padding: 8%;
  border-radius: 41% 59% 69% 31% / 51% 34% 66% 49%;
}
</style>