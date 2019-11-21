<template>
  <v-card class="mx-auto preview-card" max-width="50%">
    <v-img  contain class="align-end" height="200px" :src="toy.imgUrl">
      <v-card-title black>{{toy.name}}</v-card-title>
    </v-img>

    <v-card-subtitle v-if="toy.inStock" class="pb-0">In stock!</v-card-subtitle>
    <v-card-subtitle v-else class="pb-0">Out of stock!</v-card-subtitle>

    <v-card-text class="text--primary">
      <div>Price: {{toy.price}} ₪</div>

      <div>Toy type: {{toy.type}}</div>
    </v-card-text>

    <v-card-actions>
      <v-btn @click="showImg" color="grey" text>Watch</v-btn>
      <v-btn color="grey" @click="goToToys" text>Back to toys</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      toy: {}
    };
  },
  methods: {
    showImg() {
      this.$swal({
        title: this.toy.name,
        imageUrl: this.toy.imgUrl,
        imageWidth: 400,
        imageHeight: 350,
        imageAlt: `${this.toy.name} image`
      });
    },
    goToToys(){
      this.$router.replace('/toy')
    }
  },
  components: {},
  created() {
    this.$store.dispatch("loadToys").then(() => {
      var toyId = this.$route.params.id;
      if (toyId) {
        var toy = this.$store.commit("setId", +toyId);
        this.toy = JSON.parse(JSON.stringify(this.$store.getters.getToyById));
      }
    });
  }
};
</script>

<style scoped>
.preview-card {
  margin-top: 15px;
  margin-bottom: 15px;
}
</style>
