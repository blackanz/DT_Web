<script setup lang="ts">
import { useOrderStore } from '@/stores/orderStore';
const store = useOrderStore();
</script>

<template>
  <h1>직원 화면</h1>
  <p>고객 ID: {{ store.customerId }}</p>
  <p>음성 텍스트: {{ store.voiceText }}</p>
  <ul>
    <li v-for="(item, i) in store.orderItems" :key="i">{{ item }}</li>
  </ul>
</template>
