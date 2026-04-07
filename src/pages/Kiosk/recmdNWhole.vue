<script setup lang="ts">
import { ref } from 'vue';
import { useOrderStore, type menuItem } from '@/stores/store';
import orderCart from '@/components/orderCart.vue';
import { storeToRefs } from 'pinia';

const store = useOrderStore();
const { totalPrice } = storeToRefs(store);
const activeTab = ref('추천');
const fPrice = (p: number) => p.toLocaleString('ko-KR');
function addMenu(menu: menuItem) {
  store.addItem(menu);
}

const menuCategories = [
  {
    name: '커피',
    items: [
      { id: 1, name: '아메리카노', price: 3000 },
      { id: 2, name: '콜드브루', price: 4500 },
      { id: 3, name: '카라멜 마키아또', price: 4000 },
      { id: 4, name: '카푸치노', price: 4000 },
      { id: 5, name: '카페모카', price: 4000 },
      { id: 6, name: '카페라떼', price: 4000 },
    ],
  },
  {
    name: '아이스 블렌디드',
    items: [
      { id: 7, name: '자바칩 프라페', price: 4000 },
      { id: 8, name: '밀크쉐이크', price: 4000 },
      { id: 9, name: '딸기요거트스무디', price: 4500 },
      { id: 10, name: '망고요거트스무디', price: 4500 },
    ],
  },
  {
    name: '에이드, 주스',
    items: [
      { id: 11, name: '레몬에이드', price: 3500 },
      { id: 12, name: '오렌지주스', price: 3000 },
      { id: 13, name: '라임모히또에이드', price: 3500 },
    ],
  },
  {
    name: '티',
    items: [
      { id: 14, name: '녹차', price: 2500 },
      { id: 15, name: '자몽허니블랙티', price: 4000 },
      { id: 16, name: '아이스티', price: 2000 },
      { id: 17, name: '말차라떼', price: 3500 },
      { id: 18, name: '초코라떼', price: 3000 },
      { id: 19, name: '우유', price: 2000 },
    ],
  },
];

const recommendMenus = [
  { id: 1, name: '아메리카노', price: 3000 },
  { id: 6, name: '카페라떼', price: 4000 },
  { id: 9, name: '딸기요거트스무디', price: 4500 },
  { id: 8, name: '밀크쉐이크', price: 4000 },
  { id: 11, name: '레몬에이드', price: 3500 },
  { id: 16, name: '아이스티', price: 2000 },
];
</script>

<template>
  <div class="menu-page">
    <h1>반갑습니다, {{ store.carPart }}님!</h1>
    <nav class="tab-container">
      <button
        :class="{ active: activeTab === '추천' }"
        @click="activeTab = '추천'"
      >
        추천!
      </button>
      <button
        v-for="cat in menuCategories"
        :key="cat.name"
        :class="{ active: activeTab === cat.name }"
        @click="activeTab = cat.name"
      >
        {{ cat.name }}
      </button>
    </nav>

    <hr />
    <main class="menu-content">
      <section v-if="activeTab === '추천'" class="recommend">
        <div class="rec-menu">
          <h2>추천 메뉴</h2>
          <div class="menu-grid">
            <button
              v-for="m in recommendMenus"
              :key="'rec=' + m.id"
              class="rec-btn"
              @click="addMenu(m)"
            >
              {{ m.name }}<br />{{ fPrice(m.price) }}원
            </button>
          </div>
        </div>
      </section>

      <section v-for="category in menuCategories" :key="category.name">
        <div v-if="activeTab === category.name" class="category">
          <h2>{{ category.name }}</h2>
          <div class="menu-grid">
            <button
              v-for="item in category.items"
              :key="item.id"
              class="menu-btn"
              @click="addMenu(item)"
            >
              {{ item.name }}<br />{{ fPrice(item.price) }}원
            </button>
          </div>
        </div>
      </section>
    </main>

    <hr />

    <div class="order-summary">
      <div class="sum-list">
        <h2>주문 내역</h2>
        <span class="total-price">합계: {{ fPrice(totalPrice) }}원</span>
        <orderCart />
      </div>
    </div>

    <hr />

    <div class="action-btn">
      <div class="voice">
        <button @click="$router.push('/voice')">음성 주문</button>
      </div>
      <div class="next">
        <button @click="$router.push('/confirm')">주문 완료</button>
      </div>
    </div>
  </div>
</template>
