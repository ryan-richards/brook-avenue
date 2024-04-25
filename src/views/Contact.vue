<template>
  <div class="navMargin pt-6">
    <div class="wrapper pb-6">
      <div class="container">
        <div class="columns">
          <div class="column content has-text-left">
            <div class="title">Contact</div>
            <div class="subtitle">
              Enter your details, and we will get back to you as soon as
              possible!
            </div>
            <form v-on:submit.prevent="handleSubmit" name="contact">
              <div class="field">
                <label class="label">Name</label>
                <div class="control">
                  <input
                    class="input"
                    name="name"
                    type="text"
                    placeholder="Your Name"
                    v-model="name"
                    required
                  />
                </div>
              </div>
              <div class="field">
                <label class="label">Email</label>
                <div class="control">
                  <input
                    class="input"
                    name="email"
                    type="email"
                    placeholder="hello@email.com"
                    v-model="email"
                    required
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
                <label class="label">Message</label>
                <textarea
                  class="textarea"
                  placeholder="Your message"
                  rows="5"
                  v-model="message"
                ></textarea>
              </div>

              <div class="field is-grouped">
                <div class="control">
                  <button
                    type="submit"
                    class="button"
                    :disabled="!email || disableButton"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>

            <div v-show="sent" class="pt-4">
              <p>Your message has been submitted, we will be in touch soon!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, watch } from "vue";
import { track } from "@logsnag/vue";
import { useHead } from "@vueuse/head";

export default {
  setup() {
    console.log("loaded setup");

    const email = ref("");
    const venue = ref("");
    const date = ref("");
    const name = ref("");
    const message = ref("");
    const sent = ref(false);

    const disableButton = ref(false);
    const dataSuccess = ref(false);
    const emailSuccess = ref(false);
    const loading = ref(false);

    useHead({
      title: "Contact - Brook Avenue Gelato Cart Hire Belfast",
      meta: [
        {
          title: "description",
          content:
            "Contact Brook Avenue Gelato, for more details or if you are interested in booking a gelato cart for your wedding day!",
        },
      ],
    });

    watch([dataSuccess, emailSuccess], (currentValue, oldValue) => {
      if (dataSuccess && emailSuccess) {
        loading.value = false;
        disableButton.value = true;
      }
    });

    const handleSubmit = async () => {
      sent.value = true;
      sendLogSnagEvent();
    };

    const sendLogSnagEvent = async () => {
      track({
        channel: "contact",
        event: `Contact Request - ${name.value}`,
        icon: "📧",
        notify: true,
        description: `Contact requested by ${name.value} at ${venue.value} on ${date.value} - ${email.value} - message : ${message.value}`,
        tags: {},
      });
      track({
        channel: "backup",
        event: `Contact Request - ${name.value}`,
        icon: "📧",
        notify: false,
        description: `Contact requested by ${name.value} at ${venue.value} on ${date.value} - ${email.value} - message : ${message.value}`,
        tags: {
          recipient: email.value,
          venue: venue.value,
          date: date.value,
          type: "contact",
        },
      });
      disableButton.value = true;
    };

    return {
      loading,
      disableButton,
      dataSuccess,
      emailSuccess,
      name,
      message,
      email,
      venue,
      date,
      handleSubmit,
      sent,
    };
  },
};
</script>
