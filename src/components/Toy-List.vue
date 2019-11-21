<template>
  <section>
    <ul class="d-flex flex-wrap align-center justify-center">
      <toy-preview v-for="toy in toys" :key="toy._id" :toy="toy" @remove="remove"></toy-preview>
    </ul>
  </section>
</template>

<script>
import ToyPreview from "./Toy-Preview.vue";

export default {
  props: {
    toys: Array
  },
  methods:{
    remove(toyId) {
      this.$emit("remove", toyId);
    }
  },
  components: {
    ToyPreview
  }
};
</script>

<style scoped>

</style>
