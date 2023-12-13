<template>
    <div class="bg-white shadow rounded-xl hover:scale-105 transition-all">
            <router-link :to="{name: 'cocktailDetails', params: {id: cockt.idDrink}}">
                <img :src="cockt.strDrinkThumb" :alt="cockt.strDrink" class="rounded-t-xl w-full h-60 object-cover">
            </router-link>
            <div class="p-3">
                <h3 class="font-bold" >{{ cockt.strDrink }}</h3>
                <p class="mb-4">
                    {{  $filters.truncateWords(cockt.strInstructions, 20) }}
    </p>

            <div class="flex items-center justify-between">
                <YoutubeButton :href="cockt.strVideo">Youtube</YoutubeButton>
            </div>
            </div>
        </div>

</template>

<script setup>
import YoutubeButton from './YoutubeButton.vue';


const {cockt} = defineProps({
    cockt: {
        required : true,
        type: Object
    }
})
</script>
