<template>

<div class="wrapper">

<div class="container">
    <div class="columns">
        <div class="column content has-text-left">
            <div class="title">Pricing.</div>
            <div class="subtitle">Enter your details to generate quote.</div>
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
                        <button type="submit" @click="showQuote = !showQuote" class="button">Generate</button>
                    </div>
                </div>
            </form>
        </div>
        <div class="column center">
             <transition appear name="fade"> 
                <div v-if="showQuote" class="block pb-6">
                    <div class="title">£ {{250+guests*1.8}}</div>
                    <div v-if="guests > 200" class="subtitle"> 6 Flavours</div>
                    <div v-else>4 Flavours</div> 
                </div>
                 </transition>
        </div>
    </div>
</div>

</div>



    
</template>



<script>

import { ref } from "vue"
import { supabase } from "../supabase"


export default {
    el: '#Quote',
    data() {
        return {
            guests: null,
            showQuote: false
        }
    },

    setup(){

        console.log("loadeding pricing setup")

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

    } ,
        

}



</script>





<style>

.center, .center-column, .top, .right, .bottom, .left {
	display: flex;
	justify-content: center;
	align-items: center;
  background-color: transparent;
}

.wrapper{
    padding-bottom: 5rem;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}


.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

</style>