<template>
    <button class="
        absolute 
        z-10 
        font-bold 
        hover:scale-110 
        rounded-xs 
        ease-out
        text-white
        ">
        {{ tittle }}
    </button>
</template>

<script setup lang="ts">
import { toRef } from "vue"

interface Props{
    tittleButton: string;
}
const props = defineProps<Props>()
const tittle = toRef(props, 'tittleButton')
</script>

<style scoped>

</style>