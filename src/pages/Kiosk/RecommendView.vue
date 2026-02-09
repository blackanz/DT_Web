<script setup lang="ts">
import { useOrderStore } from '@/stores/orderStore';
const store = useOrderStore();
const menus = ['아메리카노', '라떼', '디카페인 커피'];
</script>

<template>
  <h1>추천 메뉴</h1>
  <button v-for="m in menus" :key="m" @click="store.addItem(m)">{{ m }}</button>
  <br />
  <button @click="$router.push('/voice')">음성 주문</button>
</template>
