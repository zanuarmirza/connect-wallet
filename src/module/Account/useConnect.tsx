export const useConnect = () => {
  const onClickConnect = () => {
    try {
      console.log('tes', window.ethereum);
      // Will open the MetaMask UI
      // You should disable this button while the request is pending!
      window.ethereum.request({ method: 'eth_requestAccounts' });
    } catch (error) {
      console.error(error);
    }
  };
  return { onClickConnect };
};
