<script setup lang="ts">
import { useOrderStore } from '@/stores/store';

const store = useOrderStore();
const menuCategories = [
  {
    name: '커피',
    items: [
      '콜드브루',
      '아메리카노',
      '카라멜 마키아또',
      '카푸치노',
      '카페모카',
      '카페라떼',
    ],
  },
  {
    name: '아이스 블렌디드',
    items: [
      '자바칩 프라페',
      '밀크쉐이크',
      '딸기요거트스무디',
      '망고요거트스무디',
      '딸기바나나스무디',
    ],
  },
  {
    name: '에이드, 주스',
    items: ['레몬에이드', '오렌지주스', '라임모히또에이드'],
  },
  {
    name: '티',
    items: [
      '녹차',
      '자몽허니블랙티',
      '아이스티',
      '말차라떼',
      '초코라떼',
      '우유',
    ],
  },
];

const recommendedMenus = [
  '아메리카노',
  '카페라떼',
  '딸기요거트스무디',
  '밀크쉐이크',
  '레몬에이드',
  '아이스티',
];

function addMenu(menu: string) {
  store.addItem(menu);
}
</script>

<template>
  <p>반갑습니다, {{ store.carPart }}님</p>
  <div class="menu-page">
    <h1>전체 메뉴</h1>

    <div
      v-for="category in menuCategories"
      :key="category.name"
      class="category"
    >
      <h2>{{ category.name }}</h2>

      <div class="menu-list">
        <button
          v-for="item in category.items"
          :key="item"
          class="menu-btn"
          @click="addMenu(item)"
        >
          {{ item }}
        </button>
      </div>
    </div>

    <h2>추천 메뉴</h2>

    <div class="recommend">
      <button
        v-for="m in recommendedMenus"
        :key="m"
        class="recommend-btn"
        @click="addMenu(m)"
      >
        {{ m }}
      </button>
    </div>

    <div class="voice">
      <button @click="$router.push('/voice')">음성 주문</button>
    </div>
  </div>
</template>
