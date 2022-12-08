<template>
  <div class="container-services">
    <div v-for="services in arrServices" :key="services.nameservices" class="services-card">
      <font-awesome-icon :key="services.nameservices" :icon="['fas', services.iconservices]" />
      <font-awesome-icon :key="services.textservices" :icon="['fas', services.arrow]" />
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

<style lang="scss" scoped>
.container-services {
  display: flex;
  gap: 1.3rem;
  flex-wrap: wrap;
  .services-card {
    flex-basis: 31.7%;
    background-color: #ffffff;
    padding: 2rem;
    border-radius: 7px;
  }
}
</style>
