<script setup lang="ts">
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useOrderStore } from '@/stores/store';
const store = useOrderStore();
const router = useRouter();

onMounted(() => {
  if (!store.orderItems || store.orderItems.length === 0) router.replace('/');
});
</script>

<template>
  <h1>주문 확인</h1>
  <ul>
    <li v-for="(item, i) in store.orderItems" :key="i">{{ item }}</li>
  </ul>
  <button @click="$router.push('/final')">주문 완료</button>
</template>
