<template>
<div class="p-8 pb-0">
    <h1 class="text-4xl font-bold mb-4 text-red-500">Cocktails for {{ ingredient.strIngredient1 }}</h1>
</div>

<Cocktails :cocktails="cocktails"/>
</template>

<script setup>
import { computed, onMounted } from 'vue';
import store from '../store';
import Cocktails from '../components/Cocktails.vue'
import { useRoute } from 'vue-router';

const route = useRoute();
const cocktails = computed(() => store.state.cocktailsByIngredient)
const ingredient = computed(() => store.state.ingredient)


onMounted(() => {
    store.dispatch('searchCocktailsByIngredient', route.params.ingredient)
})
</script>
