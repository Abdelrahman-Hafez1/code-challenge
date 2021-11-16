<template>
  <nav class="Side-bar py-3 d-flex flex-column" :class="{left300:opend,left_300:!opend}">
    <div class="close">
      <i class="fas fa-times" @click="closeSide"></i>
    </div>
    <div class="logo text-start ms-4">
      <img src="@/assets/LeftMenu/Logo.png" alt="logo" />
    </div>
    <div class="links">
      <ul class="list-unstyled mt-2">
        <li>
          <router-link to="#1" class="link">
            <i class="fas fa-th-list"></i>
            Cockpit</router-link
          >
        </li>
        <li>
          <router-link :to="{name:'Home'}" class="link"
            ><i class="fas fa-star"></i> Investment Opportunities</router-link
          >
        </li>
        <li>
          <router-link to="#3" class="link"
            ><i class="fas fa-rocket"></i> MyInvestments</router-link
          >
        </li>
      </ul>

      <hr class="separator" />

      <ul class="list-unstyled mt-2">
        <li>
          <router-link to="#4" class="link">
            <i class="fas fa-book"></i>
            Knowledge Center</router-link
          >
        </li>
        <li>
          <router-link to="#5" class="link"
            ><i class="fas fa-crown"></i> Venture Pool</router-link
          >
        </li>
        <li>
          <router-link to="#6" class="link"
            ><i class="fas fa-file-alt"></i> Fee Model</router-link
          >
        </li>
      </ul>
    </div>
    <div class="rectange mb-3">
      <div class="text-center">
        <img src="@/assets/LeftMenu/Like.png" alt="" />
      </div>
      <div>
        <p class="my-2">Recommend primeCROWD</p>
        <button class="btn">Invite Friends</button>
      </div>
    </div>
    <div class="help">
      <div class="text-center">
        <h4>Need Help?</h4>
      </div>
      <div>
        <p class="my-2">+436641909445</p>
        <p class="my-2">support@prime-crowd.com</p>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  methods:{
    closeSide(){
      this.$store.commit("closeSidebar");
    },
  },
  computed:{
        opend() {
      return this.$store.state.sideOpened;
    },
  }
  
};
</script>

<style lang="scss" scoped>
.left_300{
  left: -300px !important;
}
.left300{
  left: 0 !important;
}
.Side-bar {
  position: fixed;
  width: 300px;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: #fff;
  transition: 0.3s left ease;
  z-index: 10000;
  @media (max-width: 767.9px) {
    left: -300px;
    position: absolute;
  }
  .close{
    @media (min-width: 768px){
      display: none;
    }
    i{
      float: right;
      margin-right: 10px;
      font-size: 22px;
    }
  }
  ul {
    li {
      display: block;
      width: 100%;
      .link {
        padding: 10px 20px;
        width: 100%;
        height: 100%;
        display: block;
        font-size: 14px;
        i {
          color: #063847;
          font-size: 14px;
          margin-right: 15px;
        }
        &.router-link-exact-active {
          color: #fff !important;
          background-color: #063847;
          i {
            color: #fff;
          }
        }
      }
    }
  }
  .separator {
    width: 80%;
    margin: auto;
  }

  .rectange {
    background-image: url("../assets/LeftMenu/Rectangle.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 250px;
    padding: 20px 15px;
    margin: 0 auto;
    color: #fff;
    text-align: center;
    border-radius: 5px;
    button{
      background-color: #fff;
    }
  }
  .help{
    width: 250px;
    padding: 20px 15px;
    margin: 0 auto;
    background-color: #DFE9EC;
    color: #063847;
    text-align: center;
    border-radius: 5px;
    h4{
      font-weight: bold;
      font-size: 22px;
    }
  }
}
</style>
