<template>
  <div>
    <v-btn @click="router.push({ name: 'Store' })" color="primary" variant="elevated">
      Back to Store
    </v-btn>
  </div>

  <br />
  <hr />
  <br />

  <div v-if="!store.cart.length" style="text-align: center">
    <h1>Your cart is currently empty.</h1>
  </div>
  <div class="cart-items" v-else>
    <div class="cart-item" v-for="item in store.cart" :key="item.id">
      <div class="item-details">
        <img :src="item.thumbnail" alt="" />
        <span>Brand: {{ item.brand }}</span>
        <span>Category: {{ item.category }}</span>
        <span>Price: ${{ item.price }}</span>
        <button @click="removeFromCart(item.id)">Remove</button>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'CartView',
})
</script>

<script setup>
import { productsStore } from '@/stores/products'
import { useRouter } from 'vue-router'

const router = useRouter()

const store = productsStore()

const removeFromCart = (id) => {
  store.removeFromCart(id)
}
</script>

<style scoped>
.item-details {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
  box-shadow: 0 0 17px 6px #e7e7e7;
  border-radius: 8px;
  padding: 16px;
}

.item-details img {
  width: 20%;
}
</style>
