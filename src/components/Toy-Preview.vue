<template>
  <v-hover>
    <template v-slot="{ hover }">
      <v-card class="mx-auto ma-2" width="35%" outlined :elevation="hover ? 22 : 8">
        <v-list-item three-line>
          <v-list-item-content>
            <div class="overline mb-4">Type: {{toy.type}} toys</div>
            <v-list-item-title class="headline mb-1">{{toy.name}}</v-list-item-title>
            <v-list-item-title class="mb-3">Price: {{toy.price}}‏₪</v-list-item-title>
            <v-list-item-subtitle v-if="toy.inStock">Toy in stock!</v-list-item-subtitle>
            <v-list-item-subtitle v-else>Currently out of stock!</v-list-item-subtitle>
          </v-list-item-content>
          <v-list-item-avatar tile size="80" color="grey">
            <img :src="toy.imgUrl" alt="toy img" />
          </v-list-item-avatar>
        </v-list-item>
        <v-card-actions>
          <v-btn class="details-link">
            <router-link :to="'/details/'+toy._id">Details</router-link>
          </v-btn>
          <v-btn text @click="edit(toy._id)" class="details-link">
            <router-link :to="'/edit/'+toy._id">Edit</router-link>
          </v-btn>
          <v-btn text @click="remove(toy._id)">Remove</v-btn>
        </v-card-actions>
      </v-card>
    </template>
  </v-hover>
</template>

<script>
export default {
  props: {
    toy: Object
  },
  methods: {
    remove(toyId) {
      this.$swal({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#3085d6",
        confirmButtonText: "Yes, delete it!"
      }).then(result => {
        if (result.value) {
          this.$emit("remove", toyId);          
        } else
          this.$store.commit({
            type: "setMsg",
            msg: { type: "warning", txt: "Toy not deleted" }
          });
      });
    }
  },
  components: {}
};
</script>
<style scoped>
</style>