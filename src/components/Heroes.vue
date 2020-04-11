<template>
  <div>
    <h2>My Heroes</h2>
    <ul class="heroes">
      <li
        v-for="hero in getHeroes"
        v-bind:key="hero.id"
        @click="onSelect(hero)"
        v-bind:class="{selected: hero===selectedHero}"
      >
        <span class="badge">{{hero.id}}</span>
        {{hero.name}}
        <span class="deleteButton" @click.stop="deleteHero(hero.id)">x</span>
      </li>
    </ul>
  </div>
</template>
<script>
import { HEROES } from "../model/mock.heroes";
import { Hero } from "../model/hero";
import router from "../router";
export default {
  name: "Heroes",
  props: {
    title: String
  },
  data() {
    return {
      selectedHero: null,
      heroes: []
    };
  },
  computed: {
    getHeroes() {
      return this.$store.getters.getHeroes;
    }
  },
  mounted() {
    console.log(this.$store.getters.getHeroes);
  },
  methods: {
    onSelect(hero) {
      if (hero == this.selectedHero) {
        this.selectedHero = null;
      } else this.selectedHero = hero;

      router.push({
        name: "detail",
        params: {
          id: hero.id
        }
      });
    },
    deleteHero(id) {
      console.log(id);
      this.$store.dispatch("deletehero", id);
    }
  }
};
</script>

<style scoped>
.heroes {
  margin: 0 0 2em 0;
  list-style-type: none;
  padding: 0;
  width: 15em;
}
.heroes li {
  cursor: pointer;
  position: relative;
  left: 1rem;
  background-color: #eee;
  margin: 0.5em;
  padding: 0.3em 0;
  height: 1.6em;
  border-radius: 4px;
}
.heroes li:hover {
  color: #607d8b;
  background-color: #ddd;
}
.heroes li.selected {
  background-color: #cfd8dc;
  color: white;
  left: 0.1em;
}
.heroes li.selected:hover {
  background-color: #bbd8dc;
  color: white;
}
.heroes .badge {
  float: left;
  font-size: small;
  color: white;
  padding: 0.8em 0.7em 0 0.7em;
  background-color: #405061;
  line-height: 1em;
  position: relative;
  left: -1px;
  top: -4px;
  height: 1.8em;
  margin-right: 0.8em;
  border-radius: 4px 0 0 4px;
}
.heroes .deleteButton {
  font-size: small;
  float: right;
  background: #607d8b;
  height: 1.8em;
  color: white;
  padding: 0.8em 0.7em 0 0.7em;
  background-color: #405061;
  line-height: 1em;
  position: relative;
  left: -1px;
  top: -3px;
  text-align: center;
}
</style>