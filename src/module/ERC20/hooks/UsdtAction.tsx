import config from 'config';
import { useAtom } from 'jotai';
import { addressAtom } from 'pages/_app';
import { useCallback, useEffect, useState } from 'react';
import Web3 from 'utils/web3Utils';
import { ContractSendMethod } from 'web3-eth-contract';

const USDTContractABI = require('contracts/USDT.json');

// use web3.js

export const useUsdtAction = () => {
  const [address] = useAtom(addressAtom);
  const [balance, setUSDTBalance] = useState<string>('0');
  const UsdtSC = Web3
    ? new Web3.eth.Contract(USDTContractABI, config.USDTAddres)
    : undefined;

  const getUSDTBalance = useCallback(async () => {
    if (!UsdtSC) return '0';
    const getUsdtBalance: ContractSendMethod =
      UsdtSC.methods.balanceOf(address);
    setUSDTBalance(await getUsdtBalance.call());
  }, [address, UsdtSC]);

  useEffect(() => {
    getUSDTBalance();
  }, [UsdtSC, getUSDTBalance]);

  return {
    balance,
  };
};
