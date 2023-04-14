// // import { useSessionStore } from '@/stores/carrito'
// import apiStrapi from '@/api/apiStrapi'
// import { vueCookies } from './vue-cookies'

// const session = {
//   sessionId: vueCookies.get('session') || null,
// }

// let isSessionInitialized = false

// export async function initSession() {
//   if (isSessionInitialized) {
//     return
//   }

//   isSessionInitialized = true

//   // Get sessionId from cookie
//   const sessionIdFromCookie  = vueCookies.get('cookie_usuario') || ''

//   if (sessionIdFromCookie !== undefined) {
//     session.sessionId = sessionIdFromCookie
//   }
//   // Try to get sessionId from the backend if sessionId is still null
//   if (!session.sessionId) {
//     try {
//       const { data } = await apiStrapi.get('/session')
//       session.sessionId = data.id
//       // Set the sessionId cookie
//       const cookieObject = JSON.parse( data.session.data)
//       const { expires } = cookieObject.cookie
//       vueCookies.set('session', JSON.stringify(data), {
//         expires: new Date(expires)
//       })
//     } catch (error) {
//       console.error(error)
//     }
//   }
// }
