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

                <div class="field is-grouped">
                    <div class="control">
                        <button type="submit" class="button" :disabled="sent">Submit</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>

</div>
</div>
    
</template>


<script>


import { ref } from "vue"
import { supabase } from "../supabase"

export default {
  data () {
      return {
          sent: false
      }
  },
    setup(){
        console.log("loaded setup")

        const email = ref("")
        const venue = ref("")
        const guests = ref("")
        const date = ref("")

        const handleSubmit = async () => {
            try {   
            const  { data, error } = await supabase
            .from("new-inquiries")
            .insert([
            { email: email.value , venue: venue.value , guests: guests.value , date: date.value },
            ])
            if (error) throw error
               console.log("inserted")
             } catch (error) {
                alert(error.error_description || error.message)
             }
           
        } 
        return {
            email,
            venue,
            guests,
            date,
            handleSubmit,
        }
}
}
</script>
