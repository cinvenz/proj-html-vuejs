<template>
  <div class="d-flex container-cardteam">
    <div v-for="objTeam in arrTeam" :key="objTeam.workteam" class="cardteam">
      <img class="img-fluid" :src="objTeam.imageteam" alt="" />
      <div class="p-2">
        <h5>{{ objTeam.nameteam }}</h5>
        <p>{{ objTeam.workteam }}</p>
        <font-awesome-icon
          :key="objTeam.facebookteam"
          :icon="['fab', objTeam.facebookteam]"
          class="team-icon me-1"
        />
        <font-awesome-icon
          :key="objTeam.twitterteam"
          :icon="['fab', objTeam.twitterteam]"
          class="team-icon2 me-1"
        />
        <font-awesome-icon
          :key="objTeam.linkedinteam"
          :icon="['fab', objTeam.linkedinteam]"
          class="team-icon2 me-1"
        />
      </div>
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

<style lang="scss" scoped>
.container-cardteam {
  flex-wrap: wrap;
  .cardteam {
    display: flex;
    flex-basis: 50%;
    margin-bottom: 2rem;
    img {
      width: 5.5rem;
      height: 6.5rem;
      border-radius: 4px;
    }
    .team-icon {
      padding: 0.5rem 0.6rem;
      background-color: #0e272d;
      border-radius: 50px;
    }
    .team-icon2 {
      padding: 0.5rem;
      background-color: #0e272d;
      border-radius: 50px;
    }
  }
}
</style>
