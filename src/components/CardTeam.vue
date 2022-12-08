<template>
  <div>
    <div v-for="objTeam in arrTeam" :key="objTeam.workteam">
      <img :src="objTeam.imageteam" alt="" />

      <h2>a</h2>
      <p>a</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardTeam",
  props: {
    arrTeam: Array,
  },
};
</script>

<style></style>
