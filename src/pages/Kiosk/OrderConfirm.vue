<script setup lang="ts">
import { onMounted, computed } from 'vue';
import { useRouter } from 'vue-router';
import { useOrderStore } from '@/stores/store';
import { storeToRefs } from 'pinia';

const store = useOrderStore();
const router = useRouter();
const { orderItems } = storeToRefs(store);
const fPrice = (price: number) => price.toLocaleString('ko-KR');

const totalItems = computed(() => {
  const list = orderItems.value;
  if (list.length === 0) return [];

  const repIds = Array.from(new Set(store.orderItems.map((item) => item.id)));

  return repIds
    .map((id) => {
      const sameItems = list.filter((item) => item.id === id);
      const baseItem = sameItems[0];
      if (!baseItem) return null;

      return {
        ...baseItem,
        count: sameItems.length,
        total: sameItems.length * baseItem.price,
      };
    })
    .filter((item) => item != null);
});

const totalPrice = computed(() => {
  return orderItems.value.reduce((sum, item) => sum + item.price, 0);
});

onMounted(() => {
  if (orderItems.value.length === 0) router.replace('/');
});
</script>

<template>
  <div class="confirm-menu">
    <h1>주문 확인</h1>
    <div class="order-list">
      <table class="order-table">
        <thead>
          <tr>
            <th>메뉴명</th>
            <th>수량(개)</th>
            <th>금액(원)</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in totalItems" :key="item.id">
            <td class="item-name">{{ item.name }}</td>
            <td class="item-count">
              <div class="qty-control">
                <button @click="store.decreaseItem(item.id)">-</button>
                <span>{{ item.count }}</span>
                <button @click="store.increaseItem(item.id)">+</button>
              </div>
            </td>
            <td class="item-total">{{ fPrice(totalPrice) }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="total">
      <h3>총 주문 금액: {{ fPrice(totalPrice) }}원</h3>
    </div>
    <button @click="$router.push('/recmd')">주문 화면</button>
    <button @click="$router.push('/final')">주문 완료</button>
  </div>
</template>
