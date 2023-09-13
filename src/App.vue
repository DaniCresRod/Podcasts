<script setup>
//import { RouterLink, RouterView } from 'vue-router'
//import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <div class="wrapper">
      <router-link to="/">
        Podcaster
      </router-link>      
      <hr>
    </div>
  </header>

  <RouterView />

</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');

header {
  max-height: 20vh;
  display: block;
  height: 5vh;

  color:blue;
  font-family: 'Inter', sans-serif;
  font-weight: bold;
  font-size: medium;

  margin-bottom: 2vh;
}

a:visited{
  text-decoration: none;
  color: blue;
}

</style>
