// TODO
// load contract v
// getbalance dpt langsung value, tiap kita buka hhalaman v
// transfer input text address, value
// transferFrom input text address from, input text address to, value

// approval spender, value
// allowance address

import config from 'config';
import { useCallback, useEffect, useState } from 'react';
import Web3 from 'utils/web3Utils';
import { ContractSendMethod } from 'web3-eth-contract';

const USDTContractABI = require('contracts/USDT.json');

// use web3.js

export const useUsdtAction = () => {
  const address = '0x6F65346aFfe796711E3FC4092032739d4520a1E0';
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
