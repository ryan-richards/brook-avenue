<template>
<div>
    <div class="wrapper">

        <div class="container">

            <div class="columns">
                <div class="column is-two-thirds has-text-left">
                    <div v-for="post in posts" :key="post.id">

                    <div class="block">
                        <hr>
                        <span>
                        <div class="subtitle heading">{{post.category}}</div>
                        <div class="title mb-2">{{post.title}}</div>
                        <p class="heading">{{ formatDate(post.created_at) }}</p>
                        </span>
                        <div class="content">
                           <Markdown :html="true" :linkify="true" :source="post.content"/>
                        </div>                       
                    </div>

                    </div>
                 
                </div>
            </div>

            
            
        </div>

    </div>
        
</div>

    
</template>

<script>

import Markdown from 'vue3-markdown-it';
import { supabase } from "../supabase"
import formatDateMixin from '../mixins/formatDateDayJs.js';

export default {
  components: {
    Markdown
  },
  data() {
    return {
        posts:[],
    }
  },
    async mounted() {
    const { data, error } = await supabase.from('blog-posts').select('*')
    .order('created_at', { ascending: false })
    console.log(data);
    if(error) {
        console.error(error);
    } else {
        this.posts = data;
    }
    },
    mixins: [formatDateMixin],
        computed: {
            formattedDate() {
                return this.formatDate(this.date);
            }
        }
}
</script>