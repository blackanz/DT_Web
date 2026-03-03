import { createRouter, createWebHistory } from 'vue-router';

import KioskHome from '@/pages/Kiosk/KioskHome.vue';
import RecommendView from '@/pages/Kiosk/RecommendView.vue';
import VoiceOrderView from '@/pages/Kiosk/VoiceOrderView.vue';
import OrderConfirm from '@/pages/Kiosk/OrderConfirm.vue';
import StaffDashboard from '@/pages/Staff/StaffDashboard.vue';

const routes = [
  { path: '/', component: KioskHome },
  { path: '/recommend', component: RecommendView },
  { path: '/voice', component: VoiceOrderView },
  { path: '/confirm', component: OrderConfirm },
  { path: '/staff', component: StaffDashboard },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
