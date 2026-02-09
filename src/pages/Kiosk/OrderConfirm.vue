<script setup lang="ts">
import { useOrderStore } from '@/stores/orderStore';
const store = useOrderStore();
</script>

<template>
  <h1>주문 확인</h1>
  <ul>
    <li v-for="(item, i) in store.orderItems" :key="i">{{ item }}</li>
  </ul>
</template>
