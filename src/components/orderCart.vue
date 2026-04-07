<script setup lang="ts">
import { useOrderStore } from '@/stores/store';
import { storeToRefs } from 'pinia';

const store = useOrderStore();
const { orderCart } = storeToRefs(store);

const fPrice = (p: number) => p.toLocaleString('ko-KR');
</script>

<template>
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
        <tr v-for="item in orderCart" :key="item.id">
          <td class="item-name">{{ item.name }}</td>
          <td class="item-count">
            <div class="qty-control">
              <button @click="store.decreaseItem(item.id)">-</button>
              <span class="count">{{ item.count }}</span>
              <button @click="store.increaseItem(item.id)">+</button>
            </div>
          </td>
          <td class="item-total">
            {{ fPrice(item.itemTotal) }}
            <button @click="store.removeItem(item.id)">x</button>
          </td>
        </tr>
        <tr v-if="orderCart.length === 0">
          <td colspan="3" class="empty">담긴 메뉴가 없습니다.</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
