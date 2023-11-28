<template>
 <div class="flex justify-center gap-2 mt-2">
            <router-link :to="{name: 'byLetter', params: {letter}}" v-for="letter of letters" :key="letter">
                {{ letter }}
            </router-link>

    </div>

    <Cocktails :cocktails="cocktails" />
</template>

<script setup>
import { computed, onMounted, watch } from 'vue';
import store from '../store';
import { useRoute } from 'vue-router';
import Cocktails from '../components/Cocktails.vue'

const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split("");
const route = useRoute();

const cocktails = computed(() => store.state.cocktailsByLetter)

watch(route, () => {
    store.dispatch('searchCocktailsByLetter',route.params.letter)
})

onMounted(() => {
    store.dispatch('searchCocktailsByLetter',route.params.letter)
})
</script>
