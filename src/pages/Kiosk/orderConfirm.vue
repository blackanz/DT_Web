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
    <orderCart />
    <div class="total">
      <h3>총 주문 금액: {{ fPrice(totalPrice) }}원</h3>
    </div>

    <div class="btn-group">
      <button class="recmd" @click="$router.push('/recmd')">주문 화면</button>
      <button class="final" @click="$router.push('/final')">주문 완료</button>
    </div>
  </div>
</template>

<style scoped>
.confirm-menu {
  max-width: 600px;
  margin: 0 auto;
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

h1 {
  text-align: center;
  font-size: 2rem;
  margin-bottom: 30px;
  color: #2d3436;
}

.order-list {
  background: #ffffff;
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  padding: 10px;
  margin-bottom: 30px;
}

.total {
  background: #2d3436;
  color: #ffffff;
  padding: 20px;
  border-radius: 12px;
  text-align: right;
  margin-bottom: 40px;
}

.total h3 {
  margin: 0;
  font-size: 1.4rem;
}

.btn-group {
  display: flex;
  gap: 15px;
  margin-top: auto;
}

button {
  flex: 1;
  padding: 20px;
  font-size: 1.1rem;
  font-weight: bold;
  border-radius: 12px;
  border: none;
  cursor: pointer;
  transition: opacity 0.2s;
}

/* 이전으로 돌아가기 버튼 */
button:nth-of-type(1) {
  background: #dcdde1;
  color: #2d3436;
}

/* 주문 완료 버튼 */
button:nth-of-type(2) {
  background: #ff9f43;
  color: white;
  font-size: 1.3rem;
}
</style>
