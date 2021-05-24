<template>
  <div class="v-main">
    <Carousel />
    <div class="container">
      <div class="about">
        <div class="workstation">
          <img src="../assets/img/workstation.jpg" alt="" />
        </div>
        <div class="about__text">
          <h1>Приветствую в RTprops!</h1>
          <p>
            Более 7 лет я помогаю людям по всему миру создавать уникальные
            визуальные образы. Среди моих заказчиков не только любители косплея
            но и блогеры, стримеры, музыканты и танцоры.
          </p>
        </div>
      </div>
    </div>
    <v-shop />
  </div>
</template>

<script>
import Carousel from "./v-carousel.vue";
import vShop from "./v-shop.vue";
export default {
  name: "vMain",
  components: {
    Carousel,
    vShop,
  },
};
</script>

<style scoped>
.container {
  width: 100%;
  left: 0;
}
.about {
  justify-content: center;
  display: flex;
  height: 1024px;
  margin-top: 225px;
  max-width: 100%;
  align-items: center;
  background-color: #2e2f2f;
}
.workstation {
  max-width: 600px;
}
.workstation img {
  max-width: 100%;
  border-radius: 50%;
}
.about__text {
  margin-left: 80px;
  font-size: 15px;
  color: #f7f5f6;
  border-radius: 15px;
  max-width: 30%;
}
@media (max-width: 790px) {
  .about {
    flex-direction: column;
    height: 700px;
  }
  .about__text {
    text-align: center;
    font-size: 10px;
    margin: 10px 0;
  }
  .workstation {
    margin-top: 0px;
    max-width: 290px;
  }
}
@media (max-width: 1150px) {
  .about {
    height: 850px;
    margin: 0;
  }
}
</style>
