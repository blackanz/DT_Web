<script setup lang="ts">
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useOrderStore } from '@/stores/store';
import orderCart from '@/components/orderCart.vue';
import { storeToRefs } from 'pinia';

const store = useOrderStore();
const { totalPrice } = storeToRefs(store);
const router = useRouter();
const fPrice = (price: number) => price.toLocaleString('ko-KR');

onMounted(() => {
  if (store.orderItems.length === 0) router.replace('/');
});
</script>

<template>
  <div class="confirm-menu">
    <h1>주문 확인</h1>
    <div class="order-list">
      <orderCart />
    </div>

    <div class="total">
      <h3>총 주문 금액: {{ fPrice(totalPrice) }}원</h3>
    </div>
    <button @click="$router.push('/recmd')">주문 화면</button>
    <button @click="$router.push('/final')">주문 완료</button>
  </div>
</template>
