<template>
    <div class="p-8 pb-0">
        <input type="text"
        v-model="keyword"
        class="rounded border-2 border-gray-200 w-full"
        placeholder="Search for Cocktails"
        @change="searchCocktails" />
     </div>

     <Cocktails :cocktails="cocktails" />
</template>

<script setup>
import { computed, onMounted, ref } from 'vue';
import store from '../store';
import { useRoute } from 'vue-router';
import Cocktails from '../components/Cocktails.vue'

const keyword = ref('');
const route = useRoute();
const cocktails = computed(() => store.state.searchedCocktails);

function searchCocktails() {
    if(keyword.value) {
        store.dispatch('searchCocktails', keyword.value);
    } else {
        store.commit('setSearchedCocktails', []);
    }
}

onMounted(() => {
    keyword.value = route.params.name
    if(keyword.value) {
        searchCocktails()
    }
})
</script>
