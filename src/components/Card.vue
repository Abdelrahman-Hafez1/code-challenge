<template>
  <div class="card">
    <img
      :src="card.banner"
      class="card-img-top"
      :alt="card.banner_alt"
      :title="card.banner_title"
    />
    <div class="card-body">
      <span class="badge bade-colored">2 dayes left</span>
      <h2 class="title">{{ card.title }}</h2>
      <h3>
        <span>{{ progress }}%</span> {{ leftinFund }} $ left to fund
      </h3>
      <div class="progress">
        <div
          class="progress-bar bg-success"
          role="progressbar"
          :style="`width: ${progress}%`"
          :aria-valuenow="progress"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
      <p class="card-text py-2">{{ card.teaser.slice(0, 90) }}...</p>
      <div class="keys">
        <span>{{ card.status }}</span>
        <span>{{ card.type }}</span>
      </div>
      <hr class="separator" />
      <div class="investment">
        <div class="row">
          <div class="col-6 right-separate">
            <p>{{ card.investor_count }}</p>
            <span>Want to invest</span>
          </div>
          <div class="col-6">
            <p>{{ card.current_investment }}$</p>
            <span>Funding Round</span>
          </div>
        </div>
      </div>

      <router-link to="#d" class="btn btn-colored mt-3">
          learn more
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: ["card"],
  computed: {
    progress() {
      return parseInt(
        (this.card.current_investment / this.card.investment_goal) * 100
      );
    },
    leftinFund() {
      return this.card.current_investment - this.card.investment_goal;
    },
  },
};
</script>

<style lang="scss">
.card {
  img {
    height: 110px;
    width: 100%;
    object-fit: cover;
  }
  .bade-colored {
    background-color: #063847;
    color: #fff;
    margin-bottom: 15px;
  }
  .title {
    font-size: 22px;
    font-weight: 700;
  }
  h3 {
    font-size: 16px;
    color: #063847;
    span {
      color: #67ae3d;
      font-size: 18px;
    }
  }
  .progress {
    height: 5px !important;
  }
  .card-text {
    color: #063847;
  }
  .keys {
    span {
      background-color: #f4f7f9;
      color: #063847;
      border-radius: 40px;
      display: inline-block;
      padding: 5px 10px;
      font-size: 14px;
      margin-right: 10px;
    }
  }
  .investment {
    text-align: center;
    color: #063847;
    p {
      margin: 0;
      font-weight: bold;
    }
    span {
      font-size: 14px;
    }
  }
  .right-separate {
    position: relative;
    &::after {
      content: "";
      position: absolute;
      top: 50%;
      left: 100%;
      transform: translateY(-50%);
      width: 2px;
      height: 80%;
      background-color: #dfe9ec;
    }
  }
  .btn-colored{
      background-color: #063847;
      color: #fff;
      width: 100%;
  }
}
</style>
