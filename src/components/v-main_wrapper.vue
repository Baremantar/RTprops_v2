<template>
  <div class="v-main-wrapper">
    <router-view />
    <Header />
    <router-link :to="{ name: 'cart', props: { cart_data: CART } }">
      <div class="v-main_link_to_cart">Cart: {{ CART.length }}</div>
    </router-link>
    <vFooter />
  </div>
</template>

<script>
import Header from "./v-header.vue";
import vFooter from "./v-footer.vue";
import { mapGetters } from "vuex";

export default {
  name: "vWrapper",
  components: {
    Header,
    vFooter,
  },
  props: {
    data() {
      return {
        title: "Main wrapper",
      };
    },
  },
  computed: {
    ...mapGetters(["CART"]),
  },
};
</script>

<style>
*,
*:before,
*:after {
  padding: 0;
  margin: 0;
  border: 0;
  box-sizing: border-box;
}
html,
body {
  background-color: #f7f5f6;
  font-family: "Titillium Web", sans-serif;
}
.v-main_link_to_cart {
  z-index: 5;
  position: sticky;
  width: 70px;
  left: 20px;
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
.v-main_link_to_cart:hover {
  transition: 0.5s all ease;
  color: #2e2f2f;
  background: #f7f5f6;
}
</style>
