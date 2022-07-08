import { NextUIProvider } from '@nextui-org/react';
import { globalCss } from '@nextui-org/react';
import type { AppProps } from 'next/app';
import NextNprogress from 'nextjs-progressbar';

const globalStyles = globalCss({
  body: { fontFamily: `Alatsi, sans-serif` },
});

function MyApp({ Component, pageProps }: AppProps) {
  globalStyles();
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
