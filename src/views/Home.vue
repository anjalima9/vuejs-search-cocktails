<template>
    <div class="p-8 pb-0 text-red-500">
        <h1 class="text-4xl font-bold mb-4"> Random Cocktails</h1>
    </div>

    <Cocktails :cocktails="cocktails"/>
</template>

<script setup>
import { ref,onMounted } from 'vue';
import axiosClient from '../axiosClient';
import Cocktails from '../components/Cocktails.vue';

const cocktails = ref([]);

onMounted(async () => {
for (let i=0; i <10 ; i++) {
    axiosClient
    .get(`random.php`)
    .then(({data}) => cocktails.value.push(data.drinks[0]));
}
});
</script>
