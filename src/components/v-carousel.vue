<template>
  <splide :options="options">
    <splide-slide>
      <img src="../assets/img/prod/prod_1.jpg" />
    </splide-slide>
    <splide-slide>
      <img src="../assets/img/prod/prod_2.jpg" />
    </splide-slide>
    <splide-slide>
      <img src="../assets/img/prod/prod_3.jpg" />
    </splide-slide>
    <splide-slide>
      <img src="../assets/img/prod/prod_4.jpg" />
    </splide-slide>
    <splide-slide>
      <img src="../assets/img/prod/prod_5.jpg" />
    </splide-slide>
    <splide-slide>
      <img src="../assets/img/prod/prod_6.jpg" />
    </splide-slide>
  </splide>
</template>

<script>
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
export default {
  name: "v-carousel",
  components: {
    Splide,
    SplideSlide,
  },
  data() {
    return {
      options: {
        type: "loop",
        focus: "center",
        gap: "1rem",
        autoplay: true,
        interval: 3000,
        autoWidth: true,
      },
    };
  },
};
</script>

<style scoped>
.splide {
  z-index: 4;
  margin: 225px auto 0px auto;
}
@media (max-width: 1150px) {
  .splide {
    display: none;
  }
}
</style>
