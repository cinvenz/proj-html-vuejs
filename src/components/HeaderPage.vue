<template>
  <header>
    <!-- Contatti -->
    <div class="contacts p-1">
      <div class="d-flex justify-content-between align-items-center container p-2">
        <ul v-for="contact in arrContacts" :key="contact.days" class="d-flex">
          <li class="me-2">
            <font-awesome-icon :key="contact.clock" :icon="['fas', contact.clock]" />
          </li>
          <li>{{ `Open Hours: ${contact.days} - ${contact.hours}` }}</li>
        </ul>
        <ul v-for="contact in arrContacts" :key="contact.phone" class="d-flex">
          <li class="me-2">
            <font-awesome-icon :key="contact.tel" :icon="['fas', contact.tel]" />
          </li>
          <li class="me-4">
            {{ contact.phone }}
          </li>
          <li class="me-2">
            <font-awesome-icon :key="contact.letter" :icon="['fas', contact.letter]" />
          </li>
          <li>{{ contact.email }}</li>
          <li class="ms-4 me-4">
            <font-awesome-icon :key="contact.facebook" :icon="['fab', contact.facebook]" />
          </li>
          <li class="me-4">
            <font-awesome-icon :key="contact.twitter" :icon="['fab', contact.twitter]" />
          </li>
          <li>
            <font-awesome-icon :key="contact.linkedin" class="" :icon="['fab', contact.linkedin]" />
          </li>
        </ul>
      </div>
    </div>
    <!-- NAV -->
    <div class="nav">
      <div class="nav-item container d-flex justify-content-between p-2">
        <ul class="nexgen d-flex">
          <li class="nex text-uppercase fw-bold">nex</li>
          <li class="gen text-uppercase fw-bold">gen</li>
        </ul>
        <div class="item">
          <ul v-for="objNav in arrNav" :key="objNav" class="ul-item">
            <li class="text-uppercase text-nav">
              {{ objNav }}
            </li>
          </ul>
          <button type="button" class="btn btn-primary text-uppercase ms-4 btn-touch">
            Get in touch
          </button>
          <div class="mb-5" />
        </div>
      </div>
    </div>
    <!-- Container Form -->
    <div class="container-form row row-cols-2 container">
      <div class="col" />
      <div class="col d-flex flex-column justify-content-center container-consulting">
        <span class="fw-bold"> FUSION & ACQUISITION </span>
        <h1 class="display-4 fw-bold mb-3">Insurance <br />Consulting</h1>
        <div>
          <div>
            <label class="d-flex gap-2 mb-2" for="i">
              <input
                id="validationTooltip01"
                type="text"
                class="form-control"
                value=""
                required
                placeholder="Name"
              />
              <input
                id="validationTooltip01"
                type="email"
                class="form-control"
                value=""
                required
                placeholder="Email"
              />
            </label>
          </div>
          <div>
            <label class="d-flex gap-2 mb-2" for="i">
              <input
                id="validationTooltip01"
                type="email"
                class="form-control"
                value=""
                required
                placeholder="Phone"
              />
              <select id="i" class="form-select" required>
                <option value="">More Info</option>
              </select>
            </label>
          </div>
          <button type="button" class="btn btn-primary text-uppercase me-2 btn-touch">
            Get in touch
          </button>
          <button type="button" class="btn btn-light btn-read-more">READ MORE</button>
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
  height: 40rem;
  background-image: url(../../public/bg-6.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position-y: -1.8rem;
  .contacts {
    background-color: #21333e;
    color: #b7c3d0;
    height: 2.5rem;
    font-size: 0.7rem;
    ul {
      margin-bottom: 0;
    }
  }
}
h1 {
  color: #21333e;
}
li {
  list-style: none;
}
.nav {
  .nav-item {
    height: 4rem;
    margin-bottom: -0.5rem;
    .item {
      display: flex;
      align-items: center;
      height: 100%;
      .ul-item {
        margin-bottom: 0;
        display: flex;
        align-items: center;
      }
    }
  }
}

.text-nav:hover {
  border-top: 2px solid transparent;
  border-bottom: 2px solid #058283;
  cursor: pointer;
}
.btn-touch {
  height: 2.2rem;
  width: 9rem;
  padding: 0.1rem 0rem;
  border-radius: 3px;
  background-color: #058283;
  border: none;
}
.nexgen {
  margin-bottom: 0;
  display: flex;
  align-items: center;
}
.nex {
  background-color: #c1dbdd;
  padding: 0.5rem 0;
  padding-left: 1.5rem;
  padding-right: 0rem;
  border-start-start-radius: 20px;
  border-end-start-radius: 20px;
  letter-spacing: 4px;
  color: #01a6a6;
  font-size: larger;
}
.gen {
  padding: 0.5rem 0;
  margin-left: 0.1rem;
  letter-spacing: 4px;
  font-size: larger;
}
input {
  width: 11.8rem;
  background-color: #cdd1d2;
}
select {
  width: 15rem;
  color: grey;
  background-color: #cdd1d2;
}
.container-form {
  margin: auto;
}
.container-consulting {
  height: 33rem;
  padding-left: 2.5rem;
}
span {
  color: #01a6a6;
}
.btn-read-more {
  height: 2.2rem;
  width: 8rem;
  padding: 0.1rem 0rem;
  border-radius: 3px;
  border: 1px solid #058283;
  color: #058283;
}
button:hover {
  background-color: #01a6a6;
}
</style>
