import { Button } from '@nextui-org/react';
import { useEffect } from 'react';

import { useMinting } from '../hooks/UseMinting';
export const NFTMint = () => {
  const { mint, state, error } = useMinting();
  useEffect(() => {
    state && console.log('state', state);
    error && console.log('error', error);
  }, [state, error]);
  return (
    <Button color="gradient" onPress={mint} css={{ maxW: '300px' }}>
      Mint
    </Button>
  );
};
