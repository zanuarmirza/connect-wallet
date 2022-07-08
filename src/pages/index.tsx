/* eslint-disable react/no-unescaped-entities */
import { Container, Text } from '@nextui-org/react';
import { MetamaskConnector } from 'components/MetamaskConnector';
import { Profile } from 'components/Profile';
import { NextPage } from 'next';
import dynamic from 'next/dynamic';
import { NextSeo } from 'next-seo';

const GradientLineLayout = dynamic(() => import('layouts/GradientLineLayout'));

const IndexPage: NextPage = () => {
  return (
    <>
      <NextSeo title="MetaCoin" description="not unsual coin" />
      <Container
        display="flex"
        direction="column"
        justify="center"
        css={{
          height: '100vh',
          width: '100vw',
          justifyContent: 'center',
          zIndex: 2,
          position: 'relative',
        }}
      >
        <MetamaskConnector />
        <Profile />
      </Container>
      <GradientLineLayout />
    </>
  );
};

export default IndexPage;
