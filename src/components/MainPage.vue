<template>
  <main>
    <!-- THE COMPANY section-->
    <section class="the-company pt-5 pb-5">
      <div class="container pt-4 pb-1">
        <div class="row row-cols-2">
          <div class="col-6 p-3">
            <span class="fw-bold">ABOUT THE NETWORK</span>
            <div class="d-flex pt-3 pb-2">
              <h2 class="fw-bold the">The</h2>
              <h2 class="fw-bold company">Company</h2>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corr mollitia voluptatibus
              provident vel, harum numquam neque, voluptatum temporibus saepe hic ipsum
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, at nisi cum
              deleniti a sed, velit facilis
            </p>
          </div>
          <div class="col-6 p-4 mt-3">
            <div class="d-flex gap-4">
              <div>
                <font-awesome-icon icon="fa-solid fa-award" class="icon" />
                <h5 class="d-inline">Tradition</h5>
                <p class="mt-3">
                  Lorem ipsum dolor sit amet <br />
                  consectetur adipisicing elit.
                </p>
              </div>
              <div>
                <font-awesome-icon icon="fa-solid fa-lock" class="icon" />
                <h5 class="d-inline">Security</h5>
                <p class="mt-3">
                  Lorem ipsum dolor sit amet <br />
                  consectetur adipisicing elit.
                </p>
              </div>
            </div>

            <div class="d-flex gap-4 mt-4">
              <div>
                <font-awesome-icon icon="fa-solid fa-pen-to-square" class="icon" />
                <h5 class="d-inline">Certificate</h5>
                <p class="mt-3">
                  Lorem ipsum dolor sit amet <br />
                  consectetur adipisicing elit.
                </p>
              </div>
              <div>
                <font-awesome-icon icon="fa-solid fa-graduation-cap" class="icon" />
                <h5 class="d-inline">Expertise</h5>
                <p class="mt-3">
                  Lorem ipsum dolor sit amet <br />
                  consectetur adipisicing elit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SERVICES Section -->
    <section>
      <div class="container">
        <span>OUR BUSINESS AREA</span>
        <h2>Excellence in SERVICES</h2>
        <div class="d-flex">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi assumenda quis similique,
            voluptate veritatis cupiditate enim laudantium
          </p>
          <button type="button" class="btn btn-primary text-uppercase btn-touch">See all</button>
        </div>

        <div>
          <CardServices />
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import CardServices from "@/components/CardServices.vue";

export default {
  components: {
    CardServices,
  },
  data() {
    return {
      arrServices: [
        {
          iconservices: "fa-solid fa-network-wired",
          arrow: "Audit & Assurance",
          nameservices: "1 (305) 1234-5678",
          textservices: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
        {
          iconservices: "fa-solid fa-toolbox",
          arrow: "Financial Advisory",
          nameservices: "1 (305) 1234-5678",
          textservices: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
        {
          iconservices: "fa-solid fa-chart-simple",
          arrow: "Analytics and M&A",
          nameservices: "1 (305) 1234-5678",
          textservices: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
        {
          iconservices: "fa-solid fa-plane",
          arrow: "Middle Marketing",
          nameservices: "1 (305) 1234-5678",
          textservices: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
        {
          iconservices: "fa-solid fa-earth-europe",
          arrow: "Legal Consulting",
          nameservices: "1 (305) 1234-5678",
          textservices: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
        {
          iconservices: "fa-solid fa-inbox",
          arrow: "Regulatory Risk",
          nameservices: "1 (305) 1234-5678",
          textservices: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
// THE COMPANY section
.the-company {
  background-color: #111117;
  color: white;
  span {
    color: #058283;
  }
  p {
    color: #aaabb4;
  }
  .icon {
    color: #058283;
    font-size: 1.3rem;
    margin-right: 0.4rem;
  }
  .the {
    background-color: #0e272d;
    padding: 0.4rem 0.6rem;
    border-radius: 3px;
  }
  .company {
    padding: 0.4rem 0.4rem;
  }
}

// SERVICES Section
.btn-touch {
  height: 2.2rem;
  width: 9rem;
  padding: 0.1rem 0rem;
  border-radius: 3px;
  background-color: #058283;
  border: none;
}
</style>
