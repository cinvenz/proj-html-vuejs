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
    <section class="services">
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
        <!-- CardService -->
        <div>
          <CardServices :arr-services="arrServices" />
        </div>
      </div>
    </section>

    <!-- PROCESS Section -->
    <section>
      <div class="text-center">
        <span class="text-uppercase">How it works in practice</span>
        <div class="d-flex justify-content-center">
          <h2 class="fw-bold process">Process</h2>
          <h2 class="fw-bold management">Management</h2>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod dolorum illo nulla totam
          obcaecati, accusantium eaque at laborum <br />
          facere eos, velit enim ut optio odio vero alias veritatis ab! Aut.
        </p>
      </div>
      <div class="row row-cols-5 text-center pt-3">
        <div class="col-1 container-process" />
        <div class="col-2 container-process">
          <div class="container-number">
            <span>01</span>
          </div>
          <h5>Collection of Information</h5>
          <p>Lorem ipsum dolor sit amet consectetur</p>
        </div>
        <div class="col-2 container-process">
          <div class="container-number">
            <span>01</span>
          </div>
          <h5>Collection of Information</h5>
          <p>Lorem ipsum dolor sit amet consectetur</p>
        </div>
        <div class="col-2 container-process">
          <div class="container-number">
            <span>01</span>
          </div>
          <h5>Collection of Information</h5>
          <p>Lorem ipsum dolor sit amet consectetur</p>
        </div>
        <div class="col-2 container-process">
          <div class="container-number">
            <span>01</span>
          </div>
          <h5>Collection of Information</h5>
          <p>Lorem ipsum dolor sit amet consectetur</p>
        </div>
        <div class="col-2 container-process">
          <div class="container-number">
            <span>01</span>
          </div>
          <h5>Collection of Information</h5>
          <p>Lorem ipsum dolor sit amet consectetur</p>
        </div>
        <div class="col-1 container-process" />
      </div>
    </section>

    <!-- TEAM Section -->
    <section class="team-section">
      <div class="container">
        <div class="row row-cols-2">
          <div class="col-8">
            <span>WE LIKE WHAT WE DO</span>
            <div class="d-flex">
              <h2 class="fw-bold the">Team</h2>
              <h2 class="fw-bold company">of Experts</h2>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis porro sed quos.
              Dignissimos corporis
            </p>
            <!-- CardTeam -->
            <div>
              <CardTeam :arr-team="arrTeam" />
            </div>
          </div>
          <div class="col-4 d-flex align-items-center">
            <div class="president-speech">
              <h5>President Speech</h5>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. A earum magnam neque culpa
                explicabo et,
              </p>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. A earum magnam neque culpa
                explicabo et,
              </p>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. A earum magnam neque culpa
                explicabo et,
              </p>
              <div class="d-flex justify-content-between">
                <p class="fw-bold">T.Jhonson</p>
                <font-awesome-icon icon="fa-solid fa-quote-right" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- NEWS Section -->
    <section>
      <div class="container">
        <span>OUR EDITOR CONTENT</span>
        <div class="d-flex">
          <h2 class="fw-bold management">Latest</h2>
          <h2 class="fw-bold process">News</h2>
        </div>
        <div class="d-flex justify-content-between">
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        </div>
        <!-- CardNews -->
        <div>
          <CardNews :arr-news="arrNews" />
        </div>
      </div>
    </section>

    <!-- KNOW FIRST Section -->
    <section>
      <div class="container-know-section">
        <div class="container">
          <div class="row row-cols-2">
            <div class="col">
              <span>NEWSLETTER</span>
              <div class="d-flex">
                <h2 class="fw-bold the">Knows</h2>
                <h2 class="fw-bold company">First</h2>
              </div>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure corrupti
                reprehenderit iusto,
              </p>
            </div>
            <div class="col">
              <label for="inputName" class="form-label">
                <input
                  id="inputName"
                  type="text"
                  class="form-control opacity-50"
                  placeholder="Name"
                />
              </label>
              <label for="inputEmail" class="form-label">
                <input
                  id="inputEmail"
                  type="email"
                  class="form-control opacity-50"
                  placeholder="Email"
                />
              </label>
              <div>
                <button type="button" class="btn btn-primary text-uppercase btn-touch">
                  SUBSCRIBE
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import CardServices from "@/components/CardServices.vue";
import CardTeam from "@/components/CardTeam.vue";
import CardNews from "@/components/CardNews.vue";

