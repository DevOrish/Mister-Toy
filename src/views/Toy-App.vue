<template>
  <section>
    <v-btn x-large center class="details-link add-btn" @click="addNewToy">Add new toy</v-btn>
    <toy-list :toys="toys" @remove="remove"></toy-list>
  </section>
</template>


<script>
// HomePage
//GET SINGLE TOY BY ID FROM SERVER
//HANDLE EMPTY TOY EDIT, HANDLE EMPTY TOYS SCENARIOS
import toyList from "../components/Toy-List.vue";
export default {
  data() {
    return {};
  },
  computed: {
    toys() {
      return this.$store.getters.toys;
    }
  },
  components: {
    toyList
  },
  methods: {
    remove(toyId) {
      this.$store.dispatch({ type: "remove", toyId });
    },
    addNewToy() {
      this.$router.replace("/edit");
    }
  },
  created() {},
  watch: {}
};
</script>

<style scoped>
</style>