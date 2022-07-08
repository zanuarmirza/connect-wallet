import { Button, Container, Text } from '@nextui-org/react';
import { useAtom } from 'jotai';
import { addressAtom, hasCheckAtom } from 'pages/_app';

import { useConnect } from './useConnect';

export const MetamaskConnector = () => {
  const [address] = useAtom(addressAtom);
  const [hashCheck] = useAtom(hasCheckAtom);
  const { onClickConnect } = useConnect();

  // TODO hasCheck flag
  if (!hashCheck || address) {
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
