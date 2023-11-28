<template>
    <div class="max-w-[800px] mx-auto p-8">
<h1 class="text-5xl font-bold mb-5">{{ cocktail.strDrink }}</h1>
<img :src="cocktail.strDrinkThumb" alt="cocktail.strDrink" class="max-w-[100%]">
<div class="grid grid-cols-1 sm:grid-cols-3 text-lg py-2">
    <div>
        <strong class="font-bold">Category: </strong> {{ cocktail.strCategory }}
    </div>
    <div>
        <strong class="font-bold">Alcoholic: </strong> {{ cocktail.strAlcoholic }}
    </div>
    <div>
        <strong class="font-bold">Tags: </strong> {{ cocktail.strTags }}
    </div>
</div>

<div class="my-3">
    {{ cocktail.strInstructions }}
</div>
<div class="grid grid-cols-1 sm:grid-cols-2">
    <div>
        <h2 class="text-2xl font-semibold mb-2">Ingredients</h2>
        <ul>
            <template v-for="(el, ind) of new Array(15)">
                <li v-if=" cocktail[`strIngredient${ind + 1}`]">
                    {{ind + 1}}. {{  cocktail[`strIngredient${ind + 1}`] }}
                </li>

            </template>
        </ul>
    </div>
    <div>
        <h2 class="text-2xl font-semibold mb-2">Measures</h2>
        <ul>
            <template v-for="(el, ind) of new Array(15)">
                <li v-if=" cocktail[`strMeasure${ind + 1}`]">
                    {{ind + 1}}. {{ cocktail[`strMeasure${ind + 1}`] }}
                </li>

            </template>
        </ul>
    </div>
    <div class="mt-4">
        <YoutubeButton :href="cocktail.strVideo"> Youtube </YoutubeButton>
        <a :href="cocktail.strImageSource"
                target="_blank"
                class="ml-3 px-3 py-2 rounded border-2 border-transparent text-indigo-600 transition-colors cursor-pointer">
                    View image source
                </a>
    </div>
</div>

    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import axiosClient from '../axiosClient';
import YoutubeButton from '../components/YoutubeButton.vue';


const cocktail = ref({});
const route = useRoute();

onMounted(() => {
    axiosClient.get(`lookup.php?i=${route.params.id}`)
    .then(({data}) => {
        cocktail.value = data.drinks[0] || {}
    })
})

</script>
