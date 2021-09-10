<template>
<div class="wrapper">
  <div class="container">
    <div class="columns">
      <div class="column is-two-thirds has-text-left">
        <transition name="list" appear>
        <div class="block has-text-left">
          <hr />
          <span>
            <div class="subtitle heading">{{ post.category }}</div>
            <div class="title mb-2">{{ post.title }}</div>
            <p class="heading">{{ formatDate(post.created_at) }}</p>
          </span>
          <div class="content">
            <Markdown :html="true" :linkify="true" :source="post.content" />
          </div>
        </div>
        </transition>
      </div>
    </div>
  </div>
</div>

</template>

<script>
import Markdown from "vue3-markdown-it";
import formatDateMixin from "../mixins/formatDateDayJs.js";
import { onMounted, ref } from "vue";
import { supabase } from "../supabase";
import { useRoute } from "vue-router";

export default {
  name: "Post",
  props: {
    id: Number,
    title: String,
    category: String,
    created_at: String,
    content: String,
  },
  components: {
    Markdown,
  },
  setup() {
    const route = useRoute();
    const post = ref([]);

    async function getEvent() {
      const { data, error } = await supabase
        .from("blog-posts")
        .select("*")
        .eq("id", route.params.id)
        .single();
      console.log(data);
      if (error) {
        console.error(error);
      } else {
        post.value = data;
      }
    }

    onMounted(() => {
      getEvent();
    });

    return {
      post,
    };
  },
  mixins: [formatDateMixin],
  computed: {
    formattedDate() {
      return this.formatDate(this.date);
    },
  },
};
</script>

<style scoped>

.wrapper{
  min-height:100vh
}


.list-enter-from {
    opacity: 0;
  }
  .list-enter-active {
    transition: opacity 1.5s ease;
  }
  .list-leave-to {
    opacity: 0;
    transform: scale(0.6);
  }
  .list-leave-active {
    transition: all 0.4s ease;
    position: absolute; /* for move transition after item leaves */
  }

</style>
