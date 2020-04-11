import { Hero } from "./../model/hero";
import { HEROES } from "./../model/mock.heroes";
import Vue from "vue";
import Vuex from "vuex";
import { compareHeroId } from "@/util/Compare";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    heroes: HEROES,
    newName: ""
  },
  getters: {
    getHeroes: state => {
      return state.heroes;
    },
    getHeroById: state => (id: number) => {
      return state.heroes.find(hero => hero.id === id);
    },
    getTopHeroes: state => {
      return state.heroes.slice(1, 5);
    },
    getNewName: state => {
      return state.newName;
    }
  },
  mutations: {
    addhero(state, { name }) {
      const id =
        state.heroes.length == 0
          ? 1
          : state.heroes.sort(compareHeroId)[0].id + 1;

      const hero = {
        id,
        name
      };

      state.heroes = [...state.heroes, hero];
      state.newName = "";
    },
    deletehero(state, { id }) {
      state.heroes = state.heroes.filter(hero => hero.id !== id);
    }
  },
  actions: {
    addhero: ({ commit }, name) => {
      commit("addhero", { name });
    },
    deletehero: ({ commit }, id) => {
      commit("deletehero", { id });
    }
  },
  modules: {}
});
