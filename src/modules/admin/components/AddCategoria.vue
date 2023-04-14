<template>
    <Accordion :header="accordionHeader">
      <div class="flex flex-col space-x-2 mt-2">
        <div>
          <div class="flex flex-row space-x-1 border-gray-300 text-sm">
            <button
              class="w-full py-2 border-gray-200 hover:underline text-blue-400 whitespace-nowrap"
              :class="{ 'border border-b-0': activeTab === 0 }"
              @click="activeTab = 0"
            >
              Todas las categorías
            </button>
            <button
              class="w-full py-2 border-gray-200 hover:underline text-blue-400"
              :class="{ 'border border-b-0': activeTab === 1 }"
              @click="activeTab = 1"
            >
                Más Utilizados
            </button>
          </div>
          <div class="mt-2">
            <div v-show="activeTab === 0" >
                <div class="overflow-y-auto h-[200px]" v-if="categorias.length > 0">
                    <template v-for="categoria in categorias">
                        <div class="flex space-x-2">
                            <input type="radio" :name="categoria.name" :id="categoria.name"  :value="categoria.name" v-model="picked" >
                            <label :for="categoria.name ">{{ categoria.name }}</label>
                        </div>
                    </template>
                </div>
                <div v-else class="text-center h-[200px] flex justify-center align-middle items-center text-gray-500">
                    Ninguna Categoria
                </div>
                <div @click="openAddCategory = !openAddCategory" class="text-blue-500 underline text-sm pt-1 cursor-pointer hover:text-blue-600 duration-300 inline-block">+ Agregar Categoria</div>
                    <transition name="expand">
                      <div v-if="openAddCategory" class="lg:flex-col flex flex-row justify-start space-x-3 lg:space-x-0 lg:mt-2 lg:space-y-2  mt-2">
                         <input type="text" class="border-2">
                         <button class="px-2 py-1 border border-[#7e8993] bg-[#f6f7f7] text-sm">Añadir nueva categoría</button>
                      </div>
                    </transition>
                </div>
            </div>
            <div v-show="activeTab === 1">
              Contenido de la categoría 1
            </div>
          </div>
        </div>
    </Accordion>
  </template>
  
  <script setup lang="ts">
  import Accordion from './Accordion.vue'
  import {ref} from 'vue'
  
  interface Categoria {
    name: string;
  }

  const activeTab       = ref(0);
  const accordionHeader = ref('Filtrar por categoría')
  const categorias      = ref<Categoria[]>([{name: 'PANTS'}])
  const openAddCategory = ref(false)

  const picked          = ref('')
  //Methods
  const pickCategory = () => {
    console.log( picked.value )
  }
  </script>
  