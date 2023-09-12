<script setup>

const props = defineProps({
  podcastObject: Object
});

//console.log(props.podcastObject);

</script>

<template>
    <div class="podcastCard">        
        <img :src="props.podcastObject['im:image'][0].label"/>
        <span>{{ props.podcastObject['im:name'].label }}</span>
    </div>
</template>

<style scoped>
template{
    display: flex;
    flex-direction: row;
}

div{
    border: 2px solid black;
}

.podcastCard{
    width:20vw;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: ;

    
}

.podcastCard img{
    border-radius: 50%;
    margin-top: -5vh;
}

</style>