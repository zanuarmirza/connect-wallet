import { Button, Container, Text } from '@nextui-org/react';

import { UseAccount } from './UseAccount';
import { useConnect } from './useConnect';
// TODO
// Button connect
// Account Info
// address
// balances
export const MetamaskConnector = () => {
  const { address, balance } = UseAccount();
  const { onClickConnect } = useConnect();
  if (address) {
    return (
      <Container>
        <Text>{`Address: ${address}`}</Text>
        <Text>{`Balance: ${balance}`}</Text>
      </Container>
    );
  }
  return (
    <Container css={{ height: '100vh', justifyContent: 'center' }}>
      <Button onPress={onClickConnect}>Connect</Button>
    </Container>
  );
};
