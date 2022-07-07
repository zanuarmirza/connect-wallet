/* eslint-disable react/no-unescaped-entities */
import { Container } from '@nextui-org/react';
import { MetamaskConnector } from 'components/MetamaskConnector';
import { NextPage } from 'next';

const IndexPage: NextPage = () => {
  return (
    <Container
      display="flex"
      direction="column"
      css={{ height: '100vh', justifyContent: 'center' }}
    >
      <MetamaskConnector />
    </Container>
  );
};

export default IndexPage;
