<template>
  <div
    id="app"
    class="bg-black h-screen w-screen text-razer-500 overflow-hidden"
  >
    <div class="navbar flex px-40 justify-between items-center h-1/5">
      <router-link
        to="/"
        class="brand font-bold text-3xl hover:text-razer-600 transition-colors"
        >Banabda.</router-link
      >
      <div id="nav">
        <router-link to="/me">Me</router-link>
        <router-link to="/education">Education</router-link>
        <router-link to="/experience">Experience</router-link>
        <router-link to="/projects">Projects</router-link>
        <router-link to="/contact">Contact Me</router-link>
      </div>
    </div>
    <router-view class="h-3/5" />
  </div>
</template>

<style lang="scss">
#app {
  // font-family: Avenir, Helvetica, Arial, sans-serif;
  // -webkit-font-smoothing: antialiased;
  // -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  // color: #2c3e50;
}
.brand {
  @apply text-razer-800;
  &.router-link-exact-active {
    @apply text-razer-600;
  }
}
#nav {
  // padding: 30px;

  a {
    // font-weight: bold;
    // color: #2c3e50;
    @apply p-2;
    @apply mx-4;
    @apply tracking-widest;
    @apply text-razer-800;

    &:hover {
      @apply text-razer-700;
    }

    &.router-link-exact-active {
      @apply text-razer-600;
      @apply rounded-lg;
      @apply ring-2;
      @apply ring-razer-500;

      &:hover {
        @apply shadow-small;
      }
    }
  }
}
</style>
