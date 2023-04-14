<template>
    <div class="dark:bg-white bg-black ">
        <div class="mx-auto md:container">
            <div class="flex justify-between items-center py-10 px-5 ">
                <div>
                    <div class="tracking-widest uppercase font-bold text-1xl md:text-2xl  text-white dark:text-black">
                        Ninety8
                    </div>
                    <div class="flex gap-2 py-3 justify-around">
                        <svg class="w-6 fill-current dark:text-black text-white" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" >
                        <path d="M30.996 16.091C30.995 7.81 24.282 1.097 16 1.097S1.004 7.811 1.004 16.093c0 7.455 5.44 13.639 12.566 14.8l.086.012V20.427H9.848v-4.336h3.808v-3.302a5.293 5.293 0 0 1 5.684-5.834l-.018-.001c1.199.017 2.359.123 3.491.312l-.134-.019v3.69h-1.892a2.168 2.168 0 0 0-2.444 2.351l-.001-.009v2.812h4.159l-.665 4.336h-3.494v10.478c7.213-1.174 12.653-7.359 12.654-14.814z"/>
                        </svg>
                        <svg class="w-6" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" >
                            <g fill="none" fill-rule="evenodd">
                                <path d="M0 0h32v32H0z"/>
                                <path class="fill-current text-white dark:text-black"   d="M17.083.033c8.12 0 14.762 6.643 14.762 14.762V17.1c0 8.12-6.643 14.762-14.762 14.762h-2.306C6.657 31.863.015 25.22.015 17.101v-2.306C.015 6.675 6.658.033 14.777.033zm-.863 8h-.205c-1.71 0-3.42.056-3.42.056a4.523 4.523 0 0 0-4.524 4.523s-.052 1.469-.056 3.045v.206c0 1.765.056 3.59.056 3.59a4.523 4.523 0 0 0 4.523 4.523s1.6.057 3.251.057c1.765 0 3.647-.057 3.647-.057a4.427 4.427 0 0 0 4.466-4.466s.057-1.805.057-3.534l-.001-.405c-.008-1.552-.056-3.015-.056-3.015a4.427 4.427 0 0 0-4.466-4.467s-1.629-.052-3.272-.056zm-.205 1.44c1.402 0 3.2.046 3.2.046 2.049 0 3.313 1.265 3.313 3.313 0 0 .047 1.768.047 3.154 0 1.418-.047 3.247-.047 3.247 0 2.049-1.264 3.313-3.313 3.313 0 0-1.59.04-2.97.046h-.37c-1.354 0-3.004-.046-3.004-.046-2.049 0-3.37-1.321-3.37-3.37 0 0-.046-1.835-.046-3.282 0-1.355.046-3.062.046-3.062 0-2.048 1.321-3.313 3.37-3.313 0 0 1.741-.046 3.144-.046zm0 2.462a4.098 4.098 0 1 0 0 8.196 4.098 4.098 0 0 0 0-8.196zm0 1.431a2.667 2.667 0 1 1 0 5.333 2.667 2.667 0 0 1 0-5.333zm4.294-2.569a.993.993 0 0 0-.99.996c0 .55.443.995.99.995.547 0 .99-.446.99-.995a.993.993 0 0 0-.99-.996z"/>
                            </g>
                        </svg>
                    </div>
                </div>
                <div>
                    
                    <div class="uppercase font-bold  text-white dark:text-black">
                        <div  class="hidden md:flex space-x-5 font-medium text-base uppercase ">
                            <RouterLink 
                                v-for="{ title } of listLinks" 
                                :key="title" to="" 
                                class="dark:hover:text-gray-600 transition duration-300 hover:underline ">
                                {{ title }}
                            </RouterLink>
                        </div>
                    </div>
                </div>
                
                <div>
                    <div class=" font-bold  text-white dark:text-black ">
                       2023  &copy; - <span class="tracking-widest">NINETY</span> 
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const listLinks = [
    { title: 'Inicio'  },
    { title: 'Shop'    },
    { title: 'About Us'},
    { title: 'help'    },
]
</script>

<style scoped>

</style>