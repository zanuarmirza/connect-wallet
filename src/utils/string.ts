import { createStandaloneToast } from '@chakra-ui/toast';
import { theme } from 'components/Theme/ChakraTheme';
import config from 'config';
import web3 from 'web3';

/**
 * used for formating username
 * eg:
    - 0xc1912fEE45d61C87Cc5EA59DaE31190FFFFf232d -> 0xc...32d
    - bananaLover3009867 -> bananaLover30...
    - bananaLover -> bananaLover
 * @param account
 * @returns
 */
export const formatUsername = (account: string) => {
  if (web3.utils.isAddress(account)) {
    return `${account.slice(0, 3)}...${account.slice(-3)}`;
  } else if (account.length > 13) {
    return `${account.slice(0, 13)}...`;
  } else {
    return account;
  }
};

export const copy = (url: string, customMsg?: string) => {
  navigator.clipboard.writeText(url);
  const toast = createStandaloneToast({ theme: theme });
  const idToast = 'copied';
  if (!toast.isActive(idToast)) {
    toast({
      id: idToast,
      title: customMsg || 'Copied',
      status: 'success',
      duration: 3000,
      isClosable: true,
    });
  }
};

export const loadStorageAsset = (path?: string) => {
  return new URL(`storage/${path}`, config.apiURL).toString();
};

export const stringTruncate = (str: string, length: number) => {
  var dots = str.length > length ? '...' : '';
  return str.substring(0, length) + dots;
};

export const generateColor = (text: string): string => {
  var hash = 0;
  if (text.length === 0) return 'initial';
  for (var i = 0; i < text.length; i++) {
    hash = text.charCodeAt(i) + ((hash << 5) - hash);
    hash = hash & hash;
  }
  var rgb = [0, 0, 0];
  for (var i = 0; i < 3; i++) {
    var value = (hash >> (i * 8)) & 255;
    rgb[i] = value;
  }
  return `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;
};

export const isEmail = (value: string) =>
  !!value.match(
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/
  );
