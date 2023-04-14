<template>
    <main>
         <!---Banner Image -->
        <div class="w-full h-screen bg-white dark:bg-black flex justify-center">
            <Transition name="fade"  appear>
                <div class="w-full flex justify-center  relative "   >
                    <img loading="lazy"  
                        :class="[true ? 'grayscale': '']"
                        class=" w-full h-screen object-cover dark:opacity-70" 
                        src="https://res.cloudinary.com/andreicloudimg/image/upload/v1675276538/fashion_g8a58904f6_1920_67ab6e62d1.jpg"
                    >
                    <Button class="
                        bottom-1/2 
                        bg-black
                        dark:text-black
                        dark:bg-white
                      hover:bg-black px-5 py-3 duration-300 text-1xl uppercase" tittleButton="shop now" />
                </div>
            </Transition>
        </div>
        <!---Products Image -->
        <div class="dark:bg-black max-h-min py-[3%] flex items-center">
            <div class="mx-auto container text-center ">
                    <Splide >
                        <SplideSlide v-for="producto in ProductosQuery.data.value" :key="producto.id" >
                                <div  class="cursor-pointer w-56" @click="() => $router.push({name: 'producto', params:  {slug:producto.slug} })">
                                    <img class="object-cover w-64 h-64 transition duration-500 ease-out hover:scale-105" :src="producto.image" alt="img-1">
                                    <div class="leading-5 pt-3 text-1xl dark:text-white ">
                                        <p class="font-bold uppercase">{{producto.nombre}}</p>
                                        <p class="">{{producto.descripcion}}</p>
                                        <p class="font-semibold">S/{{ producto.precio }}</p>
                                    </div>
                                </div>
                            </SplideSlide>
                    </Splide>
            </div>
        </div>
           
    </main>
</template>

<script setup lang="ts">

import type { Splide, SplideSlide, Options } from '@splidejs/vue-splide';
import Button from '../components/Button.vue';
import useProductos from '../composables/useProductos';

const options: Options = {
      lazyLoad:'nearby',
      type    : 'loop',
      gap     : '2rem',
      autoplay: true,
      perPage : 4,
      arrows  : false, 
      pagination:false,
      padding: { bottom: '1rem' },
      breakpoints: {
		640: {
			perPage: 1,
		},
        768: {
			perPage: 2,
		},
        1024: {
			perPage: 2,
		},
        1280: {
			perPage: 4,
		},
     }
};

 const { ProductosQuery } = useProductos()

//const { infoMain , isLoading } = useMain()

</script>

<style scoped>

</style>