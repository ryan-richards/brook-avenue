<template>
  <div class="container">
    <div class="columns">
      <div class="column content has-text-left">
        <slot name="title"></slot>
        <slot name="subtitle"></slot>
        <div class="block">
          <slot name="content"></slot>
        </div>
        <div class="buttons center">
          <slot name="button"></slot>
        </div>
      </div>
      <div class="column center">
      <slot name="contentRight"></slot>
    </div>
    </div>

  </div>
</template>

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

.half {
  height: 40vh;
}

.main {
  background: black
    url(https://brookavenue.files.wordpress.com/2019/07/d6ed5860-afa4-4846-bab4-60f49c484add.jpg?w=720)
    center / cover;
}

@media (max-width: 1024px) {
  .main {
    background: black
      url(https://brookavenue.files.wordpress.com/2019/07/d6ed5860-afa4-4846-bab4-60f49c484add.jpg?w=720)
      center / cover;
    margin-left: -2rem;
    margin-right: -2rem;
  }
}
@media (max-width: 768px) {
  .main {
    background: black
      url(https://brookavenue.files.wordpress.com/2019/07/d6ed5860-afa4-4846-bab4-60f49c484add.jpg?w=720)
      center / cover;
  }
}

.parallax {
  /* Create the parallax scrolling effect */
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>