<template>
  <div
    class="hero pb-6"
    style="max-width: 400px; margin-left: auto; margin-right: auto"
  >
    <div class="hero-body">
      <div class="block">
        <img :src="img" alt="" />
        <div class="subtitle pt-1 has-text-centered center">
          <i>{{ text }}</i>
        </div>
      </div>
    </div>
    <p class="p has-text-weight-bold pb-1">{{ person }}</p>
  </div>
</template>

<script>
export default {
  props: ["img", "person", "text"],
};
</script>

<style scoped>
.line {
  margin-bottom: 1rem;
}

.button {
  color: whitesmoke;
  background-color: transparent;
}

.hero-body {
  padding-bottom: 1rem;
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
