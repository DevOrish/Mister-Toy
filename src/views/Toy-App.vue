<template>
  <section>
    <v-btn x-large center class="details-link add-btn">
      <router-link to="/edit">Add new toy</router-link>
    </v-btn>
    <toy-list :toys="toys" @remove="remove"></toy-list>
  </section>
</template>


<script>
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
    }
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
  watch: {}
};
</script>

<style scoped>
</style>