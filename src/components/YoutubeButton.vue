<template>
     <a :href="href"
                target="_blank"
                class="px-3 py-2 rounded text-white border-2 border-red-600 bg-red-500 hover:bg-red-600 transition-colors cursor-pointer">
                <slot></slot>
                </a>
</template>

<script setup>
const props = defineProps({
href: String
})
</script>
