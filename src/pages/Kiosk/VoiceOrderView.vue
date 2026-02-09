<script setup lang="ts">
import { useOrderStore } from '@/stores/orderStore';
const store = useOrderStore();
const fakeSTT = () => store.setVoiceText('아메리카노 한 잔');
</script>

<template>
  <h1>음성 주문</h1>
  <button @click="fakeSTT">🎤 음성 인식</button>
  <p>{{ store.voiceText }}</p>
  <button @click="$router.push('/confirm')">주문 확인</button>
</template>
