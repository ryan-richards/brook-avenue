<template>
  <div class="wrapper">
    <div class="container">
      <div class="columns">
        <div class="column content has-text-left">
          <div class="title">Pricing.</div>
          <div class="subtitle">Enter your details to generate quote.</div>
          <form name="Quote">
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
                <span>I agree to marketing permissons, contact me by email.</span>
            </label>
          </form>
        </div>
        <div class="column center has-text-left">
          <div class="block">
            <div class="block">
              <div class="title">Estimated Quote</div>
              <div v-if="guests" class="title">£ {{ Math.round(270 + guests * 1.5) }} </div>
              <div v-else class="title">£ 0</div>

              <div class="subtitle mt-4 mb-0">
                Quote includes travel within 20 miles of Belfast.
              </div>
              <div class="subtitle mt-2">
                For an exact quote, click below.
              </div>
            </div>

            <div class="field is-grouped">
              <div class="control">
                <button
                  @click="handleSubmit(), (isActive = !isActive)"
                  title="Enter your email"
                  type="submit"
                  class="button"
                  :disabled="!email"
                >
                  Check my date
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
    </div>
</template>



<script>
import { ref } from "vue";
import { supabase } from "../supabase";

export default {
  el: "#Quote",
  data() {
    return {
      guests: null,
      isActive: false,
    };
  },
  setup() {
    const email = ref("");
    const venue = ref("");
    const guests = ref("");
    const date = ref("");

    const handleSubmit = async () => {
      try {
        const { data, error } = await supabase.from("new-inquiries").insert([
          {
            email: email.value,
            venue: venue.value,
            guests: guests.value,
            date: date.value,
          },
        ]);
        if (error) throw error;
      } catch (error) {
        alert(error.error_description || error.message);
      }
    };
    return {
      email,
      venue,
      guests,
      date,
      handleSubmit,
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

.title {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

.label{
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

span {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>