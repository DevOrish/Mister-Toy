<template>
  <section>
    <h1>Add/Edit Toy</h1>
    <form @submit.prevent="saveToy" class="edit-form">
      <v-text-field placeholder="Toy name" v-model="toy.name" label="Toy Name"></v-text-field>
      <v-text-field placeholder="Toy Image URL" v-model="toy.imgUrl" label="Toy Image URL"></v-text-field>
      <v-select :items="types" label="Toy Type" outlined v-model="toy.type"></v-select>
      <div class="small-inputs">
        <v-text-field class="price-input" placeholder="Toy Price" v-model.number="toy.price" label="Toy Price"></v-text-field>
        <v-switch class="stock-switch" v-model="toy.inStock" :label="`In stock?`"></v-switch>
      </div>
      <v-btn class="short-btn">
        <button class="form-btn">Save Toy</button>
      </v-btn>
    </form>
    <router-link to="/toy">Back to the toys</router-link>
  </section>
</template>

<script>
export default {
  data() {
    return {
      toy: {},
      types: ["Adult", "Funny", "Educational", "Children"]
    };
  },
  methods: {
    saveToy() {
      this.$store.dispatch({
        type: "saveToy",
        toy: JSON.parse(JSON.stringify(this.toy))
      });
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
</style>
