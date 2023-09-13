<script setup>
import { ref, onBeforeMount } from 'vue'
import PodcastDetailSideBar from '../components/PodcastDetailSideBarComponent.vue'

const props = defineProps({
  id: String
});

console.log(props.id);

//Buscar en el local storage la entrada que corresponde con el id para tener la info

const podcastInfo=ref();

onBeforeMount(() => {
    podcastInfo.value=JSON.parse(localStorage.getItem('podCastInfo')).feed.entry;
    podcastInfo.value=podcastInfo.value.filter((item)=>{
    return ((item.id.attributes['im:id'])).toLowerCase().includes(props.id.toLowerCase());
  })[0];  

});

</script>

<template>
    <div class="SideBarDiv">
        <PodcastDetailSideBar :podcastObject="podcastInfo"/>
    </div>
    <section>
        <div>

        </div>
        <article>
            
        </article>
    </section>

    
</template>

<style scoped>

.SideBarDiv{
    width: 30vw;


}

</style>