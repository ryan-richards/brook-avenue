<template>
  <div class="container spacer">

    <div class="columns">
      <div class="column content has-text-left">
        <div class="title">{{ title }}</div>
        <div class="subtitle">{{ subtitle }}</div>
        <div class="block">
          <div v-html="content"></div>
        </div>
        <div class="buttons">
          <a href="inquire.html" class="button">{{ buttonText }}</a>
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
  props: ["title", "subtitle", "buttonText", "imageurl", "content"],
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