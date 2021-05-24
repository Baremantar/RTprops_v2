<template>
  <div class="header">
    <div class="container">
      <div class="header-body">
        <a href="#" class="header-logo">RTprops</a>
        <div
          class="header-burger"
          :class="{ active: isActive }"
          @click="turn()"
        >
          <span></span>
        </div>
        <div class="header-menu" :class="{ active: isActive }" @click="turn()">
          <div class="header-list">
            <ul class="nav-list">
              <li>
                <router-link :to="{ name: 'main' }" class="nav-link"
                  >Home</router-link
                >
              </li>
              <li>
                <a
                  href="https://www.etsy.com/shop/StudiaMaskMaster"
                  class="nav-link"
                  >Shop</a
                >
              </li>
              <li>
                <a href="https://www.instagram.com/rtprops/" class="nav-link"
                  >Contact</a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    msg: String,
  },

  data() {
    return {
      isActive: false,
      turn() {
        this.isActive = !this.isActive;
      },
    };
  },
};
</script>

<style scoped>
.container {
  max-width: 100%;
  max-height: auto;
  margin: 0 auto;
  padding: 0 10px;
}
.header {
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  background-color: #2e2f2f;
  z-index: 50;
}
.header:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.7);
}
.header-body {
  position: relative;
  display: flex;
  justify-content: space-between;
  height: 80px;
  align-items: center;
}
.header-logo {
  margin-left: 70px;
  font-size: 30px;
  color: #f7f5f6;
  text-decoration: none;
  font-weight: 800;
  z-index: 2;
}
.header-burger {
  display: none;
}
.header-list {
  display: flex;
  position: relative;
  z-index: 2;
}
.nav-list li {
  display: inline-flex;
  list-style: none;
}
.nav-link {
  color: white;
  text-transform: uppercase;
  font-size: 18px;
  text-decoration: none;
  line-height: 50px;
  margin: 0 0 0 50px;
}
.header-menu {
  margin-right: 50px;
}

@media (max-width: 790px) {
  body.lock {
    overflow: hidden;
  }
  .header-body {
    height: 50px;
  }
  .header-burger {
    display: block;
    position: relative;
    width: 30px;
    height: 20px;
    position: relative;
    z-index: 3;
  }
  .header-burger span {
    background-color: white;
    position: absolute;
    width: 100%;
    height: 2px;
    left: 0;
    top: 9px;
    transition: 0.3s;
  }
  .header-burger:before,
  .header-burger:after {
    content: "";
    background-color: white;
    position: absolute;
    transition: 0.3s;
    width: 100%;
    height: 2px;
    left: 0;
  }
  .header-burger:before {
    top: 0;
    transition: 0.3s;
  }
  .header-burger:after {
    bottom: 0;
    transition: 0.3s;
  }
  .header-burger.active span {
    transform: scale(0);
    transition: 0.3s;
  }
  .header-burger.active:before {
    transform: rotate(45deg);
    top: 9px;
    transition: 0.3s;
  }
  .header-burger.active:after {
    transform: rotate(-45deg);
    bottom: 9px;
    transition: 0.3s;
  }
  .header-list {
    display: block;
  }
  .header-list li {
    display: block;
    margin: 0px 0px 0px 0px;
  }
  .header-menu {
    position: fixed;
    top: -100%;
    transition: 0.3s;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: #2e2f2f;
    padding: 70px 0px 0px 0px;
  }
  .header-menu.active {
    top: 0;
    transition: 0.3s;
  }
}
</style>
