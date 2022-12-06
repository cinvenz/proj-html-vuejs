<template>
  <header>
    <div class="contacts">
      <div class="d-flex justify-content-between align-items-center container p-2">
        <ul v-for="contact in arrContacts" :key="contact.days" class="d-flex">
          <li class="me-2">
            <font-awesome-icon icon="fa-solid fa-clock" />
          </li>
          <li>{{ `OpenHours: ${contact.days} - ${contact.hours}` }}</li>
        </ul>
        <ul v-for="contact in arrContacts" :key="contact.phone" class="d-flex">
          <li class="me-2">
            <font-awesome-icon icon="fa-solid fa-phone" />
          </li>
          <li class="me-4">
            {{ contact.phone }}
          </li>
          <li class="me-2">
            <font-awesome-icon icon="fa-solid fa-envelope" />
          </li>
          <li>{{ contact.email }}</li>
          <li class="ms-4 me-4">
            <font-awesome-icon icon="fa-brands fa-facebook-f" />
          </li>
          <li class="me-4">
            <font-awesome-icon icon="fa-brands fa-twitter" />
          </li>
          <li><font-awesome-icon icon="fa-brands fa-linkedin-in" /></li>
        </ul>
      </div>
    </div>

    <div class="nav">
      <div class="nav-item container d-flex justify-content-between p-2">
        <ul class="nexgen d-flex">
          <li class="nex text-uppercase fw-bold">nex</li>
          <li class="gen text-uppercase fw-bold">gen</li>
        </ul>
        <div class="item d-flex">
          <ul v-for="objNav in arrNav" :key="objNav" class="ciao">
            <li class="text-uppercase">
              <span>{{ objNav }}</span>
            </li>
          </ul>
          <div class="mb-5">
            <button class="">GET IN TOUCH</button>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "HeaderPage",
  props: {
    arrContacts: Array,
    arrNav: Array,
  },
};
</script>

<style lang="scss" scoped>
header {
  .contacts {
    background-color: #21333e;
    color: #b7c3d0;
    height: 2.5rem;
  }
}
li {
  list-style: none;
}
.nav {
  height: 4rem;
  background-color: #dee2e5;
  .nav-item {
  }
}

.nex {
  background-color: #c1dbdd;
  padding: 0.5rem 0;
  padding-left: 1.5rem;
  padding-right: 0.2rem;
  border-start-start-radius: 20px;
  border-end-start-radius: 20px;
}
.gen {
  padding: 0.5rem 0;
  margin-left: 0.1rem;
}
</style>
