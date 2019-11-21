<template>
  <div>
    <v-toolbar prominent src="@/assets/img/head-bgc1.jpg">
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>
        <p class="nav-bar-p">Mister Toy</p>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon @click="goToToys">
        <v-icon x-large>mdi-xbox-controller</v-icon>
      </v-btn>
      <v-btn icon @click="goHome">
        <v-icon x-large>mdi-home</v-icon>
      </v-btn>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  methods: {
    goHome() {
      this.$router.replace("/");
    },
    goToToys() {
      this.$router.replace("/toy");
    }
  }
};
</script>