
import productosView from '../views/productos-view.vue'
import adminLayout from '../layouts/admin-layout.vue'
import categoriasView from '../views/categorias-view.vue'

import addNew from '../views/añadir-producto.vue'

export default {
    path: '/admin',
    component: adminLayout,
    redirect: { name: 'productos' },
    children :[
        {
          path: 'productos',
          name: 'productos',
          component: productosView,
        },
        {
          path: 'add-new',
          name: 'add-new',
          component: addNew,
        },
        {
          path: 'categorias',
          name: 'categorias',
          component: categoriasView,
        },
        {
          name: 'no-found',
          path: "/:catchAll(.*)",
          component: ()=> productosView,
        },
    
    ]

} 