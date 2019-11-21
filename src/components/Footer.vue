<template>
  <v-footer v-bind="localAttrs" padless>
    <v-card flat tile width="100%" class="grey text-center size">
      <v-divider></v-divider>
      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} —
        <strong>Play</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    icons: ["mdi-home", "mdi-email", "mdi-calendar", "mdi-delete"],
    items: ["default", "absolute", "fixed"],
    variant: "default"
  }),
  computed: {
    localAttrs() {
      const attrs = {};

      if (this.variant === "default") {
        attrs.absolute = false;
        attrs.fixed = false;
      } else {
        attrs[this.variant] = true;
      }
      return attrs;
    }
  }
};
</script>

<style scoped>
</style>