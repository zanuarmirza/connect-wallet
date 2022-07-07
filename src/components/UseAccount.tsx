import { useEffect, useState } from 'react';
import web3 from 'utils/web3Utils';
export const UseAccount = () => {
  const [address, setAddress] = useState<string>();
  const [balance, setBalance] = useState<string>();

  console.log('address', address, balance);
  useEffect(() => {
    // SET address dan set balance ketika instance web3 sudah didapatkan
    if (web3) {
      getAccount();
    }
  }, [web3]);

  const getAccount = async () => {
    if (!web3) {
      return undefined;
    }
    const listAccount = await web3.eth.getAccounts();

    if (!listAccount.length) {
      return undefined;
    }
    console.log('listAccount', listAccount);
    setAddress(listAccount[0]);
    getBalance(listAccount[0]);
  };

  const getBalance = async (address: string) => {
    if (!web3) {
      return undefined;
    }
    const balance = await web3.eth.getBalance(address);
    setBalance(balance);
  };

  return {
    address,
    balance,
  };
};
