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
    this.$store.watch(
      state => {
        return this.$store.getters.userMsg;
      },
      msg => {
        if (msg) {
          const Toast = this.$swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000
          });
          Toast.fire({
            type: msg.type,
            title: msg.txt
          });
        }
      }
    );
  },

  data: () => ({
  })
};
</script>

<style scoped>
</style>
