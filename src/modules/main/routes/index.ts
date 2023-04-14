
import mainLayout from '../layouts/mainLayout.vue';
import shopMenu from '../views/shop-menu.vue';
import homePage from '../views/body-menu.vue';
import Producto from '../views/producto.vue';
import cartView from '../views/cart-view.vue';
import checkoutView from '../views/checkout.vue';
export default {
    path: '/',
    component: mainLayout,
    redirect: {name: 'home'},
    children :[
        {
          path: 'shop',
          name: 'shop',
          component: shopMenu,
        },
        {
          path: '/cart',
          name: 'cart',
          component: cartView,
        },
        {
          path: 'producto/:slug',
          name: 'producto',
          component: Producto,
          props: ( route:any ) => ({ slug: route.params.slug })
        },
        {
          path: '/',
          name: 'home',
          component: homePage,
        },
        {
          path: '/checkout',
          name: 'checkout',
          component: checkoutView,
          
        },
        {
          name: 'no-found',
          path: "/:catchAll(.*)",
          component: ()=> homePage,
        },
    
    ]

} 