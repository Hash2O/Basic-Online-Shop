import { createRouter, createWebHistory } from 'vue-router'
import Store from '@/views/Store.vue'
import ProductDetail from '@/views/ProductDetail.vue'
import Cart from '@/views/Cart.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Store',
      component: Store,
    },
    {
      path: '/product/:id',
      name: 'ProductView',
      component: ProductDetail,
    },
    {
      path: '/cart',
      name: 'CartView',
      component: Cart,
    },
  ],
})

export default router
