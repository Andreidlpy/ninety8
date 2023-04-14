
import { createRouter, createWebHistory } from 'vue-router'

import adminRouter from "../modules/admin/routes/intex";
import mainRouter from "../modules/main/routes";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { 
      name: 'admin',
      ...adminRouter,
    },
    { 
      name: 'main',
      ...mainRouter,
    },
  ]
})

export default router
