<template>
  <div>
    <div v-for="services in arrServices" :key="services.nameservices">
      <font-awesome-icon :key="index" :icon="['fas', services.iconservices]" />
      <font-awesome-icon :key="index" :icon="['fas', services.arrow]" />
      <h5>{{ services.nameservices }}</h5>
      <p>{{ services.textservices }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardServices",
  props: {
    arrServices: Array,
  },
};
</script>

<style></style>
