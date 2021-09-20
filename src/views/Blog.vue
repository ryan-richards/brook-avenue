<template>
  <div>
    <div class="wrapper">
      <div class="container">
        <div class="columns">
          <div class="column is-two-thirds has-text-left">
            <transition-group name="list" tag="p" appear>
            <div v-for="post in posts" :key="post.id">
                <post-item v-bind="post" />
            </div>
            </transition-group>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { supabase } from "../supabase";
import PostItem from "../components/PostItem.vue";
import { useHead } from '@vueuse/head';

export default {
    setup(){
      useHead({
          title:'Blog',
          meta:[{
              title: 'description',
              content: 'Brook Avenue Blog'
          }
          ]
      })
  },
  components: {
    PostItem,
  },
  data() {
    return {
      posts: [],
    };
  },
  async mounted() {
    const { data, error } = await supabase
      .from("blog-posts")
      .select("*")
      .order("created_at", { ascending: false });
    console.log(data);
    if (error) {
      console.error(error);
    } else {
      this.posts = data;
    }
  },
};
</script>

<style scoped>

.wrapper{
    min-height: 90vh;
}

.list-enter-from {
    opacity: 0;
    transform: scale(0.6);
  }
  .list-enter-active {
    transition: all 0.4s ease;
  }
  .list-leave-to {
    opacity: 0;
    transform: scale(0.6);
  }
  .list-leave-active {
    transition: all 0.4s ease;
    position: absolute; /* for move transition after item leaves */
  }
  .list-move {
    transition: all 0.3s ease;
  }

</style>