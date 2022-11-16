import { Text } from '@nextui-org/react';
import { useAtom } from 'jotai';
import { addressAtom } from 'pages/_app';
import web3 from 'web3';

import { useUsdtAction } from '../hooks/UsdtAction';
export const USDTBalance = () => {
  const [address] = useAtom(addressAtom);
  const { balance } = useUsdtAction();
  if (!address) {
    return null;
  }
  return <Text color="white">{web3.utils.fromWei(balance, 'Mwei')} USDT</Text>;
};
