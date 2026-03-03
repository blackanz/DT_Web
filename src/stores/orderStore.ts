import { defineStore } from 'pinia';

function getTodayString() {
  const today = new Date();
  const year = String(today.getFullYear()).slice(-2);
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');
  return `${year}${month}${day}`;
}

function getNumofCar(carId: string) {
  return carId.slice(-4);
}

function getNextSequence(): string {
  const todayKey = 'orderCounter-' + getTodayString();
  const current = Number(localStorage.getItem(todayKey) || '0') + 1;
  localStorage.setItem(todayKey, String(current));
  return String(current).padStart(3, '0');
}

export const useOrderStore = defineStore('order', {
  state: () => ({
    customerId: null as string | null,
    orderNum: null as string | null,
    orderItems: [] as string[],
    voiceText: '',
  }),

  actions: {
    setCustomer(id: string) {
      this.customerId = id;
    },

    addItem(item: string) {
      this.orderItems.push(item);
    },

    setVoiceText(text: string) {
      this.voiceText = text;
    },

    OrderComplete() {
      if (!this.customerId) return;

      const date = getTodayString();
      const carPart = getNumofCar(this.customerId);
      const seq = getNextSequence();

      this.orderNum = `${date}-${carPart}-${seq}`;
    },

    clear() {
      this.customerId = null;
      this.orderNum = null;
      this.orderItems = [];
      this.voiceText = '';
    },
  },
});
