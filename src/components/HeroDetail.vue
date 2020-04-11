<template>
  <div v-if="selectedHero">
    <h2>{{selectedHero.name | capitalize}} Details</h2>
    <div>
      <span>id:</span>
      {{selectedHero.id}}
    </div>
    <div>
      <label for>
        name:
        <input v-model="selectedHero.name" />
      </label>
    </div>
    <button @click="goBack()">GO back</button>
  </div>
</template>
<script>
import { HEROES } from "@/model/mock.heroes";
import router from "../router";
export default {
  name: "HeroDetail",
  data() {
    return {
      selectedHero: null
    };
  },
  created() {
    const id = +this.$route.params.id;
    this.selectedHero = this.$store.getters.getHeroById(id);
  },
  methods: {
    goBack() {
      router.go(-1);
    }
  }
};
</script>
