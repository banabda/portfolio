<template>
  <div>
    <div>Three</div>
    <button @click="minpage">PREV</button>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  methods: {
    ...mapActions({
      subpage: "me/subPage",
    }),
    minpage() {
      this.subpage();
    },
  },
};
</script>