import { config } from 'dotenv';
config();

import { generateHugoMDFiles } from './generate';
import { episodeList } from './data/episodes';
import { generateValidRSS } from './generateValidRSS';

const main = async () => {
  await generateHugoMDFiles(episodeList);
  await generateValidRSS();
};

main();