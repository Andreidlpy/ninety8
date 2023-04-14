<template>
    <div class="pt-[100px] ">
        <div class="container min-h-[72.2vh]  mx-auto ">
            <div class="flex flex-col md:flex-row md:space-x-5 justify-center mx-8 w-full">
                <!--Imagen Producto-->
                <div class="contenedor-image-preview" >
                    <img class="imagen-preview object-cover" @mouseout="zoomLeave" @mousemove="zoomImage" :src="producto?.image" alt="Imagen" >
                </div>
                <!--Info Producto-->
                <div>
                        <div class="text-3xl font-bold uppercase">{{producto?.nombre}}</div>
                        <div class="flex flex-wrap space-x-2">
                            <div class="
                                text-3xl 
                                font-normal " 
                                >
                                S/{{producto?.precio}}
                            </div>
                            <div 
                                class="text-3xl font-normal line-through" 
                                :class="[producto?.descuento ?  'text-gray-400 opacity-60 ' : '']" 
                                v-if="producto?.descuento">S/{{producto?.descuento}}
                            </div>
                        </div>
                <!--Color-->
                <!-- <div> 
                    <div class="text-2xl font-semibold py-2">Color</div>
                    <div class="flex items-center space-x-2">
                        <template v-for=" color in producto." :key="color" >
                            <label 
                            class="cursor-pointer" :for="color">
                                <input  
                                type="radio" 
                                :name="color" 
                                :id="color" 
                                :value="color" 
                                v-model="form.color"
                                class="peer sr-only"
                                >
                                <div :style="`background-color: #${color}`" 
                                    class="transition  
                                    relative border-4 
                                    border-gray-300 
                                    border-spacing-28 
                                    rounded-3xl  
                                    w-6 h-6 
                                    peer-checked:scale-125">

                                </div>
                            </label>
                        </template>
                    </div> 
                </div> -->
                <!--Talla-->
                <!-- <div>
                    <div class="text-2xl font-semibold py-2 ">Tallas</div> 
                    <div class="flex items-center space-x-3">
                        <template v-for="talla in producto.talla" :key="talla">
                            <label class="cursor-pointer" :for="talla">
                                <input class="peer sr-only" type="radio" :name="talla" :value="talla" :id="talla" v-model="form.talla" >
                                <div class="hover:scale-110 transition ease-out bg-white peer-checked:scale-110 px-6 py-1 text-center border-2 border-spacing-8 border-black" >
                                    {{ talla }}
                                </div>    
                            </label>
                        </template>
                    </div>
                </div> -->
                <!--Añadir al Carrito (Button)-->   
                <div class="self-center flex justify-start my-5">
                        <Button 
                        @click="addToCart( producto )"
                        class="duration-500 block bg-black px-5 py-3 " 
                        tittle-button="Añadir al Carrito" 
                        />
                </div>
            </div>
        </div><!--End Container-->
       

    </div>
    </div>
    
    
</template>

<script setup lang="ts">

import Button from '../components/Button.vue';

import { ref,  onMounted, } from 'vue';
import useProductos from '../composables/useProductos';

interface Props {
    slug: string;
}

const props = defineProps<Props>();

const { producto ,getProductoBySlug , addToCart } = useProductos( props.slug ) 



interface Producto{
    color: string,
    talla: string,
}

const form =  ref<Producto>( {
    color: '',
    talla: ''
});




onMounted( () => {
    getProductoBySlug()

});
const zoomImage = ( e: MouseEvent): void  => {
   const image = e.currentTarget as HTMLImageElement;
   const x = e.clientX - image.offsetLeft;
   const y = e.clientY - image.offsetTop;
  
   image.style.transformOrigin = `${x}px ${y}px`
   image.style.transform = "scale(3)"
}

const zoomLeave = ( e: MouseEvent ): void  => {
    const image = e.currentTarget as HTMLImageElement;
    image.style.transformOrigin = "center"
    image.style.transform= "scale(1)"
}
</script>

<style scoped>
  .imagen-preview{
    transform-origin: center;
    object-fit: cover;
    height: 100%;
    width: 100%;
  }
  .contenedor-image-preview{
    height: 600px;
    width: 600px;
    overflow: hidden;
  }
</style>