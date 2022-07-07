import config from 'config';

export const createUrl = (path: string) =>
  new URL(path, config.baseURL).toString();
