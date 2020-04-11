<template>
  <div class="home">
    <Dashboard />
  </div>
</template>

<script>
// @ is an alias to /src
import Heroes from "@/components/Heroes.vue";
import Dashboard from "@/components/Dashboard";
export default {
  name: "Home",
  components: {
    Dashboard
  }
};
</script>
