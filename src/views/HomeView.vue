<script setup>
import getInfoFromSource from '../services/services';
import { onBeforeMount, ref} from 'vue';
import PodcastComponent from '../components/PodcastComponent.vue';

const podcastInfoObject=ref([]);

onBeforeMount(() => {
  getInfoFromSource();
  podcastInfoObject.value = JSON.parse(localStorage.getItem('podCastInfo')).feed.entry;
 })

</script>

<template>
  <main>
    <h1>Podcaster</h1>
    <div class="podcastDiv">
      <PodcastComponent v-for="item in podcastInfoObject" :key="item" :podcastObject="item"/>
    </div>
  </main>
</template>

<style scoped>

main{
  border: 1px solid blue;
  display: block;
  height: 60vh;
}

.podcastDiv{
  margin:0 auto;
  padding:0;
  display:flex;
  width: 90vw;
  flex-wrap: wrap;
  justify-content: center;
  column-gap: 5vw;
  row-gap: 5vh;
}

</style>
