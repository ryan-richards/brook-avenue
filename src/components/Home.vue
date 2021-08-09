<template>

<div class="container">
  <div class="columns">

  <div class="column">

  <img class="img-block" src="">

   <div class="image-stack">
      <div class="image-stack__item image-stack__item--top">
        <img class="rounded" src="https://brookavenue.files.wordpress.com/2020/02/21f9f67a-7a47-4d00-8f03-fe49568266aa.jpg?w=720" alt="A portrait of a girl under hanging flowers.">
      </div>
      <div class="image-stack__item image-stack__item--bottom">
        <img class="rounded" src="https://brookavenue.files.wordpress.com/2019/07/27670c50-c7a0-46e6-bbec-c33b82b3d804.jpg?w=720" alt="">
      </div>
   </div>
  
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

.container{
  margin-top:min(1rem,3rem,5rem);
}

.button {
  color: whitesmoke;
  background-color: rgb(135, 179, 138);
}

.control.has-icons-left .input, .control.has-icons-left .select select {
    padding-left: 2em;
}

.title {
max-width: 500px;
}

.rounded {
  border-radius:0%;
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
