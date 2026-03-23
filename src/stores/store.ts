import { defineStore } from 'pinia';

function getToday(): string {
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
  const todayKey = 'orderCounter-' + getToday();
  const current = Number(localStorage.getItem(todayKey) || '0') + 1;
  localStorage.setItem(todayKey, String(current));
  return String(current).padStart(3, '0');
}

export const useOrderStore = defineStore('order', {
  state: () => ({
    // customerId: null as string | null,
    customerId: '12가3456' as string | null, //테스트용
    orderNum: null as string | null,
    orderItems: [] as string[],
    voiceText: null as string | null,
    seq: null as string | null,
  }),

  getters: {
    carPart(state): string | null {
      if (!state.customerId) return null;
      return getNumofCar(state.customerId);
    },
  },

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

    orderComplete() {
      if (!this.customerId) return false;

      const date = getToday();
      const carPart = getNumofCar(this.customerId);
      const seq = getNextSequence();

      this.seq = seq;
      this.orderNum = `${date}-${carPart}-${seq}`;
      return true;
    },

    clear() {
      this.orderItems = [];
      this.voiceText = '';
    },
  },
});
