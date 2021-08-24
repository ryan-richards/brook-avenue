<template>

<div class="container">

    <nav class="navbar mobilePadding">
   <div class="navbar-brand">
       <router-link to="/">
        <a @click="close" class="navbar-item mr-6 has-text-left">
            <div>
            <h1 style="font-weight:800;">Brook Avenue</h1>
            <h2>Artisan Gelato</h2>
            </div>
            </a>
       </router-link>
    
            
        <a role="button" @click="toggle" v-bind:class="{'is-active': isActive, 'toggle-off': !isActive}" class="navbar-burger mr-0" aria-label="menu" aria-expanded="false">
         <span aria-hidden="true"></span>
         <span aria-hidden="true"></span>
         <span aria-hidden="true"></span>
         </a>
        </div>
            
     <div class="navbar-menu" v-bind:class="{'is-active': isActive, 'toggle-off': !isActive}" >
        <div class="navbar-end">
        <router-link to="/about"><a    @click="toggle" class="navbar-item list pt-4">About</a></router-link>
        <router-link to="/pricing"><a  @click="toggle" class="navbar-item list pt-4">Pricing</a></router-link>
        <router-link to="/contact"><a  @click="toggle" class="navbar-item list pt-4">Contact</a></router-link>
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
        },
        close() {
            if (this.isActive){
            this.isActive = !this.isActive
            } 
        }
    },
}


</script>

<style scoped>

a.navbar-item:hover{
    color: tomato;
    background-color: transparent;
}

.navbar-menu{
    box-shadow: none;
    background-color: transparent;
}

.container {
    margin-top: -1rem;
}

@media (max-width: 1024px) {




	.mobilePadding{

		margin-left: -0.6rem;
	}
}


@media screen and (min-width: 1024px) {


	.mobilePadding{

		padding-right: 1.8rem;
	}



}

</style>