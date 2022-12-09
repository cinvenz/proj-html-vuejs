<template>
  <div class="container-services">
    <div v-for="services in arrServices" :key="services.nameservices" class="services-card">
      <div class="d-flex justify-content-between mb-3">
        <font-awesome-icon
          :key="services.nameservices"
          class="icon-services"
          :icon="['fas', services.iconservices]"
        />
        <font-awesome-icon
          :key="services.textservices"
          class="icon-services2"
          :icon="['fas', services.arrow]"
        />
      </div>
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
.icon-services {
  font-size: 1.5rem;
  color: #058283;
}
.icon-services2 {
  color: #83c1c2;
  font-size: 1rem;
  cursor: pointer;
}
p {
  color: #a2aaaf;
}
</style>
