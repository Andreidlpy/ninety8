
 import apiStrapi from '@/api/apiStrapi';
 import { useCarritoStore } from '@/stores/carrito';
 import { useQuery } from '@tanstack/vue-query';
 import { computed, ref } from 'vue';
 import type {  Producto, Welcome } from '../interfaces/producto';
 import router from '@/router';



const getProductos = async():Promise<Producto[]> => {
    const { data } = await apiStrapi.get<Welcome>('/productos');

    return  data.productos
}


const useProductos = ( slug?: any ) => {
    const producto = ref<Producto>()
    const isLoalinDetalle = ref( false )

    const preferenceId = ref(null)
    const getProductoBySlug = async () => {
        try {
            const { data } = await apiStrapi.get(`/productos/${slug}`)
            if( data?.msg ){
                router.push({name: 'home'})
            }
            producto.value = data
        } catch (error) {
            console.log( error )
        }
    }
    const carritoStore = useCarritoStore()
    
    const ProductosQuery = useQuery(
        ['productos'],
        getProductos
    )
    const getDetalleCarrito = async ( ) => {

        try {
            isLoalinDetalle.value = true
            const { data } = await apiStrapi.get('/carrito');
            if( data.length <= 0){
                return 
            }
            const { Detalles, total, subtotal, id: idCarrito} = data[0]
            const detalles = Detalles.map(( item : any ) => {
                return { cantidad: item.cantidad, 
                    detalleId: item.id,
                    subtotal: item.subtotal, 
                    precio: item.precio, 
                    nombre: item.Producto.nombre, 
                    id: item.Producto.id, 
                    descripcion: item.Producto.descripcion,
                    image: item.Producto.image,
                }
            })
            carritoStore.setDetalle( detalles , total, subtotal, idCarrito )
            
        } catch (error) {
            console.log( error )
        }finally{
            isLoalinDetalle.value = false
        }
    }
   
    const actualizarDetalle = async( detalles: any ) => {
        try {
           
            const { data } = await apiStrapi.put(`/carrito`, {detalles})
            const { detalles: details, subtotal, total} = data
            carritoStore.setDetalle( details, total, subtotal)
        } catch (error) {
            console.log( error )
        }
    }

    const addToCart = async ( prod : any) => {
        const { data } = await apiStrapi.post('/carrito', {
            productoId: prod.id,
            cantidad: 1
        })
        const {  producto, carrito , detail } = data
        
        const productos = {
            ...producto,
            cantidad: detail.cantidad,
            subtotal: detail.subtotal,
        }

        carritoStore.addToCart( productos, carrito.total, carrito.subtotal, carrito.id )
    }
    const deleteCart = async  ( id : number) => {
        const { data } = await apiStrapi.delete(`/carrito/${id}`)

        const { producto } = data 

        carritoStore.deleteCart( producto.id )
    }
    const buyProducts = async  ( detalle: any, carritoId: any) => {

    
        try {
            const { data } = await apiStrapi.post(`/checkout`, { productos:detalle , carritoId})
            preferenceId.value = data

            const mp =  new window.MercadoPago('TEST-ac10e0ed-5798-4c24-a639-044907955f6d',{
                locale: "es-PE",
            })
            mp.checkout({
                preference: {
                    id: `${preferenceId.value}`,
                },
                autoOpen: true, // Agregar esta propiedad para evitar el error
            });
          
            
          } catch (error) {
            console.error(error);
          }
      
    }
    const deleteCarritoDetalle = async  (  id: any ) => {

    
        try {
            const { data } = await apiStrapi.delete(`/carrito/detalle/${id}` )
            carritoStore.deleteDetalle()
            return data 
          } catch (error) {
            console.error(error);
          }
      
    }
        

    return {
       

        //Getters
        isLoalinDetalle,
        getDetalle:  computed(() => carritoStore.getDetalle) ,
        getCantDetalle:  computed(() => carritoStore.getCantDetalle) ,
        getSubtotalDetalle: computed(() => carritoStore.subtotalDetalle), 
        getTotalDetalle: computed(() => carritoStore.totalDetalle), 
        idCarrito: computed(() => carritoStore.idCarrito), 
        // //Methods,
        ProductosQuery,
        getProductoBySlug,
        getDetalleCarrito,
        deleteCarritoDetalle,
        addToCart,
        deleteCart,
        actualizarDetalle,
        buyProducts,
        producto,
        // deleteCart,
        // addToCart,
        // updateCarrito,
    }
}

export default useProductos;

