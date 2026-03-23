import axios from 'axios';

export interface STTRes {
  text: string;
}

export interface OrderPayload {
  items: string[];
  totalPrice: number;
}

export const requestSTT = async (): Promise<STTRes> => {
  const res = await axios.post<STTRes>('/api/stt');
  return res.data;
};

export const createOrder = async (payload: OrderPayload) => {
  return axios.post('/api/orders', payload);
};
