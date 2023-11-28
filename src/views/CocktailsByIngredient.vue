<template>
<Cocktails :cocktails="cocktails"/>
</template>

<script setup>
import { computed, onMounted } from 'vue';
import store from '../store';
import Cocktails from '../components/Cocktails.vue'
import { useRoute } from 'vue-router';

const route = useRoute();
const cocktails = computed(() => store.state.cocktailsByIngredient)



onMounted(() => {
    store.dispatch('searchCocktailsByIngredient', route.params.ingredient)
})
</script>
