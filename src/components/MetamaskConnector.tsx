import { Button, Container, Text } from '@nextui-org/react';
import { weiToEth } from 'utils/web3Utils';

import { UseAccount } from './UseAccount';
import { useBalance } from './useBalance';
import { useConnect } from './useConnect';

export const MetamaskConnector = () => {
  const { address } = UseAccount();
  const { balance } = useBalance(address);
  const { onClickConnect } = useConnect();

  if (address) {
    return (
      <Container display="flex" direction="column">
        <Text>{`Address: ${address}`}</Text>
        <Text>Balance: {balance ? `${weiToEth(balance)} eth` : '-'}</Text>
      </Container>
    );
  }
  return (
    <Container display="flex" justify="center">
      <Button onPress={onClickConnect}>Connect</Button>
    </Container>
  );
};
