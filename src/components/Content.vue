<template>


 <div class="container">

    <div class="columns">
        <div class="column content has-text-left">
            <slot name="title"></slot>
            <slot name="subtitle"></slot>
            <div class="block">
            <slot name="content"></slot>
            </div>
            <div class="buttons">
            <slot name="button"></slot>
            </div>
      </div>
      <div class="column center">
        <div class="image">
            <slot name="image"></slot>
        </div>
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
</style>