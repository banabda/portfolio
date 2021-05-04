<template>
  <div class="main flex">
    <div v-tilt class="mx-auto self-center">
      <img
        class="h-60 w-60 rounded-3xl shadow-small hover:shadow-big transition-all"
        src="../assets/profil.jpg"
        alt="profil"
      />
    </div>
    <div class="self-center font-thin w-6/12">
      <div class="text-2xl">
        <vue-typed-js
          :strings="['Ohh!', 'Hi There!']"
          @onComplete="nextLine.push(1)"
          :typeSpeed="50"
          :backDelay="1000"
        >
          <h1 class="typing"></h1>
        </vue-typed-js>
      </div>

      <div class="text-4xl my-4" v-if="nextLine.length >= 1">
        <vue-typed-js
          :strings="[
            `Welcome to <a href='/about' class='font-bold underline'>Bagas</a> Portfolio!`,
          ]"
          @onComplete="nextLine.push(1)"
          :contentType="'html'"
        >
          <h1 class="typing"></h1>
        </vue-typed-js>
      </div>

      <div class="mt-14">
        <router-link
          to="/me"
          class="ring-2 duration-1000 ease-in-out transition-opacity rounded-lg ring-razer-600 p-4 hover:shadow-small"
          :class="
            nextLine.length >= 2 ? 'opacity-50 hover:opacity-100' : 'opacity-0'
          "
          >Click here for more :)</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Main",
  data: () => ({
    nextLine: [],
  }),
};
</script>
