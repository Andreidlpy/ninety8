<template>
    <div class="h-screen grid grid-cols-3" v-if="getDetalle.length > 0" >
        <div class="lg:col-span-2 col-span-3 bg-indigo-50 space-y-8 px-12" >
            <div class="mt-8 p-4 relative flex flex-col sm:flex-row sm:items-center bg-white shadow rounded-md">
                <div class="flex flex-row items-center border-b sm:border-b-0 w-full sm:w-auto pb-4 sm:pb-0">
                    <div class="text-yellow-500">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 sm:w-5 h-6 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <div class="text-sm font-medium ml-3">Checkout</div>
                </div>
                <div class="text-sm tracking-wide text-gray-500 mt-4 sm:mt-0 sm:ml-4">Complete your shipping and payment details below.</div>
                <div class="absolute sm:relative sm:top-auto sm:right-auto ml-auto right-4 top-4 text-gray-400 hover:text-gray-800 cursor-pointer">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                </div>
            </div>
            <div class="rounded-md">
                <form id="payment-form" method="POST" action="">
                    <section>
                        <h2 class="uppercase tracking-wide text-lg font-semibold text-gray-700 my-2">Shipping & Billing Information</h2>
                        <fieldset class="mb-3 bg-white shadow-lg rounded text-gray-600 text-sm">
                            <div class="flex sm:flex-row flex-col">
                                <label class="flex border-b border-gray-200 h-12 py-3 items-center w-full">
                                    <span class="text-right px-2">Nombre</span>
                                    <input name="name" class="focus:outline-none px-3" placeholder="Try Odinsson" >
                                </label>
                                <label class="flex border-b border-gray-200 h-12 py-3 items-center w-full">
                                    <span class="text-right px-2">Apellido</span>
                                    <input name="name" class="focus:outline-none px-3" placeholder="Try Odinsson" >
                                </label>
                            </div>
                            <label class="flex border-b border-gray-200 h-12 py-3 items-center">
                                <span class="text-right px-2">Teléfono</span>
                                <input name="phone" class="focus:outline-none px-3" placeholder="XXXXXXXXXX">
                            </label>
                            <label class="flex border-b border-gray-200 h-12 py-3 items-center ">
                                <span class=" px-2">Correo electrónico</span>
                                <input name="email" type="email" class="focus:outline-none px-3" placeholder="try@example.com" >
                            </label>
                            <label class="flex border-b border-gray-200 h-12 py-3 items-center">
                                <span class="text-right px-2">Address</span>
                                <input name="address" class="focus:outline-none px-3" placeholder="10 Street XYZ 654">
                            </label>
                            <label class="flex border-b border-gray-200 h-12 py-3 items-center">
                                <span class="text-right px-2">City</span>
                                <input name="city" class="focus:outline-none px-3" placeholder="San Francisco">
                            </label>
                            <label class="inline-flex w-2/4 border-gray-200 py-3">
                                <span class="text-right px-2">State</span>
                                <input name="state" class="focus:outline-none px-3" placeholder="CA">
                            </label>
                            <label class="xl:w-1/4 xl:inline-flex  items-center flex xl:border-none border-t border-gray-200 py-3">
                                <span class="text-right px-2 xl:px-0 xl:text-none">ZIP</span>
                                <input name="postal_code" class="focus:outline-none px-3" placeholder="98603">
                            </label>
                            <label class="flex border-t border-gray-200 h-12 py-3 items-center select relative">
                                <span class="text-right px-2">Country</span>
                                <div id="country" class="focus:outline-none px-3 w-full flex items-center">
                                    <select name="country" class="border-none bg-transparent flex-1 cursor-pointer appearance-none focus:outline-none">
                                        <option value="AU">Australia</option>
                                        <option value="BE">Belgium</option>
                                        <option value="BR">Brazil</option>
                                        <option value="CA">Canada</option>
                                        <option value="CN">China</option>
                                        <option value="DK">Denmark</option>
                                        <option value="FI">Finland</option>
                                        <option value="FR">France</option>
                                        <option value="DE">Germany</option>
                                        <option value="HK">Hong Kong</option>
                                        <option value="IE">Ireland</option>
                                        <option value="IT">Italy</option>
                                        <option value="JP">Japan</option>
                                        <option value="LU">Luxembourg</option>
                                        <option value="MX">Mexico</option>
                                        <option value="NL">Netherlands</option>
                                        <option value="PL">Poland</option>
                                        <option value="PT">Portugal</option>
                                        <option value="SG">Singapore</option>
                                        <option value="ES">Spain</option>
                                        <option value="TN">Tunisia</option>
                                        <option value="GB">United Kingdom</option>
                                        <option value="US" >United States</option>
                                    </select>
                                </div>
                            </label>
                        </fieldset>
                    </section>
                </form>
            </div>
            
            <div class="rounded-md">
                <section>
                    <h2 class="uppercase tracking-wide text-lg font-semibold text-gray-700 my-2">Payment Information</h2>
                    <fieldset class="mb-3 bg-white shadow-lg rounded text-gray-600">
                        <label class="flex border-b border-gray-200 h-12 py-3 items-center">
                            <span class="text-right px-2">Card</span>
                            <input name="card" class="focus:outline-none px-3 w-full" placeholder="Card number MM/YY CVC" >
                        </label>
                    </fieldset>
                </section>
            </div>
            <button @click="buyProducts( getDetalle, idCarrito )"  class="submit-button px-4 py-3 rounded-full bg-slate-900 text-white focus:ring focus:outline-none w-full text-xl font-semibold transition-colors">
                Pagar S/{{getTotalDetalle}}
            </button>
            <div  class="cho-container"  id="wallet_container"></div>
        </div>
        <div class="col-span-1  lg:block hidden border ">
            <h1 class="py-6 border-b-2 text-xl text-gray-600 px-8">Order Summary</h1>
            <ul class="py-6 border-b space-y-6 px-8 overflow-y-auto h-[500px]" >
                <li class="grid grid-cols-6 gap-2 border-b-1"  v-for="detalle in getDetalle" :key="detalle.id">
                    <div class="col-span-1 self-center">
                        <img  :src="detalle.image" alt="Product" class="rounded-[50%] w-11  h-11 object-cover">
                    </div>
                    <div class="flex flex-col col-span-3 pt-2">
                        <span class="text-gray-600 text-md font-semi-bold uppercase" >{{detalle.nombre}}</span>
                        <span class="text-gray-400 text-sm inline-block pt-2">Red Headphone</span>
                    </div>
                    <div class="col-span-2 pt-3">
                        <div class="flex items-center space-x-2 text-sm justify-between">
                            <span class="text-gray-400">{{detalle.cantidad}} x S/{{ detalle.precio}}</span>
                            <span class="text-slate-900 font-semibold inline-block">S/{{detalle.subtotal}}</span>
                        </div>
                    </div>
                </li>
            </ul>
            <div class="px-8 border-b">
                <div class="flex justify-between py-4 text-gray-600">
                    <span>Subtotal</span>
                    {{ getDetalle.length  }}
                    <span class="font-semibold text-slate-900">S/{{getSubtotalDetalle}}</span>
                </div>
                <div class="flex justify-between py-4 text-gray-600">
                    <span>Shipping</span>
                    <span class="font-semibold text-slate-900">Free</span>
                </div>
            </div>
            <div class="font-semibold text-xl px-8 flex justify-between py-8 text-gray-600">
                <span>Total</span>
                <span>S/{{getTotalDetalle}}</span>
            </div>
        </div>
    </div>
    <div v-if="getDetalle.length === 0" class="flex h-[82.9vh] items-center justify-center">
              <div class="p-6 bg-white rounded-lg shadow-md ">
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

<script setup lang="ts">
import useProductos from '../composables/useProductos';

const { getDetalle, getTotalDetalle, getSubtotalDetalle, idCarrito , buyProducts } = useProductos()



</script>

<style scoped>

</style>