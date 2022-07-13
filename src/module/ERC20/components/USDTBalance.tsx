import { Text } from '@nextui-org/react';
import web3 from 'web3';

import { useUsdtAction } from '../hooks/UsdtAction';
export const USDTBalance = () => {
  const { balance } = useUsdtAction();
  return <Text color="white">{web3.utils.fromWei(balance, 'Mwei')} USDT</Text>;
};
