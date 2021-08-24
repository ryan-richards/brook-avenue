<template>

 <div>
    <div class="pt-2"></div>
   

<BlockLeft title="Wedding or Corporate?" subtitle="We cater events of all sizes"
   buttonText="Generate Quote"
   content=" 
    <p> 
       Welcome to Brook Avenue. We're here to add a unique touch of gelato magic to your special day as a treat for you and your guests.  
    </p>
    <p>
        Looking for a way to make your event unique, special and super tasty? There's no better way to celebrate your special day than to offer your guests the best bespoke gelato in Northern Ireland.
    </p>
    <p>
        We have an endless list of flavours...Why? Well because we make our own gelato we can pretty much make any flavour you'd like, so don't be shy, just ask!
    </p>   
    "
    imageurl="https://brookavenue.files.wordpress.com/2019/10/64b3aeff-2edb-4777-bd23-16a4f8563500.jpg?w=720"
     />
<div class="container">
<hr />
</div>


    <BlockLeft title="Pick some flavours." subtitle="Endless possibilities"
    buttonText="See Full List"
    content=" <p>
        Booking one of our three gelato carts couldnt be easier. Once your date is confirmed, it's time to pick your flavours!</p>
    <p>
        We make gelato fresh for every event meaning you have complete control over flavours, choose from classics like Honeycomb, Mint-Choc-Chip and Raspberry Ripple. </p>
    <p> Or try some of our more adventurous flavours like Wildberry & Lavender, Pear & Prossecco and Black Liqourice. </p>
    "
    imageurl="https://brookavenue.files.wordpress.com/2019/10/3bc4264d-8e87-4477-8d47-441e1f5afa67.jpg?w=1024"
    />
    <QuoteForm />

    </div>

</template>

<script>
import BlockLeft from '../components/BlockLeft.vue'
import BlockRight from '../components/BlockRight.vue'
import QuoteForm from '../components/QuoteForm.vue'

export default {
  components: {
    BlockLeft,
    QuoteForm,
    BlockRight  
  }
}
</script>
