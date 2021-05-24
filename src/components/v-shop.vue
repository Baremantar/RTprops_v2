<template>
  <div class="v-shop">
    <div class="catalog-text"><h1>Product</h1></div>
    <div class="container" id="shop">
      <div class="row">
        <v-card
          v-for="product in PRODUCTS"
          :key="product.article"
          :product_data="product"
          @addToCart="addToCart"
        />
      </div>
    </div>
  </div>
</template>

<script>
import vCard from "../components/v-card.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "vShop",
  components: {
    vCard,
  },
  props: {},
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["PRODUCTS", "CART"]),
  },
  methods: {
    addToCart(data) {
      this.ADD_TO_CART(data);
    },
    ...mapActions(["GET_PRODUCTS_FROM_API", "ADD_TO_CART"]),
  },

  mounted() {
    this.GET_PRODUCTS_FROM_API().then((response) => {
      if (response.data) {
        console.log("data arrived!");
      }
    });
  },
};
</script>

<style scoped>
.catalog-text {
  margin: 150px;
  font-size: 30px;
  color: #2e2f2f;
  text-align: center;
}
.row {
  max-width: 100%;
  margin: 0 20px;
  padding: 40px 0;
  display: flex;
  align-items: center;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.7);
  justify-content: center;
  flex-wrap: wrap;
  box-sizing: border-box;
}
@media (max-width: 790px) {
  .catalog-text {
    font-size: 25px;
    margin: 100px 0;
  }
}
</style>
