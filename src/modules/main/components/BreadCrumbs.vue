<template>
    <RouterLink class="underline capitalize" :to="{name: 'home' }" >{{props.title}}</RouterLink>  / <span class="capitalize">{{ $route.name }}</span>
</template>

<script setup lang="ts">
interface Props{
    title: string;
}
const props = defineProps<Props>()
</script>

<style scoped>

</style>