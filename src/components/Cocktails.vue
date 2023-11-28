<template>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
        <CocktailItem v-for="cockt of cocktails" :key="cockt.idDrink" :cockt="cockt"/>
     </div>
<div v-if="!cocktails.length" class="flex justify-center text-gray-600">
There are no cocktails
</div>
</template>

<script setup>
import CocktailItem from './CocktailItem.vue';

const { cocktails } = defineProps({
    cocktails: {
        required: true,
        type: Array
    }
})
</script>
