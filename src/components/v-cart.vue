<template>
  <div class="v-cart">
    <h1>Сart</h1>
    <div class="nocart">
      <p v-if="!CART.length">There are no products in cart...</p>
    </div>
    <v-cart-item
      v-for="(item, index) in CART"
      :key="item.article"
      :cart_item_data="item"
      @deleteFromCart="deleteFromCart(index)"
    />
    <router-link to="/">
      <div class="v-cart_link_to_main">Main</div>
    </router-link>
  </div>
</template>

<script>
import vCartItem from "./v-cart-item.vue";
import { mapActions } from "vuex";
import { mapGetters } from "vuex";
export default {
  name: "vCart",
  components: {
    vCartItem,
  },
  props: {
    cart_data: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  computed: {
    ...mapGetters(["CART"]),
  },
  methods: {
    ...mapActions(["DELETE_FROM_CART"]),
    deleteFromCart(index) {
      this.DELETE_FROM_CART(index);
    },
  },
};
</script>

<style scoped>
.v-cart h1 {
  margin: 40px 0;
  text-align: center;
}
.nocart p {
  font-size: 25px;
  text-align: center;
  font-weight: 600;
}
.v-cart_link_to_main {
  z-index: 5;
  position: sticky;
  float: right;
  width: 70px;
  right: 20px;
  bottom: 70px;
  border-radius: 15px;
  text-decoration: none;
  font-weight: 600;
  color: #f7f5f6;
  background: #2e2f2f;
  border: 3px solid;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.8);
  text-align: center;
  line-height: 50px;
  transition: 0.5s all ease;
}
.v-cart_link_to_main:hover {
  transition: 0.5s all ease;
  color: #2e2f2f;
  background: #f7f5f6;
}
</style>
