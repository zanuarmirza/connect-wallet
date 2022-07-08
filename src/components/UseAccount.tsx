import { useEffect, useState } from 'react';
import web3 from 'utils/web3Utils';
export const UseAccount = () => {
  const [hasChecked, sethasChecked] = useState<boolean>(false);
  const [address, setAddress] = useState<string>();
  useEffect(() => {
    // SET address dan set balance ketika instance web3 sudah didapatkan
    if (web3) {
      setAccount();
    }
  }, [web3]);

  useEffect((): any => {
    const { ethereum } = window as any;

    if (ethereum && ethereum.on) {
      const handleConnect = () => {
        console.log("Handling 'connect' event");
        setAccount();
      };
      const handleChainChanged = (chainId: string | number) => {
        console.log("Handling 'chainChanged' event with payload", chainId);
        setAccount();
      };
      const handleAccountsChanged = (accounts: string[]) => {
        console.log("Handling 'accountsChanged' event with payload", accounts);
        setAccount();
      };
      const handleNetworkChanged = (networkId: string | number) => {
        console.log("Handling 'networkChanged' event with payload", networkId);
        setAccount();
      };

      ethereum.on('connect', handleConnect);
      ethereum.on('chainChanged', handleChainChanged);
      ethereum.on('accountsChanged', handleAccountsChanged);
      ethereum.on('networkChanged', handleNetworkChanged);

      return () => {
        if (ethereum.removeListener) {
          ethereum.removeListener('connect', handleConnect);
          ethereum.removeListener('chainChanged', handleChainChanged);
          ethereum.removeListener('accountsChanged', handleAccountsChanged);
          ethereum.removeListener('networkChanged', handleNetworkChanged);
        }
      };
    }
  }, []);

  const setAccount = async () => {
    sethasChecked(true);
    if (!web3) {
      return undefined;
    }
    const listAccount = await web3.eth.getAccounts();

    if (!listAccount.length) {
      setAddress(undefined);
      return undefined;
    }
    console.log('listAccount', listAccount);
    setAddress(listAccount[0]);
  };

  return {
    address,
    hasChecked,
  };
};
