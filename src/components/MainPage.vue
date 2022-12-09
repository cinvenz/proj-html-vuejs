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
      <div class="container services-flex">
        <span class="fw-bold">OUR BUSINESS AREA</span>
        <div class="d-flex pt-3 pb-2">
          <h2 class="fw-bold excellence">Excellence in</h2>
          <h2 class="fw-bold process">Services</h2>
        </div>
        <div class="d-flex justify-content-between mb-3">
          <p>
            We Are leaders in providing consultancy service whit a set of cutting- edge technologies
            and a tearm of <br />
            experienced and renowned professionals. These are some options that you can hire.
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
    <section class="process-section">
      <div class="text-center mb-3">
        <span class="text-uppercase span-process fw-bold">How it works in practice</span>
        <div class="d-flex justify-content-center mt-3 mb-2">
          <h2 class="fw-bold process">Process</h2>
          <h2 class="fw-bold management">Management</h2>
        </div>
        <p>
          We work with innovative methodologies to ensure that the entire reformatting process is
          done <br />
          from start to finish as planned.
        </p>
      </div>
      <div class="row row-cols-5 text-center pt-3">
        <div class="col-1 container-process" />
        <div class="col-2 container-process">
          <div class="container-number">
            <span>01</span>
          </div>
          <h5 class="mt-4">Collection of Information</h5>
          <p>Lorem ipsum dolor sit amet consectetur</p>
        </div>
        <div class="col-2 container-process">
          <div class="container-number">
            <span>02</span>
          </div>
          <h5 class="mt-4">Strategic Planning</h5>
          <p>Lorem ipsum dolor sit amet consectetur</p>
        </div>
        <div class="col-2 container-process">
          <div class="container-number">
            <span>03</span>
          </div>
          <h5 class="mt-4">Assignment of responsabilities</h5>
          <p>Lorem ipsum dolor sit amet consectetur</p>
        </div>
        <div class="col-2 container-process">
          <div class="container-number">
            <span>04</span>
          </div>
          <h5 class="mt-4">Formatting Process</h5>
          <p>Lorem ipsum dolor sit amet consectetur</p>
        </div>
        <div class="col-2 container-process">
          <div class="container-number">
            <span>05</span>
          </div>
          <h5 class="mt-4">Continuity Formalization</h5>
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
            <div class="d-flex mt-3 mb-2">
              <h2 class="fw-bold the">Team</h2>
              <h2 class="fw-bold company">of Experts</h2>
            </div>
            <p>
              Ethics and integry are the bases on which our professional build ther caracters.
              <br />
              They are fundamentals that become daily attitudes.
            </p>
            <!-- CardTeam -->
            <div>
              <CardTeam :arr-team="arrTeam" />
            </div>
          </div>
          <div class="col-4 d-flex align-items-center">
            <div class="president-speech">
              <h5 class="pb-3">President Speech</h5>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. A earum magnam neque culpa
                explicabo et.
              </p>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. A earum magnam neque culpa
                explicabo et, sit amet consectetur adipisicing elit. A earum magnam neque culpa
                explicabo.
              </p>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. A earum magnam neque culpa
                explicabo et.
              </p>
              <div class="d-flex justify-content-between">
                <p class="fw-bold">T.Jhonson</p>
                <font-awesome-icon icon="fa-solid fa-quote-right" class="text-black-50 fs-4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- NEWS Section -->
    <section class="news-section">
      <div class="container">
        <span>OUR EDITOR CONTENT</span>
        <div class="d-flex pt-3 pb-2">
          <h2 class="fw-bold excellence">Latest</h2>
          <h2 class="fw-bold process">News</h2>
        </div>
        <div class="d-flex justify-content-between">
          <p>Every week we publish content about what is best in the business world.</p>
        </div>
        <!-- CardNews -->
        <div>
          <CardNews :arr-news="arrNews" :arr-news2="arrNews2" />
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
              <div class="d-flex mt-3 mb-2">
                <h2 class="fw-bold the">Know</h2>
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
                  class="form-control opacity-50 input-knows"
                  placeholder="Name"
                />
              </label>
              <label for="inputEmail" class="form-label">
                <input
                  id="inputEmail"
                  type="email"
                  class="form-control opacity-50 input-knows"
                  placeholder="Email"
                />
              </label>
              <div>
                <button
                  type="button"
                  class="btn btn-primary text-uppercase btn-touch btn-subscribe"
                >
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
      ],

      arrNews2: [
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
  height: 48rem;
  display: flex;
  align-items: center;
  font-size: 0.7rem;
  .services-flex {
    height: 30rem;
    margin-bottom: 5rem;
    span {
      color: #058283;
    }
  }
  p {
    color: #aaabb4;
  }
}
.excellence {
  padding-top: 0.4rem;
  padding-right: 0.4rem;
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
.process-section {
  height: 32rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  p {
    color: #a2aaaf;
  }
}
.container-process {
  border-top: 3px solid #daeced;
  .container-number {
    margin-top: -0.6rem;
    span {
      background-color: #daeced;
      font-weight: bold;
      padding: 0.5rem 0.6rem;
      border-radius: 50px;
      color: #058283;
    }
  }
}
.span-process {
  color: #058283;
  font-size: 0.7rem;
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
  height: 38rem;
  display: flex;
  align-items: center;
  font-size: 0.7rem;
  span {
    color: #058283;
    font-size: 0.7rem;
    font-weight: bold;
  }
  p {
    color: #a2aaaf;
  }
  .president-speech {
    background-color: #058283;
    border-radius: 3px;
    padding: 1.5rem;
    font-size: 0.7rem;
    p {
      color: #eef4ed;
    }
  }
}

// News Section
.news-section {
  display: flex;
  align-items: center;
  padding-top: 5rem;
  padding-bottom: 4rem;
  span {
    color: #058283;
    font-size: 0.7rem;
    font-weight: bold;
  }
  p {
    color: #a2aaaf;
  }
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
    font-size: 0.7rem;
    color: #058283;
    font-weight: bold;
  }
  p {
    color: #aaabb4;
  }
}
button:hover {
  background-color: #01a6a6;
}
.input-knows {
  width: 18rem;
}
.btn-subscribe {
  width: 7.5rem;
}
</style>
