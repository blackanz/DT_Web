<script setup lang="ts">
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useOrderStore } from '@/stores/store';

const router = useRouter();
const store = useOrderStore();

onMounted(() => {
  store.clear();

  setTimeout(() => {
    router.push('/recmd');
  }, 3000); // 3초
});
</script>

<template>
  <div>
    <h1>차량 인식 중...</h1>
    <p>잠시만 기다려 주세요</p>
  </div>
</template>
