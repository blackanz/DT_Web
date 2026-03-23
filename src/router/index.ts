import { createRouter, createWebHistory } from 'vue-router';

import KioskHome from '@/pages/Kiosk/kioskHome.vue';
import Recmd from '@/pages/Kiosk/recmdNWhole.vue';
import VoiceOrder from '@/pages/Kiosk/voiceOrder.vue';
import OrderConfirm from '@/pages/Kiosk/orderConfirm.vue';
import StaffPos from '@/pages/Staff/staffPos.vue';
import final from '@/pages/Kiosk/final.vue';

const routes = [
  { path: '/', component: KioskHome },
  { path: '/recmd', component: Recmd },
  { path: '/voice', component: VoiceOrder },
  { path: '/confirm', component: OrderConfirm },
  { path: '/pos', component: StaffPos },
  { path: '/final', component: final },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
