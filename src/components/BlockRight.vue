<template>
  <div class="container">
    <hr />
    <div class="columns">
      <div class="column center">
        <div class="image">
          <img v-bind:src="imageurl" class="src" />
        </div>
      </div>
            <div class="column has-text-left">
        <div class="title">{{ title }}</div>
        <div class="subtitle">{{ subtitle }}</div>
        <div class="block">
          <div v-html="content"></div>
        </div>
        <div class="buttons">
          <a href="inquire.html" class="button">{{ buttonText }}</a>
        </div>
      </div>
    </div>
    <hr />
  </div>
</template>


<script>
export default {
  props: ["title", "subtitle", "buttonText", "imageurl", "content"],
};
</script>


<style>
.image {
  max-width: 600px;
  object-fit: cover;
}

.container {
  margin-top: 2rem;
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