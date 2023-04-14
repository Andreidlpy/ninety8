<script setup lang="ts">
import navBar from '@/shared/components/nav-bar.vue';
import footerBar from '@/shared/components/footer-bar.vue';
import useProductos from '../composables/useProductos';
import { onMounted } from 'vue';

const { getDetalleCarrito } = useProductos( )

onMounted(() => {
    getDetalleCarrito()
})
</script>

<template>
    <div>
        <nav-bar :titleNumber="8" />
        <div class="min-h-[617px] h-full" >
            <router-view ></router-view>
        </div>
        <footer-bar />
    </div>
</template>


<style scoped>
 
</style>