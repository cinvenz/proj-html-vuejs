<template>
  <div>
    <HeaderPage :arr-contacts="arrContacts" :arr-nav="arrNav" />
    <MainPage />
    <FooterPage />
  </div>
</template>

<script>
import HeaderPage from "@/components/HeaderPage.vue";
import MainPage from "@/components/MainPage.vue";
import FooterPage from "@/components/FooterPage.vue";

export default {
  components: {
    HeaderPage,
    MainPage,
    FooterPage,
  },
  data() {
    return {
      arrContacts: [
        {
          days: "Mon - Sat",
          hours: "9:00 - 18:00",
          phone: "1 (305) 1234-5678",
          email: "hello@exemple.com",
        },
      ],
      arrNav: ["home", "about", "services", "process", "team", "blog"],
    };
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;700;900&display=swap");
@import "~bootstrap/scss/bootstrap";
body {
  font-size: 0.8rem;
}
.container {
  font-family: "Poppins", sans-serif;
  max-width: 900px;
}
</style>
