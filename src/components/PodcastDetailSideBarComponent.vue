<script setup>

const props = defineProps({
  podcastObject: Object
});

console.log(props.podcastObject);

</script>

<template>
<div class="PodcastSideBarDetails">
    <img :src="props.podcastObject['im:image'][2].label" :alt="props.podcastObject['im:name'].label"/>
    <hr>
    <p class="podcastCardTitle">{{ props.podcastObject['im:name'].label }}</p>
    <p class="podcastCardAuthor italics">by {{ props.podcastObject['im:artist'].label }}</p>
    <hr>
    <p class="podcastCardAuthor"><b>Description:</b></p>
    <p class="podcastCardAuthor italics">{{ props.podcastObject['summary'].label }}</p>

</div>
</template>

<style scoped>
.PodcastSideBarDetails{
    display: flex;
    flex-direction: column;
    justify-content: center;

    border-radius: 3.5px;
    box-shadow: 0px 1px 5px grey;
    padding:2vh 2vw;
}

p{
    margin:0 0;    
}
.italics{
    font-style: italic;
}

.PodcastSideBarDetails img{
    border-radius: 5px;
    width: 75%;
    margin:0 auto;

}

</style>