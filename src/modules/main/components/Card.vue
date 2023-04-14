<template>         

        <div class="relative cursor-pointer shadow-lg group items-center justify-center flex overflow-hidden" @click="previewProduct(id)" >                   
                <img 
                        :src="props.producto.imagen.data[1].attributes.formats.medium.url"  
                        class="w-full object-center object-cover group-hover:opacity-0 duration-500 z-10">
                <img 
                        :src="props.producto.imagen.data[0].attributes.formats.medium.url"  
                        class="w-full object-center object-cover absolute  bg-black/25  top-0 z-0 ">
                <!-- <div class="bg-black/70 absolute inset-0 from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div> -->
                <Button class="bottom-[-65px] bg-black dark:text-black dark:bg-white duration-700 mx-[10%] px-1 py-2 left-0 right-0 sm:px-3 sm:py-2  group-hover:bottom-14 text-normal"  
                tittleButton="ADD TO CART" /> 
        </div>
</template>

<script setup lang="ts">
import Button from './Button.vue';
import useProductos from '../composables/useProductos';
import type {  PurpleAttributes } from '../interfaces/producto';

interface Props{
     producto: PurpleAttributes;  
     id: number; 
}
const props = defineProps<Props>()

const { previewProduct } = useProductos()


</script>

<style scoped>

</style>