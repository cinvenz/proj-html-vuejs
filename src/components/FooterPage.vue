<template>
  <section>
    <!-- CONTACT FOOTER Section -->
    <div class="footer">
      <div class="container">
        <div class="row row-cols-2">
          <div class="col-3">
            <div class="d-flex mb-3">
              <span class="nex text-uppercase fw-bold">nex</span>
              <span class="gen text-uppercase fw-bold">gen</span>
            </div>
            <p class="mb-4">
              A functional HTML Template <br />
              for Corporate e Business.
            </p>

            <ul v-for="contact in arrContacts" :key="contact.phone" class="contacts">
              <li class="me-2 d-inline mb-2">
                <font-awesome-icon :key="contact.tel" :icon="['fas', contact.tel]" class="me-1" />
                {{ contact.phone }}
              </li>

              <li class="me-2 d-inline mb-2">
                <font-awesome-icon
                  :key="contact.letter"
                  :icon="['fas', contact.letter]"
                  class="me-1"
                />
                {{ contact.email }}
              </li>

              <li class="me-2 d-inline mb-2">
                <font-awesome-icon
                  :key="contact.location"
                  :icon="['fas', contact.location]"
                  class="me-1"
                />
                {{ contact.adress }}
              </li>
            </ul>
            <button type="button" class="btn btn-primary btn-touch">GET IN TOUCH</button>
          </div>

          <div class="col-9 d-flex list-array-footer">
            <div class="list-footer">
              <h5 class="mb-3 ms-3">About</h5>

              <ul v-for="about in arrAbout" :key="about">
                <li>
                  <a class="link-list" href="">{{ about }}</a>
                </li>
              </ul>
            </div>
            <div class="list-footer">
              <h5 class="mb-3 ms-3">Services</h5>

              <ul v-for="services in arrServices" :key="services">
                <li>
                  <a href="">{{ services }}</a>
                </li>
              </ul>
            </div>
            <div class="list-footer">
              <h5 class="mb-3 ms-3">Support</h5>

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
      <font-awesome-icon icon="fa-solid fa-arrow-up" class="scrollup" @click="scrollOn" />
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
  methods: {
    scrollOn() {
      window.scrollTo(0, 0);
    },
  },
};
</script>

<style lang="scss" scoped>
.footer {
  background-color: #111117;
  color: #aaabb4;
  height: 30rem;
  display: flex;
  align-items: center;
  margin: auto;
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
  border: none;
  background-color: transparent;
  color: white;
  border: 1px solid #01a6a6;
}
.list-array-footer {
  gap: 1rem;
}
.list-footer {
  flex-basis: 33%;
  background-color: #19191f;
  padding: 2rem;
  border-radius: 7px;
  ul {
    margin-bottom: 0.3rem;
    position: relative;
    list-style: none;
  }
  li::before {
    content: ">";
    position: absolute;
    left: 0.8rem;
    bottom: -0.6rem;
    font-size: 1.5rem;
  }
  a:hover {
    color: white;
  }
}
.credits {
  a {
    color: #058283;
  }
}
.contacts {
  padding: 0;
  display: flex;
  flex-direction: column;
}
h5 {
  color: white;
}

button:hover {
  background-color: #01a6a6;
  border: 1px solid;
}
.last-container-footer {
  background-color: #0d0d11;
  color: #aaabb4;
  font-size: 0.7rem;
  height: 4rem;
  display: flex;
  align-items: center;
}

.scrollup {
  cursor: pointer;
  background-color: #121216;
  margin-right: 1rem;
  padding: 0.6rem 0.8rem;
  border-radius: 50%;
  font-size: 1rem;
  color: #0d0f14;
}
</style>
