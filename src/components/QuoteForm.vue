<template>
  <div class="wrapper">
    <div class="container" style="max-width: 60vh">
      <div class="center">
        <div>
          <div class="title">Pricing.</div>
          <div class="subtitle">Enter your details to generate quote.</div>
        </div>
      </div>

      <div>
        <iframe
          height="840"
          style="min-width: 100%; max-width: 600px; border: 0"
          id="sn-form-czija"
          src="https://app.studioninja.co/contactform/parser/0a800fc9-9234-1d0f-8192-425937cd6c78/0a800fc9-9234-1d0f-8192-425937fe6c7a"
          allowfullscreen
        >
        </iframe>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, watch } from "vue";
import { track } from "@logsnag/vue";

export default {
  el: "#Quote",
  data() {
    return {
      guests: null,
      isActive: false,
    };
  },
  setup() {
    const disableButton = ref(false);
    const dataSuccess = ref(false);
    const emailSuccess = ref(false);
    const loading = ref(false);
    const name = ref("");
    const email = ref("");
    const venue = ref("");
    const guests = ref("");
    const date = ref("");

    watch([dataSuccess, emailSuccess], (currentValue, oldValue) => {
      if (dataSuccess && emailSuccess) {
        loading.value = false;
        disableButton.value = true;
      }
    });

    const handleSubmit = async () => {
      try {
        loading.value = true;
        dataSuccess.value = true;
        sendLogSnagEvent();
      } catch (error) {
        alert(error.error_description || error.message);
      }
    };

    const sendLogSnagEvent = async () => {
      track({
        channel: "quote",
        event: `Quote Request - ${name.value}`,
        icon: "📧",
        notify: true,
        description: `Quote requested by ${name.value} at ${venue.value} for ${guests.value} guests on ${date.value} - ${email.value}`,
        tags: {},
      });
      track({
        channel: "backup",
        event: `Quote Request - ${name.value}`,
        icon: "📧",
        notify: false,
        description: `Quote requested by ${name.value} at ${venue.value} for ${guests.value} guests on ${date.value} - ${email.value}`,
        tags: {
          recipient: email.value,
          venue: venue.value,
          guests: guests.value,
          date: date.value,
        },
      });
    };

    return {
      name,
      email,
      venue,
      guests,
      date,
      loading,
      dataSuccess,
      emailSuccess,
      disableButton,
      handleSubmit,
      sendLogSnagEvent,
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

.label {
  font-weight: 500;
}
</style>
