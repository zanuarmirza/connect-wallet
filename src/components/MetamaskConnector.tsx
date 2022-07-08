import { Button, Container } from '@nextui-org/react';

import { UseAccount } from './UseAccount';
import { useConnect } from './useConnect';

export const MetamaskConnector = () => {
  const { address, hasChecked } = UseAccount();
  const { onClickConnect } = useConnect();

  if (!hasChecked || address) {
    return null;
  }

  return (
    <Container display="flex" justify="center">
      <Button color="gradient" onPress={onClickConnect}>
        Connect your wallet
      </Button>
    </Container>
  );
};
