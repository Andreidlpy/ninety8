<template>
    <div class="mt-40 w-[70%] flex justify-center mx-auto ">
        <template v-if="!isLoalinDetalle">
            <div class="h-[532px] text-center" v-if="getDetalle.length > 0" >
              <div class="font-bold text-xl uppercase mb-5">Carrito</div>
              <table class="min-w-full divide-y divide-gray-200">
              <thead class="bg-gray-50">
                <tr>
                  <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Nombre
                  </th>
                  <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Precio
                  </th>
                  <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Cantidad
                  </th>
                  <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Subtotal
                  </th>
                  <th scope="col" class="relative px-6 py-3">
                    <span class="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              
              <tbody class="bg-white divide-y divide-gray-200">
                <template v-for="detalleProducto of getDetalle" :key="detalleProducto.id">
                  <tr>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="flex items-center">
                        <div class="flex-shrink-0 h-10 w-10">
                          <img class="h-10 w-10 rounded-full"  :src="detalleProducto.image" alt="">
                        </div>
                        <div class="ml-4">
                          <div class="text-sm font-medium text-gray-900 uppercase">
                            {{detalleProducto.nombre}}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="text-sm text-gray-900">S/{{ detalleProducto.precio }}</div>
                    </td>
                  <td class="px-5 py-4 whitespace-nowrap">
                    <span class="px-2 inline-flex text-xs leading-5 rounded-full ">
                       <input @input="validarCantidad( detalleProducto )" type="number" v-model="detalleProducto.cantidad" name="" id="" class="border-2 w-12 p-1 text-sm  text-gray-900" min="1" max="10">
                    </span>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 font-bold">
                    S/{{detalleProducto.subtotal}}
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button @click="deleteCart( detalleProducto.detalleId )" class="text-red-600 hover:text-red-900">Borrar</button>
                  </td>
                </tr>
                </template>
                <!-- More rows... -->
                
              </tbody>
            </table>
          
              <div class="flex flex-col items-end self-start justify-center py-2 h-auto space-y-2 ">
                  <button class="bg-black text-white text-sm px-2 py-1 rounded-sm" @click="actualizarDetalle(  getDetalle )">Actualizar Carrito</button>
                  <table class=" block">
                    <thead>
                      <tr>
                        <th class="py-2">Total de Carrito</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td class="border px-4 py-2 flex justify-between w-100">
                          <span class="mr-5 text-sm">SubTotal:</span> 
                          <span class="text-sm font-medium">S/{{getSubtotalDetalle}}</span>
                        </td>
                      </tr>
                      <tr>
                        <td class="border px-4 py-2 flex justify-between w-100">
                          <span class="mr-5 text-sm">Envio:</span> 
                          <span class="text-sm font-medium">Gratis</span> 
                        </td>
                      </tr>
                      <tr>
                        <td class="border px-4 py-2 flex justify-between w-100">
                          <span class="mr-5 text-sm">Total:</span> 
                          <span class="text-sm font-medium">S/{{getTotalDetalle}}</span> 
                        </td>
                      </tr>
                    </tbody>
                  </table>
                    <button class="bg-black  text-white px-2 py-1 rounded block " @click="() => $router.push({name: 'checkout'})">Finalizar Compra</button>
              </div>
          </div><!--Carrito-->
        
          <div v-if="getDetalle.length === 0" class="flex items-start justify-center">
              <div class="p-6 bg-white rounded-lg shadow-md">
                <div class="flex items-center justify-center  sm:flex-row flex-col">
                  <div class="mr-2 text-gray-600">
                    <svg fill="#000000" class="w-10" viewBox="0 0 36 36" version="1.1"  preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                      <circle cx="13.33" cy="29.75" r="2.25" class="clr-i-outline--badged clr-i-outline-path-1--badged"></circle><circle cx="27" cy="29.75" r="2.25" class="clr-i-outline--badged clr-i-outline-path-2--badged"></circle><path d="M22.57,7a7.52,7.52,0,0,1-.07-1,7.52,7.52,0,0,1,.07-1H11.49l.65,2Z" class="clr-i-outline--badged clr-i-outline-path-3--badged"></path><path d="M30,13.5l-.42,0L28.33,19h-15L8.76,4.53a1,1,0,0,0-.66-.65L4,2.62a1,1,0,1,0-.59,1.92L7,5.64l4.59,14.5L9.95,21.48l-.13.13A2.66,2.66,0,0,0,9.74,25,2.75,2.75,0,0,0,12,26H28.69a1,1,0,0,0,0-2H11.84a.67.67,0,0,1-.56-1l2.41-2H29.13a1,1,0,0,0,1-.78l1.57-6.91A7.51,7.51,0,0,1,30,13.5Z" class="clr-i-outline--badged clr-i-outline-path-4--badged"></path><circle cx="30" cy="6" r="5" class="clr-i-outline--badged clr-i-outline-path-5--badged clr-i-badge"></circle>
                    </svg>
                  </div>
                  <div class="text-lg font-medium text-gray-900 text-center">Tu carrito de compras está vacío</div>
                </div>
              </div>
            </div>
        </template>
    </div>
</template>

  
<script setup lang="ts">
import useProductos from '../composables/useProductos';

import { ref} from 'vue';
const { getDetalle, deleteCart , getTotalDetalle,  getSubtotalDetalle , isLoalinDetalle , actualizarDetalle}  = useProductos()
const detalleProducto = ref( { cantidad: 1  })

const validarCantidad =( detalleProducto: any ) =>  {
  const cantidad = parseInt(detalleProducto.cantidad);
  if (isNaN(cantidad) || cantidad < 1) {
        detalleProducto.cantidad = 1;
  } else if (cantidad > 10) {
        detalleProducto.cantidad = 10;
  } else {
        detalleProducto.cantidad = cantidad;
  }
}


</script>
  
<style scoped>
</style>

<!-- <div class="detalle-carrito " v-if="getDetalle.length > 0" >
  <h1 class="font-bold uppercase ">Detalle Carrito</h1>
  <div class="flex flex-col">

    <div  class="producto px-2  ">
      <div class="p-2">
        <h1 class="font-medium">{{ detalleProducto.nombre }}</h1>
        <p>{{ detalleProducto.precio }}</p>
        <p>{{ detalleProducto.descripcion }}</p>
        <p>{{ detalleProducto.cantidad }}</p>
        <button @click="deleteCart( detalleProducto.detalleId )" class="bg-red-500 py-2 px-5 border rounded-[25px] text-center text-white font-bold uppercase">x</button>
      </div>
    </div>
    <div>Total: {{ getTotalDetalle }}</div>
  </div>
  <button  class="bg-cyan-600 py-2 px-5 border rounded-[25px] text-center text-white font-bold uppercase">Actualizar Carrito</button>

</div> -->