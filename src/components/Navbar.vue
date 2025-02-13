<template>
  <div class="container">
    <nav class="navbar pb-2 mobilePadding">
      <div class="navbar-brand">
        <router-link to="/">
          <a @click="close" class="pr-2 pl-2 mr-6">
            <img
              src="../assets/brook-logo.png"
              style="max-height: 4.5vh"
              alt="Brook Avenue, Artisan Gelato, Belfast Northern Ireland Logo"
            />
          </a>
        </router-link>

        <a
          role="button"
          @click="toggle"
          v-bind:class="{ 'is-active': isActive, 'toggle-off': !isActive }"
          class="navbar-burger mr-0"
          aria-label="menu"
          aria-expanded="false"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div
        class="navbar-menu"
        v-bind:class="{ 'is-active': isActive, 'toggle-off': !isActive }"
      >
        <div class="navbar-end">
          <router-link to="/"
            ><a @click="toggle" class="navbar-item list pt-4"
              >Home</a
            ></router-link
          >
          <router-link to="/pricing"
            ><a @click="toggle" class="navbar-item list pt-4"
              >Pricing</a
            ></router-link
          >
          <router-link to="/corporate"
            ><a @click="toggle" class="navbar-item list pt-4"
              >Corporate</a
            ></router-link
          >
          <router-link to="/about"
            ><a @click="toggle" class="navbar-item list pt-4"
              >About</a
            ></router-link
          >
          <router-link to="/contact"
            ><a @click="toggle" class="navbar-item list pt-4"
              >Contact</a
            ></router-link
          >
          <p>
            <a
              href="https://thepancakecart.com/pricing"
              class="navbar-item list pt-4"
              >Mini Pancake Cart</a
            >
          </p>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: false,
    };
  },
  methods: {
    toggle() {
      this.isActive = !this.isActive;
    },
    close() {
      if (this.isActive) {
        this.isActive = !this.isActive;
      }
    },
  },
};
</script>

<style scoped>
a.navbar-item:hover {
  color: tomato;
  background-color: transparent;
}

.navbar-menu {
  box-shadow: none;
  background-color: transparent;
}

.navbar-menu.is-active {
  box-shadow: none;
  background-color: white;
}

.navbar {
  background-color: transparent;
}

.container {
  margin-top: -1rem;
}

@media (max-width: 1024px) {
  .mobilePadding {
    margin-left: -0.6rem;
  }
}

@media screen and (min-width: 1024px) {
  .mobilePadding {
    padding-right: 1.8rem;
  }
}
</style>
