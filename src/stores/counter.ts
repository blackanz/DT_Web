import { defineStore } from 'pinia';

export const useOrderStore = defineStore('order', {
  state: () => ({
    customerId: '',
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
