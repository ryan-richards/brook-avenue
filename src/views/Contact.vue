<template>
  <div>
    <div class="wrapper">
      <div class="container">
        <div class="columns">
          <div class="column content has-text-left">
            <div class="title">Contact</div>
            <div class="subtitle">
              Enter your details, and we will get back to you as soon as
              possible!
            </div>
            <form v-on:submit.prevent="handleSubmit" name="contact">
              <div class="field">
                <label class="label">Name</label>
                <div class="control">
                  <input
                    class="input"
                    name="name"
                    type="text"
                    placeholder="Your Name"
                    v-model="name"
                    required
                  />
                </div>
              </div>
              <div class="field">
                <label class="label">Email</label>
                <div class="control">
                  <input
                    class="input"
                    name="email"
                    type="email"
                    placeholder="hello@email.com"
                    v-model="email"
                    required
                  />
                </div>
              </div>
              <div class="field">
                <label class="label">Venue</label>
                <div class="control">
                  <input
                    class="input"
                    name="venue"
                    type="text"
                    placeholder="Venue"
                    v-model="venue"
                  />
                </div>
              </div>
              <div class="field">
                <label class="label">Event Date</label>
                <div class="control">
                  <input
                    class="input"
                    name="date"
                    type="date"
                    placeholder="Date"
                    v-model="date"
                  />
                </div>
              </div>
              <div class="field">
                <label class="label">Message</label>
                <textarea
                  class="textarea"
                  placeholder="Your message"
                  rows="5"
                  v-model="message"
                ></textarea>
              </div>

              <div class="field is-grouped">
                <div class="control">
                  <button type="submit" class="button">Submit</button>
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
import { useHead } from '@vueuse/head';

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
        const date = ref("")
        const name = ref("")
        const message = ref("")

        useHead({
      title: 'Contact',
      meta:[{
        title: 'description',
        content: 'Contact Brook Avenue Gelato'
        }
      ]
      })

        const handleSubmit = async () => {
            try {   
            const  { data, error } = await supabase
            .from("contact")
            .insert([
            { email: email.value , venue: venue.value , date: date.value , name:name.value, message:message.value},
            ])
            if (error) throw error
               console.log("inserted")
               name.value = ""
               email.value = ""
               venue.value = ""
               date.value = ""
               message.value = ""
             } catch (error) {
                alert(error.error_description || error.message)
             }
           
        }

        return {
            name,
            message,
            email,
            venue,
            date,
            handleSubmit,
        }
}
}
</script>
