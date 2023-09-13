<script setup>
import getInfoFromSource from '../services/services';
import { onBeforeMount, ref, watch} from 'vue';
import PodcastComponent from '../components/PodcastComponent.vue';

const podcastInfoObject=ref([]);
const podcastInfoObjectFiltered=ref([]);
const searchValue=ref("");

onBeforeMount(() => {
  getInfoFromSource();
  podcastInfoObject.value = JSON.parse(localStorage.getItem('podCastInfo')).feed.entry;  
  podcastInfoObjectFiltered.value=podcastInfoObject.value;
})

//Para buscar entre los podcasts
watch(searchValue,()=>{
  podcastInfoObjectFiltered.value=podcastInfoObject.value;
  podcastInfoObjectFiltered.value=podcastInfoObject.value.filter((item)=>{
    return ((item.title.label)).toLowerCase().includes(searchValue.value.toLowerCase())||((item['im:artist'].label)).toLowerCase().includes(searchValue.value.toLowerCase());
  });  
} );


</script>

<template>
  <main>
    <!-- <h1>Podcaster</h1> -->
    <div class="searchBar">
      <span class="podcastSearchBarNumber">{{ podcastInfoObjectFiltered.length }}</span>
      <input id="podcastSearcher" type="text" placeholder="Filter podcasts..." v-model="searchValue">      
    </div>
    <div class="podcastDiv">
      <PodcastComponent v-for="item in podcastInfoObjectFiltered" :key="item" :podcastObject="item"/>     
    </div>
  </main>
</template>

<style scoped>

main{
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
  column-gap: 2.5vw;
  row-gap: 10vh;
}

.searchBar{
  margin-bottom: 3vh;
  margin-right: 5vw;
  text-align: right;
  display:flex;
  justify-content: flex-end;
  align-items:center;
}

.podcastSearchBarNumber{
  font-weight: bold;
  font-family: 'Inter', sans-serif;
  background-color: blue;
  border-radius: 5px;
  color: white;
  padding: 0 0.5vw;
  margin-right: 1vw;
}

#podcastSearcher{
  border-radius: 5px;
  border-color: rgba(128, 128, 128, 0.336);
  padding: 0.5vh 1vw;
  font-weight: light;
  font-family: 'Inter', sans-serif;
  font-size: smaller;
}



</style>
