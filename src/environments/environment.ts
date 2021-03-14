import { Md5 } from 'ts-md5/dist/md5';
import { PRIVATE_KEY, PUBLIC_KEY } from './secrets.key';
var timestamp = Number(new Date());
var hash = Md5.hashStr(`${timestamp}${PRIVATE_KEY}${PUBLIC_KEY}`);
export const environment = {
  production: false,
  baseUrl: `https://gateway.marvel.com:443/v1/public/`,
  auth: `?ts=${timestamp}&apikey=${PUBLIC_KEY}&hash=${hash}`,
  assets: '/assets/',
  settings: {
    appErrorPrefix: '[Sample Error] ',
    appTitle: 'Sample',
    version: '1.0.0',
  },
};
