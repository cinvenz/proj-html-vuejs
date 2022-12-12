<template>
  <div>
    <div class="d-flex justify-content-end">
      <button type="button" class="btn btn-primary text-uppercase btn-see-all" @click="click">
        See all
      </button>
    </div>
    <div class="container-card-news">
      <div v-for="objNews in arrNews" :key="objNews.imagenews" class="card-news">
        <div class="cardimg">
          <img class="img-fluid" :src="objNews.imagenews" alt="" />
          <p class="text-center">
            {{ objNews.textnews }}
          </p>
        </div>
      </div>
      <div v-for="objNews2 in arrNews2" :key="objNews2.imagenews2" class="card-news">
        <div class="cardimg2">
          <img v-show="!isClicked" class="img-fluid img-news" :src="objNews2.imagenews2" alt="" />
          <p v-show="!isClicked" class="text-center ciao">
            {{ objNews2.textnews2 }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardNews",
  props: {
    arrNews: Array,
    arrNews2: Array,
  },
  data() {
    return {
      isClicked: true,
    };
  },
  methods: {
    click() {
      this.isClicked = !this.isClicked;
    },
  },
};
</script>

<style lang="scss" scoped>
.container-card-news {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  .card-news {
    flex-basis: 30.89%;
    .cardimg {
      position: relative;
      background-color: black;
      border-radius: 7px;
      &:hover img {
        opacity: 1;
      }

      cursor: pointer;
      img {
        border-radius: 7px;
        opacity: 0.5;
      }

      p {
        padding: 2rem;
        position: absolute;
        bottom: -1rem;
        color: white;
        font-weight: 800;
        font-size: 1rem;
      }
    }
    .cardimg2 {
      position: relative;
      background-color: black;
      border-radius: 7px;
      height: 100%;
      cursor: pointer;
      &:hover img {
        opacity: 1;
      }
      img {
        border-radius: 7px;
        opacity: 0.5;
      }

      p {
        padding: 2rem;
        position: absolute;
        bottom: -1rem;
        color: white;
        font-weight: 800;
        font-size: 1rem;
      }
    }
  }
}
.btn-see-all {
  height: 2.2rem;
  width: 9rem;
  padding: 0.1rem 0rem;
  border-radius: 3px;
  background-color: #058283;
  border: none;
  margin-top: -3.5rem;
}
p {
  color: #a2aaaf;
}
button:hover {
  background-color: #01a6a6;
}
</style>
