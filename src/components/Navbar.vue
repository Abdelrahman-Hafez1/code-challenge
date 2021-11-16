<template>
  <div class="Navbar py-3">
    <div class="container">
      <div class="sidebar-icon">
        <i class="fas fa-bars" @click="toggleSideBar"></i>
      </div>
      <div class="d-flex justify-content-between align-items-center">
        <div class="title">
          <h4>Investment Opportunities (3)</h4>
        </div>
        <div class="right">
          <div class="d-flex align-items-center">
            <div class="mx-1 profile">
              <img src="@/assets/Oval.png" alt="" />
              <span>Tomas Miller</span>
            </div>
            <div class="mx-2 notification">
              <i class="fas fa-bell"></i>
              <!-- dropdown -->
            </div>
            <div class="mx-1 language">
              <img src="@/assets/united-kingdom-2.png" alt="" />
              <!-- dropdown -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  methods: {
    toggleSideBar() {
      this.$store.commit("toggleSideBar");
    },
  },
};
</script>

<style lang="scss" scoped>
.Navbar{
    border-bottom: 1px solid #DFE9EC;
}
.sidebar-icon {
  @media (min-width: 768px) {
    display: none;
  }
  i {
    font-size: 22px;
  }
}
.title {
  h4 {
    font-size: 22px;
    @media (max-width: 767.9px) {
      font-size: 14px;
    }
  }
}
.profile {
  background-color: #dfe9ec;
  padding: 5px;
  @media (max-width: 767.9px) {
    font-size: 14px;
  }
}
.notification {
  i {
    font-size: 22px;
  }
}
</style>
