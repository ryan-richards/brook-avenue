<template>
  <div class="card" style="box-shadow: none; border: 1px solid #eee">
    <div class="card-content">
      <div
        class="is-flex is-justify-content-space-between is-align-items-start mb-4 py-4"
      >
        <div class="content">
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
</template>

<script>
export default {
  props: {
    testimonial: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.card {
  height: 100%;
  transition: transform 0.2s;
}

.card:hover {
  transform: translateY(-2px);
}

.content {
  flex: 1;
  padding-right: 1rem;
}
</style>
