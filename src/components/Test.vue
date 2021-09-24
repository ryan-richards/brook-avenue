<template>
    <div class="hero pb-6" style="max-width:500px;margin-left: auto;
margin-right: auto;">
      <div class="hero-body">
        <div class="block" >
          <div class="block">
            <span class="iconify" data-icon="ant-design:star-filled"></span>
            <span class="iconify" data-icon="ant-design:star-filled"></span>
            <span class="iconify" data-icon="ant-design:star-filled"></span>
            <span class="iconify" data-icon="ant-design:star-filled"></span>
            <span class="iconify" data-icon="ant-design:star-filled"></span>
          </div>
            <div class="subtitle pt-1 has-text-centered">
                 <i>{{ subtitle }}</i>
            </div>
        </div>
        
      </div>
      <p class="p has-text-weight-bold pb-1">{{ person }}</p>
    </div>
</template>

<script>
export default {
  props: ["subtitle", "person"],
};
</script>

<style scoped>
.line {
  margin-bottom: 0rem;
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