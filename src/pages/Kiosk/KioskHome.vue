<script setup lang="ts">
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

onMounted(() => {
  setTimeout(() => {
    router.push('/recommend');
  }, 2000); // 2초
});
</script>

<template>
  <div>
    <h1>차량 인식 중...</h1>
    <p>잠시만 기다려 주세요</p>
  </div>
</template>
