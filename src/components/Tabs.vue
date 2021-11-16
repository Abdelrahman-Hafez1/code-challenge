<template>
  <div id="tabs" class="mt-4">
    <div class="tab-navigation">
      <ul class="list-unstyled d-flex m-0">
        <li
          class="mx-2 py-2"
          v-for="(tab, index) in tabs"
          :key="index"
          @click="setTap(tab)"
          :class="{ active: selected==tab }"
        >
          {{ tab }}
        </li>
      </ul>

    </div>
      <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Tabs",
  props: {
    tabs: {
      type: Array,
      required: true,
    },
    selected: {
      type: String,
      required: true,
    },
  },
  data() {
    return {};
  },
  methods: {
    setTap(tab) {
      this.$emit("selected", tab);
    },
  },
};
</script>

<style lang="scss" scoped>
.tab-navigation {
  border-bottom: 2px solid #dfe9ec;
}
.active {
  border-bottom: 2px solid #063847;
}
li{
    cursor: pointer;
}
</style>
