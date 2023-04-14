<template>
    <nav class="dark:bg-black bg-white absolute top-0  w-full z-10 ">
       <div class="md:container mx-auto ">
            <div class="flex justify-between items-center p-5 ">
                <div class="text-3xl md:text-5xl  tracking-widest  font-bold uppercase dark:text-white">
                    <RouterLink to="/">{{ props.title }}<a v-if="props.titleNumber" class="text-2xl  ">{{ props.titleNumber }}</a> </RouterLink>
                </div>
                <div  class="hidden md:flex space-x-5 font-medium text-base uppercase dark:text-white ">
                    <RouterLink 
                        v-for="{ title, name } of listLinks" 
                        :key="title" :to="{name}" 
                        class="dark:hover:text-gray-100 transition duration-300 hover:underline dark:text-white text-black">
                        {{ title }}
                    </RouterLink>
                </div>
                <div class="hidden md:flex space-x-2 font-medium text-base uppercase dark:text-white text-black ">
                    <RouterLink v-for="{ title } of optionsLinks" :key="title" to="" class="hover:underline ease-in transition duration-300" >
                        {{title}} 
                    </RouterLink>
                    <RouterLink :to="{name: 'cart'}" >
                        <div class="ast-cart-menu-wrap"  >
                            <span class="count 
                                hover:bg-black transition duration-500 ease-linear">
                                {{ getCantDetalle  }}
                            </span>
                        </div>
                    </RouterLink>
                <!-- <label class="relative inline-flex items-center cursor-pointer">
                        <input @click="changeDarkMode" type="checkbox" :value="toggleDarkMode" v-model="toggleDarkMode" class="sr-only peer">
                        <div class="w-11 h-6 
                            bg-gray-200 
                            peer-focus:outline-none 
                            peer-focus:ring-4 
                            peer-focus:ring-blue-300 
                            dark:peer-focus:ring-blue-800 
                            rounded-full 
                            peer 
                            dark:bg-gray-700 
                            peer-checked:after:translate-x-full 
                            peer-checked:after:border-white 
                            after:content-[''] 
                            after:absolute 
                            after:top-[2px] 
                            after:left-[2px] 
                            after:bg-white 
                            after:border-gray-300 
                            after:border 
                            after:rounded-full 
                            after:h-5 
                            after:w-5 
                            after:transition-all 
                            dark:border-gray-600 
                            peer-checked:bg-blue-600">
                        </div>
                    </label> -->
                </div>
               
                <menu-bar @menuBar="useMenuBar"/>
            </div>    
       </div>
       <Transition name="expand">
        <div v-if="menu" class="
          md:hidden
          absolute  
          bg-gray-100 
          dark:bg-black 
          dark:text-white 
          dark:bg-opacity-0
          ease-linear 
          font-bold 
          mobile-menu 
          text-center 
          tracking-wide 
          uppercase 
          bg-opacity-80
          w-full"  >
            <RouterLink v-for="{ title } of optionsLinks"  :key="title" to="" 
            class="text-normal 
                    bg-opacity-80
                    block 
                    border-white
                    dark:bg-black 
                    dark:bg-opacity-80
                    dark:hover:bg-black
                    decoration-2
                    decoration-stone-500
                    duration-100
                    ease-in
                    hover:bg-gray-200  
                    hover:underline
                    pb-3 
                    pt-2 
                    px-4 
                    underline-offset-8
                 ">{{title}}
                </RouterLink>
        </div>
      </Transition>
    </nav>
    
</template>

<script setup lang="ts">
import { ref } from 'vue';
import useDarkMode from '../composables/useDarkMode';
import MenuBar from './menu-bar.vue';
import useProductos from '@/modules/main/composables/useProductos';
const { toggleDarkMode, changeDarkMode } = useDarkMode()
const { getCantDetalle } = useProductos()

interface Props{
    title?: string;
    links?: string[];
    options?: string[];
    titleNumber?: number;
}

const props = withDefaults( defineProps<Props>(), {
 title: 'ninety',
}) 
const menu = ref( false )

const useMenuBar = ( ) => {
    menu.value = !menu.value
}

const listLinks = [
    { title: 'Inicio' , name: 'home'  },
    { title: 'Shop'  , name: 'shop'  },
    { title: 'About Us'},
    { title: 'help'    },
]
const optionsLinks = [
    { title: 'Login'  },
    { title: 'Sign Up'},
]



</script>

<style scoped>
    .ast-cart-menu-wrap {
        display: inline-block;
        line-height: 1;
    }
    .count{
        font-weight: 700;
        position: relative;
        display: inline-block;
        vertical-align: middle;
        text-align: center;
        min-width: 2.1em;
        min-height: 2.1em;
        font-size: .86em;
        line-height: 1.8;
        border-radius: 0 0 0.3em 0.3em;
        border-width: 2px;
        border-style: solid;
        padding: 0 0.4em;
    }
    
    .count:after {
        bottom: 100%;
        margin-bottom: 0;
        height: 0.8em;
        width: 0.8em;
        left: 50%;
        transform: translateX(-50%);
        top: -0.6em;
        content: ' ';
        position: absolute;
        pointer-events: none;
        border-width: 2px;
        border-style: solid;
        border-top-left-radius: 10em;
        border-top-right-radius: 10em;
        border-bottom: 0;
    }
    .ast-cart-menu-wrap .count, .ast-cart-menu-wrap .count:after {
        border-color: #aaaaaa;
        color: #aaaaaa;
    }
</style>