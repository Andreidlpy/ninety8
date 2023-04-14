<template>
        <div @click="isOpen = !isOpen" class="cursor-pointer px-3 rounded font-bold flex justify-between items-center">
            <div class="break-normal  transition duration-300" :class="isOpen ?  'translate-y-2' : 'translate-y-0'">
                {{ props.title }}
            </div>
            <div>
                <svg   data-accordion-icon :class="[isOpen ? '-rotate-180 translate-y-2' : 'rotate-0']" class="w-6 h-6 duration-300 transition shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </div>
        </div>
        <Transition name="expand">
            <div v-if="isOpen" class="mt-2 p-3 rounded space-y-4" >
                <template v-for="i in 4" :key="i">

                    <div class="flex items-center space-x-2">
                        <input  id="orange-checkbox" type="checkbox" value="" 
                        class="rounded
                        cursor-pointer
                        w-4 h-4 
                        appearance-none
                        checked:bg-gray-400 
                        bg-white
                        focus:ring-gray-400
                        border
                        text-gray-400
                        border-gray-400
                        ">
                        <label for="orange-checkbox" class="cursor-pointer w-full ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Orange</label>
                    </div>
                </template>
            </div>
        </Transition>
</template>

<script setup lang="ts">
import { ref } from 'vue';

interface Props{
    title: string;
}
const props = defineProps<Props>()

const isOpen = ref(false)

</script>

<style scoped>

</style>