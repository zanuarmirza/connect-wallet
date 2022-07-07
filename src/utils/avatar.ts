import { createIcon } from '@download/blockies';

export const getAvatar = (userAddress: string) => {
  if (typeof window === 'undefined') return;
  const icon = createIcon({
    seed: userAddress,
    size: 12,
    scale: 5,
  });
  return icon.toDataURL();
};
