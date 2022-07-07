import { useToast } from '@chakra-ui/react';
import { AxiosError } from 'axios';
import { ResponseData } from 'module/common/type';

const useResponseHandler = (
  customErrorHandler?: Record<string | number, () => void>
) => {
  const toast = useToast();
  const handlerResponse = async <T>(resp: Promise<ResponseData<T>>) => {
    return resp
      .then(() => {
        return resp;
      })
      .catch((err: AxiosError) => {
        if (
          err.response?.status &&
          customErrorHandler?.[err.response?.status.toString()]
        ) {
          customErrorHandler?.[err.response?.status.toString()]();
          return undefined;
        }
        switch (err.response?.status) {
          case 500: {
            toast({
              title: 'Error',
              description: 'Something when wrong!',
              status: 'error',
              duration: 3000,
              isClosable: true,
            });
            return undefined;
          }
          case 404: {
            toast({
              title: 'Error',
              description: 'Something when wrong!',
              status: 'error',
              duration: 3000,
              isClosable: true,
            });
            return undefined;
          }
          // TODO add more error status code
          default: {
            return Promise.reject(err);
          }
        }
      });
  };
  return { handlerResponse };
};
export { useResponseHandler };
