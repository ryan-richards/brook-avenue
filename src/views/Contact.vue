<template>
<div>
    <div class="container">
        <div class="columns">
            <div class="column">
                <div class="block">
                    <div class="title">Contact</div>
                </div>
            </div>
            <div class="column"><div class="title">FORM</div></div>
        </div>
    </div>
    <Quote />
</div>
    
</template>

<script>

import BlockLeft from '../components/BlockLeft.vue'
import Quote from '../components/Quote.vue'

export default {
  components: {
    BlockLeft,
    Quote   
  }
}

</script>