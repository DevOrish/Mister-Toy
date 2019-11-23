<template>
  <div class="home">
    <img class="hero" src="@/assets/img/hero.jpg" alt="">
    <h1 class="top-sentence">HAVE A GOOD TIME WITH FRIENDS</h1>
    <button @click="goToToys" class="bottom-btn">GET SOME TOYS</button>
  </div>
</template>

<script>
export default {
  methods:{
    goToToys(){
      this.$router.replace('/toy')
    }
  },
  components: {}
};
</script>
