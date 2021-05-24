<template>
  <div class="v-cart-item">
    <img
      class="v-cart-item_image"
      :src="require('../assets/img/card/' + cart_item_data.image)"
      alt="img"
    />
    <div class="v-cart-item_info">
      <h1>{{ cart_item_data.name }}</h1>
      <p>{{ cart_item_data.article }}</p>
    </div>
    <button class="delete" @click="deleteFromCart">Delete</button>
  </div>
</template>

<script>
export default {
  name: "v-cart-item",
  props: {
    cart_item_data: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  mounted() {},
  methods: {
    deleteFromCart() {
      this.$emit("deleteFromCart");
    },
  },
};
</script>

<style>
.v-cart-item {
  display: flex;
  margin: 20px 20px;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.7);
}
.v-cart-item_image {
  border-radius: 50%;
  margin: 50px;
  max-width: 250px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.9);
}
.delete {
  margin-right: 5%;
  transition-duration: 0.4s;
  padding: 15px;
  border-radius: 30px;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.7);
}
.delete:hover {
  color: #f7f5f6;
  background-color: #2e2f2f;
}
</style>
