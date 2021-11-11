<template>
  <div class="wrapper">
    <div class="container" style="max-width:60vh;">
          <div class="center">
            <div>
          <div class="title">Pricing.</div>
          <div class="subtitle">Enter your details to generate quote.</div>
            </div>

          </div>

          <form name="Quote" class="has-text-left pt-5">
            <div class="field">
              <label class="label">Email</label>
              <div class="control">
                <input
                  class="input"
                  name="email"
                  type="email"
                  placeholder="hello@email.com"
                  v-model="email"
                />
              </div>
            </div>
            <div class="field">
              <label class="label">Venue</label>
              <div class="control">
                <input
                  class="input"
                  name="venue"
                  type="text"
                  placeholder="Venue"
                  v-model="venue"
                />
              </div>
            </div>
            <div class="field">
              <label class="label">Event Date</label>
              <div class="control">
                <input
                  class="input"
                  name="date"
                  type="date"
                  placeholder="Date"
                  v-model="date"
                />
              </div>
            </div>
            <div class="field">
              <label class="label">Number of Guests</label>
              <div class="control">
                <input
                  class="input"
                  name="guests"
                  type="number"
                  placeholder="120"
                  v-model="guests"
                />
              </div>
            </div>
            <label class="checkbox">
                <input type="checkbox" required>
                <span> I agree to marketing permissons, contact me by email.</span>
            </label>
          </form>

        <div class="pt-6 has-text-left">
          <div class="block">
            <div class="block">
              <div class="title">Estimated Quote</div>
              <div v-if="guests" class="title">£ {{ Math.round(270 + guests * 1.5) }} </div>
              <div v-else class="title">£ 0</div>

              <div class="subtitle mt-4 mb-0">
                Quote includes travel within 20 miles of Belfast.
              </div>
              <div class="subtitle mt-2">
                To register your interest, request a date check and personalised quote click below.
              </div>
            </div>

            <div class="field is-grouped">
              <div class="control">
                <button
                  @click="handleSubmit(), (isActive = !isActive), sendData()"
                  title="Enter your email"
                  type="submit"
                  class="button"
                  :disabled="!email || disableButton"
                  v-bind:class="{ isLoading: loading }"
                >
                  Submit Request
                </button>
              </div>
            </div>
          </div>
        </div>

        <div
          class="modal p-6"
          v-bind:class="{ 'is-active': isActive, 'toggle-off': !isActive }"
        >
            <div class="modal-background"></div>
            <div class="modal-card">
              <header class="modal-card-head">
                <p class="modal-card-title">Thank You</p>
                <button class="delete" @click="isActive = !isActive" aria-label="close"></button>
              </header>
              <section class="modal-card-body">
                <p>We will be in touch soon with a personalised quote and to let you know if your date is available.</p>
              </section>
              <footer class="modal-card-foot">
              </footer>
            </div>
          </div>
        </div>
      </div>
</template>



<script>
import { ref, watch } from "vue";
import { supabase } from "../supabase";
import axios from 'axios';

export default {
  el: "#Quote",
  data() {
    return {
      guests: null,
      isActive: false,
    };
  },
  setup() {
    const disableButton = ref(false)
    const dataSuccess = ref(false)
    const emailSuccess = ref(false)
    const loading = ref(false)
    const email = ref("");
    const venue = ref("");
    const guests = ref("");
    const date = ref("");

  watch([dataSuccess, emailSuccess], (currentValue, oldValue) => {
      if (dataSuccess && emailSuccess){
        loading.value = false
        disableButton.value = true
      }
    });

    const handleSubmit = async () => {
      try {
        loading.value= true
        const { data, error } = await supabase.from("new-inquiries").insert([
          {
            recipient: email.value,
            venue: venue.value,
            guests: guests.value,
            date: date.value,
          },
        ]);
        if (error) throw error;
      } catch (error) {
        alert(error.error_description || error.message);
      } finally {
        dataSuccess.value = true
      }
    };

    const sendData = async ()=> {
      try{
       loading.value = true
      axios.post(`https://express-mailer-ryanrichards.vercel.app/api/email_api`,{recipient:email.value,date:date.value,guests:guests.value,venue:venue.value},).then(response => {
      })
      } catch {
        console.log(response.error)
      } finally {
        emailSuccess.value = true
      } 
    }

    return {
      email,
      venue,
      guests,
      date,
      loading,
      dataSuccess,
      emailSuccess,
      disableButton,
      handleSubmit,
      sendData
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

.wrapper {
  padding-bottom: 5rem;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.title.sans {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

span {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

.label{
  font-weight:500;
}
</style>