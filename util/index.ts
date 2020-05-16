import { config } from 'dotenv';
config();

import { generateHugoMDFiles } from './generate';
import { episodeList } from './data/episodes';

const main = async () => {
  await generateHugoMDFiles(episodeList);
};

main();