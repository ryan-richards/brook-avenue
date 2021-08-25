<template>

<footer class="footer">
  <div class="container">

    <div class="columns">
  
  <div class="column has-text-left">
  <p>Brook Avenue</p>
  <p>hello@brookavenue.co.uk</p>
  <p>Terms & Conditions © 2021</p>
  </div>
  <div class="column has-text-left">
    <div class="columns is-mobile">
      <div class="column">
        <p><strong>Behind the scenes.</strong></p>
        <ul>
          <li><router-link to="/about">About</router-link></li>
          <li><router-link to="/about">Team</router-link></li>
          <li><router-link to="/about">Process</router-link></li>
        </ul>
      </div>
      <div class="column">
        <p><strong>Things we do.</strong></p>
          <ul>
            <li><router-link to="/about">Flavours</router-link></li>
            <li><router-link to="/about">Services</router-link></li>
            <li><router-link to="/about">About</router-link></li>
        </ul>
      </div>
    </div>
  </div>
</div>

  </div>

</footer>
    
</template>

<script>

</script>

<style scoped>

.footer {
    color: #363636;
    font-weight: 700;
    background-color:rgb(119, 139, 121);
    margin-left: -2rem;
    margin-right: -2rem;
    padding-right: 2rem;
    padding-left: 2rem;
    padding-top: 2rem;
}

a {
  text-decoration: underline;
  color: #363636;
  font-weight: 700;
}

a:hover{
  color: white;
}


.center, .center-column, .top, .right, .bottom, .left {
	display: flex;
	justify-content: center;
	align-items: center;
  background-color: transparent;
}
</style>