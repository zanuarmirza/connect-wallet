import { Button, Container, Text } from '@nextui-org/react';

import { UseAccount } from './UseAccount';
import { useConnect } from './useConnect';

export const MetamaskConnector = () => {
  const { address, hasChecked } = UseAccount();
  const { onClickConnect } = useConnect();

  if (!hasChecked || address) {
    return null;
  }

  return (
    <Container
      display="flex"
      justify="center"
      direction="column"
      alignItems="center"
    >
      <Text h1 color="white" size={'10vw'} weight="light">
        METACOIN
      </Text>
      <Button color="gradient" onPress={onClickConnect} css={{ maxW: '300px' }}>
        Connect your wallet
      </Button>
    </Container>
  );
};
