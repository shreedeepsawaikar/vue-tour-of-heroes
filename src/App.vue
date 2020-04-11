<template>
  <div id="app">
    <h1>Tour of Heroes Vue.js</h1>
    <nav>
      <router-link to="/dashboard">Dashboard</router-link>|
      <router-link to="/heroes">Heroes</router-link>|
      <router-link to="/add">Add Hero</router-link>
    </nav>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
