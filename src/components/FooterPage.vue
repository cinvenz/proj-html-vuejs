<template>
  <section>
    <!-- CONTACT FOOTER Section -->
    <div class="footer">
      <div class="container footer">
        <div class="row row-cols-2">
          <div class="col-3">
            <div class="d-flex">
              <span class="nex text-uppercase fw-bold">nex</span>
              <span class="gen text-uppercase fw-bold">gen</span>
            </div>
            <p>A functional HTML Template for Corporate e Business.</p>

            <ul v-for="contact in arrContacts" :key="contact.phone" class="">
              <li class="me-2 d-inline">
                <font-awesome-icon :key="contact.tel" :icon="['fas', contact.tel]" />
              </li>
              <li class="me-4 d-inline">
                {{ contact.phone }}
              </li>
              <li class="me-2 d-inline">
                <font-awesome-icon :key="contact.letter" :icon="['fas', contact.letter]" />
              </li>
              <li class="d-inline">
                {{ contact.email }}
              </li>

              <li class="me-2 d-inline">
                <font-awesome-icon :key="contact.location" :icon="['fas', contact.location]" />
              </li>
              <li class="me-4 d-inline">
                {{ contact.adress }}
              </li>
            </ul>
            <button type="button" class="btn btn-primary btn-touch">GET IN TOUCH</button>
          </div>

          <div class="col-9 d-flex list-array-footer">
            <div class="list-footer">
              <ul v-for="about in arrAbout" :key="about">
                <li>
                  <a href="">{{ about }}</a>
                </li>
              </ul>
            </div>
            <div class="list-footer">
              <ul v-for="services in arrServices" :key="services">
                <li>
                  <a href="">{{ services }}</a>
                </li>
              </ul>
            </div>
            <div class="list-footer">
              <ul v-for="support in arrSupport" :key="support">
                <li>
                  <a href="">{{ support }}</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="last-container-footer">
      <div class="container">
        <div class="row row-cols-2">
          <div class="col">
            <span>Enjoy the low price. We are thraking ani in tention of piracy.</span>
          </div>
          <div class="col credits d-flex justify-content-end">
            <div>
              2020 NEXGEN is Proudly Powered by <span class="coding"><a href="">Codings</a></span
              >.
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "FooterPage",
  props: {
    arrContacts: Array,
    arrAbout: Array,
    arrServices: Array,
    arrSupport: Array,
  },
};
</script>

<style lang="scss" scoped>
.footer {
  background-color: #111117;
  color: #aaabb4;
}

.last-container-footer {
  background-color: #0d0d11;
  color: #aaabb4;
  font-size: 0.7rem;
}
.nex {
  background-color: #0e272d;
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
  color: white;
}
a {
  text-decoration: none;
  color: #aaabb4;
}
.btn-touch {
  height: 2.2rem;
  width: 9rem;
  padding: 0.1rem 0rem;
  border-radius: 3px;
  background-color: #058283;
  border: none;
}
.list-footer {
  flex-basis: 33%;
}
.credits {
  a {
    color: #058283;
  }
}
</style>
