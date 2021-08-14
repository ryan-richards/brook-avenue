<template>


<div class="container">
  <div class="columns">

  <div class="column">



<figure class="image is-square">
   <img class="image" src="https://brookavenue.files.wordpress.com/2020/02/21f9f67a-7a47-4d00-8f03-fe49568266aa.jpg?w=720" alt="A portrait of a girl under hanging flowers.">
</figure>



  
  </div>

  <div class="column center">

    <div class="block">
      <div class=" pb-5">
      <div class="title">Artisan Gelato Cart Hire for your Wedding or Event</div>
      </div>

           <div class="email right">
            <form name="emailIn">
                <h5 class="subtitle"><i>Submit your email to view pricing and generate a quote.</i></h5>
                <div class="field is-grouped" style="display: inline-flex;">
                    <p class="control has-icons-left has-icons-right">
                        <input class="input" name="email" type="email" id="userInput" placeholder="Email input" value="" required>
                        <span class="icon is-small is-left">
                        <i class="fas fa-envelope"></i>
                        </span>
                    </p>
                    <p class="control">
                      <button id="subButton" type="submit" class="button">Submit</button>   
                    </p>
                    
                </div>
              
            </form>

           </div>
  </div>

  </div>
</div>

</div>





</template>

<script>

</script>

<style scoped>

.center, .center-column, .top, .right, .bottom, .left {
	display: flex;
	justify-content: center;
	align-items: center;
  background-color: transparent;
}

.block {
  text-align: left;
}


.button {
  color: whitesmoke;
     background-color:rgb(119, 139, 121);
}

.control.has-icons-left .input, .control.has-icons-left .select select {
    padding-left: 2em;
}

.title {
max-width: 500px;
}


.image-stack {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    position: relative;
}

.image-stack__item--top {
  grid-column: 1 / span 8;
  grid-row: 1;
  padding-top: 25%;
  z-index: 1;

}

.image-stack__item--bottom {
    grid-column: 4 / -1;
    grid-row: 1; 
}

</style>
