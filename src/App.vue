<template>
  <v-app>
    <Header />
    <main>
      <router-view></router-view>
    </main>
    <Footer class="footer" />
  </v-app>
</template>



<script>

// TOY REMOVE DOSENT WORK 
//same error with edits and removes - undefined ID

import Footer from "./components/Footer.vue";
import Header from "./components/Header.vue";

export default {
  name: "App",

  components: {
    Footer,
    Header
  },
  created() {
    this.$store.dispatch("loadToys");
  },

  data: () => ({
    //
  })
};
</script>

<style scoped>
</style>
