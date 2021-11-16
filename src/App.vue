<template>
  <div id="app">
    <div>
      <SideBar />
    </div>
    <div class="content">
      <div class="container-fluid">
        <Navbar />
        <router-view />
      </div>
    </div>
  </div>
</template>
<script>
import SideBar from "@/components/SideBar.vue";
import Navbar from "@/components/Navbar.vue";
export default {
  components: { SideBar, Navbar },
  data() {
    return {};
  },
  methods: {
    checkWindowWidth() {
      let windowwidth = window.innerWidth;
      console.log(windowwidth);
      if (windowwidth >= 768) {
        this.$store.commit("openSidebar");
      } else {
        this.$store.commit("closeSidebar");
      }
    },
  },
  computed: {
    opend() {
      return this.$store.state.sideOpened;
    },
  },
  created() {
    this.checkWindowWidth();
    window.addEventListener("resize", this.checkWindowWidth);
  },
  watch: {},
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  .link {
    text-decoration: none;
    color: #063847;
  }
  .content {
    width: calc(100% - 300px);
    margin-left: auto;
    min-height: 100vh;
    @media (max-width: 767.9px) {
      width: 100%;
    }
  }
}
body {
  background-color: #f4f7f9;
}
</style>
