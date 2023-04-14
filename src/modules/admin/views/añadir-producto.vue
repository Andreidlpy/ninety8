<template>
    <div  class="px-5 max-w-full flex flex-col md:justify-between lg:flex-row ">
      <div class="flex-1">
        <input class="border w-full  h-10 text-2xl" type="text" name="" id="" placeholder="Nombre del producto">
                <div class="my-10 ">
                    <div class="font-medium text-gray-500 mb-2">Descripción del producto</div>
                    <QuillEditor  theme="snow" placeholder="Ingrese la descripción"  v-model:content="content" contentType="html" />
                </div>

                <div class="flex flex-row my-5 border border-gray-300  shadow-md relative">
                  <div class="absolute  w-10 h-10 loading-overlay" v-if="isLoading">
                    <div class="loading-spinner"></div>
                  </div>
                    <!-- Pestañas verticales -->
                    <div class="flex flex-col border-r border-gray-300">
                            <button
                                class="w-full px-4 py-2 border-b border-gray-200 hover:bg-gray-200"
                                :class="{ 'bg-gray-200': activeTab === 0 }"
                                @click="activeTab = 0"
                                >
                              General
                            </button>
                            <button
                                class="w-full px-4 py-2 border-b border-gray-200 hover:bg-gray-200"
                                :class="{ 'bg-gray-200': activeTab === 1 }"
                                @click="activeTab = 1"
                                >
                                Atributo
                            </button>
                            <button
                                class="w-full px-4 py-2 border-b border-gray-200 hover:bg-gray-200"
                                :class="{ 'bg-gray-200': activeTab === 2 }"
                                @click="activeTab = 2"
                                >
                                Inventario
                            </button>
                    </div>
                    <!-- Contenido de la pestaña activa -->
                    <div class="flex flex-col  px-4 py-2 w-full min-h-[400px]" >
                              <div v-if="activeTab === 1"  >
                                <div class="flex space-x-2">
                                  <select class="text-sm border focus:outline-none rounded-sm focus:ring-blue-500 focus:border-blue-500" name="" id=""  >
                                    <option value="">Atributo de producto seleccionado</option>
                                  </select>
                                  <button class="cursor-pointer border border-gray-400 px-2 py-1 rounded-sm" @click="createAtribute" >Añadir</button>
                                </div>

                                <template v-if="atributes.length > 0" >
                                  <template v-for="att in atributes" :key="att">
                                  <div class=" w-full accordion group mt-1"  >
                                      <button @click="att.estado = !att.estado" class="flex title-accordion items-center justify-between w-full  font-medium text-left text-gray-200 dark:border-gray-700 dark:text-gray-400">
                                        <span class="p-3">{{ att.nombre ? att.nombre.toUpperCase(): 'Atributo personalizado'}}</span>
                                        <div class="flex space-x-2 items-center">
                                          <svg
                                            data-accordion-icon
                                            class="w-6 h-6 shrink-0  invisible group-hover:visible"
                                            :class="{ 'rotate-180': att.estado }"
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
                                          <button class="p-5  cursor-pointer text-red-500 text-sm" @click.stop="deleteAtribute(att.id)">Eliminar</button>
                                        </div>
                                      </button>
                                    <transition name="expand">
                                      <div v-if="att.estado" class="accordion-content " >
                                        <div class="flex space-x-2 mt-2" >
                                          <div class="flex flex-col ">
                                              <label for="nombre">Nombre:</label>
                                              <input type="text" 
                                                v-model.trim="att.nombre"
                                                name="nombre" 
                                                id="nombre" 
                                                placeholder="ep.ej: fabrica" class="border-2 p-1 focus:outline-none rounded-sm focus:ring-blue-500 focus:border-blue-500">
                                              </div>
                                            <div class="flex flex-col w-full">
                                              <label for="valor">Valor(es):</label>
                                              <textarea
                                              v-model.trim="att.valores"
                                              name="valor" id="valor"  rows="5" class="border-2 p-1 focus:outline-none rounded-sm focus:ring-blue-500 focus:border-blue-500" placeholder="Ingresa un valor o varios separados por un <|>"></textarea>
                                            </div>
                                        </div> 
                                      </div>
                                    </transition>
                                  </div>
                                </template>
                                <div class="mt-2">
                                  <button class="bg-stone-500 rounded-md p-2 text-white" @click="updateAtribute">Guardar cambios</button>
                                </div>
                            </template>
                                <!-- Sección Atributo   -->
                              </div>
                            <div v-if="activeTab === 0 " >
                              <div class="flex flex-col  space-y-7 max-w-full w-[30%]">
                                <div class="flex flex-col justify-between items-start md:flex-row relative text-sm">
                                  <label for="" >Precio normal (S/)</label>
                                  <div class="flex flex-col w-3/4 md:w-1/2 lg:w-1/2">
                                    <input type="text" v-model="formPrice.price" @input="() => addPrice('price')" class="border min-w-[200px] border-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500">
                                    <span v-if="alertMsg.price" class=" rounded-lg px-1 bg-red-600 absolute bottom-[-25px] rigth-0 text-white text-[11px] ">{{ alertMsg.price }}</span>
                                  </div>
                                </div>
                                <div class="flex flex-col justify-between items-start md:flex-row relative text-sm">
                                  <label for="" >Precio rebajado (S/)</label>
                                  <div class="flex flex-col w-3/4 md:w-1/2 lg:w-1/2">
                                    <input type="text" v-model="formPrice.discount" @input="() => addPrice('discount')" class="border min-w-[200px] border-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500">
                                    <span v-if="alertMsg.discount" class="px-2 py-[1px] rounded-lg bg-red-600 absolute bottom-[-30px] rigth-0 text-white text-[11px] ">{{ alertMsg.discount }}</span>
                                  </div>
                                </div>
                              </div>
                              <!-- Precios -->
                            </div>
                            <div v-if="activeTab === 2">
                              <div class="flex flex-col space-y-7 max-w-full md:w-2/3 lg:w-1/2">
                                <div class="flex space-x-2 flex-col md:flex-row md:items-center">
                                  <label for="" class="md:w-1/3 whitespace-nowrap">Gestionar Inventario?</label>
                                  <div class="flex  md:flex-row md:items-center">
                                    <input id="inv-gestionar" type="checkbox"  @input="() => addPrice('price')" class="border border-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 mr-2">
                                    <label for="inv-gestionar" class="md:w-2/3 whitespace-nowrap">Gestionar nivel de inventario (cantidad)</label>
                                  </div>
                                </div>
                                <div class="flex md:space-x-2 flex-col md:flex-row items-start md:items-center">
                                  <label for="" class="md:w-1/3 whitespace-nowrap">Estado del inventario</label>
                                  <div class="flex ">
                                    <select v-model="selected" @change="showInventario" class="w-full text-sm border h-10 border-gray-600 focus:outline-none rounded-sm focus:ring-blue-500 focus:border-blue-500 ">
                                      <option v-for="option in options"  :value="option.value">
                                          {{ option.text }}
                                      </option>  
                                    </select>
                                  </div>
                                </div>
                              </div>

                            </div>
                      </div>
                    </div>
                    <div v-if="showAlert" class="fixed top-1  z-50 bg-red-200 p-4">
                      <p >{{msg}}</p>
                    </div>
      </div>
      <div>
        <div class="accordion group lg:px-5 pb-2 min-w-[300px] w-full space-y-2"  >
          <accordion header="Publicar">
            <div class="flex flex-row justify-between mt-2">
              <div>Estado: <span class="underline text-blue-400">Publicado</span></div>
              <button class="px-2 py-1 bg-stone-400 rounded-md text-white">Publicar</button>
            </div>
          </accordion>
          <add-categoria></add-categoria>
          <accordion header="Imagen del producto">
            <categorias-view></categorias-view>
          </accordion>
        </div>
      </div>
    </div>
