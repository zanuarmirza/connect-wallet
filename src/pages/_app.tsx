import { NextUIProvider } from '@nextui-org/react';
import { globalCss } from '@nextui-org/react';
import { atom } from 'jotai';
import { UseConnectAccount } from 'module/Account/UseConnectAccount';
import type { AppProps } from 'next/app';
import NextNprogress from 'nextjs-progressbar';

const globalStyles = globalCss({
  body: { fontFamily: `Alatsi, sans-serif` },
});

export const addressAtom = atom<string | undefined>(undefined);
export const hasCheckAtom = atom<boolean>(false);

function MyApp({ Component, pageProps }: AppProps) {
  UseConnectAccount();
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
