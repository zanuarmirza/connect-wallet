import config from 'config';
import Web3 from 'web3';

const web3 =
  typeof window !== 'undefined' ? new Web3(window.ethereum) : undefined;

export const usdcToMWei = (val: string) => Web3.utils.toWei(val, 'mwei');
export const mweiToUsdc = (val: string) => Web3.utils.fromWei(val, 'mwei');
export const weiToEth = (val: string) => Web3.utils.fromWei(val, 'ether');
export const getGasPrice = () =>
  config.gasPrice && Web3.utils.toWei(config.gasPrice, 'gwei');

export default web3;
