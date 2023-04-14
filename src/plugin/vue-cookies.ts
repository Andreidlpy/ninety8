// import type { Plugin } from 'vue';
// import type { CookieAttributes } from 'js-cookie';
// import Cookies from 'js-cookie';
// import { useCarritoStore } from '@/stores/carrito';
// import useProductos from '@/modules/main/composables/useProductos';
// interface Vue3Cookies {
//   get(key: string): string | undefined;
//   set(key: string, value: string, options?: CookieAttributes): string;
//   remove(key: string, options?: CookieAttributes): void;
//   cookieObserver(): MutationObserver;
//   deleteSessionId(): void;
// }

// const vueCookies: Vue3Cookies = {
//   get(key: string): string | undefined {
//     return Cookies.get(key);
//   },
//   set(key: string, value: string, options?: CookieAttributes): string {
//     Cookies.set(key, value, options);
//     return value; // return the value being set
//   },
//   remove(key: string, options?: CookieAttributes): void {
//     Cookies.remove(key, options);
//   },
//   cookieObserver(): MutationObserver {
//     const { idCarrito, deleteCarritoDetalle } = useProductos()
//     const existingCookies: { [key: string]: string } = {};
//     Object.keys(Cookies.get()).forEach((key) => {
//       existingCookies[key] = Cookies.get(key) ?? '';
//     });

//     const observer = new MutationObserver((mutations) => {
//       mutations.forEach((mutation) => {
//         if (mutation.type === 'attributes' && mutation.attributeName === 'value' && mutation.target instanceof HTMLInputElement) {
//           if (mutation.target.name === 'session') {
//             this.deleteSessionId()
//           }
//         }
//       })
//     })

//     const intervalId = setInterval(() => {
//       const cookies = Cookies.get();
//       if (!cookies.session) {
//         deleteCarritoDetalle( idCarrito.value )
//         clearInterval(intervalId);
//         return;
//       }
//       Object.keys(Cookies.get()).forEach((key) => {
//         const newValue = Cookies.get(key);
//         const oldValue = existingCookies[key];
//         if (newValue !== oldValue) {
//           existingCookies[key] = newValue ?? '';
          
//           if (key === 'session') {
//             // Check if the session cookie has expired
//             const cookieObject = JSON.parse(newValue || '');
//             const { expires } = cookieObject;
//             if (new Date(expires) <= new Date()) {
//               // If the cookie has expired, delete it from the browser
//               this.remove('session');
//             }
//           }
//         }
//       });
//     }, 1000);

//     return observer;
//   },
//   deleteSessionId(): void {
//     this.remove('session');
//   }
// };

// const Vue3CookiesPlugin: Plugin = {
//   install(app) {
//     app.config.globalProperties.$cookies = vueCookies;
//   },
// };

// export { vueCookies, Vue3CookiesPlugin };
