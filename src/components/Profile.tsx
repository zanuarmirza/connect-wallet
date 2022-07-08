import { Container, Text } from '@nextui-org/react';
import Image from 'next/image';
import { getAvatar } from 'utils/avatar';

import { UseAccount } from './UseAccount';
// use blockies to generate avatar
// show address
export const Profile = () => {
  const { address } = UseAccount();
  if (!address) {
    return null;
  }
  return (
    <Container
      display="flex"
      direction="column"
      justify="center"
      alignItems="center"
    >
      <Container
        display="inline-block"
        css={{
          p: '0',
          borderRadius: '100px',
          borderWidth: '4px',
          borderStyle: 'solid',
          borderColor: 'white',
          width: '100px',
          height: '100px',
          overflow: 'hidden',
          marginBottom: '1rem',
        }}
      >
        <Image
          width={'100px'}
          height={'100px'}
          src={getAvatar(address) as string}
          alt="profile image"
        />
      </Container>
      <Text color="white" weight={'medium'} size="20px">
        {address}
      </Text>
    </Container>
  );
};
