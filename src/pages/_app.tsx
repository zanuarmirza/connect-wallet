import { NextUIProvider } from '@nextui-org/react';
import type { AppProps } from 'next/app';
import NextNprogress from 'nextjs-progressbar';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider>
      <NextNprogress
        color="#d90d9f"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
        options={{ showSpinner: false }}
      />
      <Component {...pageProps} />
    </NextUIProvider>
  );
}
export default MyApp;
