<template>
    <div class="min-h-screen max-h-full dark:bg-black bg-white w-full pt-[5.65rem]">
      <div class="dark:border dark:border-white shadow shadow-white"></div>
      <div class="mx-auto container dark:text-white text-black ">
        <div class="py-[3rem] px-3 text-lg ">
          <BreadCrumbs title="Inicio" />
        </div>
        <div class="md:flex sm:space-x-2">
          <div class="flex-none w-[15rem] mx-5 mb-5 sm:mx-0 sm:mb-0">
            <Accordion title="ORDENAR">
            </Accordion>
          </div>
        </div>
       
      </div>
    </div>
  </template>
  <script lang="ts" setup >
    import Accordion from '../components/Accordion.vue';
    import BreadCrumbs from '../components/BreadCrumbs.vue';
    
    
  
</script>

<style scoped>
.texto-oculto {
  visibility: hidden;
}

tr:hover .texto-oculto {
  visibility: visible;
}
/* Your styles here */
</style>