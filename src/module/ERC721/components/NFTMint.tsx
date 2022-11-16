import { Button } from '@nextui-org/react';
import { useAtom } from 'jotai';
import { addressAtom } from 'pages/_app';
import { useEffect } from 'react';

import { useMinting } from '../hooks/UseMinting';
export const NFTMint = () => {
  const [address] = useAtom(addressAtom);
  const { mint, state, error } = useMinting();
  useEffect(() => {
    state && console.log('state', state);
    error && console.log('error', error);
  }, [state, error]);
  if (!address) {
    return null;
  }
  return (
    <Button color="gradient" onPress={mint} css={{ maxW: '300px' }}>
      Mint
    </Button>
  );
};
