import Vue from "vue";

Vue.filter("capitalize", value => {
  return value.toUpperCase();
});
