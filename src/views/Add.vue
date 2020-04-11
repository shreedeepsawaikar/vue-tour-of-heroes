<template>
  <div>
    <form @submit.prevent>
      <label>Name:</label>
      <input type="text" v-model="name" placeholder="hero name" />
      <button @click="addHero()">Add Hero</button>
    </form>
  </div>
</template>
<script>
export default {
  name: "AddHero",
  data() {
    return {
      name: this.$store.getters.getNewName
    };
  },
  mounted() {
    // this.hero.id = this.$store.getters.getMaxIndex + 1;
  },
  methods: {
    addHero() {
      this.$store.dispatch("addhero", this.name);
      this.name = "";
    }
  }
};
</script>