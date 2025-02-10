<template>
  <div>
    <!-- Hero Section -->
    <section class="hero is-medium" v-if="showHeroSection">
      <div class="hero-body">
        <div class="container">
          <h1 class="title is-1 has-text-centered">Awards & Recognition</h1>
          <div class="content has-text-centered mt-4">
            <p class="subtitle">
              Brook Avenue has been recognized for excellence in sustainable
              design, innovative architecture, and community integration. Our
              commitment to quality and environmental responsibility continues
              to set new standards in the industry.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Awards Scroller -->
    <section class="section">
      <div class="container">
        <div ref="scrollContainer" class="awards-container">
          <div class="awards-track">
            <!-- Initial clone of last items -->
            <div
              v-for="(award, index) in lastItems"
              :key="`last-${index}`"
              class="award-slide"
            >
              <Award
                :img="award.img"
                :text="award.text"
                :person="award.person"
              />
            </div>

            <!-- Main items -->
            <div
              v-for="(award, index) in awards"
              :key="`main-${index}`"
              class="award-slide"
            >
              <Award
                :img="award.img"
                :text="award.text"
                :person="award.person"
              />
            </div>

            <!-- Clone of first items -->
            <div
              v-for="(award, index) in firstItems"
              :key="`first-${index}`"
              class="award-slide"
            >
              <Award
                :img="award.img"
                :text="award.text"
                :person="award.person"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";
import Award from "../components/Award.vue";

// Define props
const props = defineProps({
  showHeroSection: {
    type: Boolean,
    default: true,
  },
});

// Sample awards data - replace with your actual awards
const awards = [
  {
    img: "https://creativeoceanicblog.wordpress.com/wp-content/uploads/2024/10/niwa-25-logo.jpg",
    text: "Couples Choice of the year",
    person: "Northern Ireland Wedding Awards 2025",
  },
  {
    img: "https://cdn.jsdelivr.net/gh/AIGlobalMedia/Brands/Logos/v1/brand-sme-stacked-v2.png",
    text: "Specialist Wedding & Events Catering Business - Northern Ireland ",
    person: "Northern Irish Enterprise Awards 2024 hosted by SME News",
  },
  {
    img: "https://creativeoceanicblog.wordpress.com/wp-content/uploads/2024/01/8th-niwa-24.jpg?w=833",
    text: "Outstanding Wedding Supplier of the Year",
    person: "Northern Ireland Wedding Awards",
  },
  {
    img: "https://images.squarespace-cdn.com/content/v1/644020934ff2da61fdfcd4c1/a7bb0f56-2fdc-4ae5-817b-435482bdf619/LUXlife-Magazine-The-Place-Retreats.png",
    text: "Best Ice-Cream Cart Hire Company 2023 - Northern Ireland",
    person: "Food and Drink Awards 2023 LUXlife",
  },
];

// Get items for seamless loop
const firstItems = computed(() => awards.slice(0, 1));
const lastItems = computed(() => awards.slice(-1));

const scrollContainer = ref(null);
let scrollInterval = null;
let isScrolling = false;

const scrollToNext = () => {
  if (!scrollContainer.value || isScrolling) return;

  isScrolling = true;
  const container = scrollContainer.value;
  const cardWidth = container.querySelector(".award-slide").offsetWidth;
  const currentScroll = container.scrollLeft;
  const newScroll = currentScroll + cardWidth;

  container.scrollTo({
    left: newScroll,
    behavior: "smooth",
  });

  setTimeout(() => {
    const maxScroll = container.scrollWidth - container.clientWidth;
    if (currentScroll >= maxScroll - cardWidth) {
      container.scrollTo({
        left: cardWidth,
        behavior: "auto",
      });
    }
    isScrolling = false;
  }, 500);
};

const handleScroll = () => {
  if (!scrollContainer.value || isScrolling) return;

  const container = scrollContainer.value;
  const cardWidth = container.querySelector(".award-slide").offsetWidth;

  if (container.scrollLeft === 0) {
    container.scrollTo({
      left: cardWidth * awards.length,
      behavior: "auto",
    });
  }
};

onMounted(() => {
  const container = scrollContainer.value;
  container.scrollLeft = container.querySelector(".award-slide").offsetWidth;
  scrollInterval = setInterval(scrollToNext, 4000);
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
.awards-container {
  position: relative;
  width: 100%;
  overflow-x: hidden;
  scroll-snap-type: x mandatory;
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.awards-container::-webkit-scrollbar {
  display: none;
}

.awards-track {
  display: flex;
  width: 100%;
}

.award-slide {
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

.award-card {
  text-align: center;
  padding: 2rem;
}

.award-icon {
  max-width: 120px;
  height: auto;
  margin: 0 auto;
}

.card {
  height: 100%;
  transition: transform 0.2s;
}

.image.is-4by3 {
  background-color: #f5f5f5;
}

@media screen and (max-width: 768px) {
  .award-icon {
    max-width: 80px;
  }
}
</style>
