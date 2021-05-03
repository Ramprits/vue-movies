<template>
  <Navigation v-if="!isPublic" />
  <router-view />
</template>

<script>
import Navigation from "@/components/Navigation.vue";
export default {
  components: {
    Navigation,
  },
  computed: {
    isPublic() {
      const routes = ["/login", "/register"];
      return routes.includes(this.$route.path);
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
