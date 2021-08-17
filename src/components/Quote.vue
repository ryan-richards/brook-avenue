<template>
<div class="wrapper">
    <div class="container">
    <div class="hero">
    <div class="hero-body has-text-left">
    <div class="title">{{ quoteMessage }}</div>
    <div class="subtitle pt-1">{{ subtitle }}</div>
            <div class="buttons ">
              <router-link to="/pricing">
                 <a class="button">{{ buttonText }}</a>
              </router-link>
       
        </div>
    </div>
    </div>

</div>

</div>


</template>

<script>
export default {
    props: ['quoteMessage', 'subtitle', 'buttonText']
}
</script>

<style scoped>

.line{
    margin-bottom: 0rem;
}

.button {
  color: whitesmoke;
  background-color:transparent;
}

.hero-body {
    padding-left:0;
    padding-bottom: 1rem;

}

.wrapper{
    margin-top: 6rem;
    background-color:rgb(190, 181, 186);
    margin-left: -2rem;
    margin-right: -2rem;
    padding-right: 3rem;
    padding-left: 3rem;
    padding-bottom: 6rem;
}


.center, .center-column, .top, .right, .bottom, .left {
	display: flex;
	justify-content: center;
	align-items: center;
  background-color: transparent;
}

</style>