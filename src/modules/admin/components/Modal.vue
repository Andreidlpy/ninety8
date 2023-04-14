<template>
    <div v-if="showModal" class="fixed z-20 inset-0 overflow-y-auto">
      <div class="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <button class="absolute top-4 right-4 z-50" @click="closeModal()">
          <svg class="h-6 w-6 text-gray-700 " fill="none" viewBox="0 0 24 24" stroke="currentColor" >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <!-- Background overlay -->
        <div class="fixed inset-0 transition-opacity" aria-hidden="true" @click="closeModal()">
          <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>

        <!-- Modal content -->
        <div class="relative  inline-block align-bottom  bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full w-[calc(100vw - 4rem)] scale-120" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
          <slot></slot>
          
        </div>
      </div>
    </div>
</template>

<script setup lang="ts">
import { toRef } from 'vue'
interface Props {
    showModal: boolean;
}
const props = defineProps<Props>()
const showModal = toRef( props , 'showModal' )
const emits = defineEmits(['update:showModal'])

const closeModal = () =>  {
  emits('update:showModal', false)
}
</script>

<style scoped>

</style>