import { Container } from '@nextui-org/react';
import { useEffect } from 'react';
import { isMobile } from 'react-device-detect';

import { gradientLine } from './gradientLine';
const GradientLineLayout = () => {
  useEffect(() => {
    const { render } = gradientLine();
    render();
  }, []);

  return (
    <Container
      fluid
      css={{
        position: 'absolute',
        height: '100vh',
        width: '100vw',
        p: 0,
        top: 0,
        left: 0,
        zIndex: 1,
        overflow: 'hidden',
        backgroundImage: "url('/image/bg.png')",
      }}
    >
      {!isMobile && <canvas id="canvas"></canvas>}
    </Container>
  );
};
export default GradientLineLayout;
