
<template>
      <div class="flex items-center md:hidden" >
        <input type="checkbox" name="hamburger" id="hamburger" class="peer" hidden @click="emits('menuBar')">
                    <label for="hamburger" class="peer-checked:hamburger block relative z-20 pl-2  cursor-pointer md:hidden">
                        <div aria-hidden="true" class="m-auto h-0.5 w-5 mt-1      rounded dark:bg-white bg-black transition duration-300 "></div>
                        <div aria-hidden="true" class="m-auto h-0.5 w-5 mt-1 rounded dark:bg-white bg-black transition duration-300 "></div>
                        <div aria-hidden="true" class="m-auto h-0.5 w-5 mt-1 rounded dark:bg-white bg-black transition duration-300 "></div>
                    </label>
      </div>
</template>

<script setup lang="ts">
 interface Emits{
    (e: 'menuBar'): void
 }
 const emits = defineEmits<Emits>()
</script>

<style scoped>

</style>