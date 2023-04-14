<template>
    <div class="flex  top-0  min-h-[100vh]  ">
      <!-- Sidebar -->
      <aside v-show="showSidebar"  class="bg-[#3b4b87] w-64  ">
        <div class="pt-10 pb-5 px-6 text-4xl text-white tracking-widest font-semibold">NINETY<span class="mx-1 text-2xl ">8</span></div> 
        <!-- Sidebar content -->
        <ul class="py-5 capitalize font-semibold tracking-widet text-normal ">
          <RouterLink :to="{name: 'productos'}" >
            <li class="text-white   hover:bg-slate-400/20 px-6 py-3 cursor-pointer">
              Productos
            </li>
          </RouterLink>
          <RouterLink :to="{ name: 'add-new' }" >
            <li class="text-white  hover:bg-slate-400/20 px-6 py-3 cursor-pointer">
              Añadir Nuevo
            </li>
          </RouterLink>
          <RouterLink  :to="{ name: 'categorias' }" >
            <li class="text-white  hover:bg-slate-400/20 px-6 py-3 cursor-pointer" @click="() => $router.push({name: 'productos'})">
              Categorias
            </li>
          </RouterLink>
        </ul>
      </aside>
      <!-- Main content -->
      <main class="flex-1 pt-12">
          <!-- Hamburger button to toggle the sidebar -->
          <menu-bar class="m-2 absolute top-0 right-0" @menuBar="useMenuBar"/>
          <router-view ></router-view>
      </main>
    </div>
  </template>
  
  <script lang="ts" setup>
  import MenuBar from '@/shared/components/menu-bar.vue';
  import { ref } from 'vue';
  const showSidebar = ref(true)
  const useMenuBar = () => {
    showSidebar.value = !showSidebar.value
  }
  </script>
  