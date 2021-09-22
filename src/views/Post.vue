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
          <div class="content" v-html="post.content"></div>
        </div>
        </transition>
      </div>
    </div>
  </div>
</div>

</template>

<script>
import formatDateMixin from "../mixins/formatDateDayJs.js";
import { onMounted, ref } from "vue";
import { supabase } from "../supabase";
import { useRoute } from "vue-router";
import { useHead } from '@vueuse/head';
import { computed} from 'vue'
import marked from 'marked'

export default {
  name: "Post",
  props: {
    id: Number,
    title: String,
    category: String,
    created_at: String,
    content: String,
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
        post.value.content = marked(data.content)
      }
    }

    onMounted(() => {
      getEvent();
    });

    useHead({
      title: computed(() => post.value.title),
      meta:[{
        title: 'description',
        content: computed(() => post.value.short)
        }
      ]
      })

    return {
      post,
    };
  },
  mixins: [formatDateMixin],
  computed: {
    formattedDate() {
      return this.formatDate(this.date);
    },
    formatMarkdown(){
      return marked(this.content)
    }
  }
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
    transition: opacity 0.6s ease;
  }
  .list-leave-to {
    opacity: 0;
  }
  .list-leave-active {
    transition: opacity 0.4s ease;
    position: absolute; /* for move transition after item leaves */
  }

</style>
