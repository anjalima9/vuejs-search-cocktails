<template>
<div class="p-8">
    <h1 class="text-4xl font-bold mb-4 text-red-500" >Ingredients</h1>
    <input type="text"
        v-model="keyword"
        class="rounded border-2 border-gray-200 w-full mb-3"
        placeholder="Search for Ingredients"
        />
        <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
            <a href="#"
            @click.prevent="openInredient(ingredient)"
            v-for="ingredient of filteredIngredients"
            :key="ingredient.id"
            class="block bg-white rounded p-3 mb-3 shadow">
                <h3 class="text-2xl font-bold mb-2">{{ ingredient.strIngredient1 }}</h3>

        </a>
        </div>

</div>

</template>

<script setup>
import { ref, onMounted, computed} from 'vue';
import axiosClient from '../axiosClient';
import store from '../store';
import { useRouter } from 'vue-router';

const keyword = ref('')
const ingredients = ref([]);
const router = useRouter();

const filteredIngredients = computed(() => {
    if(!filteredIngredients) return ingredients;
    return ingredients.value.filter(i => i.strIngredient1.toLowerCase().includes(keyword.value.toLocaleLowerCase()))
})

function openInredient(ingredient) {
    store.commit('setIngredient', ingredient)
    router.push({
        name: "byIngredient",
        params: { ingredient:ingredient.strIngredient1}
    });
}

onMounted(() => {
    axiosClient.get("list.php?i=list")
    .then(({data}) => {
        ingredients.value = data.drinks;
    });
});
</script>
