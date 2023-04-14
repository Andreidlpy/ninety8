import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
// import type { Detalle, Producto } from '@/modules/main/interfaces/producto';

export const useCarritoStore = defineStore('carrito', () => {

  const detalle = ref<any[]>([]);
  const subtotalDetalle = ref<string>('')
  const totalDetalle = ref<string>('')
  const idCarrito =ref<any>()
  return { 
    //State
    detalle,
    idCarrito,
    //Getters
    getCarritoId : computed(() => idCarrito.value),
    totalDetalle: computed(() => totalDetalle.value),
    getCantDetalle: computed(() => detalle.value.length),
    getDetalle: computed(() => detalle.value),
    subtotalDetalle: computed(() => subtotalDetalle.value),
    // getSubtotalDetalle: computed(() => {
    //    let subtotal;
    //    detalle.value.forEach(element => {

    //       subtotal = element.precio * element.cantidad
    //    });
    //    return subtotal
    // }) ,
    
    //Methods 
    deleteDetalle (){
      detalle.value = []
      totalDetalle.value = ''
      subtotalDetalle.value = ''
      idCarrito.value = ''
    },
    setDetalle( data: any , total: string, subtotal : string, idCart?: any ){
      detalle.value = data
      totalDetalle.value = total
      subtotalDetalle.value = subtotal
      idCarrito.value = idCart
    },
    addToCart( producto : any , total: any, subtotal: any, id: any ){


      const index = detalle.value.findIndex(( item ) => item.id == producto.id)
      if(index === -1){
        detalle.value.push( producto )
        totalDetalle.value = total
        subtotalDetalle.value = subtotal
        idCarrito.value = id
      }
    },
    deleteCart( id: any){
    detalle.value = detalle.value.filter( item => item.detalleId !== id )
    }
  }
})
