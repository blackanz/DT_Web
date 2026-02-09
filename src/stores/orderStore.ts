import { defineStore } from 'pinia';

export const useOrderStore = defineStore('order', {
  state: () => ({
    customerId: 'GUEST-001',
    orderItems: [] as string[],
    voiceText: '',
  }),
  actions: {
    addItem(item: string) {
      this.orderItems.push(item);
    },
    setVoiceText(text: string) {
      this.voiceText = text;
    },
    clear() {
      this.orderItems = [];
      this.voiceText = '';
    },
  },
});