</template>

<script setup lang="ts">
import type { Delta,  QuillEditor } from '@vueup/vue-quill';
import '@vueup/vue-quill/dist/vue-quill.snow.css';
import '@vueup/vue-quill/dist/vue-quill.bubble.css';
import { onMounted, ref } from 'vue';
import Accordion from '../components/Accordion.vue';
import AddCategoria from '../components/AddCategoria.vue';

import useAtributo from '../composables/useAtributo'
import  categoriasView from './categorias-view.vue';
const content = ref<Delta | null>(null)
const selected =  ref('A');
const options = ref( [
      { text: 'Hay existencias', value: 'A' },
      { text: 'Agotado', value: 'B' },
])
const activeTab = ref(0)
const showModal= ref(false)

//Methods
const showInventario = () => {
  console.log( selected.value )
}


const { getAttributes, createAtribute, updateAtribute, deleteAtribute, addPrice, alertMsg, atributes,formPrice,isLoading,msg,showAlert } = useAtributo()





// const addText = () => {
//     const data = content.value

//     if( !data ){
//         console.log( 'No hay data' )
//         return
//     }
//     console.log( JSON.stringify( data ))
// }





onMounted(() => {
  getAttributes()
})
</script>

<style scoped>
.tabs-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.tab-links {
  display: flex;
  flex-direction: column;
}

.tab-links a {
  padding: 10px;
  background-color: #f2f2f2;
  border: 1px solid #ccc;
  border-right: none;
  color: #333;
  text-decoration: none;
}

.tab-links a:hover {
  background-color: #ddd;
}

.tab-links a.active {
  background-color: #ddd;
  color: #333;
}

.tab-content {
  flex-grow: 1;
}

.tab {
  display: none;
  padding: 20px;
}

.tab.active {
  display: block;
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

.accordion button:focus {
  outline: none;
}


.accordion-content {
  background-color: #ffffff;
  border: 1px solid rgb(190, 190, 190);
  border-top: 1px;
  padding: 10px;
}

.accordion-collapse-enter-active,
.accordion-collapse-leave-active {
  transition: all 0.3s ease-out;
}

.accordion-collapse-enter,
.accordion-collapse-leave-to {
  height: 0;
  overflow: hidden;
}

.loading-overlay {
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.loading-spinner {
  border: 4px solid #f3f3f3;
  border-top: 4px solid #3498db;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>