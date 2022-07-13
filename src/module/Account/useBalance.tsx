import { useCallback, useEffect, useState } from 'react';
import web3 from 'utils/web3Utils';

export const useBalance = (address?: string) => {
  const [balance, setBalance] = useState<string>();

  const getBalance = useCallback(async (address) => {
    if (!address) return undefined;
    const _balance = await web3?.eth.getBalance(address);
    setBalance(_balance);
  }, []);

  useEffect(() => {
    if (address) {
      getBalance(address);
    } else {
      setBalance('0');
    }
  }, [address, getBalance]);

  return {
    balance,
  };
};
