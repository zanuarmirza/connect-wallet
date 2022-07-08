/* eslint-disable import/no-anonymous-default-export */

export default {
  baseURL: process.env.NEXT_PUBLIC_BASE_URL || '',
  apiURL: process.env.NEXT_PUBLIC_API_URL || '',
  gasPrice: process.env.NEXT_PUBLIC_GAS_PRICE || undefined,
  USDTAddres: process.env.NEXT_PUBLIC_USDT_ADDRESS || undefined,
};
