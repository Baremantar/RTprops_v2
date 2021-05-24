<template>
  <div class="shop-item__card">
    <v-popup
      v-if="isInfoPopupVisible"
      rightBtnTitle="Add to cart"
      :popupTitle="product_data.name"
      @closePopup="closeInfoPopup"
      @rightBtnAction="addToCart"
    >
      <img
        :src="require('../assets/img/card/' + product_data.image)"
        alt="img"
      />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione,
        molestias labore est totam voluptatum nostrum sunt similique dolorem
        veritatis nulla sed obcaecati voluptate velit quasi tempore, explicabo
        perferendis. Quod, consectetur!
      </p>
    </v-popup>

    <div class="card-top">
      <img
        :src="require('../assets/img/card/' + product_data.image)"
        alt="img"
      />
    </div>
    <div class="card-body">
      <div class="card-text">
        <h3>{{ product_data.name }}</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus,
          harum!
        </p>
      </div>
    </div>
    <div class="card-bottom">
      <button class="btn-buy" @click="addToCart">Add to cart</button>
      <button class="btn-show_item" @click="showPopupInfo">More...</button>
    </div>
  </div>
</template>

<script>
import vPopup from "./v-popup.vue";

export default {
  name: "vCard",
  components: {
    vPopup,
  },
  methods: {
    showPopupInfo() {
      this.isInfoPopupVisible = true;
    },
    closeInfoPopup() {
      this.isInfoPopupVisible = false;
    },
    addToCart() {
      this.$emit("addToCart", this.product_data);
    },
  },
  props: {
    product_data: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      isInfoPopupVisible: false,
    };
  },
};
</script>

<style scoped>
.shop-item__card {
  max-width: 250px;
  margin: 1vh 1vw;
  border-radius: 10px;
  text-align: center;
  background-color: #fff;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.7);
}
.card-top {
  display: block;
  flex: 1 1 auto;
  box-sizing: border-box;
}
.card-top img {
  max-width: 100%;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}
.card-body {
  display: block;
  max-width: 512px;
  padding: 0 20px;
}
.card-bottom {
  vertical-align: auto;
  margin: 10px 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
.btn-buy {
  margin-right: 30px;
  transition-duration: 0.4s;
  padding: 5px;
  border-radius: 10px;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.7);
}
.btn-buy:hover {
  color: #f7f5f6;
  background-color: #2e2f2f;
}
.btn-show_item {
  margin-right: 30px;
  transition-duration: 0.4s;
  padding: 5px;
  border-radius: 10px;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.7);
}
.btn-show_item:hover {
  color: #f7f5f6;
  background-color: #2e2f2f;
}
@media (max-width: 790px) {
  .shop-item__card {
    margin: 10px;
  }
}
.v-popup img {
  border-radius: 50%;
  flex-direction: column;
  max-width: 300px;
}
</style>
