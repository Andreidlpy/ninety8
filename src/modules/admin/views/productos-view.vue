<template>
    <div class="my-5">
        <div class="relative w-2/5">
            <input
                v-model="textFilter"
                type="text"
                class="rounded-md border-2 focus:outline-gray-400  px-4 py-2 w-full  "
                placeholder="Buscar..."
            />
            <span class="absolute inset-y-0 right-0 flex items-center pr-4">
                <svg class="h-4 w-4 fill-current text-gray-400" viewBox="0 0 20 20">
                <path
                    fill-rule="evenodd"
                    d="M8.5 2.5a6 6 0 1 1-4.243 1.757A6 6 0 0 1 8.5 2.5zm6.156 7.672a5 5 0 1 0-.708.708l3.536 3.536a1 1 0 0 0 1.414-1.414l-3.536-3.536z"
                    clip-rule="evenodd"
                />
                </svg>
            </span>
        </div>
    </div>
    <div class="flex">

        <table class="min-w-full divide-y divide-gray-200 border flex-1">
            <thead>
                <tr>
                    <th scope="col" class="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        <input type="checkbox" class="form-checkbox h-5 w-5 text-gray-600" @click="toggleSelectAll" v-model="selectAllCheckbox"> 
                    </th>
                    <th v-for="h in header" :key="h" scope="col" class="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        {{ h }}
                    </th>
                </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
            <template v-if="filterProductos.length > 0 " >

                <tr v-for="(producto, index) in filterProductos" :key="index">
                    <td class="px-6 py-4 whitespace-nowrap">
                    <input type="checkbox" class="form-checkbox h-5 w-5 text-gray-600"  v-model="producto.selected"> 
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                    {{ producto.image }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap   hover:table-cell">
                    <div class=" cursor-pointer text-[#2271b1]  hover:text-sky-400 font-medium " >{{ producto.nombre.toLocaleUpperCase() }}</div>
                    <span class="texto-oculto text-sm  text-sky-800 hover:text-sky-500 cursor-pointer"> Editar </span>
                </td>
                <td class="px-6 py-4 whitespace-nowrap font-medium" :class="[producto.inventario === 'Hay existencias' ? 'text-green-500 ' : '']">
                    {{ producto.inventario }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                    S/{{ producto.precio }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-[#2271b1]  hover:text-sky-400 font-normal cursor-pointer">
                    {{ producto.categorias.toLocaleUpperCase() }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                    {{ producto.fecha }}
                </td>
            </tr>
            </template>
        </tbody>
    </table>
    <div class="flex-1">
        <div >
            <table> 

            </table>
        </div>
    </div>
    </div>
    <template v-if="filterProductos.length === 0">
        <div class="text-center font-medium text-base text-gray-500">No data</div>
    </template>
    
</template>

<script setup lang="ts">
import { ref } from 'vue';
    import { computed } from '@vue/reactivity';
  
    interface Producto {
        id: string;
        nombre: string;
        precio: number;
        selected: boolean;
        image: string;
        inventario: string;
        categorias: string;
        fecha: string;
    }
 
    const productos = ref<Producto[]>( [
        { id: '1', nombre: 'PANTALON SAINT', precio: 10.0, selected: false , image: "" , inventario: "Hay existencias", categorias: "Pantalones" , fecha: "16/02/2023 a las 18:26"},
        { id: '2', nombre: 'CASACA JASON', precio: 15.0, selected: false , image: "" , inventario: "Hay existencias", categorias: "Pantalones" , fecha: "16/02/2023 a las 18:26"},
        { id: '3', nombre: 'JACOB PANT', precio: 20.0, selected: false , image: "" , inventario: "Hay existencias", categorias: "Pantalones" , fecha: "16/02/2023 a las 18:26"},
        { id: '4', nombre: 'WILLIAM JACKET', precio: 25.0, selected: false , image: "" , inventario: "Hay existencias", categorias: "Pantalones" , fecha: "16/02/2023 a las 18:26"},
    ]);

    const header = ref([
        'imagen' ,
        'nombre' ,
        'inventario' ,
        'precio' ,
        'categorías',
        'fecha' ,
    ])
    const textFilter = ref('')
    let selectAllCheckbox = ref<Boolean>(false);
    
    const toggleSelectAll = () => {
        productos.value.forEach((producto) => {
            producto.selected = !selectAllCheckbox.value;
        });
    }
       
    const selectedProductos = computed(() => {
        return productos.value.filter((producto) => producto.selected);
    });
    const filterProductos = computed(() => {
        if (!textFilter.value) {
            return productos.value;
        }
        const filterText = textFilter.value.toLowerCase();
        return productos.value.filter((producto: any) => {
            const nombre = producto.nombre.toLowerCase();
            const precio = producto.precio.toString();
             return precio.includes(filterText) || nombre.includes(filterText);
        });
    }); 
</script>

<style scoped>

</style>