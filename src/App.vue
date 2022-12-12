<template>
  <div>
    <HeaderPage :arr-contacts="arrContacts" :arr-nav="arrNav" />
    <MainPage />
    <FooterPage
      :arr-contacts="arrContacts"
      :arr-about="arrAbout"
      :arr-services="arrServices"
      :arr-support="arrSupport"
    />
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
          adress: "Main Avenue, 987",
          facebook: "fa-facebook-f",
          twitter: "fa-twitter",
          linkedin: "fa-linkedin-in",
          clock: "fa-clock",
          tel: "fa-phone",
          letter: "fa-envelope",
          location: "fa-location-dot",
        },
      ],
      arrNav: ["home", "about", "services", "process", "team", "blog"],
      arrAbout: [
        "The Company",
        "Institutional",
        "Social & Events",
        "innovation",
        "Environment",
        "Technology",
      ],
      arrServices: [
        "Audit & Assurance",
        "Finalcial Advisory",
        "Analytics M&A",
        "Middle Marketing",
        "Legal Consulting",
        "regulatory Risk",
      ],
      arrSupport: [
        "Responsability",
        "Terms of Use",
        "About Cookies",
        "Privacy Policy",
        "Accessibility",
        "information",
      ],
    };
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800;900&display=swap");
@import "~bootstrap/scss/bootstrap";

body {
  font-size: 0.8rem;
}
.container {
  font-family: "Poppins", sans-serif;
  max-width: 900px;
}
.container2 {
  max-width: 1349px;
  margin-left: 0;
}
</style>
