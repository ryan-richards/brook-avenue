<template>
  <div class="section">
    <div class="center">
      <div class="mb-6">
        <div class="title">Testimonials.</div>
        <div class="subtitle">The inside scoop</div>
      </div>
    </div>
    <div ref="scrollContainer" class="testimonials-container">
      <div class="testimonials-track">
        <!-- Initial clone of last items -->
        <div
          v-for="(testimonial, index) in lastItems"
          :key="`last-${index}`"
          class="testimonial-slide"
        >
          <div
            class="card is-flex is-align-items-center is-justify-content-center"
            style="box-shadow: none; border: 1px solid #eee"
          >
            <div
              class="card-content is-flex is-align-items-center is-justify-content-center"
            >
              <div class="content has-text-centered">
                <p class="is-italic">{{ testimonial.text }}</p>
                <p class="has-text-weight-bold">
                  <a
                    v-if="testimonial.url"
                    :href="testimonial.url"
                    class="has-text-dark"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    - {{ testimonial.author }}
                  </a>
                  <span v-else>- {{ testimonial.author }}</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Main items -->
        <div
          v-for="(testimonial, index) in testimonials"
          :key="`main-${index}`"
          class="testimonial-slide"
        >
          <div
            class="card is-flex is-align-items-center is-justify-content-center"
            style="box-shadow: none; border: 1px solid #eee"
          >
            <div
              class="card-content is-flex is-align-items-center is-justify-content-center"
            >
              <div class="content has-text-centered">
                <p class="is-italic">{{ testimonial.text }}</p>
                <p class="has-text-weight-bold">
                  <a
                    v-if="testimonial.url"
                    :href="testimonial.url"
                    class="has-text-dark"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    - {{ testimonial.author }}
                  </a>
                  <span v-else>- {{ testimonial.author }}</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Clone of first items -->
        <div
          v-for="(testimonial, index) in firstItems"
          :key="`first-${index}`"
          class="testimonial-slide"
        >
          <div
            class="card is-flex is-align-items-center is-justify-content-center"
            style="box-shadow: none; border: 1px solid #eee"
          >
            <div
              class="card-content is-flex is-align-items-center is-justify-content-center"
            >
              <div class="content has-text-centered">
                <p class="is-italic">{{ testimonial.text }}</p>
                <p class="has-text-weight-bold">
                  <a
                    v-if="testimonial.url"
                    :href="testimonial.url"
                    class="has-text-dark"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    - {{ testimonial.author }}
                  </a>
                  <span v-else>- {{ testimonial.author }}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";

const props = defineProps({
  testimonials: {
    type: Array,
    required: true,
  },
});

const scrollContainer = ref(null);
let scrollInterval = null;
let isScrolling = false;

// Get one item for seamless loop
const firstItems = computed(() => props.testimonials.slice(0, 1));
const lastItems = computed(() => props.testimonials.slice(-1));

const scrollToNext = () => {
  if (!scrollContainer.value || isScrolling) return;

  isScrolling = true;
  const container = scrollContainer.value;
  const cardWidth = container.querySelector(".testimonial-slide").offsetWidth;
  const currentScroll = container.scrollLeft;
  const newScroll = currentScroll + cardWidth;

  container.scrollTo({
    left: newScroll,
    behavior: "smooth",
  });

  // Check if we need to loop back to start
  setTimeout(() => {
    const maxScroll = container.scrollWidth - container.clientWidth;
    if (currentScroll >= maxScroll - cardWidth) {
      container.scrollTo({
        left: cardWidth,
        behavior: "auto",
      });
    }
    isScrolling = false;
  }, 500); // Adjust timing based on your scroll animation duration
};

const handleScroll = () => {
  if (!scrollContainer.value || isScrolling) return;

  const container = scrollContainer.value;
  const cardWidth = container.querySelector(".testimonial-slide").offsetWidth;

  // If we're at the beginning of the cloned section, jump to the real items
  if (container.scrollLeft === 0) {
    container.scrollTo({
      left: cardWidth * props.testimonials.length,
      behavior: "auto",
    });
  }
};

onMounted(() => {
  const container = scrollContainer.value;
  // Initial scroll position (skip the cloned items)
  container.scrollLeft =
    container.querySelector(".testimonial-slide").offsetWidth;

  // Start auto-scroll
  scrollInterval = setInterval(scrollToNext, 4000);

  // Add scroll event listener
  container.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  if (scrollInterval) {
    clearInterval(scrollInterval);
  }
  if (scrollContainer.value) {
    scrollContainer.value.removeEventListener("scroll", handleScroll);
  }
});
</script>

<style scoped>
.testimonials-container {
  position: relative;
  width: 100%;
  overflow-x: hidden;
  scroll-snap-type: x mandatory;
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.testimonials-container::-webkit-scrollbar {
  display: none;
}

.testimonials-track {
  display: flex;
  width: 100%;
}

.testimonial-slide {
  flex: 0 0 100%;
  width: 100%;
  scroll-snap-align: center;
  padding: 0 1rem;
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
}

.card {
  height: 100%;
  max-width: 500px;
  margin: 0 auto;
  min-height: 200px;
  width: 100%;
}

.card-content {
  height: 100%;
  width: 100%;
  padding: 1.5rem;
}

.content {
  max-width: 400px;
  margin: 0 auto;
}

/* Remove the padding-right since we're using center alignment */
.content {
  padding-right: 0;
}

/* Ensure proper spacing for the author line */
.content p:last-child {
  margin-bottom: 0;
}
</style>
