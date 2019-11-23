<template>
  <section>
    <h1>Add/Edit Toy</h1>
    <form @submit.prevent="saveToy" class="edit-form">
      <v-text-field placeholder="Toy Name" v-model="toy.name" label="Toy Name"></v-text-field>
      <template v-if="!isUploaded">
        <v-text-field placeholder="Enter Image URL" v-model="toy.imgUrl" label="Toy Image URL"></v-text-field>
        <p class="font-weight-medium">Or :</p>
      </template>
      <v-file-input
        accept="image/png, image/jpeg, image/bmp"
        label="Toy Image"
        placeholder="Upload Image"
        prepend-icon="mdi-image"
        @change="imgSelected"
      ></v-file-input>
      <template v-if="selectedImg && !isUploaded">
        <v-card class="mx-auto upload-btn" max-width="100%">
          <v-img contain height="150px" :src="selectedImg"></v-img>
        </v-card>
        <v-btn
          large
          class="short-btn form-btn upload-btn"
          :loading="loading"
          :disabled="loading"
          @click="uploadImg"
        >
          Upload
          <v-icon right dark>mdi-cloud-upload</v-icon>
        </v-btn>
      </template>
      <v-select :items="types" label="Toy Type" outlined v-model="toy.type"></v-select>
      <div class="small-inputs">
        <v-text-field
          class="price-input"
          placeholder="Toy Price"
          v-model.number="toy.price"
          label="Toy Price"
        ></v-text-field>
        <v-switch class="stock-switch" v-model="toy.inStock" :label="`In stock?`"></v-switch>
      </div>
      <v-btn x-large class="short-btn">
        <button class="form-btn">SAVE</button>
      </v-btn>
    </form>
    <router-link to="/toy">Back to the toys</router-link>
  </section>
</template>


<script>
import imgService from "@/services/img.service.js";

export default {
  data() {
    return {
      toy: {},
      selectedImgData: null,
      types: ["Adult", "Funny", "Educational", "Children"],
      loader: null,
      loading: false,
      isUploaded: false
    };
  },
  methods: {
    saveToy() {
      var isMsgConfirmed = true;
      if (!this.isUploaded && this.selectedImgData) {
        isMsgConfirmed = false;
        this.$swal({
          title: "Are you sure?",
          text: "You haven't uploaded your photo!",
          type: "warning",
          showCancelButton: true,
          confirmButtonColor: "#d33",
          cancelButtonColor: "#3085d6",
          confirmButtonText: "Save Anyway",
          cancelButtonText: "OK,take me back"
        }).then(result => {
          if (result.value) {
            this.isUploaded = true;
            this.saveToy();
            return;
          }
        });
      }
      if (isMsgConfirmed) {
        this.$store.dispatch({
          type: "saveToy",
          toy: JSON.parse(JSON.stringify(this.toy))
        });
      }
    },
    imgSelected(ev) {
      this.isUploaded = false;
      this.selectedImgData = ev;
    },
    uploadImg() {
      this.loader = "loading";
      imgService.uploadImg(this.selectedImgData).then(imgUrl => {
        this.toy.imgUrl = imgUrl;
        this.isUploaded = true;
        this[this.loader] = false;
        this.$store.commit({
          type: "setMsg",
          msg: { type: "success", txt: "Image successfully uploaded" }
        });
      });
    }
  },
  computed: {
    selectedImg() {
      if (this.selectedImgData)
        return URL.createObjectURL(this.selectedImgData);
    }
  },
  components: {},
  created() {
    this.$store.dispatch("loadToys").then(() => {
      var toyId = this.$route.params.id;
      if (toyId) {
        var toy = this.$store.commit("setId", toyId);
        this.toy = JSON.parse(JSON.stringify(this.$store.getters.getToyById));
      }
    });
  },
  watch: {
    loader() {
      const l = this.loader;
      this[l] = !this[l];
    }
  }
};
</script>

<style scoped>
</style>
