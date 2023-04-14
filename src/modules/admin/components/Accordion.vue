<template>
    <div class="accordion">
      <button @click="isOpen = !isOpen" class="flex p-2 title-accordion items-center justify-between w-full   font-medium text-left  dark:border-gray-700 dark:text-gray-400">
        <span>{{ props.header }}</span>
        <div class="flex space-x-2 items-center">
            <svg
                data-accordion-icon
                class="w-6 h-6 shrink-0  invisible group-hover:visible"
                
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                >
                <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
                ></path>
            </svg>
        </div>
      </button>
      <transition name="expand">
        <div v-if="isOpen" class="accordion-content">
          <slot></slot>
        </div>
      </transition>
    </div>
  </template>

<script setup lang="ts">
import { ref } from 'vue'

const isOpen = ref(true)

interface Props{
    header: string;
}

const props = defineProps<Props>();

</script>

<style scoped>
.accordion-content {
  background-color: #ffffff;
  border: 1px solid rgb(190, 190, 190);
  border-top: 1px;
  padding: 10px;
}
.accordion .title-accordion {
  background-color: #ffffff;
  border: 1px solid rgb(190, 190, 190);
  color: #333;
  cursor: pointer;
  font-size: 16px;
  text-align: left;
  width: 100%;
}

</style>