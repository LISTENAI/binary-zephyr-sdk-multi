import download from '@xingrz/download2';
import { rm } from 'fs/promises';
import { HOME } from './index';

const PACKAGE = 'zephyr-sdk';
const VERSION = '2023.08.01';

const NAME = `${PACKAGE}-${VERSION}-${process.platform}_${process.arch}.tar.zst`;

const URL = `https://cdn.iflyos.cn/public/lisa-binary/${PACKAGE}/${NAME}`;

(async () => {

  try {
    await rm(HOME, { recursive: true });
  } catch (e) {
  }

  await download(URL, HOME, {
    extract: true,
  });

})();
