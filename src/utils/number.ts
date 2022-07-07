import config from 'config';

export const toCurrency = (val: number | string) =>
  new Intl.NumberFormat('en-us', {
    style: 'currency',
    currency: 'USD',
  }).format(Number(val));

export const toUsd = (val: number | string) => Number(val) / config.usdDecimal;

export const toPercentage = (val: number) => parseFloat((val * 100).toFixed(4));
