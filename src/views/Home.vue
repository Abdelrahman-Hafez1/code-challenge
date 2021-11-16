<template>
  <div class="home">
    <Tabs :tabs="tabs" :selected="selected" @selected="setSelected">
      <Tab :isSelected="selected == 'All'">
        <div class="row">
          <div class="col-md-4 col-sm-6 col-xl-3" v-for="(card,index) in Allcards" :key="index">
            <Card :card="card"/>
          </div>
        </div>
      </Tab>
      <Tab :isSelected="selected == 'Active'">
        <div class="row">
          <div class="col-md-4 col-sm-6 col-xl-3" v-for="(card,index) in ActiveCards" :key="index">
            <Card :card="card"/>
          </div>
        </div>
      </Tab>
      <Tab :isSelected="selected == 'Comming Soon'">
        <div class="row">
          <div class="col-md-4 col-sm-6 col-xl-3" v-for="(card,index) in Soon" :key="index">
            <Card :card="card"/>
          </div>
        </div>
      </Tab>
    </Tabs>
  </div>
</template>

<script>
// @ is an alias to /src
import Tabs from "@/components/Tabs.vue";
import Tab from "@/components/tab.vue";
import Card from "@/components/Card.vue";
export default {
  name: "Home",
  components: { Tabs, Tab,Card },
  data() {
    return {
      tabs: ["All", "Active", "Comming Soon"],
      selected: "All",
      Allcards: [],
      ActiveCards: [],
      Soon: [],
    };
  },
  methods: {
    setSelected(tab) {
      this.selected = tab;
    },
    getTabs() {
      this.$store
        .dispatch("getTabs")
        .then((res) => {
          this.Allcards = res;
          this.ActiveCards = res.filter((k) => {
            return k.status == "active";
          });
          this.Soon = res.filter((k) => {
            return k.status == "coming_soon";
          });
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  created() {
    this.getTabs();
  },
};
</script>

