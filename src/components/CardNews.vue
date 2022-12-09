<template>
  <div>
    <div class="d-flex justify-content-end">
      <button type="button" class="btn btn-primary text-uppercase btn-see-all" @click="click">
        See all
      </button>
    </div>
    <div class="container-card-news">
      <div v-for="objNews in arrNews" :key="objNews.imagenews" class="card-news">
        <div>
          <img class="img-fluid" :src="objNews.imagenews" alt="" />
          <p>
            {{ objNews.textnews }}
          </p>
        </div>
        <img v-show="!isClicked" class="img-fluid" :src="objNews.imagenews2" alt="" />
        <p v-show="!isClicked">
          {{ objNews.textnews2 }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardNews",
  props: {
    arrNews: Array,
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
  .card-news {
    flex-basis: 33%;
  }
}
.btn-see-all {
  height: 2.2rem;
  width: 9rem;
  padding: 0.1rem 0rem;
  border-radius: 3px;
  background-color: #058283;
  border: none;
}
</style>
