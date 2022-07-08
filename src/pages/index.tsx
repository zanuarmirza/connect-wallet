/* eslint-disable react/no-unescaped-entities */
import { Container, Text } from '@nextui-org/react';
import { MetamaskConnector } from 'components/MetamaskConnector';
import { NextPage } from 'next';
import dynamic from 'next/dynamic';
import { isMobile } from 'react-device-detect';

const GradientLineLayout = dynamic(() => import('layouts/GradientLineLayout'));

const IndexPage: NextPage = () => {
  console.log('isMobile', isMobile);
  return (
    <>
      <Container
        display="flex"
        direction="column"
        css={{
          height: '100vh',
          width: '100vw',
          justifyContent: 'center',
          zIndex: 2,
          position: 'relative',
        }}
      >
        <Text h1 color="white" size={100} weight="light">
          METACOIN
        </Text>
        <MetamaskConnector />
      </Container>
      <GradientLineLayout />
    </>
  );
};

export default IndexPage;