export default {
  components: {
    CardServices,
    CardTeam,
    CardNews,
  },
  data() {
    return {
      arrServices: [
        {
          iconservices: "fa-network-wired",
          arrow: "fa-arrow-right",
          nameservices: "Audit & Assurance",
          textservices: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
        {
          iconservices: "fa-toolbox",
          arrow: "fa-arrow-right",
          nameservices: "Financial Advisory",
          textservices: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
        {
          iconservices: "fa-chart-simple",
          arrow: "fa-arrow-right",
          nameservices: "Analytics and M&A",
          textservices: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
        {
          iconservices: "fa-plane",
          arrow: "fa-arrow-right",
          nameservices: "Middle Marketing",
          textservices: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
        {
          iconservices: "fa-earth-europe",
          arrow: "fa-arrow-right",
          nameservices: "Legal Consulting",
          textservices: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
        {
          iconservices: "fa-inbox",
          arrow: "fa-arrow-right",
          nameservices: "Regulatory Risk",
          textservices: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
      ],

      arrTeam: [
        {
          imageteam: "team-1.jpg",
          nameteam: "David Cooper",
          workteam: "CTO & CO-FOUNDER",
          facebookteam: "fa-facebook-f",
          twitterteam: "fa-twitter",
          linkedinteam: "fa-linkedin-in",
        },
        {
          imageteam: "team-3.jpg",
          nameteam: "Oliver Jones",
          workteam: "CHIEF PROCUREMENT",
          facebookteam: "fa-facebook-f",
          twitterteam: "fa-twitter",
          linkedinteam: "fa-linkedin-in",
        },
        {
          imageteam: "team-2.jpg",
          nameteam: "Emma Lopez",
          workteam: "CHIEF MARKETING",
          facebookteam: "fa-facebook-f",
          twitterteam: "fa-twitter",
          linkedinteam: "fa-linkedin-in",
        },
        {
          imageteam: "team-4.jpg",
          nameteam: "T.Jhonson",
          workteam: "CEO & PRESIDENT",
          facebookteam: "fa-facebook-f",
          twitterteam: "fa-twitter",
          linkedinteam: "fa-linkedin-in",
        },
      ],

      arrNews: [
        {
          imagenews: "news-1.jpg",
          textnews: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
        {
          imagenews: "news-2.jpg",
          textnews: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
        {
          imagenews: "news-3.jpg",
          textnews: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
        {
          imagenews2: "news-4.jpg",
          textnews2: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
        {
          imagenews2: "news-5.jpg",
          textnews2: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
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
}
.the {
  background-color: #0e272d;
  padding: 0.4rem 0.6rem;
  border-radius: 3px;
}
.company {
  padding: 0.4rem 0.4rem;
}

// SERVICES Section
.services {
  background-color: #eef4ed;
}
.btn-touch {
  height: 2.2rem;
  width: 9rem;
  padding: 0.1rem 0rem;
  border-radius: 3px;
  background-color: #058283;
  border: none;
}

// PROCESS Section
.container-process {
  border-top: 3px solid #daeced;
  .container-number {
    margin-top: -0.6rem;
    span {
      background-color: #daeced;
      font-weight: bold;
      padding: 0.5rem 0.6rem;
      border-radius: 50px;
    }
  }
}
.process {
  color: #058283;
  background-color: #daeced;
  padding: 0.4rem 0.6rem;
  border-radius: 3px;
}
.management {
  padding: 0.4rem 0.4rem;
}

// TEAM Section
.team-section {
  background-color: #111117;
  color: white;
  span {
    color: #058283;
  }
}
.president-speech {
  background-color: #058283;
  border-radius: 3px;
  padding: 1.5rem;
  font-size: 0.7rem;
}

// KNOW FIRST Section
.container-know-section {
  background-image: url(../../public/bg-1.jpg);
  background-size: cover;
  background-position-y: 50%;
  height: 20rem;
  display: flex;
  align-items: center;
  color: white;
  span {
    color: #058283;
  }
  p {
    color: #aaabb4;
  }
}
</style>
