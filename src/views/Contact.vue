<template>
<div>
    <div class="wrapper">

    <div class="container">
    <div class="columns">
        <div class="column content has-text-left">
            <div class="title">Contact</div>
            <div class="subtitle">Enter your details, and we will get back to you as soon as possible!</div>
            <form v-on:submit.prevent="handleSubmit" name="Quote">
                 <div class="field">
                     <label class="label">Name</label>
                     <div class="control">
                         <input class="input" name="name" type="text" placeholder="Name"  v-model="name">
                     </div>      
                </div>
                <div class="field">
                     <label class="label">Email</label>
                     <div class="control">
                         <input class="input" name="email" type="email" placeholder="hello@email.com"  v-model="email" required>
                     </div>      
                </div>
                <div class="field">
                     <label class="label">Venue</label>
                     <div class="control">
                         <input class="input" name="venue" type="text" placeholder="Venue"  v-model="venue">
                     </div>      
                </div>
                <div class="field">
                     <label class="label">Event Date</label>
                     <div class="control">
                         <input class="input" name="date" type="date" placeholder="Date"  v-model="date">
                     </div>      
                </div>
                  <div class="field">
                     <label class="label">Number of Guests</label>
                     <div class="control">
                         <input class="input" name="guests" type="number" placeholder="120" v-model.lazy="guests">
                     </div>      
                </div>
                 <div class="field">
                     <label class="label">Message</label>
                     <div class="control">
                         <input class="input" name="msg" type="text" placeholder="Any extra details"  v-model="msg">
                     </div>      
                </div>

                <div class="field is-grouped">
                    <div class="control">
                        <button type="submit" @click="sent = !sent" class="button" :disabled="sent">Submit</button>
                    </div>
                </div>
            </form>
        </div>
        <div class="column center">
        </div>
    </div>
</div>

</div>
</div>
    
</template>

<script>

import BlockLeft from '../components/BlockLeft.vue'
import Quote from '../components/Quote.vue'

export default {
  components: {
    BlockLeft,
    Quote   
  },
  data () {
      return {
          sent: false
      }
  }
}

</script>