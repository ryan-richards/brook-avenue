<template>
  <div class="container">

    <div class="columns">
      <div class="column content has-text-left">
        <div class="title">{{ title }}</div>
        <div class="subtitle">{{ subtitle }}</div>
        <div class="block">
          <div v-html="content"></div>
        </div>
        <div class="buttons">
          <a @click="flavours" class="button">{{ buttonText }}</a>
        </div>


  <div class="modal" v-bind:class="{'is-active': isActive, 'toggle-off': !isActive}">
  <div class="modal-background"></div>
  <div class="modal-card">
    <header class="modal-card-head">
      <p class="modal-card-title">Modal title</p>
      <button @click="flavours" class="delete" aria-label="close"></button>
    </header>
    <section class="modal-card-body">
      <!-- Content ... -->
    </section>
    <footer class="modal-card-foot">
      <button class="button is-success">Save changes</button>
      <button class="button">Cancel</button>
    </footer>
  </div>
</div>


      </div>
      <div class="column center">
        <div class="image">
          <img v-bind:src="imageurl" class="src" />
        </div>
      </div>
    </div>
  </div>
 
</template>


<script>
export default {
  props: ["title", "subtitle", "buttonText", "button", "imageurl", "content"],
  data () {
        return {
            isActive: false
        }
    },
  methods: {
    flavours(){
      this.isActive = !this.isActive
    }
  }
};
</script>


<style>
.src {
  width: 100%;
  object-fit: cover;
}

.spacer {
  padding-top: 3rem;
}


.center,
.center-column,
.top,
.right,
.bottom,
.left {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
}
</style>