/* eslint-disable react/no-unescaped-entities */
import { Container } from '@nextui-org/react';
import { MetamaskConnector } from 'components/MetamaskConnector';
import { NextPage } from 'next';

const IndexPage: NextPage = () => {
  return (
    <Container>
      <MetamaskConnector />
    </Container>
  );
};

export default IndexPage;
