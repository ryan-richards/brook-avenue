<template>

<div class="container">
<nav class="navbar">
   <div class="navbar-brand">
    <a href="index.html" class="navbar-item mr-6 has-text-left">
       <div>
        <h1 style="font-weight:800;">Brook Avenue</h1>
        <h2>Artisan Gelato</h2>
        </div>
        </a>
            
        <a role="button" @click="toggle" v-bind:class="{'is-active': isActive, 'toggle-off': !isActive}" class="navbar-burger" aria-label="menu" aria-expanded="false">
         <span aria-hidden="true"></span>
         <span aria-hidden="true"></span>
         <span aria-hidden="true"></span>
         </a>
        </div>
            
     <div class="navbar-menu" v-bind:class="{'is-active': isActive, 'toggle-off': !isActive}" >
        <div class="navbar-end"> 
          <a href="about.html" class="navbar-item list">About</a>
          <a href="flavours.html" class="navbar-item list">Flavours</a>
        <a href="FAQ.html" class="navbar-item list">FAQ</a>
            </div>
         </div>
</nav>
</div>

  
</template>

<script>
export default {
    data () {
        return {
            isActive: false
        }
    },
    methods: {
        toggle(){
         this.isActive = !this.isActive
        }
    }
}


</script>

<style>

a.navbar-item:hover{
    color: tomato;
    background-color: transparent;
}

.navbar-menu{
    box-shadow: none;
    background-color: transparent;
}

</style>