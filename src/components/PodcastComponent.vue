<script setup>

const props = defineProps({
  podcastObject: Object
});

</script>

<template>
    <router-link :to="{name:'podcast', params:{ id: props.podcastObject.id.attributes['im:id']}}">
        <div class="podcastCard">        
            <img :src="props.podcastObject['im:image'][2].label" :alt="props.podcastObject['im:name'].label"/>
            <span class="podcastCardTitle">{{ props.podcastObject['im:name'].label }}</span>
            <span class="podcastCardAuthor">Author: {{ props.podcastObject['im:artist'].label }}</span>
        </div>
    </router-link>    
</template>

<style scoped>
template{
    display: flex;
    flex-direction: row;
}

div{
    border: 1px solid rgba(128, 128, 128, 0.336);
}

.podcastCard{
    width:20vw;
    height: fit-content;
    display:flex;
    flex-direction: column;
    align-items: center;
    
    border-radius: 3.5px;    
    text-align: center;
    
    box-shadow: 0px 1px 5px grey;
    margin-top: 4vw;    
}
.podcastCard img{
    position:relative;
    top:0vh;
    border-radius: 50%;
    margin-top: -4vw;
    width: 10vw;
}

</style>