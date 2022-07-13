import config from 'config';
import { useAtom } from 'jotai';
import { addressAtom } from 'pages/_app';
import { useState } from 'react';
import Web3 from 'utils/web3Utils';
import { ContractSendMethod } from 'web3-eth-contract';

const USDTContractABI = require('contracts/USDT.json');

export const useMinting = () => {
  const [address] = useAtom(addressAtom);
  const [state, setState] = useState<
    'minting' | 'finish' | 'error' | undefined
  >(undefined);
  const [error, setError] = useState<string | undefined>(undefined);
  const NFTMintSC = Web3
    ? new Web3.eth.Contract(USDTContractABI, config.NFTMintAddres)
    : undefined;

  const mint = async () => {
    try {
      if (!NFTMintSC) throw 'fail to load mint contract !';
      if (!address) throw 'address is not set yet !';
      const mintMethod: ContractSendMethod = NFTMintSC.methods.mint(address);
      setState('minting');
      await mintMethod.send({
        from: address,
      });
      setState('finish');
    } catch (err: any) {
      const error = err as Error;
      setError(error.message);
      setState('error');
    }
  };

  return {
    mint,
    state,
    error,
  };
};
