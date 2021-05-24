<template>
  <div class="popup_wrapper" ref="popup_wrapper">
    <div class="v-popup">
      <div class="v-popup_header">
        <h1>{{ popupTitle }}</h1>
      </div>
      <div class="v-popup_content">
        <slot></slot>
      </div>
      <div class="v-popup_footer">
        <button class="btn-close_modal" @click="closePopup">Close</button>
        <button class="btn-buy" @click="rightBtnAction">
          {{ rightBtnTitle }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "vPopup",
  methods: {
    rightBtnAction() {
      this.$emit("rightBtnAction");
    },
    closePopup() {
      this.$emit("closePopup");
    },
  },
  mounted() {
    let vm = this;
    document.addEventListener("click", function (item) {
      if (item.target === vm.$refs["popup_wrapper"]) {
        console.log();
        vm.closePopup();
      }
    });
  },
  props: {
    popupTitle: {
      type: String,
      default: "Popup name",
    },
    rightBtnTitle: {
      type: String,
      default: "Ok",
    },
  },
};
</script>

<style>
.popup_wrapper {
  background-color: rgba(64, 64, 64, 0.4);
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
}
.v-popup {
  border-radius: 10px;
  z-index: 49;
  position: fixed;
  width: 700px;
  top: 30%;
  padding: 16px;
  background-color: #f7f5f6;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.7);
}
.v-popup_header {
  display: flex;
  justify-content: center;
  align-items: center;
}
.v-popup_content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.v-popup_footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.btn-buy {
  transition-duration: 0.4s;
  padding: 5px;
  border-radius: 10px;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.7);
}
.btn-buy:hover {
  color: #f7f5f6;
  background-color: #2e2f2f;
}
.btn-close_modal {
  transition-duration: 0.4s;
  padding: 5px;
  border-radius: 10px;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.7);
}
.btn-close_modal:hover {
  color: #f7f5f6;
  background-color: #2e2f2f;
}
</style>
