<template>
  <div class="container mb-2">
    <div class="cue-container">
      <div v-if="isActive" @click="link" class="sticker yellow">
        <div class="outer-circle"></div>
        <p class="sticker-text">Say hello to the pancakecart! 🥞</p>
        <span class="fold"></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: true,
    };
  },
  methods: {
    link() {
      window.location.href = "https://thepancakecart.com";
    },
    close() {
      this.isActive = false;
    },
  },
};
</script>

<style scoped>
.container {
  position: relative;
  margin-bottom: 2rem;
}

.cue-container {
  position: fixed;
  bottom: 20px; /* Adjust as needed */
  right: 20px; /* Adjust as needed */
  z-index: 9999; /* Ensure it's above other content */
}

.sticker-text {
  text-align: center;
  font-size: medium;
  color: #333;
  font-weight: bold;
}

.sticker .fold {
  content: "";
  display: block;
  width: 12em;
  height: 10em;
  position: absolute;
  right: -6em;
  top: -6em;
  border-radius: 100%;
  background: -webkit-linear-gradient(
    -135deg,
    transparent 11.3em,
    #feeba7 10em,
    #feeba7 10em,
    #feeba7 85%
  );
}

.sticker {
  position: relative;
  display: table;
  width: 10em;
  height: 10em;
  padding: 1em;
  border-radius: 100%;
  background: rgb(255, 215, 7);
  box-sizing: border-box;
  overflow: hidden;
  transition: transform 0.3s ease;
}
.sticker p {
  display: table-cell;
  text-align: center;
  vertical-align: middle;
  color: black;
}
.sticker .fold {
  content: "";
  display: block;
  width: 10em;
  height: 10em;
  position: absolute;
  right: -6em;
  top: -6em;
  border-radius: 100%;
  background: -webkit-linear-gradient(
    -135deg,
    transparent 11.3em,
    #feeba7 10em,
    #feeba7 10em,
    #feeba7 85%
  );
}

.sticker.yellow {
  background: rgb(255, 215, 7);
  background: -webkit-linear-gradient(
    -135deg,
    transparent 2.82em,
    rgb(255, 215, 7) 0,
    rgb(255, 215, 7)
  );
}

.sticker:hover {
  cursor: pointer;
  transform: rotate(-3deg);
}

.sticker:hover .fold {
  background: rgb(255, 215, 7);
}

.sticker:hover .yellow {
  background: rgb(255, 215, 7);
}

@keyframes wiggle {
  0%,
  100% {
    transform: rotate(-3deg);
  }
  50% {
    transform: rotate(3deg);
  }
}

@media (max-width: 768px) {
  /* Adjust this value based on your needs for targeting mobile devices */
  .sticker {
    animation: wiggle 3s ease-in-out infinite;
  }
}

@media (max-width: 1024px) {
  /* Adjust this value based on your needs for targeting mobile devices */
  .sticker {
    animation: wiggle 3s ease-in-out infinite;
  }
}
</style>
