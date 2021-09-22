<template>
  <div class="block">
    <hr class="mb-2" />
    <span>
      <div class="subtitle heading">
        {{ formatDate(created_at) }} | {{ category }}
      </div>
      <div class="title mb-2">{{ title }}</div>
    </span>
    <img :src="thumbnail" class="mb-2" />
    <div class="content">
      {{ getShortDescription }}
    </div>
    <router-link :to="`/post/${id}`" class="button">Read More</router-link>
  </div>
</template>

<script>
import formatDateMixin from "../mixins/formatDateDayJs.js";

export default {
  name: "post-item",
  props: {
    id: Number,
    title: String,
    category: String,
    created_at: String,
    content: String,
    short: String,
    thumbnail: String,
  },
  mixins: [formatDateMixin],
  computed: {
    formattedDate() {
      return this.formatDate(this.date);
    },
    getShortDescription() {
      return `${this.short.substr(0, 400)}...`;
    },
  },
};
</script>
